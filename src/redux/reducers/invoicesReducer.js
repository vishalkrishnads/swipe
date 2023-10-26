import { getData, setData } from '../db'

const addInvoice = (state, invoice) => {
    const result = [...state, invoice]
    setData(result);
    return result
}

const editInvoice = (state, payloadInvoice) => {
    const result = state.map((invoice) => 
        invoice.id === payloadInvoice.id ? payloadInvoice : invoice
    )
    setData(result);
    return result
}

const deleteInvoice = (state, payloadInvoice) => {
    const result = state.filter((invoice) => invoice.id !== payloadInvoice)
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
        default:
            return state // this serves as the 'view' action
    }
}

export default invoicesReducer;
