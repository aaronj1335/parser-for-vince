// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t16728 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16728 = (function (f,fn_handler,meta16729){
this.f = f;
this.fn_handler = fn_handler;
this.meta16729 = meta16729;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16728.cljs$lang$type = true;
cljs.core.async.t16728.cljs$lang$ctorStr = "cljs.core.async/t16728";
cljs.core.async.t16728.cljs$lang$ctorPrWriter = (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"cljs.core.async/t16728");
});
cljs.core.async.t16728.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16728.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t16728.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t16728.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16730){var self__ = this;
var _16730__$1 = this;return self__.meta16729;
});
cljs.core.async.t16728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16730,meta16729__$1){var self__ = this;
var _16730__$1 = this;return (new cljs.core.async.t16728(self__.f,self__.fn_handler,meta16729__$1));
});
cljs.core.async.__GT_t16728 = (function __GT_t16728(f__$1,fn_handler__$1,meta16729){return (new cljs.core.async.t16728(f__$1,fn_handler__$1,meta16729));
});
}
return (new cljs.core.async.t16728(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__16732 = buff;if(G__16732)
{var bit__9757__auto__ = null;if(cljs.core.truth_((function (){var or__9093__auto__ = bit__9757__auto__;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return G__16732.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__16732.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16732);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16732);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_16733 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_16733);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_16733,ret){
return (function (){return fn1.call(null,val_16733);
});})(val_16733,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__9963__auto___16734 = n;var x_16735 = (0);while(true){
if((x_16735 < n__9963__auto___16734))
{(a[x_16735] = (0));
{
var G__16736 = (x_16735 + (1));
x_16735 = G__16736;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__16737 = (i + (1));
i = G__16737;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t16741 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16741 = (function (flag,alt_flag,meta16742){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta16742 = meta16742;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16741.cljs$lang$type = true;
cljs.core.async.t16741.cljs$lang$ctorStr = "cljs.core.async/t16741";
cljs.core.async.t16741.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"cljs.core.async/t16741");
});})(flag))
;
cljs.core.async.t16741.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16741.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t16741.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t16741.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16743){var self__ = this;
var _16743__$1 = this;return self__.meta16742;
});})(flag))
;
cljs.core.async.t16741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16743,meta16742__$1){var self__ = this;
var _16743__$1 = this;return (new cljs.core.async.t16741(self__.flag,self__.alt_flag,meta16742__$1));
});})(flag))
;
cljs.core.async.__GT_t16741 = ((function (flag){
return (function __GT_t16741(flag__$1,alt_flag__$1,meta16742){return (new cljs.core.async.t16741(flag__$1,alt_flag__$1,meta16742));
});})(flag))
;
}
return (new cljs.core.async.t16741(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t16747 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16747 = (function (cb,flag,alt_handler,meta16748){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta16748 = meta16748;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16747.cljs$lang$type = true;
cljs.core.async.t16747.cljs$lang$ctorStr = "cljs.core.async/t16747";
cljs.core.async.t16747.cljs$lang$ctorPrWriter = (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"cljs.core.async/t16747");
});
cljs.core.async.t16747.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16747.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t16747.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t16747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16749){var self__ = this;
var _16749__$1 = this;return self__.meta16748;
});
cljs.core.async.t16747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16749,meta16748__$1){var self__ = this;
var _16749__$1 = this;return (new cljs.core.async.t16747(self__.cb,self__.flag,self__.alt_handler,meta16748__$1));
});
cljs.core.async.__GT_t16747 = (function __GT_t16747(cb__$1,flag__$1,alt_handler__$1,meta16748){return (new cljs.core.async.t16747(cb__$1,flag__$1,alt_handler__$1,meta16748));
});
}
return (new cljs.core.async.t16747(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16750_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16750_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16751_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16751_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__9093__auto__ = wport;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__16752 = (i + (1));
i = G__16752;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__9093__auto__ = ret;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__9081__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__9081__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__9081__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__16753){var map__16755 = p__16753;var map__16755__$1 = ((cljs.core.seq_QMARK_.call(null,map__16755))?cljs.core.apply.call(null,cljs.core.hash_map,map__16755):map__16755);var opts = map__16755__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__16753 = null;if (arguments.length > 1) {
  p__16753 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__16753);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__16756){
var ports = cljs.core.first(arglist__16756);
var p__16753 = cljs.core.rest(arglist__16756);
return alts_BANG___delegate(ports,p__16753);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t16764 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16764 = (function (ch,f,map_LT_,meta16765){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16765 = meta16765;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16764.cljs$lang$type = true;
cljs.core.async.t16764.cljs$lang$ctorStr = "cljs.core.async/t16764";
cljs.core.async.t16764.cljs$lang$ctorPrWriter = (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"cljs.core.async/t16764");
});
cljs.core.async.t16764.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16764.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t16764.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16764.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t16767 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16767 = (function (fn1,_,meta16765,ch,f,map_LT_,meta16768){
this.fn1 = fn1;
this._ = _;
this.meta16765 = meta16765;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16768 = meta16768;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16767.cljs$lang$type = true;
cljs.core.async.t16767.cljs$lang$ctorStr = "cljs.core.async/t16767";
cljs.core.async.t16767.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"cljs.core.async/t16767");
});})(___$1))
;
cljs.core.async.t16767.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16767.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t16767.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t16767.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__16757_SHARP_){return f1.call(null,(((p1__16757_SHARP_ == null))?null:self__.f.call(null,p1__16757_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t16767.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16769){var self__ = this;
var _16769__$1 = this;return self__.meta16768;
});})(___$1))
;
cljs.core.async.t16767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16769,meta16768__$1){var self__ = this;
var _16769__$1 = this;return (new cljs.core.async.t16767(self__.fn1,self__._,self__.meta16765,self__.ch,self__.f,self__.map_LT_,meta16768__$1));
});})(___$1))
;
cljs.core.async.__GT_t16767 = ((function (___$1){
return (function __GT_t16767(fn1__$1,___$2,meta16765__$1,ch__$2,f__$2,map_LT___$2,meta16768){return (new cljs.core.async.t16767(fn1__$1,___$2,meta16765__$1,ch__$2,f__$2,map_LT___$2,meta16768));
});})(___$1))
;
}
return (new cljs.core.async.t16767(fn1,___$1,self__.meta16765,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__9081__auto__ = ret;if(cljs.core.truth_(and__9081__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__9081__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t16764.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16764.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16764.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t16764.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16766){var self__ = this;
var _16766__$1 = this;return self__.meta16765;
});
cljs.core.async.t16764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16766,meta16765__$1){var self__ = this;
var _16766__$1 = this;return (new cljs.core.async.t16764(self__.ch,self__.f,self__.map_LT_,meta16765__$1));
});
cljs.core.async.__GT_t16764 = (function __GT_t16764(ch__$1,f__$1,map_LT___$1,meta16765){return (new cljs.core.async.t16764(ch__$1,f__$1,map_LT___$1,meta16765));
});
}
return (new cljs.core.async.t16764(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t16773 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16773 = (function (ch,f,map_GT_,meta16774){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta16774 = meta16774;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16773.cljs$lang$type = true;
cljs.core.async.t16773.cljs$lang$ctorStr = "cljs.core.async/t16773";
cljs.core.async.t16773.cljs$lang$ctorPrWriter = (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"cljs.core.async/t16773");
});
cljs.core.async.t16773.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16773.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t16773.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16773.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t16773.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16773.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16775){var self__ = this;
var _16775__$1 = this;return self__.meta16774;
});
cljs.core.async.t16773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16775,meta16774__$1){var self__ = this;
var _16775__$1 = this;return (new cljs.core.async.t16773(self__.ch,self__.f,self__.map_GT_,meta16774__$1));
});
cljs.core.async.__GT_t16773 = (function __GT_t16773(ch__$1,f__$1,map_GT___$1,meta16774){return (new cljs.core.async.t16773(ch__$1,f__$1,map_GT___$1,meta16774));
});
}
return (new cljs.core.async.t16773(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t16779 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16779 = (function (ch,p,filter_GT_,meta16780){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta16780 = meta16780;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16779.cljs$lang$type = true;
cljs.core.async.t16779.cljs$lang$ctorStr = "cljs.core.async/t16779";
cljs.core.async.t16779.cljs$lang$ctorPrWriter = (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"cljs.core.async/t16779");
});
cljs.core.async.t16779.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16779.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t16779.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16779.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t16779.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16779.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16779.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t16779.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16781){var self__ = this;
var _16781__$1 = this;return self__.meta16780;
});
cljs.core.async.t16779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16781,meta16780__$1){var self__ = this;
var _16781__$1 = this;return (new cljs.core.async.t16779(self__.ch,self__.p,self__.filter_GT_,meta16780__$1));
});
cljs.core.async.__GT_t16779 = (function __GT_t16779(ch__$1,p__$1,filter_GT___$1,meta16780){return (new cljs.core.async.t16779(ch__$1,p__$1,filter_GT___$1,meta16780));
});
}
return (new cljs.core.async.t16779(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12429__auto___16864 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12429__auto___16864,out){
return (function (){var f__12430__auto__ = (function (){var switch__12364__auto__ = ((function (c__12429__auto___16864,out){
return (function (state_16843){var state_val_16844 = (state_16843[(1)]);if((state_val_16844 === (7)))
{var inst_16839 = (state_16843[(2)]);var state_16843__$1 = state_16843;var statearr_16845_16865 = state_16843__$1;(statearr_16845_16865[(2)] = inst_16839);
(statearr_16845_16865[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16844 === (1)))
{var state_16843__$1 = state_16843;var statearr_16846_16866 = state_16843__$1;(statearr_16846_16866[(2)] = null);
(statearr_16846_16866[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16844 === (4)))
{var inst_16825 = (state_16843[(7)]);var inst_16825__$1 = (state_16843[(2)]);var inst_16826 = (inst_16825__$1 == null);var state_16843__$1 = (function (){var statearr_16847 = state_16843;(statearr_16847[(7)] = inst_16825__$1);
return statearr_16847;
})();if(cljs.core.truth_(inst_16826))
{var statearr_16848_16867 = state_16843__$1;(statearr_16848_16867[(1)] = (5));
} else
{var statearr_16849_16868 = state_16843__$1;(statearr_16849_16868[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16844 === (6)))
{var inst_16825 = (state_16843[(7)]);var inst_16830 = p.call(null,inst_16825);var state_16843__$1 = state_16843;if(cljs.core.truth_(inst_16830))
{var statearr_16850_16869 = state_16843__$1;(statearr_16850_16869[(1)] = (8));
} else
{var statearr_16851_16870 = state_16843__$1;(statearr_16851_16870[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16844 === (3)))
{var inst_16841 = (state_16843[(2)]);var state_16843__$1 = state_16843;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16843__$1,inst_16841);
} else
{if((state_val_16844 === (2)))
{var state_16843__$1 = state_16843;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16843__$1,(4),ch);
} else
{if((state_val_16844 === (11)))
{var inst_16833 = (state_16843[(2)]);var state_16843__$1 = state_16843;var statearr_16852_16871 = state_16843__$1;(statearr_16852_16871[(2)] = inst_16833);
(statearr_16852_16871[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16844 === (9)))
{var state_16843__$1 = state_16843;var statearr_16853_16872 = state_16843__$1;(statearr_16853_16872[(2)] = null);
(statearr_16853_16872[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16844 === (5)))
{var inst_16828 = cljs.core.async.close_BANG_.call(null,out);var state_16843__$1 = state_16843;var statearr_16854_16873 = state_16843__$1;(statearr_16854_16873[(2)] = inst_16828);
(statearr_16854_16873[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16844 === (10)))
{var inst_16836 = (state_16843[(2)]);var state_16843__$1 = (function (){var statearr_16855 = state_16843;(statearr_16855[(8)] = inst_16836);
return statearr_16855;
})();var statearr_16856_16874 = state_16843__$1;(statearr_16856_16874[(2)] = null);
(statearr_16856_16874[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16844 === (8)))
{var inst_16825 = (state_16843[(7)]);var state_16843__$1 = state_16843;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16843__$1,(11),out,inst_16825);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__12429__auto___16864,out))
;return ((function (switch__12364__auto__,c__12429__auto___16864,out){
return (function() {
var state_machine__12365__auto__ = null;
var state_machine__12365__auto____0 = (function (){var statearr_16860 = [null,null,null,null,null,null,null,null,null];(statearr_16860[(0)] = state_machine__12365__auto__);
(statearr_16860[(1)] = (1));
return statearr_16860;
});
var state_machine__12365__auto____1 = (function (state_16843){while(true){
var ret_value__12366__auto__ = (function (){try{while(true){
var result__12367__auto__ = switch__12364__auto__.call(null,state_16843);if(cljs.core.keyword_identical_QMARK_.call(null,result__12367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12367__auto__;
}
break;
}
}catch (e16861){if((e16861 instanceof Object))
{var ex__12368__auto__ = e16861;var statearr_16862_16875 = state_16843;(statearr_16862_16875[(5)] = ex__12368__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16843);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16861;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16876 = state_16843;
state_16843 = G__16876;
continue;
}
} else
{return ret_value__12366__auto__;
}
break;
}
});
state_machine__12365__auto__ = function(state_16843){
switch(arguments.length){
case 0:
return state_machine__12365__auto____0.call(this);
case 1:
return state_machine__12365__auto____1.call(this,state_16843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12365__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12365__auto____0;
state_machine__12365__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12365__auto____1;
return state_machine__12365__auto__;
})()
;})(switch__12364__auto__,c__12429__auto___16864,out))
})();var state__12431__auto__ = (function (){var statearr_16863 = f__12430__auto__.call(null);(statearr_16863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12429__auto___16864);
return statearr_16863;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12431__auto__);
});})(c__12429__auto___16864,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__12429__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12429__auto__){
return (function (){var f__12430__auto__ = (function (){var switch__12364__auto__ = ((function (c__12429__auto__){
return (function (state_17042){var state_val_17043 = (state_17042[(1)]);if((state_val_17043 === (7)))
{var inst_17038 = (state_17042[(2)]);var state_17042__$1 = state_17042;var statearr_17044_17085 = state_17042__$1;(statearr_17044_17085[(2)] = inst_17038);
(statearr_17044_17085[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17043 === (20)))
{var inst_17008 = (state_17042[(7)]);var inst_17019 = (state_17042[(2)]);var inst_17020 = cljs.core.next.call(null,inst_17008);var inst_16994 = inst_17020;var inst_16995 = null;var inst_16996 = (0);var inst_16997 = (0);var state_17042__$1 = (function (){var statearr_17045 = state_17042;(statearr_17045[(8)] = inst_16996);
(statearr_17045[(9)] = inst_16997);
(statearr_17045[(10)] = inst_16994);
(statearr_17045[(11)] = inst_16995);
(statearr_17045[(12)] = inst_17019);
return statearr_17045;
})();var statearr_17046_17086 = state_17042__$1;(statearr_17046_17086[(2)] = null);
(statearr_17046_17086[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17043 === (1)))
{var state_17042__$1 = state_17042;var statearr_17047_17087 = state_17042__$1;(statearr_17047_17087[(2)] = null);
(statearr_17047_17087[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17043 === (4)))
{var inst_16983 = (state_17042[(13)]);var inst_16983__$1 = (state_17042[(2)]);var inst_16984 = (inst_16983__$1 == null);var state_17042__$1 = (function (){var statearr_17048 = state_17042;(statearr_17048[(13)] = inst_16983__$1);
return statearr_17048;
})();if(cljs.core.truth_(inst_16984))
{var statearr_17049_17088 = state_17042__$1;(statearr_17049_17088[(1)] = (5));
} else
{var statearr_17050_17089 = state_17042__$1;(statearr_17050_17089[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17043 === (15)))
{var state_17042__$1 = state_17042;var statearr_17054_17090 = state_17042__$1;(statearr_17054_17090[(2)] = null);
(statearr_17054_17090[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17043 === (21)))
{var state_17042__$1 = state_17042;var statearr_17055_17091 = state_17042__$1;(statearr_17055_17091[(2)] = null);
(statearr_17055_17091[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17043 === (13)))
{var inst_16996 = (state_17042[(8)]);var inst_16997 = (state_17042[(9)]);var inst_16994 = (state_17042[(10)]);var inst_16995 = (state_17042[(11)]);var inst_17004 = (state_17042[(2)]);var inst_17005 = (inst_16997 + (1));var tmp17051 = inst_16996;var tmp17052 = inst_16994;var tmp17053 = inst_16995;var inst_16994__$1 = tmp17052;var inst_16995__$1 = tmp17053;var inst_16996__$1 = tmp17051;var inst_16997__$1 = inst_17005;var state_17042__$1 = (function (){var statearr_17056 = state_17042;(statearr_17056[(8)] = inst_16996__$1);
(statearr_17056[(9)] = inst_16997__$1);
(statearr_17056[(14)] = inst_17004);
(statearr_17056[(10)] = inst_16994__$1);
(statearr_17056[(11)] = inst_16995__$1);
return statearr_17056;
})();var statearr_17057_17092 = state_17042__$1;(statearr_17057_17092[(2)] = null);
(statearr_17057_17092[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17043 === (22)))
{var state_17042__$1 = state_17042;var statearr_17058_17093 = state_17042__$1;(statearr_17058_17093[(2)] = null);
(statearr_17058_17093[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17043 === (6)))
{var inst_16983 = (state_17042[(13)]);var inst_16992 = f.call(null,inst_16983);var inst_16993 = cljs.core.seq.call(null,inst_16992);var inst_16994 = inst_16993;var inst_16995 = null;var inst_16996 = (0);var inst_16997 = (0);var state_17042__$1 = (function (){var statearr_17059 = state_17042;(statearr_17059[(8)] = inst_16996);
(statearr_17059[(9)] = inst_16997);
(statearr_17059[(10)] = inst_16994);
(statearr_17059[(11)] = inst_16995);
return statearr_17059;
})();var statearr_17060_17094 = state_17042__$1;(statearr_17060_17094[(2)] = null);
(statearr_17060_17094[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17043 === (17)))
{var inst_17008 = (state_17042[(7)]);var inst_17012 = cljs.core.chunk_first.call(null,inst_17008);var inst_17013 = cljs.core.chunk_rest.call(null,inst_17008);var inst_17014 = cljs.core.count.call(null,inst_17012);var inst_16994 = inst_17013;var inst_16995 = inst_17012;var inst_16996 = inst_17014;var inst_16997 = (0);var state_17042__$1 = (function (){var statearr_17061 = state_17042;(statearr_17061[(8)] = inst_16996);
(statearr_17061[(9)] = inst_16997);
(statearr_17061[(10)] = inst_16994);
(statearr_17061[(11)] = inst_16995);
return statearr_17061;
})();var statearr_17062_17095 = state_17042__$1;(statearr_17062_17095[(2)] = null);
(statearr_17062_17095[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17043 === (3)))
{var inst_17040 = (state_17042[(2)]);var state_17042__$1 = state_17042;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17042__$1,inst_17040);
} else
{if((state_val_17043 === (12)))
{var inst_17028 = (state_17042[(2)]);var state_17042__$1 = state_17042;var statearr_17063_17096 = state_17042__$1;(statearr_17063_17096[(2)] = inst_17028);
(statearr_17063_17096[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17043 === (2)))
{var state_17042__$1 = state_17042;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17042__$1,(4),in$);
} else
{if((state_val_17043 === (23)))
{var inst_17036 = (state_17042[(2)]);var state_17042__$1 = state_17042;var statearr_17064_17097 = state_17042__$1;(statearr_17064_17097[(2)] = inst_17036);
(statearr_17064_17097[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17043 === (19)))
{var inst_17023 = (state_17042[(2)]);var state_17042__$1 = state_17042;var statearr_17065_17098 = state_17042__$1;(statearr_17065_17098[(2)] = inst_17023);
(statearr_17065_17098[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17043 === (11)))
{var inst_17008 = (state_17042[(7)]);var inst_16994 = (state_17042[(10)]);var inst_17008__$1 = cljs.core.seq.call(null,inst_16994);var state_17042__$1 = (function (){var statearr_17066 = state_17042;(statearr_17066[(7)] = inst_17008__$1);
return statearr_17066;
})();if(inst_17008__$1)
{var statearr_17067_17099 = state_17042__$1;(statearr_17067_17099[(1)] = (14));
} else
{var statearr_17068_17100 = state_17042__$1;(statearr_17068_17100[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17043 === (9)))
{var inst_17030 = (state_17042[(2)]);var inst_17031 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_17042__$1 = (function (){var statearr_17069 = state_17042;(statearr_17069[(15)] = inst_17030);
return statearr_17069;
})();if(cljs.core.truth_(inst_17031))
{var statearr_17070_17101 = state_17042__$1;(statearr_17070_17101[(1)] = (21));
} else
{var statearr_17071_17102 = state_17042__$1;(statearr_17071_17102[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17043 === (5)))
{var inst_16986 = cljs.core.async.close_BANG_.call(null,out);var state_17042__$1 = state_17042;var statearr_17072_17103 = state_17042__$1;(statearr_17072_17103[(2)] = inst_16986);
(statearr_17072_17103[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17043 === (14)))
{var inst_17008 = (state_17042[(7)]);var inst_17010 = cljs.core.chunked_seq_QMARK_.call(null,inst_17008);var state_17042__$1 = state_17042;if(inst_17010)
{var statearr_17073_17104 = state_17042__$1;(statearr_17073_17104[(1)] = (17));
} else
{var statearr_17074_17105 = state_17042__$1;(statearr_17074_17105[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17043 === (16)))
{var inst_17026 = (state_17042[(2)]);var state_17042__$1 = state_17042;var statearr_17075_17106 = state_17042__$1;(statearr_17075_17106[(2)] = inst_17026);
(statearr_17075_17106[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17043 === (10)))
{var inst_16997 = (state_17042[(9)]);var inst_16995 = (state_17042[(11)]);var inst_17002 = cljs.core._nth.call(null,inst_16995,inst_16997);var state_17042__$1 = state_17042;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17042__$1,(13),out,inst_17002);
} else
{if((state_val_17043 === (18)))
{var inst_17008 = (state_17042[(7)]);var inst_17017 = cljs.core.first.call(null,inst_17008);var state_17042__$1 = state_17042;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17042__$1,(20),out,inst_17017);
} else
{if((state_val_17043 === (8)))
{var inst_16996 = (state_17042[(8)]);var inst_16997 = (state_17042[(9)]);var inst_16999 = (inst_16997 < inst_16996);var inst_17000 = inst_16999;var state_17042__$1 = state_17042;if(cljs.core.truth_(inst_17000))
{var statearr_17076_17107 = state_17042__$1;(statearr_17076_17107[(1)] = (10));
} else
{var statearr_17077_17108 = state_17042__$1;(statearr_17077_17108[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12429__auto__))
;return ((function (switch__12364__auto__,c__12429__auto__){
return (function() {
var state_machine__12365__auto__ = null;
var state_machine__12365__auto____0 = (function (){var statearr_17081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17081[(0)] = state_machine__12365__auto__);
(statearr_17081[(1)] = (1));
return statearr_17081;
});
var state_machine__12365__auto____1 = (function (state_17042){while(true){
var ret_value__12366__auto__ = (function (){try{while(true){
var result__12367__auto__ = switch__12364__auto__.call(null,state_17042);if(cljs.core.keyword_identical_QMARK_.call(null,result__12367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12367__auto__;
}
break;
}
}catch (e17082){if((e17082 instanceof Object))
{var ex__12368__auto__ = e17082;var statearr_17083_17109 = state_17042;(statearr_17083_17109[(5)] = ex__12368__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17042);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17082;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17110 = state_17042;
state_17042 = G__17110;
continue;
}
} else
{return ret_value__12366__auto__;
}
break;
}
});
state_machine__12365__auto__ = function(state_17042){
switch(arguments.length){
case 0:
return state_machine__12365__auto____0.call(this);
case 1:
return state_machine__12365__auto____1.call(this,state_17042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12365__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12365__auto____0;
state_machine__12365__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12365__auto____1;
return state_machine__12365__auto__;
})()
;})(switch__12364__auto__,c__12429__auto__))
})();var state__12431__auto__ = (function (){var statearr_17084 = f__12430__auto__.call(null);(statearr_17084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12429__auto__);
return statearr_17084;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12431__auto__);
});})(c__12429__auto__))
);
return c__12429__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__12429__auto___17205 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12429__auto___17205){
return (function (){var f__12430__auto__ = (function (){var switch__12364__auto__ = ((function (c__12429__auto___17205){
return (function (state_17181){var state_val_17182 = (state_17181[(1)]);if((state_val_17182 === (7)))
{var inst_17177 = (state_17181[(2)]);var state_17181__$1 = state_17181;var statearr_17183_17206 = state_17181__$1;(statearr_17183_17206[(2)] = inst_17177);
(statearr_17183_17206[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17182 === (1)))
{var state_17181__$1 = state_17181;var statearr_17184_17207 = state_17181__$1;(statearr_17184_17207[(2)] = null);
(statearr_17184_17207[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17182 === (4)))
{var inst_17160 = (state_17181[(7)]);var inst_17160__$1 = (state_17181[(2)]);var inst_17161 = (inst_17160__$1 == null);var state_17181__$1 = (function (){var statearr_17185 = state_17181;(statearr_17185[(7)] = inst_17160__$1);
return statearr_17185;
})();if(cljs.core.truth_(inst_17161))
{var statearr_17186_17208 = state_17181__$1;(statearr_17186_17208[(1)] = (5));
} else
{var statearr_17187_17209 = state_17181__$1;(statearr_17187_17209[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17182 === (13)))
{var state_17181__$1 = state_17181;var statearr_17188_17210 = state_17181__$1;(statearr_17188_17210[(2)] = null);
(statearr_17188_17210[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17182 === (6)))
{var inst_17160 = (state_17181[(7)]);var state_17181__$1 = state_17181;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17181__$1,(11),to,inst_17160);
} else
{if((state_val_17182 === (3)))
{var inst_17179 = (state_17181[(2)]);var state_17181__$1 = state_17181;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17181__$1,inst_17179);
} else
{if((state_val_17182 === (12)))
{var state_17181__$1 = state_17181;var statearr_17189_17211 = state_17181__$1;(statearr_17189_17211[(2)] = null);
(statearr_17189_17211[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17182 === (2)))
{var state_17181__$1 = state_17181;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17181__$1,(4),from);
} else
{if((state_val_17182 === (11)))
{var inst_17170 = (state_17181[(2)]);var state_17181__$1 = state_17181;if(cljs.core.truth_(inst_17170))
{var statearr_17190_17212 = state_17181__$1;(statearr_17190_17212[(1)] = (12));
} else
{var statearr_17191_17213 = state_17181__$1;(statearr_17191_17213[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17182 === (9)))
{var state_17181__$1 = state_17181;var statearr_17192_17214 = state_17181__$1;(statearr_17192_17214[(2)] = null);
(statearr_17192_17214[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17182 === (5)))
{var state_17181__$1 = state_17181;if(cljs.core.truth_(close_QMARK_))
{var statearr_17193_17215 = state_17181__$1;(statearr_17193_17215[(1)] = (8));
} else
{var statearr_17194_17216 = state_17181__$1;(statearr_17194_17216[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17182 === (14)))
{var inst_17175 = (state_17181[(2)]);var state_17181__$1 = state_17181;var statearr_17195_17217 = state_17181__$1;(statearr_17195_17217[(2)] = inst_17175);
(statearr_17195_17217[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17182 === (10)))
{var inst_17167 = (state_17181[(2)]);var state_17181__$1 = state_17181;var statearr_17196_17218 = state_17181__$1;(statearr_17196_17218[(2)] = inst_17167);
(statearr_17196_17218[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17182 === (8)))
{var inst_17164 = cljs.core.async.close_BANG_.call(null,to);var state_17181__$1 = state_17181;var statearr_17197_17219 = state_17181__$1;(statearr_17197_17219[(2)] = inst_17164);
(statearr_17197_17219[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12429__auto___17205))
;return ((function (switch__12364__auto__,c__12429__auto___17205){
return (function() {
var state_machine__12365__auto__ = null;
var state_machine__12365__auto____0 = (function (){var statearr_17201 = [null,null,null,null,null,null,null,null];(statearr_17201[(0)] = state_machine__12365__auto__);
(statearr_17201[(1)] = (1));
return statearr_17201;
});
var state_machine__12365__auto____1 = (function (state_17181){while(true){
var ret_value__12366__auto__ = (function (){try{while(true){
var result__12367__auto__ = switch__12364__auto__.call(null,state_17181);if(cljs.core.keyword_identical_QMARK_.call(null,result__12367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12367__auto__;
}
break;
}
}catch (e17202){if((e17202 instanceof Object))
{var ex__12368__auto__ = e17202;var statearr_17203_17220 = state_17181;(statearr_17203_17220[(5)] = ex__12368__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17181);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17202;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17221 = state_17181;
state_17181 = G__17221;
continue;
}
} else
{return ret_value__12366__auto__;
}
break;
}
});
state_machine__12365__auto__ = function(state_17181){
switch(arguments.length){
case 0:
return state_machine__12365__auto____0.call(this);
case 1:
return state_machine__12365__auto____1.call(this,state_17181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12365__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12365__auto____0;
state_machine__12365__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12365__auto____1;
return state_machine__12365__auto__;
})()
;})(switch__12364__auto__,c__12429__auto___17205))
})();var state__12431__auto__ = (function (){var statearr_17204 = f__12430__auto__.call(null);(statearr_17204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12429__auto___17205);
return statearr_17204;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12431__auto__);
});})(c__12429__auto___17205))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__12429__auto___17322 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12429__auto___17322,tc,fc){
return (function (){var f__12430__auto__ = (function (){var switch__12364__auto__ = ((function (c__12429__auto___17322,tc,fc){
return (function (state_17297){var state_val_17298 = (state_17297[(1)]);if((state_val_17298 === (7)))
{var inst_17293 = (state_17297[(2)]);var state_17297__$1 = state_17297;var statearr_17299_17323 = state_17297__$1;(statearr_17299_17323[(2)] = inst_17293);
(statearr_17299_17323[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17298 === (1)))
{var state_17297__$1 = state_17297;var statearr_17300_17324 = state_17297__$1;(statearr_17300_17324[(2)] = null);
(statearr_17300_17324[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17298 === (4)))
{var inst_17274 = (state_17297[(7)]);var inst_17274__$1 = (state_17297[(2)]);var inst_17275 = (inst_17274__$1 == null);var state_17297__$1 = (function (){var statearr_17301 = state_17297;(statearr_17301[(7)] = inst_17274__$1);
return statearr_17301;
})();if(cljs.core.truth_(inst_17275))
{var statearr_17302_17325 = state_17297__$1;(statearr_17302_17325[(1)] = (5));
} else
{var statearr_17303_17326 = state_17297__$1;(statearr_17303_17326[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17298 === (13)))
{var state_17297__$1 = state_17297;var statearr_17304_17327 = state_17297__$1;(statearr_17304_17327[(2)] = null);
(statearr_17304_17327[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17298 === (6)))
{var inst_17274 = (state_17297[(7)]);var inst_17280 = p.call(null,inst_17274);var state_17297__$1 = state_17297;if(cljs.core.truth_(inst_17280))
{var statearr_17305_17328 = state_17297__$1;(statearr_17305_17328[(1)] = (9));
} else
{var statearr_17306_17329 = state_17297__$1;(statearr_17306_17329[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17298 === (3)))
{var inst_17295 = (state_17297[(2)]);var state_17297__$1 = state_17297;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17297__$1,inst_17295);
} else
{if((state_val_17298 === (12)))
{var state_17297__$1 = state_17297;var statearr_17307_17330 = state_17297__$1;(statearr_17307_17330[(2)] = null);
(statearr_17307_17330[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17298 === (2)))
{var state_17297__$1 = state_17297;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17297__$1,(4),ch);
} else
{if((state_val_17298 === (11)))
{var inst_17274 = (state_17297[(7)]);var inst_17284 = (state_17297[(2)]);var state_17297__$1 = state_17297;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17297__$1,(8),inst_17284,inst_17274);
} else
{if((state_val_17298 === (9)))
{var state_17297__$1 = state_17297;var statearr_17308_17331 = state_17297__$1;(statearr_17308_17331[(2)] = tc);
(statearr_17308_17331[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17298 === (5)))
{var inst_17277 = cljs.core.async.close_BANG_.call(null,tc);var inst_17278 = cljs.core.async.close_BANG_.call(null,fc);var state_17297__$1 = (function (){var statearr_17309 = state_17297;(statearr_17309[(8)] = inst_17277);
return statearr_17309;
})();var statearr_17310_17332 = state_17297__$1;(statearr_17310_17332[(2)] = inst_17278);
(statearr_17310_17332[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17298 === (14)))
{var inst_17291 = (state_17297[(2)]);var state_17297__$1 = state_17297;var statearr_17311_17333 = state_17297__$1;(statearr_17311_17333[(2)] = inst_17291);
(statearr_17311_17333[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17298 === (10)))
{var state_17297__$1 = state_17297;var statearr_17312_17334 = state_17297__$1;(statearr_17312_17334[(2)] = fc);
(statearr_17312_17334[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17298 === (8)))
{var inst_17286 = (state_17297[(2)]);var state_17297__$1 = state_17297;if(cljs.core.truth_(inst_17286))
{var statearr_17313_17335 = state_17297__$1;(statearr_17313_17335[(1)] = (12));
} else
{var statearr_17314_17336 = state_17297__$1;(statearr_17314_17336[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12429__auto___17322,tc,fc))
;return ((function (switch__12364__auto__,c__12429__auto___17322,tc,fc){
return (function() {
var state_machine__12365__auto__ = null;
var state_machine__12365__auto____0 = (function (){var statearr_17318 = [null,null,null,null,null,null,null,null,null];(statearr_17318[(0)] = state_machine__12365__auto__);
(statearr_17318[(1)] = (1));
return statearr_17318;
});
var state_machine__12365__auto____1 = (function (state_17297){while(true){
var ret_value__12366__auto__ = (function (){try{while(true){
var result__12367__auto__ = switch__12364__auto__.call(null,state_17297);if(cljs.core.keyword_identical_QMARK_.call(null,result__12367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12367__auto__;
}
break;
}
}catch (e17319){if((e17319 instanceof Object))
{var ex__12368__auto__ = e17319;var statearr_17320_17337 = state_17297;(statearr_17320_17337[(5)] = ex__12368__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17297);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17319;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17338 = state_17297;
state_17297 = G__17338;
continue;
}
} else
{return ret_value__12366__auto__;
}
break;
}
});
state_machine__12365__auto__ = function(state_17297){
switch(arguments.length){
case 0:
return state_machine__12365__auto____0.call(this);
case 1:
return state_machine__12365__auto____1.call(this,state_17297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12365__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12365__auto____0;
state_machine__12365__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12365__auto____1;
return state_machine__12365__auto__;
})()
;})(switch__12364__auto__,c__12429__auto___17322,tc,fc))
})();var state__12431__auto__ = (function (){var statearr_17321 = f__12430__auto__.call(null);(statearr_17321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12429__auto___17322);
return statearr_17321;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12431__auto__);
});})(c__12429__auto___17322,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__12429__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12429__auto__){
return (function (){var f__12430__auto__ = (function (){var switch__12364__auto__ = ((function (c__12429__auto__){
return (function (state_17385){var state_val_17386 = (state_17385[(1)]);if((state_val_17386 === (7)))
{var inst_17381 = (state_17385[(2)]);var state_17385__$1 = state_17385;var statearr_17387_17403 = state_17385__$1;(statearr_17387_17403[(2)] = inst_17381);
(statearr_17387_17403[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17386 === (6)))
{var inst_17374 = (state_17385[(7)]);var inst_17371 = (state_17385[(8)]);var inst_17378 = f.call(null,inst_17371,inst_17374);var inst_17371__$1 = inst_17378;var state_17385__$1 = (function (){var statearr_17388 = state_17385;(statearr_17388[(8)] = inst_17371__$1);
return statearr_17388;
})();var statearr_17389_17404 = state_17385__$1;(statearr_17389_17404[(2)] = null);
(statearr_17389_17404[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17386 === (5)))
{var inst_17371 = (state_17385[(8)]);var state_17385__$1 = state_17385;var statearr_17390_17405 = state_17385__$1;(statearr_17390_17405[(2)] = inst_17371);
(statearr_17390_17405[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17386 === (4)))
{var inst_17374 = (state_17385[(7)]);var inst_17374__$1 = (state_17385[(2)]);var inst_17375 = (inst_17374__$1 == null);var state_17385__$1 = (function (){var statearr_17391 = state_17385;(statearr_17391[(7)] = inst_17374__$1);
return statearr_17391;
})();if(cljs.core.truth_(inst_17375))
{var statearr_17392_17406 = state_17385__$1;(statearr_17392_17406[(1)] = (5));
} else
{var statearr_17393_17407 = state_17385__$1;(statearr_17393_17407[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17386 === (3)))
{var inst_17383 = (state_17385[(2)]);var state_17385__$1 = state_17385;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17385__$1,inst_17383);
} else
{if((state_val_17386 === (2)))
{var state_17385__$1 = state_17385;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17385__$1,(4),ch);
} else
{if((state_val_17386 === (1)))
{var inst_17371 = init;var state_17385__$1 = (function (){var statearr_17394 = state_17385;(statearr_17394[(8)] = inst_17371);
return statearr_17394;
})();var statearr_17395_17408 = state_17385__$1;(statearr_17395_17408[(2)] = null);
(statearr_17395_17408[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__12429__auto__))
;return ((function (switch__12364__auto__,c__12429__auto__){
return (function() {
var state_machine__12365__auto__ = null;
var state_machine__12365__auto____0 = (function (){var statearr_17399 = [null,null,null,null,null,null,null,null,null];(statearr_17399[(0)] = state_machine__12365__auto__);
(statearr_17399[(1)] = (1));
return statearr_17399;
});
var state_machine__12365__auto____1 = (function (state_17385){while(true){
var ret_value__12366__auto__ = (function (){try{while(true){
var result__12367__auto__ = switch__12364__auto__.call(null,state_17385);if(cljs.core.keyword_identical_QMARK_.call(null,result__12367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12367__auto__;
}
break;
}
}catch (e17400){if((e17400 instanceof Object))
{var ex__12368__auto__ = e17400;var statearr_17401_17409 = state_17385;(statearr_17401_17409[(5)] = ex__12368__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17385);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17400;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17410 = state_17385;
state_17385 = G__17410;
continue;
}
} else
{return ret_value__12366__auto__;
}
break;
}
});
state_machine__12365__auto__ = function(state_17385){
switch(arguments.length){
case 0:
return state_machine__12365__auto____0.call(this);
case 1:
return state_machine__12365__auto____1.call(this,state_17385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12365__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12365__auto____0;
state_machine__12365__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12365__auto____1;
return state_machine__12365__auto__;
})()
;})(switch__12364__auto__,c__12429__auto__))
})();var state__12431__auto__ = (function (){var statearr_17402 = f__12430__auto__.call(null);(statearr_17402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12429__auto__);
return statearr_17402;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12431__auto__);
});})(c__12429__auto__))
);
return c__12429__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__12429__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12429__auto__){
return (function (){var f__12430__auto__ = (function (){var switch__12364__auto__ = ((function (c__12429__auto__){
return (function (state_17484){var state_val_17485 = (state_17484[(1)]);if((state_val_17485 === (7)))
{var inst_17466 = (state_17484[(2)]);var state_17484__$1 = state_17484;var statearr_17486_17509 = state_17484__$1;(statearr_17486_17509[(2)] = inst_17466);
(statearr_17486_17509[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17485 === (1)))
{var inst_17460 = cljs.core.seq.call(null,coll);var inst_17461 = inst_17460;var state_17484__$1 = (function (){var statearr_17487 = state_17484;(statearr_17487[(7)] = inst_17461);
return statearr_17487;
})();var statearr_17488_17510 = state_17484__$1;(statearr_17488_17510[(2)] = null);
(statearr_17488_17510[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17485 === (4)))
{var inst_17461 = (state_17484[(7)]);var inst_17464 = cljs.core.first.call(null,inst_17461);var state_17484__$1 = state_17484;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17484__$1,(7),ch,inst_17464);
} else
{if((state_val_17485 === (13)))
{var inst_17478 = (state_17484[(2)]);var state_17484__$1 = state_17484;var statearr_17489_17511 = state_17484__$1;(statearr_17489_17511[(2)] = inst_17478);
(statearr_17489_17511[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17485 === (6)))
{var inst_17469 = (state_17484[(2)]);var state_17484__$1 = state_17484;if(cljs.core.truth_(inst_17469))
{var statearr_17490_17512 = state_17484__$1;(statearr_17490_17512[(1)] = (8));
} else
{var statearr_17491_17513 = state_17484__$1;(statearr_17491_17513[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17485 === (3)))
{var inst_17482 = (state_17484[(2)]);var state_17484__$1 = state_17484;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17484__$1,inst_17482);
} else
{if((state_val_17485 === (12)))
{var state_17484__$1 = state_17484;var statearr_17492_17514 = state_17484__$1;(statearr_17492_17514[(2)] = null);
(statearr_17492_17514[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17485 === (2)))
{var inst_17461 = (state_17484[(7)]);var state_17484__$1 = state_17484;if(cljs.core.truth_(inst_17461))
{var statearr_17493_17515 = state_17484__$1;(statearr_17493_17515[(1)] = (4));
} else
{var statearr_17494_17516 = state_17484__$1;(statearr_17494_17516[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17485 === (11)))
{var inst_17475 = cljs.core.async.close_BANG_.call(null,ch);var state_17484__$1 = state_17484;var statearr_17495_17517 = state_17484__$1;(statearr_17495_17517[(2)] = inst_17475);
(statearr_17495_17517[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17485 === (9)))
{var state_17484__$1 = state_17484;if(cljs.core.truth_(close_QMARK_))
{var statearr_17496_17518 = state_17484__$1;(statearr_17496_17518[(1)] = (11));
} else
{var statearr_17497_17519 = state_17484__$1;(statearr_17497_17519[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17485 === (5)))
{var inst_17461 = (state_17484[(7)]);var state_17484__$1 = state_17484;var statearr_17498_17520 = state_17484__$1;(statearr_17498_17520[(2)] = inst_17461);
(statearr_17498_17520[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17485 === (10)))
{var inst_17480 = (state_17484[(2)]);var state_17484__$1 = state_17484;var statearr_17499_17521 = state_17484__$1;(statearr_17499_17521[(2)] = inst_17480);
(statearr_17499_17521[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17485 === (8)))
{var inst_17461 = (state_17484[(7)]);var inst_17471 = cljs.core.next.call(null,inst_17461);var inst_17461__$1 = inst_17471;var state_17484__$1 = (function (){var statearr_17500 = state_17484;(statearr_17500[(7)] = inst_17461__$1);
return statearr_17500;
})();var statearr_17501_17522 = state_17484__$1;(statearr_17501_17522[(2)] = null);
(statearr_17501_17522[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12429__auto__))
;return ((function (switch__12364__auto__,c__12429__auto__){
return (function() {
var state_machine__12365__auto__ = null;
var state_machine__12365__auto____0 = (function (){var statearr_17505 = [null,null,null,null,null,null,null,null];(statearr_17505[(0)] = state_machine__12365__auto__);
(statearr_17505[(1)] = (1));
return statearr_17505;
});
var state_machine__12365__auto____1 = (function (state_17484){while(true){
var ret_value__12366__auto__ = (function (){try{while(true){
var result__12367__auto__ = switch__12364__auto__.call(null,state_17484);if(cljs.core.keyword_identical_QMARK_.call(null,result__12367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12367__auto__;
}
break;
}
}catch (e17506){if((e17506 instanceof Object))
{var ex__12368__auto__ = e17506;var statearr_17507_17523 = state_17484;(statearr_17507_17523[(5)] = ex__12368__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17484);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17506;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17524 = state_17484;
state_17484 = G__17524;
continue;
}
} else
{return ret_value__12366__auto__;
}
break;
}
});
state_machine__12365__auto__ = function(state_17484){
switch(arguments.length){
case 0:
return state_machine__12365__auto____0.call(this);
case 1:
return state_machine__12365__auto____1.call(this,state_17484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12365__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12365__auto____0;
state_machine__12365__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12365__auto____1;
return state_machine__12365__auto__;
})()
;})(switch__12364__auto__,c__12429__auto__))
})();var state__12431__auto__ = (function (){var statearr_17508 = f__12430__auto__.call(null);(statearr_17508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12429__auto__);
return statearr_17508;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12431__auto__);
});})(c__12429__auto__))
);
return c__12429__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj17526 = {};return obj17526;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__9081__auto__ = _;if(and__9081__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__9081__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__9730__auto__ = (((_ == null))?null:_);return (function (){var or__9093__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj17528 = {};return obj17528;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__9081__auto__ = m;if(and__9081__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__9081__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__9730__auto__ = (((m == null))?null:m);return (function (){var or__9093__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__9081__auto__ = m;if(and__9081__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__9081__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__9730__auto__ = (((m == null))?null:m);return (function (){var or__9093__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__9081__auto__ = m;if(and__9081__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__9081__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__9730__auto__ = (((m == null))?null:m);return (function (){var or__9093__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t17750 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17750 = (function (cs,ch,mult,meta17751){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta17751 = meta17751;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17750.cljs$lang$type = true;
cljs.core.async.t17750.cljs$lang$ctorStr = "cljs.core.async/t17750";
cljs.core.async.t17750.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"cljs.core.async/t17750");
});})(cs))
;
cljs.core.async.t17750.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t17750.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t17750.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t17750.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t17750.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17750.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t17750.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17752){var self__ = this;
var _17752__$1 = this;return self__.meta17751;
});})(cs))
;
cljs.core.async.t17750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17752,meta17751__$1){var self__ = this;
var _17752__$1 = this;return (new cljs.core.async.t17750(self__.cs,self__.ch,self__.mult,meta17751__$1));
});})(cs))
;
cljs.core.async.__GT_t17750 = ((function (cs){
return (function __GT_t17750(cs__$1,ch__$1,mult__$1,meta17751){return (new cljs.core.async.t17750(cs__$1,ch__$1,mult__$1,meta17751));
});})(cs))
;
}
return (new cljs.core.async.t17750(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__12429__auto___17971 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12429__auto___17971,cs,m,dchan,dctr,done){
return (function (){var f__12430__auto__ = (function (){var switch__12364__auto__ = ((function (c__12429__auto___17971,cs,m,dchan,dctr,done){
return (function (state_17883){var state_val_17884 = (state_17883[(1)]);if((state_val_17884 === (7)))
{var inst_17879 = (state_17883[(2)]);var state_17883__$1 = state_17883;var statearr_17885_17972 = state_17883__$1;(statearr_17885_17972[(2)] = inst_17879);
(statearr_17885_17972[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (20)))
{var inst_17784 = (state_17883[(7)]);var inst_17794 = cljs.core.first.call(null,inst_17784);var inst_17795 = cljs.core.nth.call(null,inst_17794,(0),null);var inst_17796 = cljs.core.nth.call(null,inst_17794,(1),null);var state_17883__$1 = (function (){var statearr_17886 = state_17883;(statearr_17886[(8)] = inst_17795);
return statearr_17886;
})();if(cljs.core.truth_(inst_17796))
{var statearr_17887_17973 = state_17883__$1;(statearr_17887_17973[(1)] = (22));
} else
{var statearr_17888_17974 = state_17883__$1;(statearr_17888_17974[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (27)))
{var inst_17755 = (state_17883[(9)]);var inst_17824 = (state_17883[(10)]);var inst_17826 = (state_17883[(11)]);var inst_17831 = (state_17883[(12)]);var inst_17831__$1 = cljs.core._nth.call(null,inst_17824,inst_17826);var inst_17832 = cljs.core.async.put_BANG_.call(null,inst_17831__$1,inst_17755,done);var state_17883__$1 = (function (){var statearr_17889 = state_17883;(statearr_17889[(12)] = inst_17831__$1);
return statearr_17889;
})();if(cljs.core.truth_(inst_17832))
{var statearr_17890_17975 = state_17883__$1;(statearr_17890_17975[(1)] = (30));
} else
{var statearr_17891_17976 = state_17883__$1;(statearr_17891_17976[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (1)))
{var state_17883__$1 = state_17883;var statearr_17892_17977 = state_17883__$1;(statearr_17892_17977[(2)] = null);
(statearr_17892_17977[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (24)))
{var inst_17784 = (state_17883[(7)]);var inst_17801 = (state_17883[(2)]);var inst_17802 = cljs.core.next.call(null,inst_17784);var inst_17764 = inst_17802;var inst_17765 = null;var inst_17766 = (0);var inst_17767 = (0);var state_17883__$1 = (function (){var statearr_17893 = state_17883;(statearr_17893[(13)] = inst_17766);
(statearr_17893[(14)] = inst_17767);
(statearr_17893[(15)] = inst_17764);
(statearr_17893[(16)] = inst_17765);
(statearr_17893[(17)] = inst_17801);
return statearr_17893;
})();var statearr_17894_17978 = state_17883__$1;(statearr_17894_17978[(2)] = null);
(statearr_17894_17978[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (39)))
{var state_17883__$1 = state_17883;var statearr_17898_17979 = state_17883__$1;(statearr_17898_17979[(2)] = null);
(statearr_17898_17979[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (4)))
{var inst_17755 = (state_17883[(9)]);var inst_17755__$1 = (state_17883[(2)]);var inst_17756 = (inst_17755__$1 == null);var state_17883__$1 = (function (){var statearr_17899 = state_17883;(statearr_17899[(9)] = inst_17755__$1);
return statearr_17899;
})();if(cljs.core.truth_(inst_17756))
{var statearr_17900_17980 = state_17883__$1;(statearr_17900_17980[(1)] = (5));
} else
{var statearr_17901_17981 = state_17883__$1;(statearr_17901_17981[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (15)))
{var inst_17766 = (state_17883[(13)]);var inst_17767 = (state_17883[(14)]);var inst_17764 = (state_17883[(15)]);var inst_17765 = (state_17883[(16)]);var inst_17780 = (state_17883[(2)]);var inst_17781 = (inst_17767 + (1));var tmp17895 = inst_17766;var tmp17896 = inst_17764;var tmp17897 = inst_17765;var inst_17764__$1 = tmp17896;var inst_17765__$1 = tmp17897;var inst_17766__$1 = tmp17895;var inst_17767__$1 = inst_17781;var state_17883__$1 = (function (){var statearr_17902 = state_17883;(statearr_17902[(13)] = inst_17766__$1);
(statearr_17902[(14)] = inst_17767__$1);
(statearr_17902[(18)] = inst_17780);
(statearr_17902[(15)] = inst_17764__$1);
(statearr_17902[(16)] = inst_17765__$1);
return statearr_17902;
})();var statearr_17903_17982 = state_17883__$1;(statearr_17903_17982[(2)] = null);
(statearr_17903_17982[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (21)))
{var inst_17805 = (state_17883[(2)]);var state_17883__$1 = state_17883;var statearr_17907_17983 = state_17883__$1;(statearr_17907_17983[(2)] = inst_17805);
(statearr_17907_17983[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (31)))
{var inst_17831 = (state_17883[(12)]);var inst_17835 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_17836 = cljs.core.async.untap_STAR_.call(null,m,inst_17831);var state_17883__$1 = (function (){var statearr_17908 = state_17883;(statearr_17908[(19)] = inst_17835);
return statearr_17908;
})();var statearr_17909_17984 = state_17883__$1;(statearr_17909_17984[(2)] = inst_17836);
(statearr_17909_17984[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (32)))
{var inst_17824 = (state_17883[(10)]);var inst_17826 = (state_17883[(11)]);var inst_17823 = (state_17883[(20)]);var inst_17825 = (state_17883[(21)]);var inst_17838 = (state_17883[(2)]);var inst_17839 = (inst_17826 + (1));var tmp17904 = inst_17824;var tmp17905 = inst_17823;var tmp17906 = inst_17825;var inst_17823__$1 = tmp17905;var inst_17824__$1 = tmp17904;var inst_17825__$1 = tmp17906;var inst_17826__$1 = inst_17839;var state_17883__$1 = (function (){var statearr_17910 = state_17883;(statearr_17910[(10)] = inst_17824__$1);
(statearr_17910[(11)] = inst_17826__$1);
(statearr_17910[(20)] = inst_17823__$1);
(statearr_17910[(21)] = inst_17825__$1);
(statearr_17910[(22)] = inst_17838);
return statearr_17910;
})();var statearr_17911_17985 = state_17883__$1;(statearr_17911_17985[(2)] = null);
(statearr_17911_17985[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (40)))
{var inst_17851 = (state_17883[(23)]);var inst_17855 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_17856 = cljs.core.async.untap_STAR_.call(null,m,inst_17851);var state_17883__$1 = (function (){var statearr_17912 = state_17883;(statearr_17912[(24)] = inst_17855);
return statearr_17912;
})();var statearr_17913_17986 = state_17883__$1;(statearr_17913_17986[(2)] = inst_17856);
(statearr_17913_17986[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (33)))
{var inst_17842 = (state_17883[(25)]);var inst_17844 = cljs.core.chunked_seq_QMARK_.call(null,inst_17842);var state_17883__$1 = state_17883;if(inst_17844)
{var statearr_17914_17987 = state_17883__$1;(statearr_17914_17987[(1)] = (36));
} else
{var statearr_17915_17988 = state_17883__$1;(statearr_17915_17988[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (13)))
{var inst_17774 = (state_17883[(26)]);var inst_17777 = cljs.core.async.close_BANG_.call(null,inst_17774);var state_17883__$1 = state_17883;var statearr_17916_17989 = state_17883__$1;(statearr_17916_17989[(2)] = inst_17777);
(statearr_17916_17989[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (22)))
{var inst_17795 = (state_17883[(8)]);var inst_17798 = cljs.core.async.close_BANG_.call(null,inst_17795);var state_17883__$1 = state_17883;var statearr_17917_17990 = state_17883__$1;(statearr_17917_17990[(2)] = inst_17798);
(statearr_17917_17990[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (36)))
{var inst_17842 = (state_17883[(25)]);var inst_17846 = cljs.core.chunk_first.call(null,inst_17842);var inst_17847 = cljs.core.chunk_rest.call(null,inst_17842);var inst_17848 = cljs.core.count.call(null,inst_17846);var inst_17823 = inst_17847;var inst_17824 = inst_17846;var inst_17825 = inst_17848;var inst_17826 = (0);var state_17883__$1 = (function (){var statearr_17918 = state_17883;(statearr_17918[(10)] = inst_17824);
(statearr_17918[(11)] = inst_17826);
(statearr_17918[(20)] = inst_17823);
(statearr_17918[(21)] = inst_17825);
return statearr_17918;
})();var statearr_17919_17991 = state_17883__$1;(statearr_17919_17991[(2)] = null);
(statearr_17919_17991[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (41)))
{var inst_17842 = (state_17883[(25)]);var inst_17858 = (state_17883[(2)]);var inst_17859 = cljs.core.next.call(null,inst_17842);var inst_17823 = inst_17859;var inst_17824 = null;var inst_17825 = (0);var inst_17826 = (0);var state_17883__$1 = (function (){var statearr_17920 = state_17883;(statearr_17920[(27)] = inst_17858);
(statearr_17920[(10)] = inst_17824);
(statearr_17920[(11)] = inst_17826);
(statearr_17920[(20)] = inst_17823);
(statearr_17920[(21)] = inst_17825);
return statearr_17920;
})();var statearr_17921_17992 = state_17883__$1;(statearr_17921_17992[(2)] = null);
(statearr_17921_17992[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (43)))
{var state_17883__$1 = state_17883;var statearr_17922_17993 = state_17883__$1;(statearr_17922_17993[(2)] = null);
(statearr_17922_17993[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (29)))
{var inst_17867 = (state_17883[(2)]);var state_17883__$1 = state_17883;var statearr_17923_17994 = state_17883__$1;(statearr_17923_17994[(2)] = inst_17867);
(statearr_17923_17994[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (44)))
{var inst_17876 = (state_17883[(2)]);var state_17883__$1 = (function (){var statearr_17924 = state_17883;(statearr_17924[(28)] = inst_17876);
return statearr_17924;
})();var statearr_17925_17995 = state_17883__$1;(statearr_17925_17995[(2)] = null);
(statearr_17925_17995[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (6)))
{var inst_17815 = (state_17883[(29)]);var inst_17814 = cljs.core.deref.call(null,cs);var inst_17815__$1 = cljs.core.keys.call(null,inst_17814);var inst_17816 = cljs.core.count.call(null,inst_17815__$1);var inst_17817 = cljs.core.reset_BANG_.call(null,dctr,inst_17816);var inst_17822 = cljs.core.seq.call(null,inst_17815__$1);var inst_17823 = inst_17822;var inst_17824 = null;var inst_17825 = (0);var inst_17826 = (0);var state_17883__$1 = (function (){var statearr_17926 = state_17883;(statearr_17926[(10)] = inst_17824);
(statearr_17926[(11)] = inst_17826);
(statearr_17926[(20)] = inst_17823);
(statearr_17926[(30)] = inst_17817);
(statearr_17926[(21)] = inst_17825);
(statearr_17926[(29)] = inst_17815__$1);
return statearr_17926;
})();var statearr_17927_17996 = state_17883__$1;(statearr_17927_17996[(2)] = null);
(statearr_17927_17996[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (28)))
{var inst_17842 = (state_17883[(25)]);var inst_17823 = (state_17883[(20)]);var inst_17842__$1 = cljs.core.seq.call(null,inst_17823);var state_17883__$1 = (function (){var statearr_17928 = state_17883;(statearr_17928[(25)] = inst_17842__$1);
return statearr_17928;
})();if(inst_17842__$1)
{var statearr_17929_17997 = state_17883__$1;(statearr_17929_17997[(1)] = (33));
} else
{var statearr_17930_17998 = state_17883__$1;(statearr_17930_17998[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (25)))
{var inst_17826 = (state_17883[(11)]);var inst_17825 = (state_17883[(21)]);var inst_17828 = (inst_17826 < inst_17825);var inst_17829 = inst_17828;var state_17883__$1 = state_17883;if(cljs.core.truth_(inst_17829))
{var statearr_17931_17999 = state_17883__$1;(statearr_17931_17999[(1)] = (27));
} else
{var statearr_17932_18000 = state_17883__$1;(statearr_17932_18000[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (34)))
{var state_17883__$1 = state_17883;var statearr_17933_18001 = state_17883__$1;(statearr_17933_18001[(2)] = null);
(statearr_17933_18001[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (17)))
{var state_17883__$1 = state_17883;var statearr_17934_18002 = state_17883__$1;(statearr_17934_18002[(2)] = null);
(statearr_17934_18002[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (3)))
{var inst_17881 = (state_17883[(2)]);var state_17883__$1 = state_17883;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17883__$1,inst_17881);
} else
{if((state_val_17884 === (12)))
{var inst_17810 = (state_17883[(2)]);var state_17883__$1 = state_17883;var statearr_17935_18003 = state_17883__$1;(statearr_17935_18003[(2)] = inst_17810);
(statearr_17935_18003[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (2)))
{var state_17883__$1 = state_17883;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17883__$1,(4),ch);
} else
{if((state_val_17884 === (23)))
{var state_17883__$1 = state_17883;var statearr_17936_18004 = state_17883__$1;(statearr_17936_18004[(2)] = null);
(statearr_17936_18004[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (35)))
{var inst_17865 = (state_17883[(2)]);var state_17883__$1 = state_17883;var statearr_17937_18005 = state_17883__$1;(statearr_17937_18005[(2)] = inst_17865);
(statearr_17937_18005[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (19)))
{var inst_17784 = (state_17883[(7)]);var inst_17788 = cljs.core.chunk_first.call(null,inst_17784);var inst_17789 = cljs.core.chunk_rest.call(null,inst_17784);var inst_17790 = cljs.core.count.call(null,inst_17788);var inst_17764 = inst_17789;var inst_17765 = inst_17788;var inst_17766 = inst_17790;var inst_17767 = (0);var state_17883__$1 = (function (){var statearr_17938 = state_17883;(statearr_17938[(13)] = inst_17766);
(statearr_17938[(14)] = inst_17767);
(statearr_17938[(15)] = inst_17764);
(statearr_17938[(16)] = inst_17765);
return statearr_17938;
})();var statearr_17939_18006 = state_17883__$1;(statearr_17939_18006[(2)] = null);
(statearr_17939_18006[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (11)))
{var inst_17764 = (state_17883[(15)]);var inst_17784 = (state_17883[(7)]);var inst_17784__$1 = cljs.core.seq.call(null,inst_17764);var state_17883__$1 = (function (){var statearr_17940 = state_17883;(statearr_17940[(7)] = inst_17784__$1);
return statearr_17940;
})();if(inst_17784__$1)
{var statearr_17941_18007 = state_17883__$1;(statearr_17941_18007[(1)] = (16));
} else
{var statearr_17942_18008 = state_17883__$1;(statearr_17942_18008[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (9)))
{var inst_17812 = (state_17883[(2)]);var state_17883__$1 = state_17883;var statearr_17943_18009 = state_17883__$1;(statearr_17943_18009[(2)] = inst_17812);
(statearr_17943_18009[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (5)))
{var inst_17762 = cljs.core.deref.call(null,cs);var inst_17763 = cljs.core.seq.call(null,inst_17762);var inst_17764 = inst_17763;var inst_17765 = null;var inst_17766 = (0);var inst_17767 = (0);var state_17883__$1 = (function (){var statearr_17944 = state_17883;(statearr_17944[(13)] = inst_17766);
(statearr_17944[(14)] = inst_17767);
(statearr_17944[(15)] = inst_17764);
(statearr_17944[(16)] = inst_17765);
return statearr_17944;
})();var statearr_17945_18010 = state_17883__$1;(statearr_17945_18010[(2)] = null);
(statearr_17945_18010[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (14)))
{var state_17883__$1 = state_17883;var statearr_17946_18011 = state_17883__$1;(statearr_17946_18011[(2)] = null);
(statearr_17946_18011[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (45)))
{var inst_17873 = (state_17883[(2)]);var state_17883__$1 = state_17883;var statearr_17947_18012 = state_17883__$1;(statearr_17947_18012[(2)] = inst_17873);
(statearr_17947_18012[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (26)))
{var inst_17815 = (state_17883[(29)]);var inst_17869 = (state_17883[(2)]);var inst_17870 = cljs.core.seq.call(null,inst_17815);var state_17883__$1 = (function (){var statearr_17948 = state_17883;(statearr_17948[(31)] = inst_17869);
return statearr_17948;
})();if(inst_17870)
{var statearr_17949_18013 = state_17883__$1;(statearr_17949_18013[(1)] = (42));
} else
{var statearr_17950_18014 = state_17883__$1;(statearr_17950_18014[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (16)))
{var inst_17784 = (state_17883[(7)]);var inst_17786 = cljs.core.chunked_seq_QMARK_.call(null,inst_17784);var state_17883__$1 = state_17883;if(inst_17786)
{var statearr_17951_18015 = state_17883__$1;(statearr_17951_18015[(1)] = (19));
} else
{var statearr_17952_18016 = state_17883__$1;(statearr_17952_18016[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (38)))
{var inst_17862 = (state_17883[(2)]);var state_17883__$1 = state_17883;var statearr_17953_18017 = state_17883__$1;(statearr_17953_18017[(2)] = inst_17862);
(statearr_17953_18017[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (30)))
{var state_17883__$1 = state_17883;var statearr_17954_18018 = state_17883__$1;(statearr_17954_18018[(2)] = null);
(statearr_17954_18018[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (10)))
{var inst_17767 = (state_17883[(14)]);var inst_17765 = (state_17883[(16)]);var inst_17773 = cljs.core._nth.call(null,inst_17765,inst_17767);var inst_17774 = cljs.core.nth.call(null,inst_17773,(0),null);var inst_17775 = cljs.core.nth.call(null,inst_17773,(1),null);var state_17883__$1 = (function (){var statearr_17955 = state_17883;(statearr_17955[(26)] = inst_17774);
return statearr_17955;
})();if(cljs.core.truth_(inst_17775))
{var statearr_17956_18019 = state_17883__$1;(statearr_17956_18019[(1)] = (13));
} else
{var statearr_17957_18020 = state_17883__$1;(statearr_17957_18020[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (18)))
{var inst_17808 = (state_17883[(2)]);var state_17883__$1 = state_17883;var statearr_17958_18021 = state_17883__$1;(statearr_17958_18021[(2)] = inst_17808);
(statearr_17958_18021[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (42)))
{var state_17883__$1 = state_17883;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17883__$1,(45),dchan);
} else
{if((state_val_17884 === (37)))
{var inst_17755 = (state_17883[(9)]);var inst_17851 = (state_17883[(23)]);var inst_17842 = (state_17883[(25)]);var inst_17851__$1 = cljs.core.first.call(null,inst_17842);var inst_17852 = cljs.core.async.put_BANG_.call(null,inst_17851__$1,inst_17755,done);var state_17883__$1 = (function (){var statearr_17959 = state_17883;(statearr_17959[(23)] = inst_17851__$1);
return statearr_17959;
})();if(cljs.core.truth_(inst_17852))
{var statearr_17960_18022 = state_17883__$1;(statearr_17960_18022[(1)] = (39));
} else
{var statearr_17961_18023 = state_17883__$1;(statearr_17961_18023[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17884 === (8)))
{var inst_17766 = (state_17883[(13)]);var inst_17767 = (state_17883[(14)]);var inst_17769 = (inst_17767 < inst_17766);var inst_17770 = inst_17769;var state_17883__$1 = state_17883;if(cljs.core.truth_(inst_17770))
{var statearr_17962_18024 = state_17883__$1;(statearr_17962_18024[(1)] = (10));
} else
{var statearr_17963_18025 = state_17883__$1;(statearr_17963_18025[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12429__auto___17971,cs,m,dchan,dctr,done))
;return ((function (switch__12364__auto__,c__12429__auto___17971,cs,m,dchan,dctr,done){
return (function() {
var state_machine__12365__auto__ = null;
var state_machine__12365__auto____0 = (function (){var statearr_17967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17967[(0)] = state_machine__12365__auto__);
(statearr_17967[(1)] = (1));
return statearr_17967;
});
var state_machine__12365__auto____1 = (function (state_17883){while(true){
var ret_value__12366__auto__ = (function (){try{while(true){
var result__12367__auto__ = switch__12364__auto__.call(null,state_17883);if(cljs.core.keyword_identical_QMARK_.call(null,result__12367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12367__auto__;
}
break;
}
}catch (e17968){if((e17968 instanceof Object))
{var ex__12368__auto__ = e17968;var statearr_17969_18026 = state_17883;(statearr_17969_18026[(5)] = ex__12368__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17883);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17968;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18027 = state_17883;
state_17883 = G__18027;
continue;
}
} else
{return ret_value__12366__auto__;
}
break;
}
});
state_machine__12365__auto__ = function(state_17883){
switch(arguments.length){
case 0:
return state_machine__12365__auto____0.call(this);
case 1:
return state_machine__12365__auto____1.call(this,state_17883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12365__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12365__auto____0;
state_machine__12365__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12365__auto____1;
return state_machine__12365__auto__;
})()
;})(switch__12364__auto__,c__12429__auto___17971,cs,m,dchan,dctr,done))
})();var state__12431__auto__ = (function (){var statearr_17970 = f__12430__auto__.call(null);(statearr_17970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12429__auto___17971);
return statearr_17970;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12431__auto__);
});})(c__12429__auto___17971,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj18029 = {};return obj18029;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__9081__auto__ = m;if(and__9081__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__9081__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__9730__auto__ = (((m == null))?null:m);return (function (){var or__9093__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__9081__auto__ = m;if(and__9081__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__9081__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__9730__auto__ = (((m == null))?null:m);return (function (){var or__9093__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__9081__auto__ = m;if(and__9081__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__9081__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__9730__auto__ = (((m == null))?null:m);return (function (){var or__9093__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__9081__auto__ = m;if(and__9081__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__9081__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__9730__auto__ = (((m == null))?null:m);return (function (){var or__9093__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__9081__auto__ = m;if(and__9081__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__9081__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__9730__auto__ = (((m == null))?null:m);return (function (){var or__9093__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t18149 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18149 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18150){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18150 = meta18150;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18149.cljs$lang$type = true;
cljs.core.async.t18149.cljs$lang$ctorStr = "cljs.core.async/t18149";
cljs.core.async.t18149.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"cljs.core.async/t18149");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18149.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t18149.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18149.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18149.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18149.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18149.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18149.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18149.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18149.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18151){var self__ = this;
var _18151__$1 = this;return self__.meta18150;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18151,meta18150__$1){var self__ = this;
var _18151__$1 = this;return (new cljs.core.async.t18149(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18150__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t18149 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t18149(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18150){return (new cljs.core.async.t18149(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18150));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t18149(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__12429__auto___18268 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12429__auto___18268,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__12430__auto__ = (function (){var switch__12364__auto__ = ((function (c__12429__auto___18268,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18221){var state_val_18222 = (state_18221[(1)]);if((state_val_18222 === (7)))
{var inst_18165 = (state_18221[(7)]);var inst_18170 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18165);var state_18221__$1 = state_18221;var statearr_18223_18269 = state_18221__$1;(statearr_18223_18269[(2)] = inst_18170);
(statearr_18223_18269[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18222 === (20)))
{var inst_18180 = (state_18221[(8)]);var state_18221__$1 = state_18221;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18221__$1,(23),out,inst_18180);
} else
{if((state_val_18222 === (1)))
{var inst_18155 = (state_18221[(9)]);var inst_18155__$1 = calc_state.call(null);var inst_18156 = cljs.core.seq_QMARK_.call(null,inst_18155__$1);var state_18221__$1 = (function (){var statearr_18224 = state_18221;(statearr_18224[(9)] = inst_18155__$1);
return statearr_18224;
})();if(inst_18156)
{var statearr_18225_18270 = state_18221__$1;(statearr_18225_18270[(1)] = (2));
} else
{var statearr_18226_18271 = state_18221__$1;(statearr_18226_18271[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18222 === (24)))
{var inst_18173 = (state_18221[(10)]);var inst_18165 = inst_18173;var state_18221__$1 = (function (){var statearr_18227 = state_18221;(statearr_18227[(7)] = inst_18165);
return statearr_18227;
})();var statearr_18228_18272 = state_18221__$1;(statearr_18228_18272[(2)] = null);
(statearr_18228_18272[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18222 === (4)))
{var inst_18155 = (state_18221[(9)]);var inst_18161 = (state_18221[(2)]);var inst_18162 = cljs.core.get.call(null,inst_18161,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_18163 = cljs.core.get.call(null,inst_18161,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_18164 = cljs.core.get.call(null,inst_18161,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_18165 = inst_18155;var state_18221__$1 = (function (){var statearr_18229 = state_18221;(statearr_18229[(7)] = inst_18165);
(statearr_18229[(11)] = inst_18164);
(statearr_18229[(12)] = inst_18162);
(statearr_18229[(13)] = inst_18163);
return statearr_18229;
})();var statearr_18230_18273 = state_18221__$1;(statearr_18230_18273[(2)] = null);
(statearr_18230_18273[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18222 === (15)))
{var state_18221__$1 = state_18221;var statearr_18231_18274 = state_18221__$1;(statearr_18231_18274[(2)] = null);
(statearr_18231_18274[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18222 === (21)))
{var inst_18173 = (state_18221[(10)]);var inst_18165 = inst_18173;var state_18221__$1 = (function (){var statearr_18232 = state_18221;(statearr_18232[(7)] = inst_18165);
return statearr_18232;
})();var statearr_18233_18275 = state_18221__$1;(statearr_18233_18275[(2)] = null);
(statearr_18233_18275[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18222 === (13)))
{var inst_18217 = (state_18221[(2)]);var state_18221__$1 = state_18221;var statearr_18234_18276 = state_18221__$1;(statearr_18234_18276[(2)] = inst_18217);
(statearr_18234_18276[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18222 === (22)))
{var inst_18215 = (state_18221[(2)]);var state_18221__$1 = state_18221;var statearr_18235_18277 = state_18221__$1;(statearr_18235_18277[(2)] = inst_18215);
(statearr_18235_18277[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18222 === (6)))
{var inst_18219 = (state_18221[(2)]);var state_18221__$1 = state_18221;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18221__$1,inst_18219);
} else
{if((state_val_18222 === (25)))
{var state_18221__$1 = state_18221;var statearr_18236_18278 = state_18221__$1;(statearr_18236_18278[(2)] = null);
(statearr_18236_18278[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18222 === (17)))
{var inst_18195 = (state_18221[(14)]);var state_18221__$1 = state_18221;var statearr_18237_18279 = state_18221__$1;(statearr_18237_18279[(2)] = inst_18195);
(statearr_18237_18279[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18222 === (3)))
{var inst_18155 = (state_18221[(9)]);var state_18221__$1 = state_18221;var statearr_18238_18280 = state_18221__$1;(statearr_18238_18280[(2)] = inst_18155);
(statearr_18238_18280[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18222 === (12)))
{var inst_18176 = (state_18221[(15)]);var inst_18195 = (state_18221[(14)]);var inst_18181 = (state_18221[(16)]);var inst_18195__$1 = inst_18176.call(null,inst_18181);var state_18221__$1 = (function (){var statearr_18239 = state_18221;(statearr_18239[(14)] = inst_18195__$1);
return statearr_18239;
})();if(cljs.core.truth_(inst_18195__$1))
{var statearr_18240_18281 = state_18221__$1;(statearr_18240_18281[(1)] = (17));
} else
{var statearr_18241_18282 = state_18221__$1;(statearr_18241_18282[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18222 === (2)))
{var inst_18155 = (state_18221[(9)]);var inst_18158 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18155);var state_18221__$1 = state_18221;var statearr_18242_18283 = state_18221__$1;(statearr_18242_18283[(2)] = inst_18158);
(statearr_18242_18283[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18222 === (23)))
{var inst_18206 = (state_18221[(2)]);var state_18221__$1 = state_18221;if(cljs.core.truth_(inst_18206))
{var statearr_18243_18284 = state_18221__$1;(statearr_18243_18284[(1)] = (24));
} else
{var statearr_18244_18285 = state_18221__$1;(statearr_18244_18285[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18222 === (19)))
{var inst_18203 = (state_18221[(2)]);var state_18221__$1 = state_18221;if(cljs.core.truth_(inst_18203))
{var statearr_18245_18286 = state_18221__$1;(statearr_18245_18286[(1)] = (20));
} else
{var statearr_18246_18287 = state_18221__$1;(statearr_18246_18287[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18222 === (11)))
{var inst_18180 = (state_18221[(8)]);var inst_18186 = (inst_18180 == null);var state_18221__$1 = state_18221;if(cljs.core.truth_(inst_18186))
{var statearr_18247_18288 = state_18221__$1;(statearr_18247_18288[(1)] = (14));
} else
{var statearr_18248_18289 = state_18221__$1;(statearr_18248_18289[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18222 === (9)))
{var inst_18173 = (state_18221[(10)]);var inst_18173__$1 = (state_18221[(2)]);var inst_18174 = cljs.core.get.call(null,inst_18173__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_18175 = cljs.core.get.call(null,inst_18173__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_18176 = cljs.core.get.call(null,inst_18173__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_18221__$1 = (function (){var statearr_18249 = state_18221;(statearr_18249[(10)] = inst_18173__$1);
(statearr_18249[(17)] = inst_18175);
(statearr_18249[(15)] = inst_18176);
return statearr_18249;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18221__$1,(10),inst_18174);
} else
{if((state_val_18222 === (5)))
{var inst_18165 = (state_18221[(7)]);var inst_18168 = cljs.core.seq_QMARK_.call(null,inst_18165);var state_18221__$1 = state_18221;if(inst_18168)
{var statearr_18250_18290 = state_18221__$1;(statearr_18250_18290[(1)] = (7));
} else
{var statearr_18251_18291 = state_18221__$1;(statearr_18251_18291[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18222 === (14)))
{var inst_18181 = (state_18221[(16)]);var inst_18188 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18181);var state_18221__$1 = state_18221;var statearr_18252_18292 = state_18221__$1;(statearr_18252_18292[(2)] = inst_18188);
(statearr_18252_18292[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18222 === (26)))
{var inst_18211 = (state_18221[(2)]);var state_18221__$1 = state_18221;var statearr_18253_18293 = state_18221__$1;(statearr_18253_18293[(2)] = inst_18211);
(statearr_18253_18293[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18222 === (16)))
{var inst_18191 = (state_18221[(2)]);var inst_18192 = calc_state.call(null);var inst_18165 = inst_18192;var state_18221__$1 = (function (){var statearr_18254 = state_18221;(statearr_18254[(7)] = inst_18165);
(statearr_18254[(18)] = inst_18191);
return statearr_18254;
})();var statearr_18255_18294 = state_18221__$1;(statearr_18255_18294[(2)] = null);
(statearr_18255_18294[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18222 === (10)))
{var inst_18180 = (state_18221[(8)]);var inst_18181 = (state_18221[(16)]);var inst_18179 = (state_18221[(2)]);var inst_18180__$1 = cljs.core.nth.call(null,inst_18179,(0),null);var inst_18181__$1 = cljs.core.nth.call(null,inst_18179,(1),null);var inst_18182 = (inst_18180__$1 == null);var inst_18183 = cljs.core._EQ_.call(null,inst_18181__$1,change);var inst_18184 = (inst_18182) || (inst_18183);var state_18221__$1 = (function (){var statearr_18256 = state_18221;(statearr_18256[(8)] = inst_18180__$1);
(statearr_18256[(16)] = inst_18181__$1);
return statearr_18256;
})();if(cljs.core.truth_(inst_18184))
{var statearr_18257_18295 = state_18221__$1;(statearr_18257_18295[(1)] = (11));
} else
{var statearr_18258_18296 = state_18221__$1;(statearr_18258_18296[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18222 === (18)))
{var inst_18175 = (state_18221[(17)]);var inst_18176 = (state_18221[(15)]);var inst_18181 = (state_18221[(16)]);var inst_18198 = cljs.core.empty_QMARK_.call(null,inst_18176);var inst_18199 = inst_18175.call(null,inst_18181);var inst_18200 = cljs.core.not.call(null,inst_18199);var inst_18201 = (inst_18198) && (inst_18200);var state_18221__$1 = state_18221;var statearr_18259_18297 = state_18221__$1;(statearr_18259_18297[(2)] = inst_18201);
(statearr_18259_18297[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18222 === (8)))
{var inst_18165 = (state_18221[(7)]);var state_18221__$1 = state_18221;var statearr_18260_18298 = state_18221__$1;(statearr_18260_18298[(2)] = inst_18165);
(statearr_18260_18298[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12429__auto___18268,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__12364__auto__,c__12429__auto___18268,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__12365__auto__ = null;
var state_machine__12365__auto____0 = (function (){var statearr_18264 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18264[(0)] = state_machine__12365__auto__);
(statearr_18264[(1)] = (1));
return statearr_18264;
});
var state_machine__12365__auto____1 = (function (state_18221){while(true){
var ret_value__12366__auto__ = (function (){try{while(true){
var result__12367__auto__ = switch__12364__auto__.call(null,state_18221);if(cljs.core.keyword_identical_QMARK_.call(null,result__12367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12367__auto__;
}
break;
}
}catch (e18265){if((e18265 instanceof Object))
{var ex__12368__auto__ = e18265;var statearr_18266_18299 = state_18221;(statearr_18266_18299[(5)] = ex__12368__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18221);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18265;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18300 = state_18221;
state_18221 = G__18300;
continue;
}
} else
{return ret_value__12366__auto__;
}
break;
}
});
state_machine__12365__auto__ = function(state_18221){
switch(arguments.length){
case 0:
return state_machine__12365__auto____0.call(this);
case 1:
return state_machine__12365__auto____1.call(this,state_18221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12365__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12365__auto____0;
state_machine__12365__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12365__auto____1;
return state_machine__12365__auto__;
})()
;})(switch__12364__auto__,c__12429__auto___18268,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__12431__auto__ = (function (){var statearr_18267 = f__12430__auto__.call(null);(statearr_18267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12429__auto___18268);
return statearr_18267;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12431__auto__);
});})(c__12429__auto___18268,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj18302 = {};return obj18302;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__9081__auto__ = p;if(and__9081__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__9081__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__9730__auto__ = (((p == null))?null:p);return (function (){var or__9093__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__9081__auto__ = p;if(and__9081__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__9081__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__9730__auto__ = (((p == null))?null:p);return (function (){var or__9093__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__9081__auto__ = p;if(and__9081__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__9081__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__9730__auto__ = (((p == null))?null:p);return (function (){var or__9093__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__9081__auto__ = p;if(and__9081__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__9081__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__9730__auto__ = (((p == null))?null:p);return (function (){var or__9093__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__9093__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__9093__auto__,mults){
return (function (p1__18303_SHARP_){if(cljs.core.truth_(p1__18303_SHARP_.call(null,topic)))
{return p1__18303_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__18303_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__9093__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t18418 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18418 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta18419){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta18419 = meta18419;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18418.cljs$lang$type = true;
cljs.core.async.t18418.cljs$lang$ctorStr = "cljs.core.async/t18418";
cljs.core.async.t18418.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"cljs.core.async/t18418");
});})(mults,ensure_mult))
;
cljs.core.async.t18418.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t18418.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t18418.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t18418.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t18418.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t18418.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18418.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t18418.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18420){var self__ = this;
var _18420__$1 = this;return self__.meta18419;
});})(mults,ensure_mult))
;
cljs.core.async.t18418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18420,meta18419__$1){var self__ = this;
var _18420__$1 = this;return (new cljs.core.async.t18418(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta18419__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t18418 = ((function (mults,ensure_mult){
return (function __GT_t18418(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18419){return (new cljs.core.async.t18418(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18419));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t18418(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__12429__auto___18532 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12429__auto___18532,mults,ensure_mult,p){
return (function (){var f__12430__auto__ = (function (){var switch__12364__auto__ = ((function (c__12429__auto___18532,mults,ensure_mult,p){
return (function (state_18488){var state_val_18489 = (state_18488[(1)]);if((state_val_18489 === (7)))
{var inst_18484 = (state_18488[(2)]);var state_18488__$1 = state_18488;var statearr_18490_18533 = state_18488__$1;(statearr_18490_18533[(2)] = inst_18484);
(statearr_18490_18533[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18489 === (20)))
{var state_18488__$1 = state_18488;var statearr_18491_18534 = state_18488__$1;(statearr_18491_18534[(2)] = null);
(statearr_18491_18534[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18489 === (1)))
{var state_18488__$1 = state_18488;var statearr_18492_18535 = state_18488__$1;(statearr_18492_18535[(2)] = null);
(statearr_18492_18535[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18489 === (4)))
{var inst_18423 = (state_18488[(7)]);var inst_18423__$1 = (state_18488[(2)]);var inst_18424 = (inst_18423__$1 == null);var state_18488__$1 = (function (){var statearr_18493 = state_18488;(statearr_18493[(7)] = inst_18423__$1);
return statearr_18493;
})();if(cljs.core.truth_(inst_18424))
{var statearr_18494_18536 = state_18488__$1;(statearr_18494_18536[(1)] = (5));
} else
{var statearr_18495_18537 = state_18488__$1;(statearr_18495_18537[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18489 === (15)))
{var inst_18465 = (state_18488[(2)]);var state_18488__$1 = state_18488;var statearr_18496_18538 = state_18488__$1;(statearr_18496_18538[(2)] = inst_18465);
(statearr_18496_18538[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18489 === (21)))
{var inst_18471 = (state_18488[(8)]);var inst_18479 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18471);var state_18488__$1 = state_18488;var statearr_18497_18539 = state_18488__$1;(statearr_18497_18539[(2)] = inst_18479);
(statearr_18497_18539[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18489 === (13)))
{var inst_18447 = (state_18488[(9)]);var inst_18449 = cljs.core.chunked_seq_QMARK_.call(null,inst_18447);var state_18488__$1 = state_18488;if(inst_18449)
{var statearr_18498_18540 = state_18488__$1;(statearr_18498_18540[(1)] = (16));
} else
{var statearr_18499_18541 = state_18488__$1;(statearr_18499_18541[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18489 === (22)))
{var inst_18481 = (state_18488[(2)]);var state_18488__$1 = (function (){var statearr_18500 = state_18488;(statearr_18500[(10)] = inst_18481);
return statearr_18500;
})();var statearr_18501_18542 = state_18488__$1;(statearr_18501_18542[(2)] = null);
(statearr_18501_18542[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18489 === (6)))
{var inst_18471 = (state_18488[(8)]);var inst_18423 = (state_18488[(7)]);var inst_18471__$1 = topic_fn.call(null,inst_18423);var inst_18472 = cljs.core.deref.call(null,mults);var inst_18473 = cljs.core.get.call(null,inst_18472,inst_18471__$1);var inst_18474 = cljs.core.async.muxch_STAR_.call(null,inst_18473);var state_18488__$1 = (function (){var statearr_18502 = state_18488;(statearr_18502[(8)] = inst_18471__$1);
return statearr_18502;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18488__$1,(19),inst_18474,inst_18423);
} else
{if((state_val_18489 === (17)))
{var inst_18447 = (state_18488[(9)]);var inst_18456 = cljs.core.first.call(null,inst_18447);var inst_18457 = cljs.core.async.muxch_STAR_.call(null,inst_18456);var inst_18458 = cljs.core.async.close_BANG_.call(null,inst_18457);var inst_18459 = cljs.core.next.call(null,inst_18447);var inst_18433 = inst_18459;var inst_18434 = null;var inst_18435 = (0);var inst_18436 = (0);var state_18488__$1 = (function (){var statearr_18503 = state_18488;(statearr_18503[(11)] = inst_18434);
(statearr_18503[(12)] = inst_18436);
(statearr_18503[(13)] = inst_18433);
(statearr_18503[(14)] = inst_18458);
(statearr_18503[(15)] = inst_18435);
return statearr_18503;
})();var statearr_18504_18543 = state_18488__$1;(statearr_18504_18543[(2)] = null);
(statearr_18504_18543[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18489 === (3)))
{var inst_18486 = (state_18488[(2)]);var state_18488__$1 = state_18488;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18488__$1,inst_18486);
} else
{if((state_val_18489 === (12)))
{var inst_18467 = (state_18488[(2)]);var state_18488__$1 = state_18488;var statearr_18505_18544 = state_18488__$1;(statearr_18505_18544[(2)] = inst_18467);
(statearr_18505_18544[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18489 === (2)))
{var state_18488__$1 = state_18488;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18488__$1,(4),ch);
} else
{if((state_val_18489 === (19)))
{var inst_18476 = (state_18488[(2)]);var state_18488__$1 = state_18488;if(cljs.core.truth_(inst_18476))
{var statearr_18506_18545 = state_18488__$1;(statearr_18506_18545[(1)] = (20));
} else
{var statearr_18507_18546 = state_18488__$1;(statearr_18507_18546[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18489 === (11)))
{var inst_18447 = (state_18488[(9)]);var inst_18433 = (state_18488[(13)]);var inst_18447__$1 = cljs.core.seq.call(null,inst_18433);var state_18488__$1 = (function (){var statearr_18508 = state_18488;(statearr_18508[(9)] = inst_18447__$1);
return statearr_18508;
})();if(inst_18447__$1)
{var statearr_18509_18547 = state_18488__$1;(statearr_18509_18547[(1)] = (13));
} else
{var statearr_18510_18548 = state_18488__$1;(statearr_18510_18548[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18489 === (9)))
{var inst_18469 = (state_18488[(2)]);var state_18488__$1 = state_18488;var statearr_18511_18549 = state_18488__$1;(statearr_18511_18549[(2)] = inst_18469);
(statearr_18511_18549[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18489 === (5)))
{var inst_18430 = cljs.core.deref.call(null,mults);var inst_18431 = cljs.core.vals.call(null,inst_18430);var inst_18432 = cljs.core.seq.call(null,inst_18431);var inst_18433 = inst_18432;var inst_18434 = null;var inst_18435 = (0);var inst_18436 = (0);var state_18488__$1 = (function (){var statearr_18512 = state_18488;(statearr_18512[(11)] = inst_18434);
(statearr_18512[(12)] = inst_18436);
(statearr_18512[(13)] = inst_18433);
(statearr_18512[(15)] = inst_18435);
return statearr_18512;
})();var statearr_18513_18550 = state_18488__$1;(statearr_18513_18550[(2)] = null);
(statearr_18513_18550[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18489 === (14)))
{var state_18488__$1 = state_18488;var statearr_18517_18551 = state_18488__$1;(statearr_18517_18551[(2)] = null);
(statearr_18517_18551[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18489 === (16)))
{var inst_18447 = (state_18488[(9)]);var inst_18451 = cljs.core.chunk_first.call(null,inst_18447);var inst_18452 = cljs.core.chunk_rest.call(null,inst_18447);var inst_18453 = cljs.core.count.call(null,inst_18451);var inst_18433 = inst_18452;var inst_18434 = inst_18451;var inst_18435 = inst_18453;var inst_18436 = (0);var state_18488__$1 = (function (){var statearr_18518 = state_18488;(statearr_18518[(11)] = inst_18434);
(statearr_18518[(12)] = inst_18436);
(statearr_18518[(13)] = inst_18433);
(statearr_18518[(15)] = inst_18435);
return statearr_18518;
})();var statearr_18519_18552 = state_18488__$1;(statearr_18519_18552[(2)] = null);
(statearr_18519_18552[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18489 === (10)))
{var inst_18434 = (state_18488[(11)]);var inst_18436 = (state_18488[(12)]);var inst_18433 = (state_18488[(13)]);var inst_18435 = (state_18488[(15)]);var inst_18441 = cljs.core._nth.call(null,inst_18434,inst_18436);var inst_18442 = cljs.core.async.muxch_STAR_.call(null,inst_18441);var inst_18443 = cljs.core.async.close_BANG_.call(null,inst_18442);var inst_18444 = (inst_18436 + (1));var tmp18514 = inst_18434;var tmp18515 = inst_18433;var tmp18516 = inst_18435;var inst_18433__$1 = tmp18515;var inst_18434__$1 = tmp18514;var inst_18435__$1 = tmp18516;var inst_18436__$1 = inst_18444;var state_18488__$1 = (function (){var statearr_18520 = state_18488;(statearr_18520[(11)] = inst_18434__$1);
(statearr_18520[(12)] = inst_18436__$1);
(statearr_18520[(16)] = inst_18443);
(statearr_18520[(13)] = inst_18433__$1);
(statearr_18520[(15)] = inst_18435__$1);
return statearr_18520;
})();var statearr_18521_18553 = state_18488__$1;(statearr_18521_18553[(2)] = null);
(statearr_18521_18553[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18489 === (18)))
{var inst_18462 = (state_18488[(2)]);var state_18488__$1 = state_18488;var statearr_18522_18554 = state_18488__$1;(statearr_18522_18554[(2)] = inst_18462);
(statearr_18522_18554[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18489 === (8)))
{var inst_18436 = (state_18488[(12)]);var inst_18435 = (state_18488[(15)]);var inst_18438 = (inst_18436 < inst_18435);var inst_18439 = inst_18438;var state_18488__$1 = state_18488;if(cljs.core.truth_(inst_18439))
{var statearr_18523_18555 = state_18488__$1;(statearr_18523_18555[(1)] = (10));
} else
{var statearr_18524_18556 = state_18488__$1;(statearr_18524_18556[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12429__auto___18532,mults,ensure_mult,p))
;return ((function (switch__12364__auto__,c__12429__auto___18532,mults,ensure_mult,p){
return (function() {
var state_machine__12365__auto__ = null;
var state_machine__12365__auto____0 = (function (){var statearr_18528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18528[(0)] = state_machine__12365__auto__);
(statearr_18528[(1)] = (1));
return statearr_18528;
});
var state_machine__12365__auto____1 = (function (state_18488){while(true){
var ret_value__12366__auto__ = (function (){try{while(true){
var result__12367__auto__ = switch__12364__auto__.call(null,state_18488);if(cljs.core.keyword_identical_QMARK_.call(null,result__12367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12367__auto__;
}
break;
}
}catch (e18529){if((e18529 instanceof Object))
{var ex__12368__auto__ = e18529;var statearr_18530_18557 = state_18488;(statearr_18530_18557[(5)] = ex__12368__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18488);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18529;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18558 = state_18488;
state_18488 = G__18558;
continue;
}
} else
{return ret_value__12366__auto__;
}
break;
}
});
state_machine__12365__auto__ = function(state_18488){
switch(arguments.length){
case 0:
return state_machine__12365__auto____0.call(this);
case 1:
return state_machine__12365__auto____1.call(this,state_18488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12365__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12365__auto____0;
state_machine__12365__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12365__auto____1;
return state_machine__12365__auto__;
})()
;})(switch__12364__auto__,c__12429__auto___18532,mults,ensure_mult,p))
})();var state__12431__auto__ = (function (){var statearr_18531 = f__12430__auto__.call(null);(statearr_18531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12429__auto___18532);
return statearr_18531;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12431__auto__);
});})(c__12429__auto___18532,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__12429__auto___18695 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12429__auto___18695,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__12430__auto__ = (function (){var switch__12364__auto__ = ((function (c__12429__auto___18695,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18665){var state_val_18666 = (state_18665[(1)]);if((state_val_18666 === (7)))
{var state_18665__$1 = state_18665;var statearr_18667_18696 = state_18665__$1;(statearr_18667_18696[(2)] = null);
(statearr_18667_18696[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18666 === (1)))
{var state_18665__$1 = state_18665;var statearr_18668_18697 = state_18665__$1;(statearr_18668_18697[(2)] = null);
(statearr_18668_18697[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18666 === (4)))
{var inst_18629 = (state_18665[(7)]);var inst_18631 = (inst_18629 < cnt);var state_18665__$1 = state_18665;if(cljs.core.truth_(inst_18631))
{var statearr_18669_18698 = state_18665__$1;(statearr_18669_18698[(1)] = (6));
} else
{var statearr_18670_18699 = state_18665__$1;(statearr_18670_18699[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18666 === (15)))
{var inst_18661 = (state_18665[(2)]);var state_18665__$1 = state_18665;var statearr_18671_18700 = state_18665__$1;(statearr_18671_18700[(2)] = inst_18661);
(statearr_18671_18700[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18666 === (13)))
{var inst_18654 = cljs.core.async.close_BANG_.call(null,out);var state_18665__$1 = state_18665;var statearr_18672_18701 = state_18665__$1;(statearr_18672_18701[(2)] = inst_18654);
(statearr_18672_18701[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18666 === (6)))
{var state_18665__$1 = state_18665;var statearr_18673_18702 = state_18665__$1;(statearr_18673_18702[(2)] = null);
(statearr_18673_18702[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18666 === (3)))
{var inst_18663 = (state_18665[(2)]);var state_18665__$1 = state_18665;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18665__$1,inst_18663);
} else
{if((state_val_18666 === (12)))
{var inst_18651 = (state_18665[(8)]);var inst_18651__$1 = (state_18665[(2)]);var inst_18652 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18651__$1);var state_18665__$1 = (function (){var statearr_18674 = state_18665;(statearr_18674[(8)] = inst_18651__$1);
return statearr_18674;
})();if(cljs.core.truth_(inst_18652))
{var statearr_18675_18703 = state_18665__$1;(statearr_18675_18703[(1)] = (13));
} else
{var statearr_18676_18704 = state_18665__$1;(statearr_18676_18704[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18666 === (2)))
{var inst_18628 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_18629 = (0);var state_18665__$1 = (function (){var statearr_18677 = state_18665;(statearr_18677[(7)] = inst_18629);
(statearr_18677[(9)] = inst_18628);
return statearr_18677;
})();var statearr_18678_18705 = state_18665__$1;(statearr_18678_18705[(2)] = null);
(statearr_18678_18705[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18666 === (11)))
{var inst_18629 = (state_18665[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18665,(10),Object,null,(9));var inst_18638 = chs__$1.call(null,inst_18629);var inst_18639 = done.call(null,inst_18629);var inst_18640 = cljs.core.async.take_BANG_.call(null,inst_18638,inst_18639);var state_18665__$1 = state_18665;var statearr_18679_18706 = state_18665__$1;(statearr_18679_18706[(2)] = inst_18640);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18665__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18666 === (9)))
{var inst_18629 = (state_18665[(7)]);var inst_18642 = (state_18665[(2)]);var inst_18643 = (inst_18629 + (1));var inst_18629__$1 = inst_18643;var state_18665__$1 = (function (){var statearr_18680 = state_18665;(statearr_18680[(7)] = inst_18629__$1);
(statearr_18680[(10)] = inst_18642);
return statearr_18680;
})();var statearr_18681_18707 = state_18665__$1;(statearr_18681_18707[(2)] = null);
(statearr_18681_18707[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18666 === (5)))
{var inst_18649 = (state_18665[(2)]);var state_18665__$1 = (function (){var statearr_18682 = state_18665;(statearr_18682[(11)] = inst_18649);
return statearr_18682;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18665__$1,(12),dchan);
} else
{if((state_val_18666 === (14)))
{var inst_18651 = (state_18665[(8)]);var inst_18656 = cljs.core.apply.call(null,f,inst_18651);var state_18665__$1 = state_18665;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18665__$1,(16),out,inst_18656);
} else
{if((state_val_18666 === (16)))
{var inst_18658 = (state_18665[(2)]);var state_18665__$1 = (function (){var statearr_18683 = state_18665;(statearr_18683[(12)] = inst_18658);
return statearr_18683;
})();var statearr_18684_18708 = state_18665__$1;(statearr_18684_18708[(2)] = null);
(statearr_18684_18708[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18666 === (10)))
{var inst_18633 = (state_18665[(2)]);var inst_18634 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_18665__$1 = (function (){var statearr_18685 = state_18665;(statearr_18685[(13)] = inst_18633);
return statearr_18685;
})();var statearr_18686_18709 = state_18665__$1;(statearr_18686_18709[(2)] = inst_18634);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18665__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18666 === (8)))
{var inst_18647 = (state_18665[(2)]);var state_18665__$1 = state_18665;var statearr_18687_18710 = state_18665__$1;(statearr_18687_18710[(2)] = inst_18647);
(statearr_18687_18710[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12429__auto___18695,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__12364__auto__,c__12429__auto___18695,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__12365__auto__ = null;
var state_machine__12365__auto____0 = (function (){var statearr_18691 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18691[(0)] = state_machine__12365__auto__);
(statearr_18691[(1)] = (1));
return statearr_18691;
});
var state_machine__12365__auto____1 = (function (state_18665){while(true){
var ret_value__12366__auto__ = (function (){try{while(true){
var result__12367__auto__ = switch__12364__auto__.call(null,state_18665);if(cljs.core.keyword_identical_QMARK_.call(null,result__12367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12367__auto__;
}
break;
}
}catch (e18692){if((e18692 instanceof Object))
{var ex__12368__auto__ = e18692;var statearr_18693_18711 = state_18665;(statearr_18693_18711[(5)] = ex__12368__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18665);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18692;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18712 = state_18665;
state_18665 = G__18712;
continue;
}
} else
{return ret_value__12366__auto__;
}
break;
}
});
state_machine__12365__auto__ = function(state_18665){
switch(arguments.length){
case 0:
return state_machine__12365__auto____0.call(this);
case 1:
return state_machine__12365__auto____1.call(this,state_18665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12365__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12365__auto____0;
state_machine__12365__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12365__auto____1;
return state_machine__12365__auto__;
})()
;})(switch__12364__auto__,c__12429__auto___18695,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__12431__auto__ = (function (){var statearr_18694 = f__12430__auto__.call(null);(statearr_18694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12429__auto___18695);
return statearr_18694;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12431__auto__);
});})(c__12429__auto___18695,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12429__auto___18820 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12429__auto___18820,out){
return (function (){var f__12430__auto__ = (function (){var switch__12364__auto__ = ((function (c__12429__auto___18820,out){
return (function (state_18796){var state_val_18797 = (state_18796[(1)]);if((state_val_18797 === (7)))
{var inst_18776 = (state_18796[(7)]);var inst_18775 = (state_18796[(8)]);var inst_18775__$1 = (state_18796[(2)]);var inst_18776__$1 = cljs.core.nth.call(null,inst_18775__$1,(0),null);var inst_18777 = cljs.core.nth.call(null,inst_18775__$1,(1),null);var inst_18778 = (inst_18776__$1 == null);var state_18796__$1 = (function (){var statearr_18798 = state_18796;(statearr_18798[(9)] = inst_18777);
(statearr_18798[(7)] = inst_18776__$1);
(statearr_18798[(8)] = inst_18775__$1);
return statearr_18798;
})();if(cljs.core.truth_(inst_18778))
{var statearr_18799_18821 = state_18796__$1;(statearr_18799_18821[(1)] = (8));
} else
{var statearr_18800_18822 = state_18796__$1;(statearr_18800_18822[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18797 === (1)))
{var inst_18767 = cljs.core.vec.call(null,chs);var inst_18768 = inst_18767;var state_18796__$1 = (function (){var statearr_18801 = state_18796;(statearr_18801[(10)] = inst_18768);
return statearr_18801;
})();var statearr_18802_18823 = state_18796__$1;(statearr_18802_18823[(2)] = null);
(statearr_18802_18823[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18797 === (4)))
{var inst_18768 = (state_18796[(10)]);var state_18796__$1 = state_18796;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18796__$1,(7),inst_18768);
} else
{if((state_val_18797 === (6)))
{var inst_18792 = (state_18796[(2)]);var state_18796__$1 = state_18796;var statearr_18803_18824 = state_18796__$1;(statearr_18803_18824[(2)] = inst_18792);
(statearr_18803_18824[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18797 === (3)))
{var inst_18794 = (state_18796[(2)]);var state_18796__$1 = state_18796;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18796__$1,inst_18794);
} else
{if((state_val_18797 === (2)))
{var inst_18768 = (state_18796[(10)]);var inst_18770 = cljs.core.count.call(null,inst_18768);var inst_18771 = (inst_18770 > (0));var state_18796__$1 = state_18796;if(cljs.core.truth_(inst_18771))
{var statearr_18805_18825 = state_18796__$1;(statearr_18805_18825[(1)] = (4));
} else
{var statearr_18806_18826 = state_18796__$1;(statearr_18806_18826[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18797 === (11)))
{var inst_18768 = (state_18796[(10)]);var inst_18785 = (state_18796[(2)]);var tmp18804 = inst_18768;var inst_18768__$1 = tmp18804;var state_18796__$1 = (function (){var statearr_18807 = state_18796;(statearr_18807[(10)] = inst_18768__$1);
(statearr_18807[(11)] = inst_18785);
return statearr_18807;
})();var statearr_18808_18827 = state_18796__$1;(statearr_18808_18827[(2)] = null);
(statearr_18808_18827[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18797 === (9)))
{var inst_18776 = (state_18796[(7)]);var state_18796__$1 = state_18796;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18796__$1,(11),out,inst_18776);
} else
{if((state_val_18797 === (5)))
{var inst_18790 = cljs.core.async.close_BANG_.call(null,out);var state_18796__$1 = state_18796;var statearr_18809_18828 = state_18796__$1;(statearr_18809_18828[(2)] = inst_18790);
(statearr_18809_18828[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18797 === (10)))
{var inst_18788 = (state_18796[(2)]);var state_18796__$1 = state_18796;var statearr_18810_18829 = state_18796__$1;(statearr_18810_18829[(2)] = inst_18788);
(statearr_18810_18829[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18797 === (8)))
{var inst_18768 = (state_18796[(10)]);var inst_18777 = (state_18796[(9)]);var inst_18776 = (state_18796[(7)]);var inst_18775 = (state_18796[(8)]);var inst_18780 = (function (){var c = inst_18777;var v = inst_18776;var vec__18773 = inst_18775;var cs = inst_18768;return ((function (c,v,vec__18773,cs,inst_18768,inst_18777,inst_18776,inst_18775,state_val_18797,c__12429__auto___18820,out){
return (function (p1__18713_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__18713_SHARP_);
});
;})(c,v,vec__18773,cs,inst_18768,inst_18777,inst_18776,inst_18775,state_val_18797,c__12429__auto___18820,out))
})();var inst_18781 = cljs.core.filterv.call(null,inst_18780,inst_18768);var inst_18768__$1 = inst_18781;var state_18796__$1 = (function (){var statearr_18811 = state_18796;(statearr_18811[(10)] = inst_18768__$1);
return statearr_18811;
})();var statearr_18812_18830 = state_18796__$1;(statearr_18812_18830[(2)] = null);
(statearr_18812_18830[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__12429__auto___18820,out))
;return ((function (switch__12364__auto__,c__12429__auto___18820,out){
return (function() {
var state_machine__12365__auto__ = null;
var state_machine__12365__auto____0 = (function (){var statearr_18816 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18816[(0)] = state_machine__12365__auto__);
(statearr_18816[(1)] = (1));
return statearr_18816;
});
var state_machine__12365__auto____1 = (function (state_18796){while(true){
var ret_value__12366__auto__ = (function (){try{while(true){
var result__12367__auto__ = switch__12364__auto__.call(null,state_18796);if(cljs.core.keyword_identical_QMARK_.call(null,result__12367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12367__auto__;
}
break;
}
}catch (e18817){if((e18817 instanceof Object))
{var ex__12368__auto__ = e18817;var statearr_18818_18831 = state_18796;(statearr_18818_18831[(5)] = ex__12368__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18796);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18817;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18832 = state_18796;
state_18796 = G__18832;
continue;
}
} else
{return ret_value__12366__auto__;
}
break;
}
});
state_machine__12365__auto__ = function(state_18796){
switch(arguments.length){
case 0:
return state_machine__12365__auto____0.call(this);
case 1:
return state_machine__12365__auto____1.call(this,state_18796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12365__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12365__auto____0;
state_machine__12365__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12365__auto____1;
return state_machine__12365__auto__;
})()
;})(switch__12364__auto__,c__12429__auto___18820,out))
})();var state__12431__auto__ = (function (){var statearr_18819 = f__12430__auto__.call(null);(statearr_18819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12429__auto___18820);
return statearr_18819;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12431__auto__);
});})(c__12429__auto___18820,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12429__auto___18925 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12429__auto___18925,out){
return (function (){var f__12430__auto__ = (function (){var switch__12364__auto__ = ((function (c__12429__auto___18925,out){
return (function (state_18902){var state_val_18903 = (state_18902[(1)]);if((state_val_18903 === (7)))
{var inst_18884 = (state_18902[(7)]);var inst_18884__$1 = (state_18902[(2)]);var inst_18885 = (inst_18884__$1 == null);var inst_18886 = cljs.core.not.call(null,inst_18885);var state_18902__$1 = (function (){var statearr_18904 = state_18902;(statearr_18904[(7)] = inst_18884__$1);
return statearr_18904;
})();if(inst_18886)
{var statearr_18905_18926 = state_18902__$1;(statearr_18905_18926[(1)] = (8));
} else
{var statearr_18906_18927 = state_18902__$1;(statearr_18906_18927[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18903 === (1)))
{var inst_18879 = (0);var state_18902__$1 = (function (){var statearr_18907 = state_18902;(statearr_18907[(8)] = inst_18879);
return statearr_18907;
})();var statearr_18908_18928 = state_18902__$1;(statearr_18908_18928[(2)] = null);
(statearr_18908_18928[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18903 === (4)))
{var state_18902__$1 = state_18902;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18902__$1,(7),ch);
} else
{if((state_val_18903 === (6)))
{var inst_18897 = (state_18902[(2)]);var state_18902__$1 = state_18902;var statearr_18909_18929 = state_18902__$1;(statearr_18909_18929[(2)] = inst_18897);
(statearr_18909_18929[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18903 === (3)))
{var inst_18899 = (state_18902[(2)]);var inst_18900 = cljs.core.async.close_BANG_.call(null,out);var state_18902__$1 = (function (){var statearr_18910 = state_18902;(statearr_18910[(9)] = inst_18899);
return statearr_18910;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18902__$1,inst_18900);
} else
{if((state_val_18903 === (2)))
{var inst_18879 = (state_18902[(8)]);var inst_18881 = (inst_18879 < n);var state_18902__$1 = state_18902;if(cljs.core.truth_(inst_18881))
{var statearr_18911_18930 = state_18902__$1;(statearr_18911_18930[(1)] = (4));
} else
{var statearr_18912_18931 = state_18902__$1;(statearr_18912_18931[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18903 === (11)))
{var inst_18879 = (state_18902[(8)]);var inst_18889 = (state_18902[(2)]);var inst_18890 = (inst_18879 + (1));var inst_18879__$1 = inst_18890;var state_18902__$1 = (function (){var statearr_18913 = state_18902;(statearr_18913[(8)] = inst_18879__$1);
(statearr_18913[(10)] = inst_18889);
return statearr_18913;
})();var statearr_18914_18932 = state_18902__$1;(statearr_18914_18932[(2)] = null);
(statearr_18914_18932[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18903 === (9)))
{var state_18902__$1 = state_18902;var statearr_18915_18933 = state_18902__$1;(statearr_18915_18933[(2)] = null);
(statearr_18915_18933[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18903 === (5)))
{var state_18902__$1 = state_18902;var statearr_18916_18934 = state_18902__$1;(statearr_18916_18934[(2)] = null);
(statearr_18916_18934[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18903 === (10)))
{var inst_18894 = (state_18902[(2)]);var state_18902__$1 = state_18902;var statearr_18917_18935 = state_18902__$1;(statearr_18917_18935[(2)] = inst_18894);
(statearr_18917_18935[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18903 === (8)))
{var inst_18884 = (state_18902[(7)]);var state_18902__$1 = state_18902;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18902__$1,(11),out,inst_18884);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__12429__auto___18925,out))
;return ((function (switch__12364__auto__,c__12429__auto___18925,out){
return (function() {
var state_machine__12365__auto__ = null;
var state_machine__12365__auto____0 = (function (){var statearr_18921 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_18921[(0)] = state_machine__12365__auto__);
(statearr_18921[(1)] = (1));
return statearr_18921;
});
var state_machine__12365__auto____1 = (function (state_18902){while(true){
var ret_value__12366__auto__ = (function (){try{while(true){
var result__12367__auto__ = switch__12364__auto__.call(null,state_18902);if(cljs.core.keyword_identical_QMARK_.call(null,result__12367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12367__auto__;
}
break;
}
}catch (e18922){if((e18922 instanceof Object))
{var ex__12368__auto__ = e18922;var statearr_18923_18936 = state_18902;(statearr_18923_18936[(5)] = ex__12368__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18902);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18922;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18937 = state_18902;
state_18902 = G__18937;
continue;
}
} else
{return ret_value__12366__auto__;
}
break;
}
});
state_machine__12365__auto__ = function(state_18902){
switch(arguments.length){
case 0:
return state_machine__12365__auto____0.call(this);
case 1:
return state_machine__12365__auto____1.call(this,state_18902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12365__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12365__auto____0;
state_machine__12365__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12365__auto____1;
return state_machine__12365__auto__;
})()
;})(switch__12364__auto__,c__12429__auto___18925,out))
})();var state__12431__auto__ = (function (){var statearr_18924 = f__12430__auto__.call(null);(statearr_18924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12429__auto___18925);
return statearr_18924;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12431__auto__);
});})(c__12429__auto___18925,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12429__auto___19034 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12429__auto___19034,out){
return (function (){var f__12430__auto__ = (function (){var switch__12364__auto__ = ((function (c__12429__auto___19034,out){
return (function (state_19009){var state_val_19010 = (state_19009[(1)]);if((state_val_19010 === (7)))
{var inst_19004 = (state_19009[(2)]);var state_19009__$1 = state_19009;var statearr_19011_19035 = state_19009__$1;(statearr_19011_19035[(2)] = inst_19004);
(statearr_19011_19035[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19010 === (1)))
{var inst_18986 = null;var state_19009__$1 = (function (){var statearr_19012 = state_19009;(statearr_19012[(7)] = inst_18986);
return statearr_19012;
})();var statearr_19013_19036 = state_19009__$1;(statearr_19013_19036[(2)] = null);
(statearr_19013_19036[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19010 === (4)))
{var inst_18989 = (state_19009[(8)]);var inst_18989__$1 = (state_19009[(2)]);var inst_18990 = (inst_18989__$1 == null);var inst_18991 = cljs.core.not.call(null,inst_18990);var state_19009__$1 = (function (){var statearr_19014 = state_19009;(statearr_19014[(8)] = inst_18989__$1);
return statearr_19014;
})();if(inst_18991)
{var statearr_19015_19037 = state_19009__$1;(statearr_19015_19037[(1)] = (5));
} else
{var statearr_19016_19038 = state_19009__$1;(statearr_19016_19038[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19010 === (6)))
{var state_19009__$1 = state_19009;var statearr_19017_19039 = state_19009__$1;(statearr_19017_19039[(2)] = null);
(statearr_19017_19039[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19010 === (3)))
{var inst_19006 = (state_19009[(2)]);var inst_19007 = cljs.core.async.close_BANG_.call(null,out);var state_19009__$1 = (function (){var statearr_19018 = state_19009;(statearr_19018[(9)] = inst_19006);
return statearr_19018;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19009__$1,inst_19007);
} else
{if((state_val_19010 === (2)))
{var state_19009__$1 = state_19009;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19009__$1,(4),ch);
} else
{if((state_val_19010 === (11)))
{var inst_18989 = (state_19009[(8)]);var inst_18998 = (state_19009[(2)]);var inst_18986 = inst_18989;var state_19009__$1 = (function (){var statearr_19019 = state_19009;(statearr_19019[(10)] = inst_18998);
(statearr_19019[(7)] = inst_18986);
return statearr_19019;
})();var statearr_19020_19040 = state_19009__$1;(statearr_19020_19040[(2)] = null);
(statearr_19020_19040[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19010 === (9)))
{var inst_18989 = (state_19009[(8)]);var state_19009__$1 = state_19009;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19009__$1,(11),out,inst_18989);
} else
{if((state_val_19010 === (5)))
{var inst_18989 = (state_19009[(8)]);var inst_18986 = (state_19009[(7)]);var inst_18993 = cljs.core._EQ_.call(null,inst_18989,inst_18986);var state_19009__$1 = state_19009;if(inst_18993)
{var statearr_19022_19041 = state_19009__$1;(statearr_19022_19041[(1)] = (8));
} else
{var statearr_19023_19042 = state_19009__$1;(statearr_19023_19042[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19010 === (10)))
{var inst_19001 = (state_19009[(2)]);var state_19009__$1 = state_19009;var statearr_19024_19043 = state_19009__$1;(statearr_19024_19043[(2)] = inst_19001);
(statearr_19024_19043[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19010 === (8)))
{var inst_18986 = (state_19009[(7)]);var tmp19021 = inst_18986;var inst_18986__$1 = tmp19021;var state_19009__$1 = (function (){var statearr_19025 = state_19009;(statearr_19025[(7)] = inst_18986__$1);
return statearr_19025;
})();var statearr_19026_19044 = state_19009__$1;(statearr_19026_19044[(2)] = null);
(statearr_19026_19044[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__12429__auto___19034,out))
;return ((function (switch__12364__auto__,c__12429__auto___19034,out){
return (function() {
var state_machine__12365__auto__ = null;
var state_machine__12365__auto____0 = (function (){var statearr_19030 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19030[(0)] = state_machine__12365__auto__);
(statearr_19030[(1)] = (1));
return statearr_19030;
});
var state_machine__12365__auto____1 = (function (state_19009){while(true){
var ret_value__12366__auto__ = (function (){try{while(true){
var result__12367__auto__ = switch__12364__auto__.call(null,state_19009);if(cljs.core.keyword_identical_QMARK_.call(null,result__12367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12367__auto__;
}
break;
}
}catch (e19031){if((e19031 instanceof Object))
{var ex__12368__auto__ = e19031;var statearr_19032_19045 = state_19009;(statearr_19032_19045[(5)] = ex__12368__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19009);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19031;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19046 = state_19009;
state_19009 = G__19046;
continue;
}
} else
{return ret_value__12366__auto__;
}
break;
}
});
state_machine__12365__auto__ = function(state_19009){
switch(arguments.length){
case 0:
return state_machine__12365__auto____0.call(this);
case 1:
return state_machine__12365__auto____1.call(this,state_19009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12365__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12365__auto____0;
state_machine__12365__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12365__auto____1;
return state_machine__12365__auto__;
})()
;})(switch__12364__auto__,c__12429__auto___19034,out))
})();var state__12431__auto__ = (function (){var statearr_19033 = f__12430__auto__.call(null);(statearr_19033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12429__auto___19034);
return statearr_19033;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12431__auto__);
});})(c__12429__auto___19034,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12429__auto___19181 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12429__auto___19181,out){
return (function (){var f__12430__auto__ = (function (){var switch__12364__auto__ = ((function (c__12429__auto___19181,out){
return (function (state_19151){var state_val_19152 = (state_19151[(1)]);if((state_val_19152 === (7)))
{var inst_19147 = (state_19151[(2)]);var state_19151__$1 = state_19151;var statearr_19153_19182 = state_19151__$1;(statearr_19153_19182[(2)] = inst_19147);
(statearr_19153_19182[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19152 === (1)))
{var inst_19114 = (new Array(n));var inst_19115 = inst_19114;var inst_19116 = (0);var state_19151__$1 = (function (){var statearr_19154 = state_19151;(statearr_19154[(7)] = inst_19116);
(statearr_19154[(8)] = inst_19115);
return statearr_19154;
})();var statearr_19155_19183 = state_19151__$1;(statearr_19155_19183[(2)] = null);
(statearr_19155_19183[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19152 === (4)))
{var inst_19119 = (state_19151[(9)]);var inst_19119__$1 = (state_19151[(2)]);var inst_19120 = (inst_19119__$1 == null);var inst_19121 = cljs.core.not.call(null,inst_19120);var state_19151__$1 = (function (){var statearr_19156 = state_19151;(statearr_19156[(9)] = inst_19119__$1);
return statearr_19156;
})();if(inst_19121)
{var statearr_19157_19184 = state_19151__$1;(statearr_19157_19184[(1)] = (5));
} else
{var statearr_19158_19185 = state_19151__$1;(statearr_19158_19185[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19152 === (15)))
{var inst_19141 = (state_19151[(2)]);var state_19151__$1 = state_19151;var statearr_19159_19186 = state_19151__$1;(statearr_19159_19186[(2)] = inst_19141);
(statearr_19159_19186[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19152 === (13)))
{var state_19151__$1 = state_19151;var statearr_19160_19187 = state_19151__$1;(statearr_19160_19187[(2)] = null);
(statearr_19160_19187[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19152 === (6)))
{var inst_19116 = (state_19151[(7)]);var inst_19137 = (inst_19116 > (0));var state_19151__$1 = state_19151;if(cljs.core.truth_(inst_19137))
{var statearr_19161_19188 = state_19151__$1;(statearr_19161_19188[(1)] = (12));
} else
{var statearr_19162_19189 = state_19151__$1;(statearr_19162_19189[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19152 === (3)))
{var inst_19149 = (state_19151[(2)]);var state_19151__$1 = state_19151;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19151__$1,inst_19149);
} else
{if((state_val_19152 === (12)))
{var inst_19115 = (state_19151[(8)]);var inst_19139 = cljs.core.vec.call(null,inst_19115);var state_19151__$1 = state_19151;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19151__$1,(15),out,inst_19139);
} else
{if((state_val_19152 === (2)))
{var state_19151__$1 = state_19151;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19151__$1,(4),ch);
} else
{if((state_val_19152 === (11)))
{var inst_19131 = (state_19151[(2)]);var inst_19132 = (new Array(n));var inst_19115 = inst_19132;var inst_19116 = (0);var state_19151__$1 = (function (){var statearr_19163 = state_19151;(statearr_19163[(7)] = inst_19116);
(statearr_19163[(8)] = inst_19115);
(statearr_19163[(10)] = inst_19131);
return statearr_19163;
})();var statearr_19164_19190 = state_19151__$1;(statearr_19164_19190[(2)] = null);
(statearr_19164_19190[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19152 === (9)))
{var inst_19115 = (state_19151[(8)]);var inst_19129 = cljs.core.vec.call(null,inst_19115);var state_19151__$1 = state_19151;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19151__$1,(11),out,inst_19129);
} else
{if((state_val_19152 === (5)))
{var inst_19116 = (state_19151[(7)]);var inst_19124 = (state_19151[(11)]);var inst_19119 = (state_19151[(9)]);var inst_19115 = (state_19151[(8)]);var inst_19123 = (inst_19115[inst_19116] = inst_19119);var inst_19124__$1 = (inst_19116 + (1));var inst_19125 = (inst_19124__$1 < n);var state_19151__$1 = (function (){var statearr_19165 = state_19151;(statearr_19165[(11)] = inst_19124__$1);
(statearr_19165[(12)] = inst_19123);
return statearr_19165;
})();if(cljs.core.truth_(inst_19125))
{var statearr_19166_19191 = state_19151__$1;(statearr_19166_19191[(1)] = (8));
} else
{var statearr_19167_19192 = state_19151__$1;(statearr_19167_19192[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19152 === (14)))
{var inst_19144 = (state_19151[(2)]);var inst_19145 = cljs.core.async.close_BANG_.call(null,out);var state_19151__$1 = (function (){var statearr_19169 = state_19151;(statearr_19169[(13)] = inst_19144);
return statearr_19169;
})();var statearr_19170_19193 = state_19151__$1;(statearr_19170_19193[(2)] = inst_19145);
(statearr_19170_19193[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19152 === (10)))
{var inst_19135 = (state_19151[(2)]);var state_19151__$1 = state_19151;var statearr_19171_19194 = state_19151__$1;(statearr_19171_19194[(2)] = inst_19135);
(statearr_19171_19194[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19152 === (8)))
{var inst_19124 = (state_19151[(11)]);var inst_19115 = (state_19151[(8)]);var tmp19168 = inst_19115;var inst_19115__$1 = tmp19168;var inst_19116 = inst_19124;var state_19151__$1 = (function (){var statearr_19172 = state_19151;(statearr_19172[(7)] = inst_19116);
(statearr_19172[(8)] = inst_19115__$1);
return statearr_19172;
})();var statearr_19173_19195 = state_19151__$1;(statearr_19173_19195[(2)] = null);
(statearr_19173_19195[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12429__auto___19181,out))
;return ((function (switch__12364__auto__,c__12429__auto___19181,out){
return (function() {
var state_machine__12365__auto__ = null;
var state_machine__12365__auto____0 = (function (){var statearr_19177 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19177[(0)] = state_machine__12365__auto__);
(statearr_19177[(1)] = (1));
return statearr_19177;
});
var state_machine__12365__auto____1 = (function (state_19151){while(true){
var ret_value__12366__auto__ = (function (){try{while(true){
var result__12367__auto__ = switch__12364__auto__.call(null,state_19151);if(cljs.core.keyword_identical_QMARK_.call(null,result__12367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12367__auto__;
}
break;
}
}catch (e19178){if((e19178 instanceof Object))
{var ex__12368__auto__ = e19178;var statearr_19179_19196 = state_19151;(statearr_19179_19196[(5)] = ex__12368__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19151);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19178;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19197 = state_19151;
state_19151 = G__19197;
continue;
}
} else
{return ret_value__12366__auto__;
}
break;
}
});
state_machine__12365__auto__ = function(state_19151){
switch(arguments.length){
case 0:
return state_machine__12365__auto____0.call(this);
case 1:
return state_machine__12365__auto____1.call(this,state_19151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12365__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12365__auto____0;
state_machine__12365__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12365__auto____1;
return state_machine__12365__auto__;
})()
;})(switch__12364__auto__,c__12429__auto___19181,out))
})();var state__12431__auto__ = (function (){var statearr_19180 = f__12430__auto__.call(null);(statearr_19180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12429__auto___19181);
return statearr_19180;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12431__auto__);
});})(c__12429__auto___19181,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12429__auto___19340 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__12429__auto___19340,out){
return (function (){var f__12430__auto__ = (function (){var switch__12364__auto__ = ((function (c__12429__auto___19340,out){
return (function (state_19310){var state_val_19311 = (state_19310[(1)]);if((state_val_19311 === (7)))
{var inst_19306 = (state_19310[(2)]);var state_19310__$1 = state_19310;var statearr_19312_19341 = state_19310__$1;(statearr_19312_19341[(2)] = inst_19306);
(statearr_19312_19341[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19311 === (1)))
{var inst_19269 = [];var inst_19270 = inst_19269;var inst_19271 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_19310__$1 = (function (){var statearr_19313 = state_19310;(statearr_19313[(7)] = inst_19271);
(statearr_19313[(8)] = inst_19270);
return statearr_19313;
})();var statearr_19314_19342 = state_19310__$1;(statearr_19314_19342[(2)] = null);
(statearr_19314_19342[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19311 === (4)))
{var inst_19274 = (state_19310[(9)]);var inst_19274__$1 = (state_19310[(2)]);var inst_19275 = (inst_19274__$1 == null);var inst_19276 = cljs.core.not.call(null,inst_19275);var state_19310__$1 = (function (){var statearr_19315 = state_19310;(statearr_19315[(9)] = inst_19274__$1);
return statearr_19315;
})();if(inst_19276)
{var statearr_19316_19343 = state_19310__$1;(statearr_19316_19343[(1)] = (5));
} else
{var statearr_19317_19344 = state_19310__$1;(statearr_19317_19344[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19311 === (15)))
{var inst_19300 = (state_19310[(2)]);var state_19310__$1 = state_19310;var statearr_19318_19345 = state_19310__$1;(statearr_19318_19345[(2)] = inst_19300);
(statearr_19318_19345[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19311 === (13)))
{var state_19310__$1 = state_19310;var statearr_19319_19346 = state_19310__$1;(statearr_19319_19346[(2)] = null);
(statearr_19319_19346[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19311 === (6)))
{var inst_19270 = (state_19310[(8)]);var inst_19295 = inst_19270.length;var inst_19296 = (inst_19295 > (0));var state_19310__$1 = state_19310;if(cljs.core.truth_(inst_19296))
{var statearr_19320_19347 = state_19310__$1;(statearr_19320_19347[(1)] = (12));
} else
{var statearr_19321_19348 = state_19310__$1;(statearr_19321_19348[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19311 === (3)))
{var inst_19308 = (state_19310[(2)]);var state_19310__$1 = state_19310;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19310__$1,inst_19308);
} else
{if((state_val_19311 === (12)))
{var inst_19270 = (state_19310[(8)]);var inst_19298 = cljs.core.vec.call(null,inst_19270);var state_19310__$1 = state_19310;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19310__$1,(15),out,inst_19298);
} else
{if((state_val_19311 === (2)))
{var state_19310__$1 = state_19310;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19310__$1,(4),ch);
} else
{if((state_val_19311 === (11)))
{var inst_19274 = (state_19310[(9)]);var inst_19278 = (state_19310[(10)]);var inst_19288 = (state_19310[(2)]);var inst_19289 = [];var inst_19290 = inst_19289.push(inst_19274);var inst_19270 = inst_19289;var inst_19271 = inst_19278;var state_19310__$1 = (function (){var statearr_19322 = state_19310;(statearr_19322[(11)] = inst_19290);
(statearr_19322[(12)] = inst_19288);
(statearr_19322[(7)] = inst_19271);
(statearr_19322[(8)] = inst_19270);
return statearr_19322;
})();var statearr_19323_19349 = state_19310__$1;(statearr_19323_19349[(2)] = null);
(statearr_19323_19349[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19311 === (9)))
{var inst_19270 = (state_19310[(8)]);var inst_19286 = cljs.core.vec.call(null,inst_19270);var state_19310__$1 = state_19310;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19310__$1,(11),out,inst_19286);
} else
{if((state_val_19311 === (5)))
{var inst_19274 = (state_19310[(9)]);var inst_19278 = (state_19310[(10)]);var inst_19271 = (state_19310[(7)]);var inst_19278__$1 = f.call(null,inst_19274);var inst_19279 = cljs.core._EQ_.call(null,inst_19278__$1,inst_19271);var inst_19280 = cljs.core.keyword_identical_QMARK_.call(null,inst_19271,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_19281 = (inst_19279) || (inst_19280);var state_19310__$1 = (function (){var statearr_19324 = state_19310;(statearr_19324[(10)] = inst_19278__$1);
return statearr_19324;
})();if(cljs.core.truth_(inst_19281))
{var statearr_19325_19350 = state_19310__$1;(statearr_19325_19350[(1)] = (8));
} else
{var statearr_19326_19351 = state_19310__$1;(statearr_19326_19351[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19311 === (14)))
{var inst_19303 = (state_19310[(2)]);var inst_19304 = cljs.core.async.close_BANG_.call(null,out);var state_19310__$1 = (function (){var statearr_19328 = state_19310;(statearr_19328[(13)] = inst_19303);
return statearr_19328;
})();var statearr_19329_19352 = state_19310__$1;(statearr_19329_19352[(2)] = inst_19304);
(statearr_19329_19352[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19311 === (10)))
{var inst_19293 = (state_19310[(2)]);var state_19310__$1 = state_19310;var statearr_19330_19353 = state_19310__$1;(statearr_19330_19353[(2)] = inst_19293);
(statearr_19330_19353[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19311 === (8)))
{var inst_19274 = (state_19310[(9)]);var inst_19278 = (state_19310[(10)]);var inst_19270 = (state_19310[(8)]);var inst_19283 = inst_19270.push(inst_19274);var tmp19327 = inst_19270;var inst_19270__$1 = tmp19327;var inst_19271 = inst_19278;var state_19310__$1 = (function (){var statearr_19331 = state_19310;(statearr_19331[(14)] = inst_19283);
(statearr_19331[(7)] = inst_19271);
(statearr_19331[(8)] = inst_19270__$1);
return statearr_19331;
})();var statearr_19332_19354 = state_19310__$1;(statearr_19332_19354[(2)] = null);
(statearr_19332_19354[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12429__auto___19340,out))
;return ((function (switch__12364__auto__,c__12429__auto___19340,out){
return (function() {
var state_machine__12365__auto__ = null;
var state_machine__12365__auto____0 = (function (){var statearr_19336 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19336[(0)] = state_machine__12365__auto__);
(statearr_19336[(1)] = (1));
return statearr_19336;
});
var state_machine__12365__auto____1 = (function (state_19310){while(true){
var ret_value__12366__auto__ = (function (){try{while(true){
var result__12367__auto__ = switch__12364__auto__.call(null,state_19310);if(cljs.core.keyword_identical_QMARK_.call(null,result__12367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__12367__auto__;
}
break;
}
}catch (e19337){if((e19337 instanceof Object))
{var ex__12368__auto__ = e19337;var statearr_19338_19355 = state_19310;(statearr_19338_19355[(5)] = ex__12368__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19310);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19337;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19356 = state_19310;
state_19310 = G__19356;
continue;
}
} else
{return ret_value__12366__auto__;
}
break;
}
});
state_machine__12365__auto__ = function(state_19310){
switch(arguments.length){
case 0:
return state_machine__12365__auto____0.call(this);
case 1:
return state_machine__12365__auto____1.call(this,state_19310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12365__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12365__auto____0;
state_machine__12365__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12365__auto____1;
return state_machine__12365__auto__;
})()
;})(switch__12364__auto__,c__12429__auto___19340,out))
})();var state__12431__auto__ = (function (){var statearr_19339 = f__12430__auto__.call(null);(statearr_19339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12429__auto___19340);
return statearr_19339;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12431__auto__);
});})(c__12429__auto___19340,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map