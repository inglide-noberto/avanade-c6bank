import TypeDb from "../../../types/typeDb";

const db : Array<TypeDb>= [
    {
        id: 1,
        type: "pix",
        amount: 100,
        date: '2022-10-19',
        description: 'Pizza com a galera',
        operation: 'credito'
    },
    {
        id: 2,
        type: "debito",
        amount: 50,
        date: '2022-10-19',
        description: 'Combustível',
        operation: 'debit'
    },
    {
        id: 3,
        type: "ted",
        amount: 150000,
        date: '2022-09-30',
        description: 'Depósito de salário',
        operation: 'deposito'
    },
    {
        id: 4,
        type: "pix",
        amount: 80,
        date: '2022-10-08',
        description: 'Uber',
        operation: 'debito'
    },
    {
        id: 5,
        type: "credito",
        amount: 150,
        date: '2022-10-12',
        description: 'Jantar',
        operation: 'credito'
    },
    {
        id: 6,
        type: "debito",
        amount: 200,
        date: '2022-10-15',
        description: 'Compras avulsas',
        operation: 'debit'
    },
];

export default db;