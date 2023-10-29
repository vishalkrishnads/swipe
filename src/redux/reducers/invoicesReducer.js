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

    const invoice = {
        ...payloadInvoice,
        id: generateId(),
        invoiceNumber
    }

    return addInvoice(state, invoice);
}

const addInvoice = (state, payloadInvoice) => {
    const result = [...state, payloadInvoice]
    result.sort((a, b) => parseInt(a.invoiceNumber) - parseInt(b.invoiceNumber));
    setData(result);
    return result
}

const editInvoice = (state, payloadInvoice) => {
    const result = state.map((invoice) => 
        invoice.id === payloadInvoice.id ? payloadInvoice : invoice
    )
    result.sort((a, b) => a.invoiceNumber - b.invoiceNumber);
    setData(result);
    return result
}

const deleteInvoice = (state, payloadInvoice) => {
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
