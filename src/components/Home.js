/* 
    This file contains the newly built home screen which shows a list of all invoices
    Each invoice has action buttons to copy, edit & delete it.
    Clicking on an invoice will open it. The page also has a New Invoice button for creating a new invoice.
*/

import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, ListGroup, Button, Card } from 'react-bootstrap'
import { BiTrash, BiEdit, BiCopy, BiBookAdd } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import './styles.css'
import InvoiceModal from './InvoiceModal';

const Home = ({ invoices, deleteInvoice, copyInvoice }) => {

    const navigate = useNavigate();
    const [activeInvoice, setActiveInvoice] = useState({})

    // adding and editing nav actions are same. add doesn't need to have a payload
    // editor will figure out that this is add because of the lack of payload
    const addInvoice = () => {
        navigate('/editor')
    }

    // send the invoice to be edited as payload for edit action
    const editInvoice = (invoice) => {
        navigate('/editor', {
            state: {
                invoice
            }
        })
    }

    const Item = ({ invoice }) => {
        return <ListGroup.Item className='border-0 item' >
            <Row style={{ height: '50px' }}>
                <Col lg={10} md={6} xs={12} className='invoice d-flex flex-column justify-content-center' onClick={() => setActiveInvoice(invoice)} >
                    <h5 className='m-0'>{invoice.billFrom}</h5>
                    <p className='m-0'>Invoice #{invoice.invoiceNumber}</p>
                </Col>
                <Col lg={2} md={6} xs={12} className='actions'>
                    <div style={{ height: '100%' }} className="d-flex justify-content-end align-items-center gap-2">
                        <BiCopy title='Copy to a new invoice' onClick={() => copyInvoice(invoice)} style={{ height: '38px', width: '38px', padding: '7.5px' }} className="text-primary mt-1 btn" />
                        <BiEdit title='Edit this invoice' onClick={() => editInvoice(invoice)} style={{ height: '38px', width: '38px', padding: '7.5px' }} className="text-primary mt-1 btn" />
                        <BiTrash title='Delete this invoice' onClick={() => deleteInvoice(invoice)} style={{ height: '38px', width: '38px', padding: '7.5px' }} className="text-white mt-1 btn btn-danger" />
                    </div>
                </Col>
            </Row>
        </ListGroup.Item>
    }

    return <Row>
        <Col lg={invoices.length > 0 ? 9 : 12}>
            <Card style={{ height: '80vh' }} className="p-4 p-xl-5 my-3 my-xl-4">
                {invoices.length > 0 ? <Card.Body style={{ maxHeight: '100%', overflowY: 'auto' }}>
                    <ListGroup>
                        {invoices.map((item, index) => {
                            return <Item key={index} invoice={item} />
                        })}
                    </ListGroup>
                </Card.Body> :
                    <Card.Body>
                        <div onClick={addInvoice} style={{ height: '100%' }} className="d-flex flex-column justify-content-center align-items-center gap-2">
                            <BiBookAdd style={{ height: '80px', width: '80px', padding: '7.5px' }} className="text-primary mt-1 btn" />
                            <h5 className='text-primary'>Click to add a new invoice</h5>
                        </div>
                    </Card.Body>}
            </Card>
            {
                Object.keys(activeInvoice).length > 0 ?
                    <InvoiceModal
                        showModal={Object.keys(activeInvoice).length > 0}
                        closeModal={() => setActiveInvoice({})}
                        info={activeInvoice}
                        items={activeInvoice.items}
                        currency={activeInvoice.currency}
                        subTotal={activeInvoice.subTotal}
                        taxAmmount={activeInvoice.taxAmmount}
                        discountAmmount={activeInvoice.discountAmmount}
                        total={activeInvoice.total}
                    />
                    : null
            }
        </Col>

        {invoices.length > 0 ? <Col lg={3}>
            <div className="sticky-top pt-md-3 pt-xl-4">
                <Button variant="primary" onClick={addInvoice} className="d-block w-100">New Invoice</Button>
                <p className='text-center'>Use the action buttons near each invoice to copy, edit & delete them</p>
            </div>
        </Col> : null}
    </Row>
}

const mapStateToProps = (state) => ({
    invoices: state.manager
})

const mapDispatchToProps = (dispatch) => ({
    addInvoice: (invoice) => dispatch({ type: 'add', payload: invoice }),
    deleteInvoice: (invoice) => dispatch({ type: 'delete', payload: invoice }),
    copyInvoice: (invoice) => dispatch({ type: 'copy', payload: invoice })
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
