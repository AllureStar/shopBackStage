import defaultSettings from './defaultSettings'; // https://umijs.org/config/

import slash from 'slash2';
import themePluginConfig from './themePluginConfig';
const { pwa } = defaultSettings; // preview.pro.ant.design only do not use in your production ;
// preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。

const { ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION } = process.env;
const isAntDesignProPreview = ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site';
const plugins = [
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: {
        hmr: true,
      },
      locale: {
        // default false
        enable: true,
        // default zh-CN
        default: 'zh-CN',
        // default true, when it is true, will use `navigator.language` overwrite default
        baseNavigator: true,
      },
      dynamicImport: {
        loadingComponent: './components/PageLoading/index',
        webpackChunkName: true,
        level: 3,
      },
      pwa: pwa
        ? {
            workboxPluginMode: 'InjectManifest',
            workboxOptions: {
              importWorkboxFrom: 'local',
            },
          }
        : false, // default close dll, because issue https://github.com/ant-design/ant-design-pro/issues/4665
      // dll features https://webpack.js.org/plugins/dll-plugin/
      // dll: {
      //   include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch'],
      //   exclude: ['@babel/runtime', 'netlify-lambda'],
      // },
    },
  ],
  [
    'umi-plugin-pro-block',
    {
      moveMock: false,
      moveService: false,
      modifyRequest: true,
      autoAddMenu: true,
    },
  ],
];

if (isAntDesignProPreview) {
  // 针对 preview.pro.ant.design 的 GA 统计代码
  plugins.push([
    'umi-plugin-ga',
    {
      code: 'UA-72788897-6',
    },
  ]);
  plugins.push(['umi-plugin-antd-theme', themePluginConfig]);
}

