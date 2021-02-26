// const withSass = require('@zeit/next-sass')
// // const withCSS = require('@zeit/next-css');
// const withFonts = require('next-fonts');
// const withPlugins = require('next-compose-plugins');
// const optimizedImages = require('next-optimized-images');
// const path = require('path')

// const nextConfig = {
//     webpack: (config, { isServer }) => {
//       if (isServer) {
//         const antStyles = /antd\/.*?\/style\/css.*?/;
//         const origExternals = [...config.externals];
//         config.externals = [ // eslint-disable-line
//           (context, request, callback) => { // eslint-disable-line
//             if (request.match(antStyles)) return callback();
//             if (typeof origExternals[0] === 'function') {
//               origExternals[0](context, request, callback);
//             } else {
//               callback();
//             }
//           },
//           ...(typeof origExternals[0] === 'function' ? [] : origExternals),
//         ];

//         config.module.rules.unshift({
//           test: antStyles,
//           use: 'null-loader',
//         });
//       }
//       return config;
//     },
//   };

// module.exports = withPlugins([
//     [optimizedImages, {
//         inlineImageLimit: 8192,
//         imagesFolder: 'images',
//         imagesName: '[name]-[hash].[ext]',
//         handleImages: ['jpeg', 'jpg', 'png', 'svg', 'webp', 'gif', 'ico'],
//         optimizeImages: true,
//         optimizeImagesInDev: false,
//         mozjpeg: {
//             quality: 80,
//         },
//         optipng: {
//             optimizationLevel: 3,
//         },
//         pngquant: false,
//         gifsicle: {
//             interlaced: true,
//             optimizationLevel: 3,
//         },
//         webp: {
//             preset: 'default',
//             quality: 75,
//         },
//     }],
//     // [withCSS],
//     [withFonts],
//     [withSass,
//         {
//                 cssModules: true,
//                 cssLoaderOptions: {
//                   importLoaders: 2,
//                 },
//                 webpack: config => {
//                   config.module.rules.forEach(rule => {
//                     if (rule && rule.test && rule.test.toString().includes('.scss')) {
//                       rule.rules = rule.use.map(useRule => {
//                         if (typeof useRule === 'string') {
//                           return { loader: useRule };
//                         }
//                         if (useRule.loader === 'css-loader') {
//                           return {
//                             oneOf: [
//                               {
//                                 test: new RegExp('.global.scss$'),
//                                 loader: useRule.loader,
//                                 options: {},
//                               },
//                               {
//                                 loader: useRule.loader,
//                                 options: { modules: true }
//                               },
//                             ],
//                           };
//                         }
//                         return useRule;
//                       });
//                       delete rule.use;
//                     }
//                   });
//                   return config;
//                 },
//               }
//         ]

// ],nextConfig);

// const withSass = require('@zeit/next-sass');
// module.exports = withSass({
//   cssModules: true,
//   cssLoaderOptions: {
//     importLoaders: 2,
//   },
//   webpack: config => {
//     config.module.rules.forEach(rule => {
//       if (rule && rule.test && rule.test.toString().includes('.scss')) {
//         rule.rules = rule.use.map(useRule => {
//           if (typeof useRule === 'string') {
//             return { loader: useRule };
//           }
//           if (useRule.loader === 'css-loader') {
//             return {
//               oneOf: [
//                 {
//                   test: new RegExp('.global.scss$'),
//                   loader: useRule.loader,
//                   options: {},
//                 },
//                 {
//                   loader: useRule.loader,
//                   options: { modules: true }
//                 },
//               ],
//             };
//           }
//           return useRule;
//         });
//         delete rule.use;
//       }
//     });
//     return config;
//   },
// });
