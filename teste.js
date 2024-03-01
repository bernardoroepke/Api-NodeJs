import validator from 'cpf-cnpj-validator';

const num = validator.cpf.generate();

validator.cpf.isValid(num);

validator.cpf.format(num);

console.log(validator);