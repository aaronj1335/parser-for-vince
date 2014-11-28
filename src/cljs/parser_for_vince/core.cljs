(ns parser-for-vince.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core :refer [clj->js]]))

(defonce app-state
  (atom {:templates [{:src "something {x.y.(\"foo\")} something else"}
                     {:src "a {b.c.(\"d } e\")} f {c.g.(\"h\")}"}
                     {:src ":{ }:"}]}))

(defn lex
  ([s] (lex s '()))
  ([s states]
    (case (first states)
      nil (case (first s)
        nil nil
        "{" (conj (lex (rest s) (conj states :block)) {:type :l-curly})
        (conj (lex (drop-while #(not= "{" %) s) states)
              {:type :text
               :value (apply str (take-while #(not= "{" %) s))}))
      :block (case (first s)
        nil nil
        "}" (conj (lex (rest s) (rest states)) {:type :r-curly})
        "(" (conj (lex (rest s) (conj states :param-list)) {:type :l-paren})
        (conj (lex (drop-while #(not (#{"(" "}"} %)) s) states)
              {:type :token
               :value (apply str (take-while #(not (#{"(" "}"} %)) s))}))
      :param-list (case (first s)
        nil nil
        ")" (conj (lex (rest s) (rest states)) {:type :r-paren})
        (conj (lex (drop-while #(not= ")" %) s) states)
              {:type :param
               :value (apply str (take-while #(not= ")" %) s))}))
      nil)))

(defn parse
  ([tokens] (parse tokens {:type :program}))
  ([tokens cur-node]
   (case (:type cur-node)
     :program (case (:type (first tokens))
       :text (let [; the :text token looks the same as the :text node, so
                   ; re-use it
                   new-node (first tokens)
                   new-children (conj (:children cur-node []) new-node)
                   with-new-node (assoc cur-node :children new-children)]
               (parse (rest tokens) with-new-node))
       :l-curly (let [[block-node remaining-tokens]
                       (parse (rest tokens) {:type :block})
                      new-children (conj (:children cur-node []) block-node)
                      with-new-node (assoc cur-node :children new-children)]
                  (parse remaining-tokens with-new-node))
       nil [cur-node tokens])
     :block (case (:type (first tokens))
       :token (let [; similar to the :text token, :token tokens look the same
                    ; as :token nodes, so re-use them as well
                    new-node (first tokens)
                    new-children (conj (:children cur-node []) new-node)
                    with-new-node (assoc cur-node :children new-children)]
                (parse (rest tokens) with-new-node))
       :l-paren (let [[param-list-node remaining-tokens]
                       (parse (rest tokens) {:type :param-list})
                      new-children (conj (:children cur-node []) param-list-node)
                      with-new-node (assoc cur-node :children new-children)]
                  (parse remaining-tokens with-new-node))
       :r-curly [cur-node (rest tokens)])
     :param-list (case (:type (first tokens))
       :param (let [; and just like :token and :text, :token tokens look the
                    ; same as :token nodes, so re-use them as well
                    new-node (first tokens)
                    new-children (conj (:children cur-node []) new-node)
                    with-new-node (assoc cur-node :children new-children)]
                (parse (rest tokens) with-new-node))
       :r-paren [cur-node (rest tokens)]))))

(defn lex-view [template owner]
  (reify
    om/IRender
    (render [_]
      (dom/li #js {:className "Grid Grid--withGutter"}
        (dom/div #js {:className "Grid-cell u-size1of2"}
          (dom/textarea
            #js {:value (:src template)
                 :className "u-sizeFull"
                 :onChange #(om/update! template {:src (.. % -target -value)})}))
        (dom/div #js {:className "Grid-cell u-size1of2"}
          (dom/pre nil
            (let [tokens (lex (:src template))]
              (.stringify js/JSON (clj->js tokens) nil 2))))))))

(defn parse-view [template owner]
  (reify
    om/IRender
    (render [_]
      (dom/li #js {:className "Grid Grid--withGutter"}
        (dom/div #js {:className "Grid-cell u-size1of2"}
          (dom/textarea
            #js {:value (:src template)
                 :className "u-sizeFull"
                 :onChange #(om/update! template {:src (.. % -target -value)})}))
        (dom/div #js {:className "Grid-cell u-size1of2"}
          (dom/pre nil
            (let [[tree _] (parse (lex (:src template)))]
            ; (let [[tree _] (children {:type :root} (:src template))]
              (.stringify js/JSON (clj->js tree) nil 2))))))))

(defn main []
  (om/root
    (fn [app owner]
      (reify
        om/IRender
        (render [_]
          (dom/div #js {:className "App"}
            (dom/h2 nil "Vince's Damn Parser")
            (dom/div
              nil
              (apply dom/ul nil (om/build-all lex-view (:templates app))))
            (dom/div
              nil
              (apply dom/ul nil (om/build-all parse-view (:templates app))))
            ))))
    app-state
    {:target (. js/document (getElementById "app"))}))

; (swap! app-state assoc :templates [{:src "something {x.y.(\"foo\")} something else"}
;                                     {:src "a {b.c.(\"d } e\")} f {c.g.(\"h\")}"}
;                                     {:src ":{ }:"}])
