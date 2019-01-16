module.exports = (parameters = {
  innerHTML: null,
  scriptText: null,
  stylesText: null,
  className: null,
  tagName: null,
  outputFolder: null,
}) => {
  let {innerHTML, scriptText, stylesText, className, tagName, outputFolder} = parameters

  if (stylesText) {
    require('./write-css')(stylesText, outputFolder, tagName)
  }

  if (scriptText && scriptText.trim()) {
    if (!scriptText.includes('class')) {
      console.error(`The <script> for ${tagName} must include a class named "${className}", or just delete the <script> for no functionality.`)
      process.exit(1)
    }

    require('./transform-script-text')(scriptText, tagName, className, outputFolder, innerHTML)
  } else {
    require('./transform-script-text')(null, tagName, className, outputFolder, innerHTML)
  }
}