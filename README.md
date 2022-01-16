# vite-plugin-vue-remove-attributes
Remove data attributes from SFC at build time

## 📦 Install

```bash
npm i vite-plugin-vue-remove-attributes -D

# yarn
yarn add vite-plugin-vue-remove-attributes -D

# pnpm
pnpm add vite-plugin-vue-remove-attributes -D
```

## 🦄 Usage

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


