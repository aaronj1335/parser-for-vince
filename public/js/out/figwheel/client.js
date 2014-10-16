// Compiled by ClojureScript 0.0-2371
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__19462,args){var map__19464 = p__19462;var map__19464__$1 = ((cljs.core.seq_QMARK_.call(null,map__19464))?cljs.core.apply.call(null,cljs.core.hash_map,map__19464):map__19464);var debug = cljs.core.get.call(null,map__19464__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__19462,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__19462,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__19465){
var p__19462 = cljs.core.first(arglist__19465);
var args = cljs.core.rest(arglist__19465);
return log__delegate(p__19462,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__19466){var map__19468 = p__19466;var map__19468__$1 = ((cljs.core.seq_QMARK_.call(null,map__19468))?cljs.core.apply.call(null,cljs.core.hash_map,map__19468):map__19468);var websocket_url = cljs.core.get.call(null,map__19468__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__19469,callback){var map__19471 = p__19469;var map__19471__$1 = ((cljs.core.seq_QMARK_.call(null,map__19471))?cljs.core.apply.call(null,cljs.core.hash_map,map__19471):map__19471);var msg = map__19471__$1;var dependency_file = cljs.core.get.call(null,map__19471__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__19471__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__19471__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__9093__auto__ = dependency_file;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__19471,map__19471__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__19471,map__19471__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__19472,p__19473){var map__19476 = p__19472;var map__19476__$1 = ((cljs.core.seq_QMARK_.call(null,map__19476))?cljs.core.apply.call(null,cljs.core.hash_map,map__19476):map__19476);var opts = map__19476__$1;var url_rewriter = cljs.core.get.call(null,map__19476__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__19477 = p__19473;var map__19477__$1 = ((cljs.core.seq_QMARK_.call(null,map__19477))?cljs.core.apply.call(null,cljs.core.hash_map,map__19477):map__19477);var d = map__19477__$1;var file = cljs.core.get.call(null,map__19477__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__19478,p__19479){var map__19521 = p__19478;var map__19521__$1 = ((cljs.core.seq_QMARK_.call(null,map__19521))?cljs.core.apply.call(null,cljs.core.hash_map,map__19521):map__19521);var opts = map__19521__$1;var on_jsload = cljs.core.get.call(null,map__19521__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__19521__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__19522 = p__19479;var map__19522__$1 = ((cljs.core.seq_QMARK_.call(null,map__19522))?cljs.core.apply.call(null,cljs.core.hash_map,map__19522):map__19522);var files = cljs.core.get.call(null,map__19522__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__12429__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12429__auto__,map__19521,map__19521__$1,opts,on_jsload,before_jsload,map__19522,map__19522__$1,files){
return (function (){var f__12430__auto__ = (function (){var switch__12364__auto__ = ((function (c__12429__auto__,map__19521,map__19521__$1,opts,on_jsload,before_jsload,map__19522,map__19522__$1,files){
return (function (state_19545){var state_val_19546 = (state_19545[(1)]);if((state_val_19546 === (6)))
{var inst_19527 = (state_19545[(7)]);var inst_19536 = (state_19545[(2)]);var inst_19537 = cljs.core.PersistentVector.EMPTY_NODE;var inst_19538 = [inst_19527];var inst_19539 = (new cljs.core.PersistentVector(null,1,(5),inst_19537,inst_19538,null));var inst_19540 = cljs.core.apply.call(null,on_jsload,inst_19539);var state_19545__$1 = (function (){var statearr_19547 = state_19545;(statearr_19547[(8)] = inst_19536);
return statearr_19547;
})();var statearr_19548_19562 = state_19545__$1;(statearr_19548_19562[(2)] = inst_19540);
(statearr_19548_19562[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19546 === (5)))
{var inst_19543 = (state_19545[(2)]);var state_19545__$1 = state_19545;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19545__$1,inst_19543);
} else
{if((state_val_19546 === (4)))
{var state_19545__$1 = state_19545;var statearr_19549_19563 = state_19545__$1;(statearr_19549_19563[(2)] = null);
(statearr_19549_19563[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19546 === (3)))
{var inst_19527 = (state_19545[(7)]);var inst_19530 = console.debug("Figwheel: loaded these files");var inst_19531 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_19527);var inst_19532 = cljs.core.prn_str.call(null,inst_19531);var inst_19533 = console.log(inst_19532);var inst_19534 = cljs.core.async.timeout.call(null,(10));var state_19545__$1 = (function (){var statearr_19550 = state_19545;(statearr_19550[(9)] = inst_19533);
(statearr_19550[(10)] = inst_19530);
return statearr_19550;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19545__$1,(6),inst_19534);
} else
{if((state_val_19546 === (2)))
{var inst_19527 = (state_19545[(7)]);var inst_19527__$1 = (state_19545[(2)]);var inst_19528 = cljs.core.not_empty.call(null,inst_19527__$1);var state_19545__$1 = (function (){var statearr_19551 = state_19545;(statearr_19551[(7)] = inst_19527__$1);
return statearr_19551;
})();if(cljs.core.truth_(inst_19528))
{var statearr_19552_19564 = state_19545__$1;(statearr_19552_19564[(1)] = (3));
} else
{var statearr_19553_19565 = state_19545__$1;(statearr_19553_19565[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19546 === (1)))
{var inst_19523 = before_jsload.call(null,files);var inst_19524 = figwheel.client.add_request_urls.call(null,opts,files);var inst_19525 = figwheel.client.load_all_js_files.call(null,inst_19524);var state_19545__$1 = (function (){var statearr_19554 = state_19545;(statearr_19554[(11)] = inst_19523);
return statearr_19554;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19545__$1,(2),inst_19525);
} else
{return null;
}
}
}
}
}
}
});})(c__12429__auto__,map__19521,map__19521__$1,opts,on_jsload,before_jsload,map__19522,map__19522__$1,files))
;return ((function (switch__12364__auto__,c__12429__auto__,map__19521,map__19521__$1,opts,on_jsload,before_jsload,map__19522,map__19522__$1,files){
return (function() {
var state_machine__12365__auto__ = null;
var state_machine__12365__auto____0 = (function (){var statearr_19558 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19558[(0)] = state_machine__12365__auto__);
(statearr_19558[(1)] = (1));
return statearr_19558;
});
var state_machine__12365__auto____1 = (function (state_19545){while(true){
var ret_value__12366__auto__ = (function (){try{while(true){
var result__12367__auto__ = switch__12364__auto__.call(null,state_19545);if(cljs.core.keyword_identical_QMARK_.call(null,result__12367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12367__auto__;
}
break;
}
}catch (e19559){if((e19559 instanceof Object))
{var ex__12368__auto__ = e19559;var statearr_19560_19566 = state_19545;(statearr_19560_19566[(5)] = ex__12368__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19545);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19559;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19567 = state_19545;
state_19545 = G__19567;
continue;
}
} else
{return ret_value__12366__auto__;
}
break;
}
});
state_machine__12365__auto__ = function(state_19545){
switch(arguments.length){
case 0:
return state_machine__12365__auto____0.call(this);
case 1:
return state_machine__12365__auto____1.call(this,state_19545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12365__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12365__auto____0;
state_machine__12365__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12365__auto____1;
return state_machine__12365__auto__;
})()
;})(switch__12364__auto__,c__12429__auto__,map__19521,map__19521__$1,opts,on_jsload,before_jsload,map__19522,map__19522__$1,files))
})();var state__12431__auto__ = (function (){var statearr_19561 = f__12430__auto__.call(null);(statearr_19561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12429__auto__);
return statearr_19561;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12431__auto__);
});})(c__12429__auto__,map__19521,map__19521__$1,opts,on_jsload,before_jsload,map__19522,map__19522__$1,files))
);
return c__12429__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__19568,link_href){var map__19570 = p__19568;var map__19570__$1 = ((cljs.core.seq_QMARK_.call(null,map__19570))?cljs.core.apply.call(null,cljs.core.hash_map,map__19570):map__19570);var request_url = cljs.core.get.call(null,map__19570__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__19570__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__12429__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12429__auto__,parent){
return (function (){var f__12430__auto__ = (function (){var switch__12364__auto__ = ((function (c__12429__auto__,parent){
return (function (state_19591){var state_val_19592 = (state_19591[(1)]);if((state_val_19592 === (2)))
{var inst_19588 = (state_19591[(2)]);var inst_19589 = parent.removeChild(orig_link);var state_19591__$1 = (function (){var statearr_19593 = state_19591;(statearr_19593[(7)] = inst_19588);
return statearr_19593;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19591__$1,inst_19589);
} else
{if((state_val_19592 === (1)))
{var inst_19586 = cljs.core.async.timeout.call(null,(200));var state_19591__$1 = state_19591;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19591__$1,(2),inst_19586);
} else
{return null;
}
}
});})(c__12429__auto__,parent))
;return ((function (switch__12364__auto__,c__12429__auto__,parent){
return (function() {
var state_machine__12365__auto__ = null;
var state_machine__12365__auto____0 = (function (){var statearr_19597 = [null,null,null,null,null,null,null,null];(statearr_19597[(0)] = state_machine__12365__auto__);
(statearr_19597[(1)] = (1));
return statearr_19597;
});
var state_machine__12365__auto____1 = (function (state_19591){while(true){
var ret_value__12366__auto__ = (function (){try{while(true){
var result__12367__auto__ = switch__12364__auto__.call(null,state_19591);if(cljs.core.keyword_identical_QMARK_.call(null,result__12367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12367__auto__;
}
break;
}
}catch (e19598){if((e19598 instanceof Object))
{var ex__12368__auto__ = e19598;var statearr_19599_19601 = state_19591;(statearr_19599_19601[(5)] = ex__12368__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19591);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19598;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19602 = state_19591;
state_19591 = G__19602;
continue;
}
} else
{return ret_value__12366__auto__;
}
break;
}
});
state_machine__12365__auto__ = function(state_19591){
switch(arguments.length){
case 0:
return state_machine__12365__auto____0.call(this);
case 1:
return state_machine__12365__auto____1.call(this,state_19591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12365__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12365__auto____0;
state_machine__12365__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12365__auto____1;
return state_machine__12365__auto__;
})()
;})(switch__12364__auto__,c__12429__auto__,parent))
})();var state__12431__auto__ = (function (){var statearr_19600 = f__12430__auto__.call(null);(statearr_19600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12429__auto__);
return statearr_19600;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12431__auto__);
});})(c__12429__auto__,parent))
);
return c__12429__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__19603){var map__19605 = p__19603;var map__19605__$1 = ((cljs.core.seq_QMARK_.call(null,map__19605))?cljs.core.apply.call(null,cljs.core.hash_map,map__19605):map__19605);var f_data = map__19605__$1;var request_url = cljs.core.get.call(null,map__19605__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__19605__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__19606,files_msg){var map__19628 = p__19606;var map__19628__$1 = ((cljs.core.seq_QMARK_.call(null,map__19628))?cljs.core.apply.call(null,cljs.core.hash_map,map__19628):map__19628);var opts = map__19628__$1;var on_cssload = cljs.core.get.call(null,map__19628__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__19629_19649 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__19630_19650 = null;var count__19631_19651 = (0);var i__19632_19652 = (0);while(true){
if((i__19632_19652 < count__19631_19651))
{var f_19653 = cljs.core._nth.call(null,chunk__19630_19650,i__19632_19652);figwheel.client.reload_css_file.call(null,f_19653);
{
var G__19654 = seq__19629_19649;
var G__19655 = chunk__19630_19650;
var G__19656 = count__19631_19651;
var G__19657 = (i__19632_19652 + (1));
seq__19629_19649 = G__19654;
chunk__19630_19650 = G__19655;
count__19631_19651 = G__19656;
i__19632_19652 = G__19657;
continue;
}
} else
{var temp__4126__auto___19658 = cljs.core.seq.call(null,seq__19629_19649);if(temp__4126__auto___19658)
{var seq__19629_19659__$1 = temp__4126__auto___19658;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19629_19659__$1))
{var c__9863__auto___19660 = cljs.core.chunk_first.call(null,seq__19629_19659__$1);{
var G__19661 = cljs.core.chunk_rest.call(null,seq__19629_19659__$1);
var G__19662 = c__9863__auto___19660;
var G__19663 = cljs.core.count.call(null,c__9863__auto___19660);
var G__19664 = (0);
seq__19629_19649 = G__19661;
chunk__19630_19650 = G__19662;
count__19631_19651 = G__19663;
i__19632_19652 = G__19664;
continue;
}
} else
{var f_19665 = cljs.core.first.call(null,seq__19629_19659__$1);figwheel.client.reload_css_file.call(null,f_19665);
{
var G__19666 = cljs.core.next.call(null,seq__19629_19659__$1);
var G__19667 = null;
var G__19668 = (0);
var G__19669 = (0);
seq__19629_19649 = G__19666;
chunk__19630_19650 = G__19667;
count__19631_19651 = G__19668;
i__19632_19652 = G__19669;
continue;
}
}
} else
{}
}
break;
}
var c__12429__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12429__auto__,map__19628,map__19628__$1,opts,on_cssload){
return (function (){var f__12430__auto__ = (function (){var switch__12364__auto__ = ((function (c__12429__auto__,map__19628,map__19628__$1,opts,on_cssload){
return (function (state_19639){var state_val_19640 = (state_19639[(1)]);if((state_val_19640 === (2)))
{var inst_19635 = (state_19639[(2)]);var inst_19636 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_19637 = on_cssload.call(null,inst_19636);var state_19639__$1 = (function (){var statearr_19641 = state_19639;(statearr_19641[(7)] = inst_19635);
return statearr_19641;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19639__$1,inst_19637);
} else
{if((state_val_19640 === (1)))
{var inst_19633 = cljs.core.async.timeout.call(null,(100));var state_19639__$1 = state_19639;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19639__$1,(2),inst_19633);
} else
{return null;
}
}
});})(c__12429__auto__,map__19628,map__19628__$1,opts,on_cssload))
;return ((function (switch__12364__auto__,c__12429__auto__,map__19628,map__19628__$1,opts,on_cssload){
return (function() {
var state_machine__12365__auto__ = null;
var state_machine__12365__auto____0 = (function (){var statearr_19645 = [null,null,null,null,null,null,null,null];(statearr_19645[(0)] = state_machine__12365__auto__);
(statearr_19645[(1)] = (1));
return statearr_19645;
});
var state_machine__12365__auto____1 = (function (state_19639){while(true){
var ret_value__12366__auto__ = (function (){try{while(true){
var result__12367__auto__ = switch__12364__auto__.call(null,state_19639);if(cljs.core.keyword_identical_QMARK_.call(null,result__12367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12367__auto__;
}
break;
}
}catch (e19646){if((e19646 instanceof Object))
{var ex__12368__auto__ = e19646;var statearr_19647_19670 = state_19639;(statearr_19647_19670[(5)] = ex__12368__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19639);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19646;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19671 = state_19639;
state_19639 = G__19671;
continue;
}
} else
{return ret_value__12366__auto__;
}
break;
}
});
state_machine__12365__auto__ = function(state_19639){
switch(arguments.length){
case 0:
return state_machine__12365__auto____0.call(this);
case 1:
return state_machine__12365__auto____1.call(this,state_19639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12365__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12365__auto____0;
state_machine__12365__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12365__auto____1;
return state_machine__12365__auto__;
})()
;})(switch__12364__auto__,c__12429__auto__,map__19628,map__19628__$1,opts,on_cssload))
})();var state__12431__auto__ = (function (){var statearr_19648 = f__12430__auto__.call(null);(statearr_19648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12429__auto__);
return statearr_19648;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12431__auto__);
});})(c__12429__auto__,map__19628,map__19628__$1,opts,on_cssload))
);
return c__12429__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__19672){var map__19677 = p__19672;var map__19677__$1 = ((cljs.core.seq_QMARK_.call(null,map__19677))?cljs.core.apply.call(null,cljs.core.hash_map,map__19677):map__19677);var opts = map__19677__$1;var on_compile_fail = cljs.core.get.call(null,map__19677__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__19677__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__19677__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__19677__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__19677,map__19677__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__19678 = cljs.core._EQ_;var expr__19679 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__19678.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__19679)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__19678.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__19679)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__19678.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__19679)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__19677,map__19677__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__19677,map__19677__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__19677,map__19677__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__19677,map__19677__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__19677,map__19677__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__19677,map__19677__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__19677,map__19677__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__19677,map__19677__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__19677,map__19677__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj19684 = {"detail":url};return obj19684;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__19685){var map__19687 = p__19685;var map__19687__$1 = ((cljs.core.seq_QMARK_.call(null,map__19687))?cljs.core.apply.call(null,cljs.core.hash_map,map__19687):map__19687);var class$ = cljs.core.get.call(null,map__19687__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__19687__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__19688){var map__19694 = p__19688;var map__19694__$1 = ((cljs.core.seq_QMARK_.call(null,map__19694))?cljs.core.apply.call(null,cljs.core.hash_map,map__19694):map__19694);var ed = map__19694__$1;var exception_data = cljs.core.get.call(null,map__19694__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__19694__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__19695_19699 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__19696_19700 = null;var count__19697_19701 = (0);var i__19698_19702 = (0);while(true){
if((i__19698_19702 < count__19697_19701))
{var msg_19703 = cljs.core._nth.call(null,chunk__19696_19700,i__19698_19702);console.log(msg_19703);
{
var G__19704 = seq__19695_19699;
var G__19705 = chunk__19696_19700;
var G__19706 = count__19697_19701;
var G__19707 = (i__19698_19702 + (1));
seq__19695_19699 = G__19704;
chunk__19696_19700 = G__19705;
count__19697_19701 = G__19706;
i__19698_19702 = G__19707;
continue;
}
} else
{var temp__4126__auto___19708 = cljs.core.seq.call(null,seq__19695_19699);if(temp__4126__auto___19708)
{var seq__19695_19709__$1 = temp__4126__auto___19708;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19695_19709__$1))
{var c__9863__auto___19710 = cljs.core.chunk_first.call(null,seq__19695_19709__$1);{
var G__19711 = cljs.core.chunk_rest.call(null,seq__19695_19709__$1);
var G__19712 = c__9863__auto___19710;
var G__19713 = cljs.core.count.call(null,c__9863__auto___19710);
var G__19714 = (0);
seq__19695_19699 = G__19711;
chunk__19696_19700 = G__19712;
count__19697_19701 = G__19713;
i__19698_19702 = G__19714;
continue;
}
} else
{var msg_19715 = cljs.core.first.call(null,seq__19695_19709__$1);console.log(msg_19715);
{
var G__19716 = cljs.core.next.call(null,seq__19695_19709__$1);
var G__19717 = null;
var G__19718 = (0);
var G__19719 = (0);
seq__19695_19699 = G__19716;
chunk__19696_19700 = G__19717;
count__19697_19701 = G__19718;
i__19698_19702 = G__19719;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__9093__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__19720){var map__19722 = p__19720;var map__19722__$1 = ((cljs.core.seq_QMARK_.call(null,map__19722))?cljs.core.apply.call(null,cljs.core.hash_map,map__19722):map__19722);var opts = map__19722__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__19720 = null;if (arguments.length > 0) {
  p__19720 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__19720);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__19723){
var p__19720 = cljs.core.seq(arglist__19723);
return watch_and_reload__delegate(p__19720);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map