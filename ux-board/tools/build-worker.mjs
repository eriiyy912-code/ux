import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const htmlPath = resolve(root, "index.html");
const boardPath = resolve(root, "design-board.html");
const cssPath = resolve(root, "styles.css");
const jsPath = resolve(root, "app.js");
const outPath = resolve(root, "dist/server/index.js");

const [html, boardHtml, css, js] = await Promise.all([
  readFile(htmlPath, "utf8"),
  readFile(boardPath, "utf8"),
  readFile(cssPath, "utf8"),
  readFile(jsPath, "utf8")
]);

const bundled = html
  .replace(/<link rel="stylesheet" href="\.\/styles\.css" \/>/, `<style>${css}</style>`)
  .replace(/<script src="\.\/app\.js"><\/script>/, `<script>${js}</script>`);

const worker = `const html = ${JSON.stringify(bundled)};
const boardHtml = ${JSON.stringify(boardHtml)};

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const body = url.pathname === "/design-board.html" ? boardHtml : html;
    return new Response(body, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=60"
      }
    });
  }
};
`;

await mkdir(dirname(outPath), { recursive: true });
await writeFile(outPath, worker);
