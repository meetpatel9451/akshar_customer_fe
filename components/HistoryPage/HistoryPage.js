import React, { useEffect, useState } from 'react';
import API from '../../store/api';
import { Button, Chip } from '@mui/material';
import moment from 'moment';

const HistoryPage = () => {
    console.log("calll");
    const [historyList, setHistoryList] = useState([]);

    useEffect(() => {
        async function fetch() {
            const user_id = localStorage.getItem("user_id");
            const url = `api/v1/order_history/client/${Number(user_id)}`;
            const response = await API.get(url);
            console.log("reponse", response.data.data);
            setHistoryList(response?.data?.data || []);
        }
        fetch()
    },[]);

    const getChip = (status) => {
        if (status.toLowerCase() == "approved") {
            return(
                <Chip label={status} color='success'/>
            )
        } else if (status.toLowerCase() == "disapproved") {
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
                    <div className="sec-title centered" style={{marginBottom: "4rem"}}>
                        <h2>Order And History</h2>
                        <div className="text">Our approach to SEO is uniquely built around what we know works…and what we know <br /> doesn’t work. With over 200 verified factors in play.</div>
                    </div>
                    <div className="cart-outer">
                        <div className="table-outer" style={{border: "1px solid #d7d7d7",  borderRadius: "6px", boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.10)", transition: "box-shadow 0.3s ease-in-out"}}>
                            <table className="cart-table">
                                <thead className="cart-header">
                                    <tr>
                                        <th className="prod-column">OrderId</th>
                                        <th>DateTime</th>
                                        <th>Product</th>
                                        <th>Image</th>
                                        <th>Remarks</th>
                                        <th>Qty</th>
                                        <th>Rate</th>
                                        <th>Height</th>
                                        <th>Weight</th>
                                        <th className="price">Total</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {historyList &&
                                        historyList.length > 0 &&
                                        historyList.map((history, index) => (
                                            <tr key={index}>
                                                <td style={{textAlign: "center", paddingLeft: 0}}>{history?.id || ""}</td>
                                                <td style={{textAlign: "center", paddingLeft: 0}}>{history?.createdAt ? moment(history?.createdAt).format('YYYY-MM-DD') : ""}</td>
                                                <td style={{textAlign: "center", paddingLeft: 0}}>{history?.OrderProduct[0]?.product?.name || ""}</td>
                                                <td style={{textAlign: "center", paddingLeft: 0}}>{history?.OrderProduct[0]?.order_image ? <Button onClick={() => window.location.href = history?.OrderProduct[0]?.order_image}>View</Button> : "-"}</td>
                                                <td style={{textAlign: "center", paddingLeft: 0}}>{history?.remarks || ""}</td>
                                                <td style={{textAlign: "center", paddingLeft: 0}}>{history?.OrderProduct[0]?.quantity || ""}</td>
                                                <td style={{textAlign: "center", paddingLeft: 0}}>{history?.OrderProduct[0]?.rate || ""}</td>
                                                <td style={{textAlign: "center", paddingLeft: 0}}>{history?.OrderProduct[0]?.height || ""}</td>
                                                <td style={{textAlign: "center", paddingLeft: 0}}>{history?.OrderProduct[0]?.width || ""}</td>
                                                <td style={{textAlign: "center", paddingLeft: 0}}>{history?.OrderProduct[0]?.amount || ""}</td>
                                                <td style={{textAlign: "center", paddingLeft: 0}}>{getChip(history?.status || "")}</td>
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

export default HistoryPage;