export default {
  plugins,
  hash: true,
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/zh/guide/router.html
  routes: [
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
      ],
    },
    {
      path: '/',
      component: '../layouts/SecurityLayout',
      routes: [
        {
          path: '/',
          component: '../layouts/BasicLayout',
          //authority: ['admin', 'user'],
          routes: [
            {
              path: '/',
              redirect: '/welcome',
            },
            {
              path: '/welcome',
              name: 'welcome',
              icon: 'smile',
              component: './Welcome',
            },
            {
              path: '/admin',
              name: 'admin',
              icon: 'crown',
              component: './Admin',
              authority: ['admin'],
            },
            {
              path: '/order',
              name: 'order',
              icon: 'crown',
              component: './Order',
            },
            // ../layouts/SecurityLayout代表下一层
            {
              path: '/content',
              name: 'content',
              icon: 'crown',
              component: '../layouts/SecurityLayout',
              routes: [
                //商品中心
                {
                  path: '/content/Commoditycenter',
                  name: 'Commoditycenter',
                  icon: 'crown',
                  component: './content/Commoditycenter',
                },
                //访问记录
                {
                  path: '/content/Access',
                  name: 'Access',
                  icon: 'crown',
                  component: './content/Access',
                },
                //设置分类
                {
                  path: '/content/Setclassification',
                  name: 'Setclassification',
                  icon: 'crown',
                  component: './content/Setclassification',
                },
                //  合作商家
                {
                  path: '/content/Cooperativebusiness',
                  name: 'Cooperativebusiness',
                  icon: 'crown',
                  component: './content/Cooperativebusiness',
                },
                //  幻灯片
                {
                  path: '/content/Slide',
                  name: 'Slide',
                  icon: 'crown',
                  component: './content/Slide',
                },
              ],
            },

            //用户

            {
              path: '/Usermember',
              name: 'Usermember',
              icon: 'crown',
              component: '../layouts/SecurityLayout',
              routes: [
                //会员管理
                {
                  path: '/Usermember/Administratorman',
                  name: 'Administratorman',
                  icon: 'crown',
                  component: './Usermember/Administratorman',
                },

                //管理员管理
                {
                  path: '/Usermember/Memberman',
                  name: 'Memberman',
                  icon: 'crown',
                  component: './Usermember/Memberman',
                },
              ],
            },

            //个人信息

            {
              path: '/Personalinfo',
              name: 'Personalinfo',
              icon: 'crown',
              component: '../layouts/SecurityLayout',
              routes: [
                //修改密码
                {
                  path: '/Personalinfo/Modifypass',
                  name: 'Modifypass',
                  icon: 'crown',
                  component: './Personalinfo/Modifypass',
                },

                //修改个人信息
                {
                  path: '/Personalinfo/Modifyperinfo',
                  name: 'Modifyperinfo',
                  icon: 'crown',
                  component: './Personalinfo/Modifyperinfo',
                },
              ],
            },

            //俊章写的
            {
              path: '/ShoppingMall',
              name: 'ShoppingMall',
              icon: 'crown',
              component: '../layouts/SecurityLayout',
              routes: [
                {
                  path: '/ShoppingMall/allOrder',
                  name: 'allOrder',
                  component: './ShoppingMall/allOrder/allOrder',
                },
                {
                  path: '/ShoppingMall/AccountChange',
                  name: 'AccountChange',
                  component: './ShoppingMall/accountChange/AccountChange',
                },
                {
                  path: '/ShoppingMall/drawing',
                  name: 'drawing',
                  component: './ShoppingMall/drawing/drawing',
                },
                {
                  path: '/ShoppingMall/stock',
                  name: 'stock',
                  component: './ShoppingMall/stock/stock',
                },
                {
                  path: '/ShoppingMall/salesList',
                  name: 'salesList',
                  component: './ShoppingMall/salesList/salesList',
                },
                {
                  path: '/ShoppingMall/courierNumber',
                  name: 'courierNumber',
                  component: './ShoppingMall/courierNumber/courierNumber',
                },
                {
                  path: '/ShoppingMall/rechargeRecord',
                  name: 'rechargeRecord',
                  component: './ShoppingMall/rechargeRecord/rechargeRecord',
                },
                {
                  path: '/ShoppingMall/agent',
                  name: 'agent',
                  component: './ShoppingMall/agent/agent',
                },
              ],
            },
            {
              path: '/systemConfiguration',
              name: 'systemConfiguration',
              icon: 'crown',
              component: '../layouts/SecurityLayout',
              routes: [
                {
                  path: '/systemConfiguration/distribution',
                  name: 'distribution',
                  component: './systemConfiguration/distribution/distribution',
                },
                {
                  path: '/systemConfiguration/weChat',
                  name: 'weChat',
                  component: './systemConfiguration/weChat/weChat',
                },
                {
                  path: '/systemConfiguration/platform',
                  name: 'platform',
                  component: './systemConfiguration/platform/platform',
                },
              ],
            },

            {
              component: './404',
            },
          ],
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
  },
  define: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION:
      ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION || '', // preview.pro.ant.design only do not use in your production ; preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
  },
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  disableRedirectHoist: true,
  cssLoaderOptions: {
    modules: true,
    getLocalIdent: (context, _, localName) => {
      if (
        context.resourcePath.includes('node_modules') ||
        context.resourcePath.includes('.css') ||
        context.resourcePath.includes('ant.design.pro.less') ||
        context.resourcePath.includes('global.less')
      ) {
        return localName;
      }

      const match = context.resourcePath.match(/src(.*)/);

      if (match && match[1]) {
        const antdProPath = match[1].replace('.less', '');
        const arr = slash(antdProPath)
          .split('/')
          .map(a => a.replace(/([A-Z])/g, '-$1'))
          .map(a => a.toLowerCase());
        return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
      }

      return localName;
    },
  },
  manifest: {
    basePath: '/',
  }, // chainWebpack: webpackPlugin,
  // proxy: {
  //   '/server/api/': {
  //     target: 'https://preview.pro.ant.design/',
  //     changeOrigin: true,
  //     pathRewrite: { '^/server': '' },
  //   },
  // },
};
