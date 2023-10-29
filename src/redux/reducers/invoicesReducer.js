/* 
    This file contains the one and only redux reducer in the application.
    It has actions for adding, deleting, editing & copying invoices.
    The file also has a couple of utility functions for modularity & readability
*/

import { getData, setData } from '../db'

// utility function to get a list of all used invoice numbers to avoid duplication
export const getUsedNumbers = (invoices) => {
    let list = [];
    for(const each of invoices) list.push(parseInt(each.invoiceNumber))
    return list;
}

// utility function to generate random unique id's
export const generateId = () => {
    return (+ new Date() + Math.floor(Math.random() * 999999)).toString(36)
}

const copyInvoice = (state, payloadInvoice) => {

    // get this invoice's number
    let invoiceNumber = parseInt(payloadInvoice.invoiceNumber) + 1;
    
    // make sure that the number doesn't repeat
    const forbiddenInvoiceNumbers = getUsedNumbers(state);
    while(forbiddenInvoiceNumbers.includes(invoiceNumber)) invoiceNumber++;

    // create a copy of the invoice with different id & number
    const invoice = {
        ...payloadInvoice,
        id: generateId(),
        invoiceNumber
    }

    // and then add it as a normal one
    return addInvoice(state, invoice);
}

const addInvoice = (state, payloadInvoice) => {

    // just add the new invoice to the array
    const result = [...state, payloadInvoice]
    // and sort based on the invoice number
    result.sort((a, b) => parseInt(a.invoiceNumber) - parseInt(b.invoiceNumber));
    
    setData(result);
    return result
}

const editInvoice = (state, payloadInvoice) => {

    // in the place of the invoice with the same id, put this edited invoice
    const result = state.map((invoice) => 
        invoice.id === payloadInvoice.id ? payloadInvoice : invoice
    )
    // and sort based on the invoice number
    result.sort((a, b) => a.invoiceNumber - b.invoiceNumber);
    
    setData(result);
    return result
}

const deleteInvoice = (state, payloadInvoice) => {

    // remove the invoice that matches this one. no need to sort now
    const result = state.filter((invoice) => invoice.id !== payloadInvoice.id)
    
    setData(result);
    return result
}

// this application seems to become overly complex with multiple reducers
// i'm opting for a single reducer with different types of actions
const invoicesReducer = (state = getData(), action) => {
    switch(action.type) {
        case 'add':
            return addInvoice(state, action.payload)
        case 'edit':
            return editInvoice(state, action.payload)
        case 'delete':
            return deleteInvoice(state, action.payload)
        case 'copy':
            return copyInvoice(state, action.payload)
        default:
            return state
    }
}

export default invoicesReducer;
