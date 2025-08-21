The tooltip works in dev, but is missing styles in prod.

```
$ npm run dev
# observe that it works 🚀

$ npm run build
$ node dist/server/entry.mjs
# observe that it doesn't work 😭
```
