// Compiled by ClojureScript 0.0-2371
goog.provide('parser_for_vince.core');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
if(typeof parser_for_vince.core.app_state !== 'undefined')
{} else
{parser_for_vince.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"templates","templates",-1237401733),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"something {x.y.(\"foo\")} something else"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"a {b.c.(\"d } e\")} f {c.g.(\"h\")}"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),":{ }:"], null)], null)], null));
}
parser_for_vince.core.children = (function children(parent,s){var so_far = cljs.core.PersistentVector.EMPTY;var temp_accum = "";var s__$1 = s;while(true){
var G__16076 = cljs.core.first.call(null,s__$1);if(cljs.core._EQ_.call(null,"\"",G__16076))
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword(null,"string","string",-1989541586)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,so_far,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),temp_accum], null)),cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,s__$1))], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword(null,"block","block",664686210)))
{var new_node = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586)], null);var rest_of_s = cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,s__$1));var vec__16077 = children.call(null,new_node,rest_of_s);var grand_children = cljs.core.nth.call(null,vec__16077,(0),null);var remaining = cljs.core.nth.call(null,vec__16077,(1),null);var new_node_with_children = cljs.core.assoc.call(null,new_node,new cljs.core.Keyword(null,"children","children",-940561982),grand_children);var so_far_with_text = ((cljs.core.empty_QMARK_.call(null,temp_accum))?so_far:cljs.core.conj.call(null,so_far,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),temp_accum], null)));{
var G__16079 = cljs.core.conj.call(null,so_far_with_text,new_node_with_children);
var G__16080 = "";
var G__16081 = remaining;
so_far = G__16079;
temp_accum = G__16080;
s__$1 = G__16081;
continue;
}
} else
{{
var G__16082 = so_far;
var G__16083 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(temp_accum)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,s__$1)));
var G__16084 = cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,s__$1));
so_far = G__16082;
temp_accum = G__16083;
s__$1 = G__16084;
continue;
}
}
}
} else
{if(cljs.core._EQ_.call(null,"}",G__16076))
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword(null,"block","block",664686210)))
{var so_far_with_text = ((cljs.core.seq.call(null,temp_accum))?cljs.core.conj.call(null,so_far,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"value","value",305978217),temp_accum], null)):so_far);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [so_far_with_text,cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,s__$1))], null);
} else
{{
var G__16085 = so_far;
var G__16086 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(temp_accum)+"}");
var G__16087 = cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,s__$1));
so_far = G__16085;
temp_accum = G__16086;
s__$1 = G__16087;
continue;
}
}
} else
{if(cljs.core._EQ_.call(null,"{",G__16076))
{var new_node = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"block","block",664686210)], null);var rest_of_s = cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,s__$1));var vec__16078 = children.call(null,new_node,rest_of_s);var grand_children = cljs.core.nth.call(null,vec__16078,(0),null);var remaining = cljs.core.nth.call(null,vec__16078,(1),null);var new_node_with_children = cljs.core.assoc.call(null,new_node,new cljs.core.Keyword(null,"children","children",-940561982),grand_children);var so_far_with_text = ((cljs.core.seq.call(null,temp_accum))?cljs.core.conj.call(null,so_far,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),temp_accum], null)):so_far);{
var G__16088 = cljs.core.conj.call(null,so_far_with_text,new_node_with_children);
var G__16089 = "";
var G__16090 = remaining;
so_far = G__16088;
temp_accum = G__16089;
s__$1 = G__16090;
continue;
}
} else
{if(cljs.core._EQ_.call(null,null,G__16076))
{if(cljs.core.empty_QMARK_.call(null,temp_accum))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [so_far,s__$1], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,so_far,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),temp_accum], null)),s__$1], null);
}
} else
{{
var G__16091 = so_far;
var G__16092 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(temp_accum)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,s__$1)));
var G__16093 = cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,s__$1));
so_far = G__16091;
temp_accum = G__16092;
s__$1 = G__16093;
continue;
}

}
}
}
}
break;
}
});
parser_for_vince.core.parse_view = (function parse_view(template,owner){if(typeof parser_for_vince.core.t16099 !== 'undefined')
{} else
{
/**
* @constructor
*/
parser_for_vince.core.t16099 = (function (owner,template,parse_view,meta16100){
this.owner = owner;
this.template = template;
this.parse_view = parse_view;
this.meta16100 = meta16100;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
parser_for_vince.core.t16099.cljs$lang$type = true;
parser_for_vince.core.t16099.cljs$lang$ctorStr = "parser-for-vince.core/t16099";
parser_for_vince.core.t16099.cljs$lang$ctorPrWriter = (function (this__9673__auto__,writer__9674__auto__,opt__9675__auto__){return cljs.core._write.call(null,writer__9674__auto__,"parser-for-vince.core/t16099");
});
parser_for_vince.core.t16099.prototype.om$core$IRender$ = true;
parser_for_vince.core.t16099.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.li({"className": "Grid Grid--withGutter"},React.DOM.div({"className": "Grid-cell u-size1of2"},om.dom.textarea.call(null,{"onChange": ((function (___$1){
return (function (p1__16094_SHARP_){return om.core.update_BANG_.call(null,self__.template,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),p1__16094_SHARP_.target.value], null));
});})(___$1))
, "className": "u-sizeFull", "value": new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(self__.template)})),React.DOM.div({"className": "Grid-cell u-size1of2"},React.DOM.pre(null,(function (){var vec__16102 = parser_for_vince.core.children.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453)], null),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(self__.template));var tree = cljs.core.nth.call(null,vec__16102,(0),null);var ___$2 = cljs.core.nth.call(null,vec__16102,(1),null);return JSON.stringify.call(null,cljs.core.clj__GT_js.call(null,tree),null,(2));
})())));
});
parser_for_vince.core.t16099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16101){var self__ = this;
var _16101__$1 = this;return self__.meta16100;
});
parser_for_vince.core.t16099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16101,meta16100__$1){var self__ = this;
var _16101__$1 = this;return (new parser_for_vince.core.t16099(self__.owner,self__.template,self__.parse_view,meta16100__$1));
});
parser_for_vince.core.__GT_t16099 = (function __GT_t16099(owner__$1,template__$1,parse_view__$1,meta16100){return (new parser_for_vince.core.t16099(owner__$1,template__$1,parse_view__$1,meta16100));
});
}
return (new parser_for_vince.core.t16099(owner,template,parse_view,null));
});
parser_for_vince.core.main = (function main(){return om.core.root.call(null,(function (app,owner){if(typeof parser_for_vince.core.t16106 !== 'undefined')
{} else
{
/**
* @constructor
*/
parser_for_vince.core.t16106 = (function (owner,app,main,meta16107){
this.owner = owner;
this.app = app;
this.main = main;
this.meta16107 = meta16107;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
parser_for_vince.core.t16106.cljs$lang$type = true;
parser_for_vince.core.t16106.cljs$lang$ctorStr = "parser-for-vince.core/t16106";
parser_for_vince.core.t16106.cljs$lang$ctorPrWriter = (function (this__9673__auto__,writer__9674__auto__,opt__9675__auto__){return cljs.core._write.call(null,writer__9674__auto__,"parser-for-vince.core/t16106");
});
parser_for_vince.core.t16106.prototype.om$core$IRender$ = true;
parser_for_vince.core.t16106.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "App"},React.DOM.h2(null,"Vince's Damn Parser"),cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,parser_for_vince.core.parse_view,new cljs.core.Keyword(null,"templates","templates",-1237401733).cljs$core$IFn$_invoke$arity$1(self__.app))));
});
parser_for_vince.core.t16106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16108){var self__ = this;
var _16108__$1 = this;return self__.meta16107;
});
parser_for_vince.core.t16106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16108,meta16107__$1){var self__ = this;
var _16108__$1 = this;return (new parser_for_vince.core.t16106(self__.owner,self__.app,self__.main,meta16107__$1));
});
parser_for_vince.core.__GT_t16106 = (function __GT_t16106(owner__$1,app__$1,main__$1,meta16107){return (new parser_for_vince.core.t16106(owner__$1,app__$1,main__$1,meta16107));
});
}
return (new parser_for_vince.core.t16106(owner,app,main,null));
}),parser_for_vince.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
});

//# sourceMappingURL=core.js.map