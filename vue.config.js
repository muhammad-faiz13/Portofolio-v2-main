const { defineConfig } = require('@vue-cli-service')
module.exports = {
       transpileDependencies: [
           'dependency-name'
       ],
  publicPath: process.env.NODE_ENV === "production" ? "/Portofolio-v2-main/" : "/",
   };


