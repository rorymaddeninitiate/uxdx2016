var duScrollDefaultEasing=function(e){"use strict";return.5>e?Math.pow(2*e,2)/2:1-Math.pow(2*(1-e),2)/2},duScroll=angular.module("duScroll",["duScroll.scrollspy","duScroll.smoothScroll","duScroll.scrollContainer","duScroll.spyContext","duScroll.scrollHelpers"]).value("duScrollDuration",350).value("duScrollSpyWait",100).value("duScrollGreedy",!1).value("duScrollOffset",0).value("duScrollEasing",duScrollDefaultEasing).value("duScrollCancelOnEvents","scroll mousedown mousewheel touchmove keydown").value("duScrollBottomSpy",!1).value("duScrollActiveClass","active");"undefined"!=typeof module&&module&&module.exports&&(module.exports=duScroll),angular.module("duScroll.scrollHelpers",["duScroll.requestAnimation"]).run(["$window","$q","cancelAnimation","requestAnimation","duScrollEasing","duScrollDuration","duScrollOffset","duScrollCancelOnEvents",function(e,t,n,r,o,l,u,c){"use strict";var i={},a=function(e){return"undefined"!=typeof HTMLDocument&&e instanceof HTMLDocument||e.nodeType&&e.nodeType===e.DOCUMENT_NODE},s=function(e){return"undefined"!=typeof HTMLElement&&e instanceof HTMLElement||e.nodeType&&e.nodeType===e.ELEMENT_NODE},d=function(e){return s(e)||a(e)?e:e[0]};i.duScrollTo=function(t,n,r,o){var l;if(angular.isElement(t)?l=this.duScrollToElement:angular.isDefined(r)&&(l=this.duScrollToAnimated),l)return l.apply(this,arguments);var u=d(this);return a(u)?e.scrollTo(t,n):(u.scrollLeft=t,void(u.scrollTop=n))};var f,m;i.duScrollToAnimated=function(e,l,u,i){u&&!i&&(i=o);var a=this.duScrollLeft(),s=this.duScrollTop(),d=Math.round(e-a),p=Math.round(l-s),S=null,g=0,v=this,h=function(e){(!e||g&&e.which>0)&&(c&&v.unbind(c,h),n(f),m.reject(),f=null)};if(f&&h(),m=t.defer(),0===u||!d&&!p)return 0===u&&v.duScrollTo(e,l),m.resolve(),m.promise;var y=function(e){null===S&&(S=e),g=e-S;var t=g>=u?1:i(g/u);v.scrollTo(a+Math.ceil(d*t),s+Math.ceil(p*t)),1>t?f=r(y):(c&&v.unbind(c,h),f=null,m.resolve())};return v.duScrollTo(a,s),c&&v.bind(c,h),f=r(y),m.promise},i.duScrollToElement=function(e,t,n,r){var o=d(this);(!angular.isNumber(t)||isNaN(t))&&(t=u);var l=this.duScrollTop()+d(e).getBoundingClientRect().top-t;return s(o)&&(l-=o.getBoundingClientRect().top),this.duScrollTo(0,l,n,r)},i.duScrollLeft=function(t,n,r){if(angular.isNumber(t))return this.duScrollTo(t,this.duScrollTop(),n,r);var o=d(this);return a(o)?e.scrollX||document.documentElement.scrollLeft||document.body.scrollLeft:o.scrollLeft},i.duScrollTop=function(t,n,r){if(angular.isNumber(t))return this.duScrollTo(this.duScrollLeft(),t,n,r);var o=d(this);return a(o)?e.scrollY||document.documentElement.scrollTop||document.body.scrollTop:o.scrollTop},i.duScrollToElementAnimated=function(e,t,n,r){return this.duScrollToElement(e,t,n||l,r)},i.duScrollTopAnimated=function(e,t,n){return this.duScrollTop(e,t||l,n)},i.duScrollLeftAnimated=function(e,t,n){return this.duScrollLeft(e,t||l,n)},angular.forEach(i,function(e,t){angular.element.prototype[t]=e;var n=t.replace(/^duScroll/,"scroll");angular.isUndefined(angular.element.prototype[n])&&(angular.element.prototype[n]=e)})}]),angular.module("duScroll.polyfill",[]).factory("polyfill",["$window",function(e){"use strict";var t=["webkit","moz","o","ms"];return function(n,r){if(e[n])return e[n];for(var o,l=n.substr(0,1).toUpperCase()+n.substr(1),u=0;u<t.length;u++)if(o=t[u]+l,e[o])return e[o];return r}}]),angular.module("duScroll.requestAnimation",["duScroll.polyfill"]).factory("requestAnimation",["polyfill","$timeout",function(e,t){"use strict";var n=0,r=function(e,r){var o=(new Date).getTime(),l=Math.max(0,16-(o-n)),u=t(function(){e(o+l)},l);return n=o+l,u};return e("requestAnimationFrame",r)}]).factory("cancelAnimation",["polyfill","$timeout",function(e,t){"use strict";var n=function(e){t.cancel(e)};return e("cancelAnimationFrame",n)}]),angular.module("duScroll.spyAPI",["duScroll.scrollContainerAPI"]).factory("spyAPI",["$rootScope","$timeout","$window","$document","scrollContainerAPI","duScrollGreedy","duScrollSpyWait","duScrollBottomSpy","duScrollActiveClass",function(e,t,n,r,o,l,u,c,i){"use strict";var a=function(o){var a=!1,s=!1,d=function(){s=!1;var t,u=o.container,a=u[0],d=0;if("undefined"!=typeof HTMLElement&&a instanceof HTMLElement||a.nodeType&&a.nodeType===a.ELEMENT_NODE)d=a.getBoundingClientRect().top,t=Math.round(a.scrollTop+a.clientHeight)>=a.scrollHeight;else{var f=r[0].body.scrollHeight||r[0].documentElement.scrollHeight;t=Math.round(n.pageYOffset+n.innerHeight)>=f}var m,p,S,g,v,h,y=c&&t?"bottom":"top";for(g=o.spies,p=o.currentlyActive,S=void 0,m=0;m<g.length;m++)v=g[m],h=v.getTargetPosition(),h&&(c&&t||h.top+v.offset-d<20&&(l||-1*h.top+d)<h.height)&&(!S||S[y]<h[y])&&(S={spy:v},S[y]=h[y]);S&&(S=S.spy),p===S||l&&!S||(p&&(p.$element.removeClass(i),e.$broadcast("duScrollspy:becameInactive",p.$element,angular.element(p.getTargetElement()))),S&&(S.$element.addClass(i),e.$broadcast("duScrollspy:becameActive",S.$element,angular.element(S.getTargetElement()))),o.currentlyActive=S)};return u?function(){a?s=!0:(d(),a=t(function(){a=!1,s&&d()},u,!1))}:d},s={},d=function(e){var t=e.$id,n={spies:[]};return n.handler=a(n),s[t]=n,e.$on("$destroy",function(){f(e)}),t},f=function(e){var t=e.$id,n=s[t],r=n.container;r&&r.off("scroll",n.handler),delete s[t]},m=d(e),p=function(e){return s[e.$id]?s[e.$id]:e.$parent?p(e.$parent):s[m]},S=function(e){var t,n,r=e.$scope;if(r)return p(r);for(n in s)if(t=s[n],-1!==t.spies.indexOf(e))return t},g=function(e){for(;e.parentNode;)if(e=e.parentNode,e===document)return!0;return!1},v=function(e){var t=S(e);t&&(t.spies.push(e),t.container&&g(t.container)||(t.container&&t.container.off("scroll",t.handler),t.container=o.getContainer(e.$scope),t.container.on("scroll",t.handler).triggerHandler("scroll")))},h=function(t){var n=S(t);t===n.currentlyActive&&(e.$broadcast("duScrollspy:becameInactive",n.currentlyActive.$element),n.currentlyActive=null);var r=n.spies.indexOf(t);-1!==r&&n.spies.splice(r,1),t.$element=null};return{addSpy:v,removeSpy:h,createContext:d,destroyContext:f,getContextForScope:p}}]),angular.module("duScroll.scrollContainerAPI",[]).factory("scrollContainerAPI",["$document",function(e){"use strict";var t={},n=function(e,n){var r=e.$id;return t[r]=n,r},r=function(e){return t[e.$id]?e.$id:e.$parent?r(e.$parent):void 0},o=function(n){var o=r(n);return o?t[o]:e},l=function(e){var n=r(e);n&&delete t[n]};return{getContainerId:r,getContainer:o,setContainer:n,removeContainer:l}}]),angular.module("duScroll.smoothScroll",["duScroll.scrollHelpers","duScroll.scrollContainerAPI"]).directive("duSmoothScroll",["duScrollDuration","duScrollOffset","scrollContainerAPI",function(e,t,n){"use strict";return{link:function(r,o,l){o.on("click",function(o){if(l.href&&-1!==l.href.indexOf("#")||""!==l.duSmoothScroll){var u=l.href?l.href.replace(/.*(?=#[^\s]+$)/,"").substring(1):l.duSmoothScroll,c=document.getElementById(u)||document.getElementsByName(u)[0];if(c&&c.getBoundingClientRect){o.stopPropagation&&o.stopPropagation(),o.preventDefault&&o.preventDefault();var i=l.offset?parseInt(l.offset,10):t,a=l.duration?parseInt(l.duration,10):e,s=n.getContainer(r);s.duScrollToElement(angular.element(c),isNaN(i)?0:i,isNaN(a)?0:a)}}})}}}]),angular.module("duScroll.spyContext",["duScroll.spyAPI"]).directive("duSpyContext",["spyAPI",function(e){"use strict";return{restrict:"A",scope:!0,compile:function(t,n,r){return{pre:function(t,n,r,o){e.createContext(t)}}}}}]),angular.module("duScroll.scrollContainer",["duScroll.scrollContainerAPI"]).directive("duScrollContainer",["scrollContainerAPI",function(e){"use strict";return{restrict:"A",scope:!0,compile:function(t,n,r){return{pre:function(t,n,r,o){r.$observe("duScrollContainer",function(r){angular.isString(r)&&(r=document.getElementById(r)),r=angular.isElement(r)?angular.element(r):n,e.setContainer(t,r),t.$on("$destroy",function(){e.removeContainer(t)})})}}}}}]),angular.module("duScroll.scrollspy",["duScroll.spyAPI"]).directive("duScrollspy",["spyAPI","duScrollOffset","$timeout","$rootScope",function(e,t,n,r){"use strict";var o=function(e,t,n,r){angular.isElement(e)?this.target=e:angular.isString(e)&&(this.targetId=e),this.$scope=t,this.$element=n,this.offset=r};return o.prototype.getTargetElement=function(){return!this.target&&this.targetId&&(this.target=document.getElementById(this.targetId)||document.getElementsByName(this.targetId)[0]),this.target},o.prototype.getTargetPosition=function(){var e=this.getTargetElement();return e?e.getBoundingClientRect():void 0},o.prototype.flushTargetCache=function(){this.targetId&&(this.target=void 0)},{link:function(l,u,c){var i,a=c.ngHref||c.href;if(a&&-1!==a.indexOf("#")?i=a.replace(/.*(?=#[^\s]+$)/,"").substring(1):c.duScrollspy?i=c.duScrollspy:c.duSmoothScroll&&(i=c.duSmoothScroll),i){var s=n(function(){var n=new o(i,l,u,-(c.offset?parseInt(c.offset,10):t));e.addSpy(n),l.$on("$locationChangeSuccess",n.flushTargetCache.bind(n));var a=r.$on("$stateChangeSuccess",n.flushTargetCache.bind(n));l.$on("$destroy",function(){e.removeSpy(n),a()})},0,!1);l.$on("$destroy",function(){n.cancel(s)})}}}}]);
//# sourceMappingURL=angular-scroll.min.js.map

/**
 * AngularJS module for updating browser title/history based on the current ui-router state.
 *
 * @link https://github.com/nonplus/angular-ui-router-title
 *
 * @license angular-ui-router-title v0.0.4
 * (c) Copyright Stepan Riha <github@nonplus.net>
 * License MIT
 */

(function(angular) {

"use strict";
angular.module("ui.router.title", ["ui.router"])
	.run(["$rootScope", "$timeout", "$state", function($rootScope, $timeout, $state) {

		$rootScope.$on("$stateChangeSuccess", function() {
			var title = getTitleValue($state.$current.locals.globals.$title);
			$timeout(function() {
				$rootScope.$title = title;
			});

			$rootScope.$breadcrumbs = [];
			var state = $state.$current;
			while(state) {
				if(state.resolve && state.resolve.$title) {
					$rootScope.$breadcrumbs.unshift({
						title: getTitleValue(state.locals.globals.$title),
						state: state.self.name,
						stateParams: state.locals.globals.$stateParams
					})
				}
				state = state.parent;
			}
		});

		function getTitleValue(title) {
			return angular.isFunction(title) ? title() : title;
		}

	}]);


})(window.angular);
!function(){"use strict";angular.module("angularLoad",[]).service("angularLoad",["$document","$q","$timeout",function(a,b,c){function d(a){var d={};return function(e){if("undefined"==typeof d[e]){var f=b.defer(),g=a(e);g.onload=g.onreadystatechange=function(a){g.readyState&&"complete"!==g.readyState&&"loaded"!==g.readyState||c(function(){f.resolve(a)})},g.onerror=function(a){c(function(){f.reject(a)})},d[e]=f.promise}return d[e]}}var e=a[0];this.loadScript=d(function(a){var b=e.createElement("script");return b.src=a,e.body.appendChild(b),b}),this.loadCSS=d(function(a){var b=e.createElement("link");return b.rel="stylesheet",b.type="text/css",b.href=a,e.head.appendChild(b),b})}])}();
//# sourceMappingURL=angular-load.min.js.map
/*
 * angular-markdown-directive v0.3.1
 * (c) 2013-2014 Brian Ford http://briantford.com
 * License: MIT
 */

'use strict';

angular.module('btford.markdown', ['ngSanitize']).
  provider('markdownConverter', function () {
    var opts = {};
    return {
      config: function (newOpts) {
        opts = newOpts;
      },
      $get: function () {
        return new showdown.Converter(opts);
      }
    };
  }).
  directive('btfMarkdown', ['$sanitize', 'markdownConverter', function ($sanitize, markdownConverter) {
    return {
      restrict: 'AE',
      link: function (scope, element, attrs) {
        if (attrs.btfMarkdown) {
          // console.log(attrs.btfMarkdown)
          scope.$watch(attrs.btfMarkdown, function (newVal) {
            var html = newVal ? $sanitize(markdownConverter.makeHtml(newVal)) : '';
            element.html(html);
          });
        } else {
          var html = $sanitize(markdownConverter.makeHtml(element.text()));
          element.html(html);
        }
      }
    };
  }]);

/*! typer v0.5.2 | (c) 2015 Pete Redmond |  */
!function(t,e){"use strict";if("function"==typeof define&&define.amd)define(["angular"],e);else{if("undefined"==typeof module||"object"!=typeof module.exports)return e(t.angular);module.exports=e(require("angular"))}}(this,function(t){"use strict";function e(e,n){function r(n,r,o){var u=t.element(r[0].querySelector(".typer")),s={};if(s.repeat=n.repeat=f(n.repeat)||"undefined"==typeof n.repeat?!0:!1,n.shuffle=f(n.shuffle)?!0:!1,s.startTyping=n.startTyping=f(n.startTyping)?!0:!1,s.words=n.shuffle?d(n.words):n.words,s.wordCount=s.words.length,s.count=0,s.startDelay=n.startDelay||500,s.pause=n.pause||1e3,s.typeTime=n.typeTime||250,s.backspaceTime=n.backspaceTime||s.typeTime,s.onTyped=n.onTyped,s.onDeleted=n.onDeleted,s.onComplete=n.onComplete,s.cursor=t.element(r[0].querySelector(".typer__cursor")),s.timer=null,n.highlightBackground?(s.highlight={},s.highlight.background=n.highlightBackground,s.highlight.color=n.highlightColor||"#FFFFFF",s.highlight.speed=s.backspaceTime,s.backAction=a,s.span=c(u,s)):s.backAction=l,n.setInitalWord=function(){return s.startTyping?"":s.words[0]},n.getCursor=function(){return s.highlight?"":n.cursor||"|"},n.$watchCollection("words",function(t,e){t&&(s.words=t,s.wordCount=s.words.length)}),void 0!==n.startTrigger)var h=n.$watch("startTrigger",function(t,e){"boolean"==typeof t&&t&&(i(s,u),h())});else e(function(){i(s,u)},s.startDelay);r.on("$destroy",function(t){p(s)})}function o(){var t=['<div style="display: inline-block;">','<span class="typer">{{setInitalWord()}}</span>','<span class="typer__cursor typer__cursor--blink">{{getCursor()}}</span>',"</div>"];return t.join("")}function i(t,e){t.highlight||u(t),t.startTyping?s(e,t):t.highlight?a(e,t):l(e,t)}function u(t,e){e?t.cursor.addClass("typer__cursor--blink"):t.cursor.removeClass("typer__cursor--blink")}function s(t,e){var r=e.words[e.count],o=r.length,i=0;e.timer=n(function(){if(t.html(r.substring(0,i+1)),++i===o){if(e.count===e.wordCount-1&&!e.repeat)return e.onComplete(),void p(e);e.onTyped(),h(t,e,e.backAction)}},e.typeTime)}function l(t,e){var r=e.words[e.count],o=r.length;e.timer=n(function(){t.html(r.substring(0,o-1)),0===--o&&(e.count=g(e.count,e.wordCount),e.onDeleted(),h(t,e,s))},e.backspaceTime)}function a(t,r){var o=r.words[r.count],i=o.length;r.timer=n(function(){t.html(o.substring(0,i-1)),r.span.html(o.substring(i-1)),0===--i&&(e(function(){r.span.html("")},r.pause),r.count=g(r.count,r.wordCount),r.onDeleted(),h(t,r,s))},r.highlight.speed/i)}function c(e,n){var r=t.element("<span></span>");return r.css({backgroundColor:n.highlight.background,color:n.highlight.color}),e.after(r),r}function h(t,n,r){p(n),n.highlight||u(n,!0),e(function(){n.highlight||u(n,!1),r.apply(null,[t,n])},n.pause)}function p(t){n.cancel(t.timer),t.timer=null}function g(t,e){return t===e-1?0:t+1}function d(t){for(var e,n,r=t.length;r;)n=Math.floor(Math.random()*r),r--,e=t[r],t[r]=t[n],t[n]=e;return t}function f(t){return t===!0||"true"===t}return{template:o(),scope:{words:"=",repeat:"=?",startDelay:"@",pause:"@",typeTime:"@",backspaceTime:"@",highlightBackground:"@",highlightColor:"@",onTyped:"&",onComplete:"&",onDeleted:"&",startTyping:"=?",shuffle:"=?",cursor:"@",startTrigger:"=?"},link:r,restrict:"E",replace:!0}}var n="typer";return t.module(n,[]).directive("typer",e),e.$inject=["$timeout","$interval"],n});