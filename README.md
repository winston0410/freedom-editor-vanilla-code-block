# Freedom Editor Lighterhtml Code Block

[![License](https://img.shields.io/badge/license-MIT-blue)](https://img.shields.io/github/license/winston0410/freedom-editor) [![Maintainability](https://api.codeclimate.com/v1/badges/efec2ea3587adc69fbce/maintainability)](https://codeclimate.com/github/winston0410/freedom-editor-lighterhtml-heading-block/maintainability) [![Known Vulnerabilities](https://snyk.io/test/github/winston0410/freedom-editor-lighterhtml-heading-block/badge.svg?targetFile=package.json)](https://snyk.io/test/github/winston0410/freedom-editor-lighterhtml-heading-block?targetFile=package.json) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/1fee29a4436d4eee9417a234796643e6)](https://www.codacy.com/manual/winston0410/freedom-editor-lighterhtml-heading-block?utm_source=github.com&utm_medium=referral&utm_content=winston0410/freedom-editor-lighterhtml-heading-block&utm_campaign=Badge_Grade)

A code block built with [Lighterhtml](https://github.com/WebReflection/lighterhtml) for Freedom Editor.

## Installation

```
npm i @freedom-editor/lighterhtml-code-block
```

## Usage

Import this block to the script where you config Freedom Editor. Create a new instance.

```
import { Code } from '@freedom-editor/lighterhtml-code-block'

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
