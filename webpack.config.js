let webpack = require('webpack');

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/components/main.jsx',
            Nav: 'app/components/nav.jsx',
            Weather: 'app/components/weather.jsx',
            About: 'app/components/about.jsx',
            Examples: 'app/components/examples.jsx',
            WeatherForm: 'app/components/weather-form.jsx',
            WeatherMessage: 'app/components/weather-message.jsx',
            OpenWeatherMap: 'app/api/OpenWeatherMap.jsx',
            ErroModal: 'app/components/ErrorModal.jsx',
            applicationStyles: 'app/styles/app.scss'

        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /.jsx?$/,
                exclude: /(node_modules | bower_components)/
            }
        ]
    },
    devtool: 'eval-source-map'
}
;