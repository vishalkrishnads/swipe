import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Editor from './components/InvoiceForm';

const App = () => {
  return (    
    <div className="App d-flex flex-column align-items-center justify-content-center w-100">
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor" element={<Editor />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
