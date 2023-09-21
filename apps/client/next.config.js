// const withCSS = require("@zeit/next-css");
// const withFonts = require("next-fonts");
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
// const withSass = require("@zeit/next-sass");
const postcssflexbugsfixes = require("postcss-flexbugs-fixes");
const postcsspresetenv = require("postcss-preset-env");
const purgeCSS = require("@fullhuman/postcss-purgecss")
const withImages = require('next-images');

module.exports = withPlugins([
	[
		optimizedImages,
		{
			inlineImageLimit: 8192,
			imagesFolder: "assets/images",
			imagesName: "[name]-[hash].[ext]",
			handleImages: ["jpeg", "jpg", "png", "svg", "webp", "gif", "ico"],
			optimizeImages: true,
			optimizeImagesInDev: false,
			// mozjpeg: {
			//     quality: 80,
			// },
			optipng: {
				optimizationLevel: 3,
			},
			pngquant: false,
			gifsicle: {
				interlaced: true,
				optimizationLevel: 3,
			},
			webp: {
				preset: "default",
				quality: 75,
			},
		},
	],
	// [withCSS],
    // [withSass],
    postcssflexbugsfixes,
    [
        postcsspresetenv,
      {
        "autoprefixer": {
          "flexbox": "no-2009"
        },
        "stage": 3,
        "features": {
          "custom-properties": false
        }
      }
    ],
    [
        purgeCSS,
      {
        content: [
            './pages/**/*.{js,jsx,ts,tsx}',
            './components/**/*.{js,jsx,ts,tsx}'
        ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: ["html", "body"]
      }
	],
	// [withFonts],
	withImages({
        assetPrefix: './',
        webpack(config, options) {
            return config;
        }
    }),
	
]);
