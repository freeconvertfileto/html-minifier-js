# HTML Minifier

Remove whitespace and comments from HTML to reduce file size, with preservation of IE conditional comments, entirely in the browser.

**Live Demo:** https://file-converter-free.com/en/developer-tools/html-minifier-online

## How It Works

`minifyHTML(html)` applies a pipeline of six regex replacements: `<!--(?!\[if)[\s\S]*?-->` strips all HTML comments while preserving IE conditional comments (those starting with `[if`). `\s+` collapses runs of whitespace to a single space. `>\s+<` removes whitespace between adjacent closing and opening tags. `\s+>` removes whitespace before `>`. `>\s+` removes whitespace after `>`. `\s+<` removes whitespace before `<`. Size statistics are computed with `new Blob([text]).size` for byte-accurate UTF-8 measurement of both original and minified output.

## Features

- Strips HTML comments (preserves IE conditional comments `<!--[if...]`)
- Collapses all inter-tag whitespace
- Original / minified size and percentage saved display
- Copy output to clipboard

## Browser APIs Used

- Clipboard API (`navigator.clipboard.writeText`)
- Blob API (for byte-accurate size calculation)

## Code Structure

| File | Description |
|------|-------------|
| `html-minifier.js` | `minifyHTML` 6-step regex pipeline (comment strip preserving `[if`, whitespace collapse, inter-tag space removal), `Blob.size` byte stats |

## Usage

| Element ID / Selector | Purpose |
|----------------------|---------|
| `#minInput` | HTML input textarea |
| `#minOutput` | Minified HTML output |
| `#minRun` | Minify button |
| `#minCopy` | Copy minified HTML to clipboard |
| `#minClear` | Clear both fields |
| `#minStats` | Original / minified size and savings |

## License

MIT
