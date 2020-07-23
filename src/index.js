import {
  getSavedData,
  stringToHTML
} from './utilities/helper.js'

class Code {
  constructor (customOptions) {
    const defaultOptions = {
      i18n: {
        locale: 'en-US',
        rtl: 'ltr',
        translations: {

        }
      },
      controllers: [

      ]
    }

    this.options = {
      ...defaultOptions,
      ...customOptions
    }
  }

  render (i18n, savedData) {
    const textDirection = (i18n.rtl !== undefined) ? i18n.rtl : this.options.i18n.rtl

    return stringToHTML(
      `<div class="freedom-editor-blocks ${this.constructor.name}-block" data-block-type="${this.constructor.name}">
      <pre>
      <code contenteditable>${getSavedData(savedData)}</code>
      </pre>
    </div>`)
  }

  save (block) {
    const codeField = block.querySelector('code')
    if (codeField.textContent === '') {
      return
    }
    return {
      type: this.constructor.name,
      data: {
        code: codeField.textContent
      }
    }
  }
};

export {
  Code
}
