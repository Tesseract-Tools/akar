// Keeps the viewer on the phone so it opens without a connection, and takes models shared to it
// (Android: Share > Akar, once added to the home screen).
const VERSION = "akar-viewer-0.19.1";
const SHELL = ["./", "index.html", "app.js", "worker.js", "app.css", "manifest.webmanifest", "icons/icon.svg", "icons/icon-192.png", "brand/akar-wordmark.png", "brand/tesseract-logo.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("akar-viewer-") && k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) {
    return;
  }
  // A model shared to the app: kept for the page, which opens it.
  if (e.request.method === "POST" && url.pathname.endsWith("/share")) {
    e.respondWith((async () => {
      const form = await e.request.formData();
      const file = form.get("model");
      if (file && file.size) {
        const cache = await caches.open("akar-shared");
        await cache.put("shared-file", new Response(file, { headers: { "x-name": encodeURIComponent(file.name || "Model.akr") } }));
      }
      return Response.redirect("./?shared=1", 303);
    })());
    return;
  }
  if (e.request.method !== "GET") {
    return;
  }
  const fingerprinted = url.pathname.includes("/_framework/") && !url.pathname.endsWith("/dotnet.js") && !url.pathname.endsWith("/dotnet.js.gz");
  if (fingerprinted) {
    // (Akar's own code: its file names change with each version, so what's kept is always right)
    e.respondWith(caches.open(VERSION).then(async (c) => {
      const hit = await c.match(e.request);
      if (hit) return hit;
      const res = await fetch(e.request);
      if (res.ok) c.put(e.request, res.clone());
      return res;
    }));
    return;
  }
  // The page itself: the newest when there's a connection, else what's kept.
  e.respondWith(caches.open(VERSION).then(async (c) => {
    try {
      const res = await fetch(e.request, { cache: "no-cache" });
      if (res.ok) c.put(e.request, res.clone());
      return res;
    } catch {
      const hit = await c.match(e.request, { ignoreSearch: true });
      if (hit) return hit;
      throw new Error("offline");
    }
  }));
});
