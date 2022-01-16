import path from "path";

export default function removeAttrsPlugin(options) {
  return {
    name: 'vite-plugin-vue-remove-attributes',
    apply: 'build',
    transform(src, id) {
      const fileExt = path.parse(id).ext;

      if([".vue"].includes(fileExt)) {
        const attrsToRemove = options ?? ["test-id"];

        attrsToRemove.forEach(attribute => {
          const staticAttribute = `data-${attribute}`
          const bindAttribute = `v-bind:data-${attribute}`
          const shortBindAttribute = `:data-${attribute}`
          src = src.replaceAll(staticAttribute, "");
          src = src.replaceAll(bindAttribute, "");
          src = src.replaceAll(shortBindAttribute, "");
        })
      }

      return {
        code: src,
      };
    },
  }
}
