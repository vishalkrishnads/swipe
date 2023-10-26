/*
    This file contains some utility database functions for storing invoice lists permenantly (as in, non-volatile)
    I'm using the browser localStorage to achieve this for the time being.
    Since all DB transactions happen via these methods, they can be changed to use a different storage mechanism
*/

// utility function to add an invoice to the list
export const setData = (list) => {
    localStorage.setItem('invoices', JSON.stringify(list))
}

// utility function to get a list of all invoices
export const getData = () => {
    const invoices = localStorage.getItem('invoices');
    return invoices != null ? JSON.parse(invoices) : []
}