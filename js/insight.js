// build time:Mon Oct 01 2018 11:51:06 GMT+0800 (中国标准时间)
(function(n,t){var e=n(".ins-search");var r=e.find(".ins-search-input");var a=e.find(".ins-section-wrapper");var i=e.find(".ins-section-container");e.parent().remove(".ins-search");n("body").append(e);function s(t){return n("<section>").addClass("ins-section").append(n("<header>").addClass("ins-section-header").text(t))}function o(e,r,a,i,s){return n("<div>").addClass("ins-selectable").addClass("ins-search-item").append(n("<header>").append(n("<i>").addClass("icon").addClass("icon-"+e)).append(r!=null&&r!=""?r:t.TRANSLATION["UNTITLED"]).append(a?n("<span>").addClass("ins-slug").text(a):null)).append(i?n("<p>").addClass("ins-search-preview").text(i):null).attr("data-url",s)}function c(n,e){var r;var a;if(e.length===0)return null;r=t.TRANSLATION[n];switch(n){case"POSTS":case"PAGES":a=e.map(function(n){return o("file",n.title,null,n.text.slice(0,150),t.ROOT_URL+n.path)});break;case"CATEGORIES":case"TAGS":a=e.map(function(t){return o(n==="CATEGORIES"?"folder":"tag",t.name,t.slug,null,t.permalink)});break;default:return null}return s(r).append(a)}function u(n,t){var e={};var r=n.pages.concat(n.posts);r.forEach(function(n){if(n[t]){n[t].forEach(function(n){e[n.name]=n})}});var a=[];for(var t in e){a.push(e[t])}return a}function l(n){return n.split(" ").filter(function(n){return!!n}).map(function(n){return n.toUpperCase()})}function f(n,t,e){var r=false;var a=l(n);var i=a.filter(function(n){var r=e.filter(function(e){if(!t.hasOwnProperty(e))return false;if(t[e].toUpperCase().indexOf(n)>-1)return true});if(r.length>0)return true;return false});return i.length===a.length}function p(n){return{POST:function(t){return f(n,t,["title","text"])},PAGE:function(t){return f(n,t,["title","text"])},CATEGORY:function(t){return f(n,t,["name","slug"])},TAG:function(t){return f(n,t,["name","slug"])}}}function d(n,t,e,r){var a=0;l(n).forEach(function(n){var i=new RegExp(n,"img");e.forEach(function(n,e){if(t.hasOwnProperty(n)){var s=t[n].match(i);a+=s?s.length*r[e]:0}})});return a}function h(n){return{POST:function(t){return d(n,t,["title","text"],[3,1])},PAGE:function(t){return d(n,t,["title","text"],[3,1])},CATEGORY:function(t){return d(n,t,["name","slug"],[1,1])},TAG:function(t){return d(n,t,["name","slug"],[1,1])}}}function v(n,t){var e=h(t);var r=p(t);var a=n.posts;var i=n.pages;var s=u(n,"tags");var o=u(n,"categories");return{posts:a.filter(r.POST).sort(function(n,t){return e.POST(t)-e.POST(n)}).slice(0,5),pages:i.filter(r.PAGE).sort(function(n,t){return e.PAGE(t)-e.PAGE(n)}).slice(0,5),categories:o.filter(r.CATEGORY).sort(function(n,t){return e.CATEGORY(t)-e.CATEGORY(n)}).slice(0,5),tags:s.filter(r.TAG).sort(function(n,t){return e.TAG(t)-e.TAG(n)}).slice(0,5)}}function T(n){i.empty();for(var t in n){i.append(c(t.toUpperCase(),n[t]))}}function g(n){if(n.length===0)return;var t=a[0].clientHeight;var e=n.position().top-a.scrollTop();var r=n[0].clientHeight+n.position().top;if(r>t+a.scrollTop()){a.scrollTop(r-a[0].clientHeight)}if(e<0){a.scrollTop(n.position().top)}}function C(t){var e=n.makeArray(i.find(".ins-selectable"));var r=-1;e.forEach(function(t,e){if(n(t).hasClass("active")){r=e;return}});var a=(e.length+r+t)%e.length;n(e[r]).removeClass("active");n(e[a]).addClass("active");g(n(e[a]))}function A(n){if(n&&n.length){location.href=n.attr("data-url")}}n.getJSON(t.CONTENT_URL,function(t){if(location.hash.trim()==="#ins-search"){e.addClass("show")}r.on("input",function(){var e=n(this).val();T(v(t,e))});r.trigger("input")});n(document).on("click focus",".search-form-input",function(){e.addClass("show");e.find(".ins-search-input").focus()}).on("click",".ins-search-item",function(){A(n(this))}).on("click",".ins-close",function(){e.removeClass("show")}).on("keydown",function(n){if(!e.hasClass("show"))return;switch(n.keyCode){case 27:e.removeClass("show");break;case 38:C(-1);break;case 40:C(1);break;case 13:A(i.find(".ins-selectable.active").eq(0));break}})})(jQuery,window.INSIGHT_CONFIG);
//rebuild by neat 