import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import API from '../../store/api';
import moment from 'moment';
import { Button, Chip } from '@mui/material';

const carts = [];

const PaymentPage = () => {

    const [paymentList, setPaymentList] = useState([]);

    useEffect(() => {
        async function fetch() {
            const user_id = localStorage.getItem("user_id");
            const url = `api/v1/ac_entry/client/${Number(user_id)}`;
            const response = await API.get(url);
            setPaymentList(response?.data?.data || []);
        }
        fetch()
    },[]);

    const getChip = (status) => {
        if (status.toLowerCase() == "approved") {
            return(
                <Chip label={status} color='success'/>
            )
        } else if (status.toLowerCase() == "disapproved"  || status.toLowerCase() == "decline") {
            return(
                <Chip label={status} color='error'/>
            )
        } else {
            return(
                <Chip label={"Pending"} color='primary'/>
            )
        }
    }

    return (
        <div>
            <section className="history-section">
                <div className="auto-container">
                    <div className="sec-title centered" style={{marginBottom: "1rem"}}>
                        <h2>Payment</h2>
                        <div className="text">Effortless payments for a smoother, hassle-free experience in your everyday transactions.</div>
                    </div>
                    <Link href="/payment-receipt/add-payment" ><div className="p-5 text-right" style={{display: 'flex', justifyContent: 'flex-end'}}><button className="theme-btn btn-style-two"><span className="txt">Add Payment</span></button></div></Link>
                    <div className="cart-outer">
                        <div className="table-outer" style={{border: "1px solid #d7d7d7",  borderRadius: "6px", boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.10)", transition: "box-shadow 0.3s ease-in-out"}}>
                            <table className="cart-table">
                                <thead className="cart-header">
                                    <tr>
                                        <th className="prod-column">Sr. No.</th>
                                        <th>Payment Type</th>
                                        <th>Date</th>
                                        <th className="price">Amount</th>
                                        <th>Remarks</th>
                                        <th>View</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {paymentList &&
                                        paymentList?.items?.length > 0 &&
                                        paymentList?.items?.map((payment, index) => (
                                            <tr key={index}>
                                                <td style={{textAlign: "center", paddingLeft: 0}}>{payment?.id || ""}</td>
                                                <td style={{textAlign: "center", paddingLeft: 0}}>{payment?.payment_type || ""}</td>
                                                <td style={{textAlign: "center", paddingLeft: 0}}>{payment?.date ? moment(payment?.date).format('YYYY-MM-DD') : ""}</td>
                                                <td style={{textAlign: "center", paddingLeft: 0}}>{payment?.amount > 0 ? payment?.amount : ""}</td>
                                                <td style={{textAlign: "center", paddingLeft: 0}}>{payment?.remarks ? payment?.remarks : ""}</td>
                                                <td style={{textAlign: "center", paddingLeft: 0}}>{payment?.receipt_img ? <Button onClick={() => window.open(payment?.receipt_img, '_blank')}>View</Button> : "-"}</td>
                                                <td style={{textAlign: "center", paddingLeft: 0}}>{payment?.status ? getChip(payment?.status || "") : "-"}</td>
                                                {/* <td className="sub-total">${history.}</td> */}
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )

}

export default PaymentPage;

