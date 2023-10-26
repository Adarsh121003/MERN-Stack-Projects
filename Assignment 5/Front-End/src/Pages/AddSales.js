import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../config';

function AddSales() {
    const headingStyle = {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '26px',
        fontWeight: 700,
    };

    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [amount, setAmount] = useState('');
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const CONFIG_OBJ = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
    };

    const addSales = (event) => {
        event.preventDefault();
        setLoading(true);
        const requestData = { pname: productName, quantity, amount };
        axios
            .post(`${API_BASE_URL}/addsales`, requestData, CONFIG_OBJ)
            .then((result) => {
                if (result.status === 201) {
                    setLoading(false);
                    Swal.fire({
                        icon: 'success',
                        title: 'Sales added successfully!',
                    });
                    setProductName('');
                    setQuantity('');
                    setAmount('');
                }
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
                Swal.fire({
                    icon: 'error',
                    title: error.response.data.error,
                });
            });
    };

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('user'));
        if (!userInfo) {
            navigate('/');
        }
        setUser(userInfo);
    }, [navigate]);

    return (
        <div>
            <div className='row justify-content-center mt-3'>
                <div className='text-center' style={headingStyle}>
                    Add Sale Entry
                </div>
                <div className='col-6'>
                    <form onSubmit={addSales}>
                        <div className="form-group">
                            <label htmlFor="productName">Product Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={productName}
                                onChange={(ev) => setProductName(ev.target.value)}
                                id="productName"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="quantity">Quantity</label>
                            <input
                                type="number"
                                value={quantity}
                                onChange={(ev) => setQuantity(ev.target.value)}
                                className="form-control"
                                id="quantity"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="amount">Amount</label>
                            <input
                                type="number"
                                className="form-control"
                                value={amount}
                                onChange={(ev) => setAmount(ev.target.value)}
                                id="amount"
                            />
                        </div>
                        <div className='mt-3 d-grid'>
                            <button
                                type="submit"
                                className="btn btn-primary xl btn-block"
                                disabled={loading}
                            >
                                {loading ? 'Adding Sales...' : 'Submit'}
                            </button>
                        </div>
                        {loading && (
                            <div className="col-md-12 mt-3 text-center">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddSales;
