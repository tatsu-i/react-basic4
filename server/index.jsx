import React, { StrictMode } from "react";
import App from "../src/App.tsx";
import { renderToString } from "react-dom/server";
import express from "express";
import path from "path";
import fs from "fs";

const app = express();

app.use(express.static("dist"));

//Express　のルーティング
app.get("*", (req, res) => {
  //renderToStringでReactAppをHTMLに変換。まさにこれがSSR。→hydrateRoot
  const appHtml = renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  );

  const manifest = JSON.parse(
    fs.readFileSync(
      path.resolve(__dirname, "../dist/.vite/manifest.json"),
      "utf-8"
    )
  );
  const jsFile = manifest["index.html"].file;
  const cssFile = manifest["index.html"].css[0];

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite + React + TS</title>
        <link rel="stylesheet" href="/${cssFile}">
      </head>
      <body>
        <div id="root">${appHtml}</div>
        <script type="module" src="/${jsFile}"></script>
      </body>
    </html>
  `;

  //クライアントサイドにhtmlを送信
  res.send(html);
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
