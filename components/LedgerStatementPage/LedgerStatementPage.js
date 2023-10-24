import React, { useEffect, useState } from 'react';
import API from '../../store/api';
import moment from 'moment';

const LedgerStatementPage = () => {

    const [statementList, setStatementList] = useState([]);

    console.log("statementList", statementList);

    useEffect(() => {
        async function fetch() {
            const user_id = localStorage.getItem("user_id");
            const url = `api/v1/ledger/client/${Number(user_id)}`;
            const response = await API.get(url);
            console.log("reponse", response.data.data);
            setStatementList(response?.data?.data || []);
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
                        <h2>Ledger Statement</h2>
                        <div className="text">Our approach to SEO is uniquely built around what we know works…and what we know <br /> doesn’t work. With over 200 verified factors in play.</div>
                    </div>
                    <div className="cart-outer">
                        <div className="table-outer" style={{border: "1px solid #d7d7d7", borderRadius: "6px", boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.10)", transition: "box-shadow 0.3s ease-in-out"}}>
                            <table className="cart-table">
                                <thead className="cart-header">
                                    <tr>
                                        <th className="prod-column">Sr.No.</th>
                                        <th>Date</th>
                                        <th>Transaction Type</th>
                                        <th>Journal Name</th>
                                        <th className="price">Debit</th>
                                        <th className="price">Credit</th>
                                        <th className="price">Balance</th>
                                        <th>View Receipt</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {statementList &&
                                        statementList?.items?.length > 0 &&
                                        statementList?.items?.map((ledger, index) => (
                                            <tr key={index}>
                                                <td style={{textAlign: "center", paddingLeft: 0}}>{ledger?.id || ""}</td>
                                                <td style={{textAlign: "center", paddingLeft: 0}}>{ledger?.createdAt ? moment(ledger?.createdAt).format('YYYY-MM-DD') : ""}</td>
                                                <td style={{textAlign: "center", paddingLeft: 0}}>{ledger?.acEntry?.length > 0 && ledger?.acEntry[0]?.debitor_creditor_type ? ledger?.acEntry[0]?.debitor_creditor_type : ""}</td>
                                                <td style={{textAlign: "center", paddingLeft: 0}}>{ledger?.acEntry?.length > 0 && ledger?.acEntry[0]?.journal_item_name ? ledger?.acEntry[0]?.journal_item_name : ""}</td>
                                                <td style={{textAlign: "center", paddingLeft: 0}}>{ledger?.debit || ""}</td>
                                                <td style={{textAlign: "center", paddingLeft: 0}}>{ledger?.credit || ""}</td>
                                                <td style={{textAlign: "center", paddingLeft: 0}}>{+ledger?.balance || ""}</td>
                                                <td style={{textAlign: "center", paddingLeft: 0}}>{ledger?.acEntry?.length > 0 && ledger?.acEntry[0]?.receipt_img ? <Button onClick={() => window.location.href = ledger?.acEntry[0]?.receipt_img}>View</Button> : "-"}</td>
                                                <td style={{textAlign: "center", paddingLeft: 0}}>{ledger?.acEntry?.length > 0 && ledger?.acEntry[0]?.status ? getChip(ledger?.acEntry[0]?.status || "") : "-"}</td>
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

export default LedgerStatementPage;

