"use strict";var precacheConfig=[["/janpaulan/index.html","c1ccae72983bdb80ab5d817cb2a7d01c"],["/janpaulan/static/css/main.c27e60ea.css","e2b44c18a405c89292ad8ca8bfa25f0c"],["/janpaulan/static/js/main.dc98cdc0.js","badaedd2f8604f8da506b0532a61e7fc"],["/janpaulan/static/media/1.e5195cbc.jpg","e5195cbc51a4b75af05562617cef5c2b"],["/janpaulan/static/media/energizer.d2560078.png","d25600786121d9e1fca1a8de380920e2"],["/janpaulan/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/janpaulan/static/media/fontawesome-webfont.acf3dcb7.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/janpaulan/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/janpaulan/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/janpaulan/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/janpaulan/static/media/header-bg2.4fcf4bad.jpg","4fcf4badc0b9071abc7530c9e5181df8"],["/janpaulan/static/media/makatiindex-full.da7b703b.jpg","da7b703bb5517f730cb529fbdafc9204"],["/janpaulan/static/media/makatiindex-thumbnail.8744c546.jpg","8744c54665bf1205aa1e4fcd3e131e3c"],["/janpaulan/static/media/map-image.f40ed5b1.png","f40ed5b1e791e9d2479ba8b5e67f2df8"],["/janpaulan/static/media/xbox-thumbnail.c6144aa6.png","c6144aa6a80377593cdd9c0ca629d733"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=a),n.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,n,t){var r=new URL(e);return t&&r.pathname.match(t)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var n=new URL(a).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return n.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],n=e[1],t=new URL(a,self.location),r=createCacheKey(t,hashParamName,n,/\.\w{8}\./);return[t.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!n.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,n=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,t),e=urlsToCacheKeys.has(n));var r="/janpaulan/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});