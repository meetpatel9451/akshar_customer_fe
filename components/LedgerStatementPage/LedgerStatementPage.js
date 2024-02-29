import React, { useEffect, useState } from 'react';
import API from '../../store/api';
import moment from 'moment';
import { Backdrop, Button, Chip, CircularProgress } from '@mui/material';
import config from '../../configs/config';

const LedgerStatementPage = () => {

    const [statementList, setStatementList] = useState([]);
    const user_id = localStorage.getItem("user_id");
    const token = localStorage.getItem("token");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetch() {
            const url = `api/v1/ledger/client/${Number(user_id)}?page=${1}&limit=${100}`;
            const response = await API.get(url);
            setStatementList(response?.data?.data || []);
        }
        fetch()
    }, []);

    const getChip = (status) => {
        if (status.toLowerCase() == "approved") {
            return (
                <Chip label={status} color='success' />
            )
        } else if (status.toLowerCase() == "disapproved" || status.toLowerCase() == "decline") {
            return (
                <Chip label={status} color='error' />
            )
        } else {
            return (
                <Chip label={"Pending"} color='primary' />
            )
        }
    }

    const getReceiptUrl = (ledger) => {
        if (ledger?.receipt_url) {
            return (
                <Button onClick={() => window.open(ledger?.receipt_url, '_blank')}>View</Button>
            )
        } else if (ledger?.acEntry?.receipt_img) {
            return (
                <Button onClick={() => window.open(ledger?.acEntry?.receipt_img, '_blank')}>View</Button>
            )
        } else {
            return "-";
        }
    }

    const getRowBgColor = (data) => {
        if (data?.acEntry_id) {
            return `#b2ffb2`;
        } else if (data?.order_id) {
            if (data?.order?.status == "decline" || data?.order?.status == "deleted") {
                return `#E78B8B`;
            }
        }

        return "";
    }

    const downloadPdf = async () => {
        try {
            setLoading(true);

            const apiUrl = `api/v1/ledger/client/${Number(user_id)}/pdf`;
            const response = await fetch(`${config.BASE_URL}${apiUrl}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });

            if (!response.ok) {
                // Handle error, e.g., show an error message
                console.error(`Failed to fetch PDF. Status: ${response.status}`);
                return;
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'table.pdf';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        } catch (error) {
            console.error('Error fetching PDF:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <section className="history-section">
                <div className="auto-container">
                    <div className="sec-title centered" style={{ marginBottom: "2rem" }}>
                        <h2>Ledger Statement</h2>
                        <div className="text">An insightful overview detailing the transactions and balances recorded in the account ledger, offering a comprehensive understanding of account activity.</div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row-reverse", marginBottom: "2rem" }}>
                        <button className="theme-btn btn-style-two" onClick={downloadPdf} disabled={loading}>
                            <span className="txt">{loading ? 'Downloading...' : 'Download PDF'}</span>
                        </button>
                    </div>
                    <div className="cart-outer">
                        <div className="table-outer" style={{ border: "1px solid #d7d7d7", borderRadius: "6px", boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.10)", transition: "box-shadow 0.3s ease-in-out" }}>
                            <table className="cart-table ledger">
                                <thead className="cart-header">
                                    <tr >
                                        <th className="prod-column">Sr.No.</th>
                                        <th className="prod-column">Date</th>
                                        <th className="prod-column">Transaction Type</th>
                                        <th className="prod-column">Journal Name</th>
                                        <th className="price">Debit</th>
                                        <th className="price">Credit</th>
                                        <th className="price">Balance</th>
                                        <th className="prod-column">View Receipt</th>
                                        <th className="prod-column">Status</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {statementList &&
                                        statementList?.items?.length > 0 &&
                                        statementList?.items?.map((ledger, index) => (
                                            <tr key={index} style={{ backgroundColor: getRowBgColor(ledger)}}>
                                                <td style={{ textAlign: "center", paddingLeft: 0 }}>{ledger?.id || ""}</td>
                                                <td style={{ textAlign: "center", paddingLeft: 0 }}>{ledger?.createdAt ? moment(ledger?.createdAt).format('YYYY-MM-DD') : ""}</td>
                                                <td style={{ textAlign: "center", paddingLeft: 0 }}>{ledger?.acEntry?.payment_type || "-"}</td>
                                                <td style={{ textAlign: "center", paddingLeft: 0 }}>{ledger?.acEntry?.journal_item_name || "-"}</td>
                                                <td style={{ textAlign: "center", paddingLeft: 0 }}>{ledger?.debit || ""}</td>
                                                <td style={{ textAlign: "center", paddingLeft: 0 }}>{ledger?.credit || ""}</td>
                                                <td style={{ textAlign: "center", paddingLeft: 0 }}>{+ledger?.balance || ""}</td>
                                                <td style={{ textAlign: "center", paddingLeft: 0 }}>{getReceiptUrl(ledger)}</td>
                                                <td style={{ textAlign: "center", paddingLeft: 0 }}>{ledger?.acEntry?.status ? getChip(ledger?.acEntry?.status || "") : "-"}</td>
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

