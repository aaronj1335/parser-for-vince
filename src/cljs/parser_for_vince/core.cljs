(ns parser-for-vince.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core :refer [clj->js]]))

(defonce app-state
  (atom {:templates [{:src "something {x.y.(\"foo\")} something else"}
                     {:src "a {b.c.(\"d } e\")} f {c.g.(\"h\")}"}
                     {:src ":{ }:"}]}))

(defn children [parent s]
  (loop [so-far []
         temp-accum ""
         s s]
    (case (first s)
      nil (if (empty? temp-accum)
            [so-far s]
            [(conj so-far {:type :text :value temp-accum}) s])
      "{" (let [new-node {:type :block}
                rest-of-s (apply str (rest s))
                [grand-children remaining] (children new-node rest-of-s)
                new-node-with-children (assoc new-node :children grand-children)
                so-far-with-text (if (seq temp-accum)
                                   (conj so-far {:type :text :value temp-accum})
                                   so-far)]
            (recur (conj so-far-with-text new-node-with-children) "" remaining))
      "}" (if (= (:type parent) :block)
            (let [so-far-with-text (if (seq temp-accum)
                                     (conj so-far {:type :token :value temp-accum})
                                     so-far)]
              [so-far-with-text (apply str (rest s))])
            (recur so-far (str temp-accum "}") (apply str (rest s))))
      "\"" (if (= (:type parent) :string)
             [(conj so-far {:type :text :value temp-accum}) (apply str (rest s))]
             (if (= (:type parent) :block)
               (let [new-node {:type :string}
                     rest-of-s (apply str (rest s))
                     [grand-children remaining] (children new-node rest-of-s)
                     new-node-with-children (assoc new-node :children grand-children)
                     so-far-with-text (if (empty? temp-accum)
                                       so-far
                                       (conj so-far {:type :text :value temp-accum}))]
                 (recur (conj so-far-with-text new-node-with-children) "" remaining))
               (recur so-far (str temp-accum (first s)) (apply str (rest s)))
               ))
      (recur so-far (str temp-accum (first s)) (apply str (rest s))))))

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
            (let [[tree _] (children {:type :root} (:src template))]
              (JSON/stringify (clj->js tree) nil 2))))))))

(defn main []
  (om/root
    (fn [app owner]
      (reify
        om/IRender
        (render [_]
          (dom/div #js {:className "App"}
            (dom/h2 nil "Vince's Damn Parser")
            (apply dom/ul nil
              (om/build-all parse-view (:templates app)))))))
    app-state
    {:target (. js/document (getElementById "app"))}))
