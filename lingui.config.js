// lingui.config.js

const { formatter } = require("@lingui/format-po")

const locales = ['en', 'fr']

if (process.env.NODE_ENV !== "production") {
    locales.push("pseudo")
}

module.exports = {
    locales: locales,
    sourceLocale: "en",
    pseudoLocale: "pseudo",
    fallbackLocales: {
      default: 'en'
    },
    catalogs: [
        {
            path: 'src/translations/locales/{locale}/messages',
            include: ['src/app']
        }
    ],
    // format: 'po'
    format: formatter({ origins: false }),
    // format: "minimal"
}