import MarkdownIt from "markdown-it";

export function renderMarkdown(text: string) {
  const Prism = require("prismjs");
  const loadLanguages = require("prismjs/components/");
  const md = new MarkdownIt({
    html: true,
    highlight: (str, lang) => {
      if (lang === "css") {
        lang = "scss";
      }
      if (!Prism.languages[lang]) {
        loadLanguages([lang]);
      }
      const grammar = Prism.languages[lang];
      return (
        `<pre class="language-${lang}">` +
        `<label class="language">${lang}</label>` +
        `<code>${
          grammar ? Prism.highlight(str, Prism.languages[lang], lang) : str
        }</code></pre>`
      );
    }
  });

  return md.render(text);
}
