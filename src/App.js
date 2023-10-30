import React from 'react';
import  ReactDOM  from 'react-dom/client';
import LoginPage from './LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/my-style.scss';

const AppLayout = () =>{
    return (
        <LoginPage />
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);