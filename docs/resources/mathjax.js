// window.MathJax = {
//     tex2jax: {
//         inlineMath: [["\\(", "\\)"]],
//         displayMath: [["\\[", "\\]"]],
//         processEscapes: true,
//         processEnvironments: true
//     },
//     options: {
//         ignoreHtmlClass: ".*|",
//         processHtmlClass: "arithmatex"
//     },
//     tex: {
//         tags: "ams",
//         TagSide: "right",
//         TagIndent: ".8em",
//         MultLineWidth: "85%",
//         equationNumbers: {
//             autoNumber: "AMS",
//         },
//         unicode: {
//             fonts: "STIXGeneral,'Arial Unicode MS'"
//         }
//     },
//     displayAlign: "center",
//     showProcessingMessages: false,
//     messageStyle: "none"
// };

// document$.subscribe(() => {
//     MathJax.typesetPromise()
// })
MathJax.Hub.Config({
    tex2jax: {
        inlineMath: [["$", "$"], ["\\(", "\\)"]],
        displayMath: [["$$", "$$"], ["\\[", "\\]"]],
        processEscapes: true,
        processEnvironments: true,
    },
    tex: {
        // AutoNumbering of displayed formulas
        equationNumbers: { autoNumber: "AMS" },

        // All mathjax extensions:
        // http://docs.mathjax.org/en/latest/tex.html#tex-and-latex-extensions
        // Source code for all extensions:
        // https://github.com/mathjax/MathJax/tree/master/extensions/TeX
        extensions: [
            "color.js", // Color support in LaTeX
            "autobold.js", // support for \boldsymbol{...}
            "AMSmath.js",
            "AMSsymbols.js",
            "AMScd.js", // http://www.jmilne.org/not/Mamscd.pdf
            "bbox.js", // support for \bbox[options]{math}
            // "begingroup.js", // mainly for formulas localization
            // "cancel.js" // support for strikethrough formulas
            // "HTML.js" // works by default
            // "mhchem.js" // chemical formulas
            // "uniconde.js" // works by default
        ]
    },
    displayAlign: "center",
});