import MarkdownIt from "markdown-it";

export function renderMarkdown(text: string) {
  const Prismjs = require("prismjs");
  const loadLanguages = require("prismjs/components/");
  const md = new MarkdownIt({
    html: true,
    highlight: (str, lang) => {
      if (!Prismjs.languages[lang]) {
        loadLanguages([lang]);
      }
      return (
        `<pre class="language-${lang}">` +
        `<label data-clipboard-action="copy" class="language">${lang}</label>` +
        `<code>${Prismjs.highlight(
          str,
          Prismjs.languages[lang],
          lang
        )}</code></pre>`
      );
    }
  });

  return md.render(text);
}
