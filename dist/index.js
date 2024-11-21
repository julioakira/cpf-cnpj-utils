'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var INVALID$1 = ["00000000000", "11111111111", "22222222222", "33333333333", "44444444444", "55555555555", "66666666666", "77777777777", "88888888888", "99999999999", "12345678909"];
var Strip$1 = function Strip(cpf) {
  return cpf ? cpf.trim().replace(/\D/g, "") : "";
};
var Format$1 = function Format(cpf) {
  return [[cpf.slice(0, 3), cpf.slice(3, 6), cpf.slice(6, 9)].filter(function (e) {
    return e;
  }).join("."), cpf.slice(9, 11)].filter(function (e) {
    return e;
  }).join("-");
};
var ValidateDigit$1 = function ValidateDigit(cpf) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var firstDigits = cpf.slice(0, 9 + offset).split("").map(function (e) {
    return Number(e);
  });
  var lastDigits = cpf.slice(9, 11).split("").map(function (e) {
    return Number(e);
  });
  var sequence = firstDigits.length + 1;
  var multiplied = firstDigits.reduce(function (acc, curr, idx) {
    return acc + curr * (sequence - idx);
  }, 0);
  var modulus = multiplied * 10 % 11;
  return modulus === 10 ? lastDigits[0 + offset] === 0 : lastDigits[0 + offset] === modulus;
};
var GenerateBase$1 = function GenerateBase() {
  var cpf = "";
  for (var i = 0; i < 9; i++) {
    cpf += Math.floor(Math.random() * 9);
  }
  return cpf;
};
var GenerateVerifierDigit$1 = function GenerateVerifierDigit(base) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var digit = 0;
  var partial = base + digit.toString();
  while (!ValidateDigit$1(partial, offset)) {
    partial.slice(0, 10 + offset);
    digit++;
    partial = base + digit.toString();
  }
  return digit.toString();
};
var Generate$1 = function Generate() {
  var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var cpf = GenerateBase$1();
  cpf += GenerateVerifierDigit$1(cpf);
  cpf += GenerateVerifierDigit$1(cpf, 1);
  return format ? Format$1(cpf) : cpf;
};
var Validate$1 = function Validate(cpf) {
  var zero_pad = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var clean = zero_pad ? Strip$1(cpf).padStart(11, '0') : Strip$1(cpf);
  if (clean.length !== 11 && !zero_pad) return false;
  if (!clean || INVALID$1.includes(clean) || !ValidateDigit$1(clean) || !ValidateDigit$1(clean, 1)) return false;
  return true;
};
var cpf = {
  Format: Format$1,
  Strip: Strip$1,
  Validate: Validate$1,
  Generate: Generate$1
};

var INVALID = ['00000000000000', '11111111111111', '22222222222222', '33333333333333', '44444444444444', '55555555555555', '66666666666666', '77777777777777', '88888888888888', '99999999999999'];
var Strip = function Strip(cnpj) {
  return cnpj ? cnpj.trim().replace(/\D/g, '') : '';
};
var Format = function Format(cnpj) {
  return [[[[cnpj.slice(0, 2), cnpj.slice(2, 5), cnpj.slice(5, 8)].filter(function (e) {
    return e;
  }).join('.'), cnpj.slice(8, 12)].filter(function (e) {
    return e;
  }).join('/')], cnpj.slice(12, 14)].filter(function (e) {
    return e;
  }).join('-');
};
var ValidateDigit = function ValidateDigit(cnpj) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var factors = offset === 0 ? [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2] : [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  var firstDigits = cnpj.slice(0, 12 + offset).split('').map(function (e) {
    return Number(e);
  });
  var lastDigits = cnpj.slice(12, 14).split('').map(function (e) {
    return Number(e);
  });
  var multiplied = firstDigits.reduce(function (acc, curr, idx) {
    return acc + curr * factors[idx];
  }, 0);
  var modulus = multiplied % 11;
  return modulus < 2 ? lastDigits[0 + offset] === 0 : lastDigits[0 + offset] === 11 - modulus;
};
var GenerateBase = function GenerateBase() {
  var cnpj = '';
  for (var i = 0; i < 12; i++) {
    cnpj += Math.floor(Math.random() * 9);
  }
  return cnpj;
};
var GenerateVerifierDigit = function GenerateVerifierDigit(base) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var digit = 0;
  var partial = base + digit.toString();
  while (!ValidateDigit(partial, offset)) {
    partial.slice(0, 12 + offset);
    digit++;
    partial = base + digit.toString();
  }
  return digit.toString();
};
var Generate = function Generate() {
  var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var cnpj = GenerateBase();
  cnpj += GenerateVerifierDigit(cnpj);
  cnpj += GenerateVerifierDigit(cnpj, 1);
  return format ? Format(cnpj) : cnpj;
};
var Validate = function Validate(cnpj) {
  var zero_pad = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var clean = zero_pad ? Strip(cnpj).padStart(14, '0') : Strip(cnpj);
  if (clean.length !== 14 && !zero_pad) return false;
  if (!clean || INVALID.includes(clean) || !ValidateDigit(clean) || !ValidateDigit(clean, 1)) return false;
  return true;
};
var cnpj = {
  Format: Format,
  Strip: Strip,
  Validate: Validate,
  Generate: Generate
};

exports.CNPJ = cnpj;
exports.CPF = cpf;
