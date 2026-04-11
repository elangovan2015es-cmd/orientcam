/* OrientCam sw.js v2.2 — orientcam-v2.2-cache — © EIL */
const CACHE='orientcam-v2.2-cache';
const NF=['index.html','./index.html','/'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./index.html','./manifest.json','./version.json'])));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()).then(()=>self.clients.matchAll().then(cs=>cs.forEach(c=>c.postMessage({type:'SW_UPDATED',version:'2.2'})))));});
self.addEventListener('fetch',e=>{const url=new URL(e.request.url);const isIdx=NF.some(p=>url.pathname.endsWith(p)||url.pathname==='/');if(isIdx){e.respondWith(fetch(e.request).then(res=>{const cl=res.clone();caches.open(CACHE).then(c=>c.put(e.request,cl));return res;}).catch(()=>caches.match(e.request)));}else{e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request)));}});
self.addEventListener('message',e=>{if(e.data&&e.data.type==='SKIP_WAITING')self.skipWaiting();});
