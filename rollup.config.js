export default {
  input: 'src/index.js',
  external: ['path'],
  output: [
    { file: 'dist/vite-plugin-vue-remove-attributes.cjs.js', format: 'cjs' },
    { file: 'dist/vite-plugin-vue-remove-attributes.es.js', format: 'es' }
  ]
}
