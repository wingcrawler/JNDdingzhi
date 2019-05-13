const path = require('path');
const ENV = process.env.NODE_ENV

module.exports = {
  wpyExt: '.wpy',
  build: {
    web: {
      htmlTemplate: path.join('src', 'index.template.html'),
      htmlOutput: path.join('web', 'index.html'),
      jsOutput: path.join('web', 'index.js')
    }
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    },
    modules: ['node_modules']
  },
  eslint: true,
  compilers: {
    // less: {
    //   compress: true
    // },
    sass: {
      outputStyle: 'compressed'
    },
    babel: {
      sourceMap: false,
      presets: [
        'env'
      ],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread',
        'transform-export-extensions',
      ]
    }
  },
  plugins: {
    preprocess: {
      filter: /\.(js|wpy)$/,
      context: { ENV }
    }
  },
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
}

// 非开发环境
if (ENV !== 'dev') {
  // 禁用sourceMap
  delete module.exports.compilers.babel.sourcesMap

  // 压缩sass
  module.exports.compilers['sass'] = {outputStyle: 'compressed'}

  // 插件
  Object.assign(module.exports.plugins, {
    // 压缩js
    uglifyjs: {
      filter: /\.js$/,
      config: {
        // 压缩选项
        compress: {
          // 删除console打印语句
          drop_console: ENV === 'prod',
          // 删除debugger调试语句
          drop_debugger: ENV === 'prod'
        }
      }
    },
  })
}
// else {
//   // 插件
//   Object.assign(module.exports.plugins, {
//     // 压缩js
//     uglifyjs: {
//       filter: /().js$/,
//       config: {
//         // 压缩选项
//         compress: {
//           // 删除console打印语句
//           drop_console: ENV === 'prod',
//           // 删除debugger调试语句
//           drop_debugger: ENV === 'prod'
//         }
//       }
//     }
//   })
// }
