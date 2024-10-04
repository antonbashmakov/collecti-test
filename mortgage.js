'use strict'

const moment = require('./moment')

const help = ` 
The application takes in three parameters which must be in following format: 

  principal - a positive number greater then zero
  rate - a positive number, zero allowed
  term - a positive number greater then zero

For instance a loan of 100 000 with 6% yearly interest with 12 months of payment time will look like this 

    node mortgage 100000 6 12
`;

const [ principal, rate, term ] = process.argv.slice(-3);


let error;

if(isNaN(principal) || Number(principal)  <= 0) {
  error = 'Principal must be a positive number greater then zero!';
}
if(isNaN(rate) || Number(rate)  < 0) {
  error = 'Rate must be a positive number!';
}

if(isNaN(term) || Number(term)  <= 0 || !Number.isInteger(Number(term))) {
  error = 'Term must be positive number!';
}

if(error) {
  console.error(error);
  console.error(help)
  process.exit(1);
}

/*
* Normalized rate. Part of rate payed each period, decimal e.g. rate of 6% is  0.06 / 12 = 0.005
*/
const r = rate / 12 / 100; 
const ir = 1 + r;   
const  irNTerm = ir ** term;



const monthlyPayment = r ? (irNTerm * principal * r / (irNTerm - 1)) : principal / term;

let currentPrincipal = Number(principal);

for (let i = 1; i <= term; i++) {
  const currentDate = moment().add(i, 'M');
  const interest = currentPrincipal * r;
  const amortization =  monthlyPayment - interest

  console.log(`${i} ${currentDate.format('YYYY-MM-DD')} ${currentPrincipal.toFixed(2)} ${interest.toFixed(2)} ${amortization.toFixed(2)}`);

  currentPrincipal -= amortization;
}