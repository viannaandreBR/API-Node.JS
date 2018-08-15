'use strict';


// fluen-validator.js 
// Módulo ValidationContract ---> Validação de Inputs

// lista de erros
let errors = [];

// consultor inicializa uma nova lista de erros
function ValidationContract() {
    errors = [];
}

// Método de validação campo requerido
ValidationContract.prototype.isRequired = (value, message) => {
    if (!value || value.length <= 0)
        errors.push({ message: message });
}


// Método de validação com mínimo de caracter
ValidationContract.prototype.hasMinLen = (value, min, message) => {
    if (!value || value.length < min)
        errors.push({ message: message });
}


// Método de validação com máximo de caracter
ValidationContract.prototype.hasMaxLen = (value, max, message) => {
    if (!value || value.length > max)
        errors.push({ message: message });
}

// Método de validação com tamanho fixo
ValidationContract.prototype.isFixedLen = (value, len, message) => {
    if (value.length != len)
        errors.push({ message: message });
}

// Método de validação se é um e-mail válido
ValidationContract.prototype.isEmail = (value, message) => {
    var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    if (!reg.test(value))
        errors.push({ message: message });
}

// Método de validação retorno da lista de erros
ValidationContract.prototype.errors = () => { 
    return errors; 
}

// Método de validação clear
ValidationContract.prototype.clear = () => {
    errors = [];
}


// Método de validação is.valid, se é válido ou não
ValidationContract.prototype.isValid = () => {
    return errors.length == 0;
}

module.exports = ValidationContract;