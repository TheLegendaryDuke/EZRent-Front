import path from "path";
import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import * as config from "./webpack.dev.config.js";

const app           = express(),
    DIST_DIR      = __dirname,
    HTML_FILE     = path.join(DIST_DIR, "index.html"),
    isDevelopment = process.env.NODE_ENV !== "production",
    DEFAULT_PORT  = 3000,
    compiler      = webpack(config);

app.set("port", process.env.PORT || DEFAULT_PORT);

if (!isDevelopment) {
    //Serving the files on the dist folder
    app.use(express.static(DIST_DIR));

    //Send index.html when the user access the web
    app.get("*", (req, res) => res.sendFile(HTML_FILE));
}else {
    console.log("Please set NODE_ENV to \"production\" when using npm start")
}

app.listen(app.get("port"));