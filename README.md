# Freedom Editor Vanilla Code Block

[![License](https://img.shields.io/badge/license-MIT-blue)](https://img.shields.io/github/license/winston0410/freedom-editor) [![Maintainability](https://api.codeclimate.com/v1/badges/5027214872226fd3c0e3/maintainability)](https://codeclimate.com/github/winston0410/freedom-editor-vanilla-code-block/maintainability) [![Known Vulnerabilities](https://snyk.io/test/github/winston0410/freedom-editor-vanilla-code-block/badge.svg?targetFile=package.json)](https://snyk.io/test/github/winston0410/freedom-editor-vanilla-code-block?targetFile=package.json) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/820b7de253e14e59b8a8360ad7bff6a1)](https://www.codacy.com/manual/winston0410/freedom-editor-vanilla-code-block?utm_source=github.com&utm_medium=referral&utm_content=winston0410/freedom-editor-vanilla-code-block&utm_campaign=Badge_Grade)

A code block written in vanilla Javascript for Freedom Editor.

## Installation

```
npm i @freedom-editor/vanilla-code-block
```

## Usage

Import this block to the script where you config Freedom Editor. Create a new instance.

```
import { Code } from '@freedom-editor/vanilla-code-block'

const codeBlock = new Code()
```

### Register paragraph block in Freedom Editor instance

Register this block in `options.registeredBlocks`.

```
registeredBlocks: [
  codeBlock
]
```

## API Reference

TODO

## License

This project is licensed under the MIT License - see the [license](https://github.com/winston0410/freedom-editor/LICENSE.md) for more details.
