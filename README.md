# vite-plugin-vue-remove-attributes

This plugin removing data attributes from SFC at build time

## Usage

Add plugin to your vite.config.js

```javascript
import { defineConfig } from "vite";
import removeAttrsPlugin from "vite-plugin-vue-remove-attributes";

export default defineConfig({
  plugins: [
    vue(),
    removeAttrsPlugin(["test-id"]), // By default ["test-id"]
  ],
});
```


