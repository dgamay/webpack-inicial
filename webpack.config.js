const HtmlWebPackPlugin      = require('html-webpack-plugin');
const MiniCssExtractPlugin   = require('mini-css-extract-plugin');
const CopyPlugin             = require("copy-webpack-plugin");
 
 
module.exports = {
 
    mode: 'development',
    output: { // para que cada que se corre el run build  borre y cree de nuevo los archivos 
        clean: true
    },
    
    module: {
        rules: [
            {
                test: /\.html$/i, //busca todos los archivos con extencion HTML
                loader: 'html-loader',
                options: {
                   sources : false
                },
            }, 
            // para importar estios
            {
                test: /\.css$/i,
                exclude: /style.css$/,// si es aplicada la linea de arriba se excluye esta
                use: ['style-loader', 'css-loader'],
              },
              //para importar estilos minificados
              {
                  test: /style.css$/,
                  use: [MiniCssExtractPlugin.loader, 'css-loader'],
              },
              //para trabaar con imagenes
              {
                test: /\.(png|jpe?g|gif)$/i,
                loader:'file-loader',
              }
            // {
            //     test: /\.css$/i,  
            //     use: [ 'style-loader', 'css-loader']
            // },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'Mi WebPack App',
            template: './src/index.html', // que quiero tomar 
            filename: './index.html' //donde lo voy a poner
        }),
        new MiniCssExtractPlugin({
            filename:'[name].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
                { from: "src/assets/", to: "assets/" },
               
              ],
        })
    ]
 
    
}

