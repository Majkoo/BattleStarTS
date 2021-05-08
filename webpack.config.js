const path = require('path');
module.exports = {
    entry: {
        main: './src/app.ts'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    { loader: 'ts-loader', options: { onlyCompileBundledFiles: true }}
                ],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
//        library: 'Admin',
        filename: 'bundle.js',
        path: path.resolve(__dirname, './public'),
    }
};