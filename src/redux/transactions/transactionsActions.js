import { createAction } from '@reduxjs/toolkit';

export const loadTransactionsStart = createAction('LOAD_TRANSACTIONS/START');

export const loadTransactionsSuccess = createAction(
    'LOAD_TRANSACTIONS/SUCCESS',
    transactions => ({
        payload: { transactions },
    }),
);

export const loadTransactionsError = createAction(
    'LOAD_TRANSACTIONS/ERROR',
    error => ({
        payload: { message: error.message },
        meta: { error: true },
    }),
);

export const addTransactionValid = createAction(
    'ADD_CONTACT/START',
    transaction => ({
        payload: { transaction },
        meta: { addTransaction: true },
    }),
);

export const addTransactionStart = createAction('ADD_TRANSACTION/START');

export const addTransactionSuccess = createAction(
    'ADD_TRANSACTION/SUCCESS',
    transaction => ({
        payload: { transaction },
    }),
);

export const addTransactionError = createAction(
    'ADD_TRANSACTION/ERROR',
    error => ({
        payload: { message: error.message },
        meta: { error: true },
    }),
);
