# About

The result of running this application will me a mortgage schema in a table format with the following columns: 

```Number Of payment, Date of payment, Principle, interest amount, Amortization```

The application takes in three parameters which must be in following format: 

principal - a positive number greater then zero
rate - a positive number, zero allowed
term - a positive number greater then zero

For instance a loan of 100 000 with 6% yearly interest with 12 months of payment time will look like this 

    node mortgage 100000 6 12

Output will look like following: 
```
1 2024-11-03 100000.00 541.67 8087.98
2 2024-12-03 91912.02 497.86 8131.78
3 2025-01-03 83780.24 453.81 8175.83
4 2025-02-03 75604.41 409.52 8220.12
5 2025-03-03 67384.29 365.00 8264.64
6 2025-04-03 59119.65 320.23 8309.41
7 2025-05-03 50810.24 275.22 8354.42
8 2025-06-03 42455.82 229.97 8399.67
9 2025-07-03 34056.14 184.47 8445.17
10 2025-08-03 25610.97 138.73 8490.92
11 2025-09-03 17120.06 92.73 8536.91
12 2025-10-03 8583.15 46.49 8583.15
```

Source of [information](https://en.wikipedia.org/wiki/Mortgage_calculator)

# Prerequisites

In order to run this application locally you will need to install  [node](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs).

## Run

A loan of 100 000 with 6% yearly interest with 12 months of payment time will look like this 

### `node mortgage 100000 6 12`