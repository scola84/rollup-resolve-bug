import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'index.js',
  dest: 'dist.js',
  format: 'cjs',
  plugins: [
    nodeResolve({
      jsnext: true
    })
  ]
};
