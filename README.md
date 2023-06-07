# sentry-vite-plugin reproduction

## Steps to reproduce

1. Run `npm install`
2. Run `npm run build`

You should see the following error:

```bash
vite v4.3.9 building for production...
✓ 35 modules transformed.
[vite:esbuild-transpile] Transform failed with 1 error:
assets/maska-!~{004}~.js:13:36: ERROR: Unexpected ";"

Unexpected ";"
11 |    constructor(t = {}) {
12 |      m(this, "opts", {});
13 |      m(this, "memo", /* @__PURE__ */ ;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="db-id",e._sentryDebugIdIdentifier="sentry-dbid")}catch(e){}}();new Map());
   |                                      ^
14 |      const s = { ...t };
15 |      if (s.tokens != null) {

✓ built in 725ms
error during build:
Error: Transform failed with 1 error:
assets/maska-!~{004}~.js:13:36: ERROR: Unexpected ";"
    at failureErrorWithLog (vue3-vite-starter/node_modules/esbuild/lib/main.js:1636:15)
    at vue3-vite-starter/node_modules/esbuild/lib/main.js:837:29
    at responseCallbacks.<computed> (vue3-vite-starter/node_modules/esbuild/lib/main.js:697:9)
    at handleIncomingPacket (vue3-vite-starter/node_modules/esbuild/lib/main.js:752:9)
    at Socket.readFromStdout (vue3-vite-starter/node_modules/esbuild/lib/main.js:673:7)
    at Socket.emit (node:events:513:28)
    at Socket.emit (node:domain:489:12)
    at addChunk (node:internal/streams/readable:315:12)
    at readableAddChunk (node:internal/streams/readable:289:9)
    at Socket.Readable.push (node:internal/streams/readable:228:10)
```