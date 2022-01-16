# vite-plugin-vue-remove-attributes

This plugin removing data attributes from SFC at build time

## Usage

Add plugin to your vite.config.js

```javascript
import { defineConfig } from "vite";
import removeAttrsPlugin from "vite-plugin-vue-remove-attributes";

export default defineConfig({
  plugins: [
    removeAttrsPlugin(["test-id"]) // By default ["test-id"]
  ]
});
```

Inspired by [vue-cli-plugin-test-attrs](https://github.com/LinusBorg/vue-cli-plugin-test-attrs)


