const escape = require('shell-quote').quote

function listQuote(filenames) {
  return filenames.map((filename) => `'${filename}'`)
}

function listEscape(filenames) {
  return filenames.map((filename) => escape([filename]))
}

module.exports = {
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `prettier --write ${listQuote(listEscape(filenames)).join(' ')}`,
    `eslint --fix ${listQuote(filenames).join(' ')}`
  ]
}
