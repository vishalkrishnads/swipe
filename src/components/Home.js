import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, ListGroup, Button, Card } from 'react-bootstrap'
import { BiTrash, BiEdit, BiCopy, BiBookAdd } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import './styles.css'
import InvoiceModal from './InvoiceModal';

const Home = () => {

    const navigate = useNavigate();
    const [activeInvoice, setActiveInvoice] = useState({})

    // dummy state for ui testing
    const [state, setState] = useState([])

    const addInvoice = () => {
        navigate('/editor')
    }

    const Item = () => {
        return <ListGroup.Item className='border-0 item' >
                <Row style={{ height: '50px' }}>
                    <Col lg={10} md={6} xs={12} className='invoice d-flex flex-column justify-content-center' >
                        <h5 className='m-0'>Bill issuer name</h5>
                        <p className='m-0'>Invoice number</p>
                    </Col>
                    <Col lg={2} md={6} xs={12}>
                        <div style={{ height: '100%' }} className="d-flex justify-content-end align-items-center gap-2">
                            <BiCopy style={{ height: '38px', width: '38px', padding: '7.5px' }} className="text-primary mt-1 btn" />
                            <BiEdit style={{ height: '38px', width: '38px', padding: '7.5px' }} className="text-primary mt-1 btn" />
                            <BiTrash style={{ height: '38px', width: '38px', padding: '7.5px' }} className="text-white mt-1 btn btn-danger" />
                        </div>
                    </Col>
                </Row>
            </ListGroup.Item>
    }

    return <Row>
        <Col lg={state.length > 0 ? 9 : 12}>
            <Card style={{ height: '80vh' }} className="p-4 p-xl-5 my-3 my-xl-4">
                {state.length > 0 ? <Card.Body style={{ maxHeight: '100%', overflowY: 'auto' }}>
                    <ListGroup>
                        {state.map((item, index) => {
                            return <Item />
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
        </Col>
        {
            Object.keys(activeInvoice).length > 0 ? 
            <InvoiceModal showModal={Object.keys(activeInvoice).length > 0} />
            : null
        }
        {state.length > 0 ? <Col lg={3}>
            <div className="sticky-top pt-md-3 pt-xl-4">
                <Button variant="primary" onClick={addInvoice} className="d-block w-100">New Invoice</Button>
            </div>
        </Col> : null}
    </Row>
}

export default Home;