import { defineConfig } from 'umi';
const outputPath = 'dist/';

const env = process.env.NODE_ENV;
const publicPath =
  env === 'development' ? 'http://127.0.0.1:8000/' : './';

export default defineConfig({
  ssr: {
    devServerRender: false,
  },
  locale: {
    default: 'zh-CN',
    antd: false,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
  dva: {
    immer: true,
    // hmr: false,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  outputPath: outputPath,
  publicPath: publicPath,
  // routes: [{ path: '/', component: '@/pages/index' }],
});
