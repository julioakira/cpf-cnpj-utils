# cpf-cnpj-utils

A zero-dependency simple toolkit to deal with CPFs and CNPJs written in Typescript.

### Installation

- yarn
```
yarn add @julioakira/cpf-cnpj-utils
```

- npm
```
npm i @julioakira/cpf-cnpj-utils
```

## Usage

You can import or require CPF, CNPJ or both in your code.

```js
import { CPF, CNPJ } from '@julioakira/cpf-cnpj-utils'

const { CPF, CNPJ } = require('@julioakira/cpf-cnpj-utils');
```

Both CPF and CNPJ packages have the same functionalities:

- ***Format*** - Formats and unformatted CPF/CNPJ.
- ***Strip*** - Strips a formatted CPF/CNPJ.
- ***Validate*** - Validates a formatted or unformatted CPF/CNPJ.
- ***Generate*** - Generates a valid CPF/CNPJ.

```js
// Returns 30.306.294/0001-45
const formatted = CNPJ.Format('30306294000145');

// Returns 30306294000145
const stripped = CNPJ.Strip('30.306.294/0001-45');

// Generates a valid unformatted CNPJ
const cnpj = CNPJ.Generate()

// Generates a valid formatted CNPJ
const cnpj = CNPJ.Generate(true);

// Returns true for valid and false for invalid
const valid = CNPJ.Validate('30306294000145')
const valid = CNPJ.Validate('30.306.294/0001-45');

const invalid = CNPJ.Validate('30306294000155');
const invalid = CNPJ.Validate('30.306.294/0001-55');
```

```js
// Returns 606.772.720-06
const formatted = CPF.Format('60677272006');

// Returns 60677272006
const stripped = CPF.Strip('606.772.720-06');

// Generates a valid unformatted CPF
const cpf = CPF.Generate()

// Generates a valid formatted CNPJ
const cpf = CPF.Generate(true);

// Returns true for valid and false for invalid
const valid = CPF.Validate('60677272006')
const valid = CPF.Validate('606.772.720-06');

const invalid = CPF.Validate('40308985062');
const invalid = CPF.Validate('403.089.850-62');
```

## Variable Length CPFs and CNPJs

Some CPFs and CNPJs might have variable lengths and not be zero padded up to their regular length. The `validate` function has a optional `zero_pad` argument, which is `true` by default but can be manually set to `false` if desired:

```js
//  CNPJ with 13 digits returns true
const valid = CNPJ.Validate('4307650002502');

// Setting auto zero padding to false invalidates and returns false
const invalid = CNPJ.Validate('4307650002502', false);

```

```js
//  CPF with 10 digits returns true
const valid = CPF.Validate('2204306240');

// Setting auto zero padding to false invalidates and returns false
const invalid = CNPJ.Validate('2204306240', false);

```


## Tests

Tests are handled by Jest.

- yarn
```
yarn test
```

- npm
```
npm test
```


