import Link from 'next/link';
import React from 'react';

const carts = [];

const PaymentPage = () => {

    return (
        <div>
            <section className="history-section">
                <div className="auto-container">
                    <div className="sec-title centered" style={{marginBottom: "1rem"}}>
                        <h2>Payment</h2>
                        <div className="text">Our approach to SEO is uniquely built around what we know works…and what we know <br /> doesn’t work. With over 200 verified factors in play.</div>
                    </div>
                    <Link href="/payment-receipt/add-payment" ><div className="p-5 text-right" style={{display: 'flex', justifyContent: 'flex-end'}}><button className="theme-btn btn-style-two"><span className="txt">Add Payment</span></button></div></Link>
                    <div className="cart-outer">
                        <div className="table-outer">
                            <table className="cart-table">
                                <thead className="cart-header">
                                    <tr>
                                        <th className="prod-column">Sr. No.</th>
                                        <th>System ID</th>
                                        <th>Date</th>
                                        <th className="price">Amount</th>
                                        <th>Remarks</th>
                                        <th>&nbsp;</th>
                                        <th>View</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {carts &&
                                        carts.length > 0 &&
                                        carts.map((catItem, crt) => (
                                            <tr key={crt}>
                                                <td colspan="2" className="prod-column">
                                                    <div className="column-box">
                                                        <figure className="prod-thumb"><img src={catItem.proImg} alt="" /></figure>
                                                        <h3 className="prod-title">{catItem.title}</h3>
                                                    </div>
                                                </td>
                                                <td className="qty">
                                                    <Grid className="quantity cart-plus-minus">
                                                        <Button
                                                            className="dec qtybutton"
                                                            onClick={() =>
                                                                props.decrementQuantity(catItem.id)
                                                            }
                                                        >
                                                            -
                                                        </Button>
                                                        <input value={catItem.qty} type="text" />
                                                        <Button
                                                            className="inc qtybutton"
                                                            onClick={() =>
                                                                props.incrementQuantity(catItem.id)
                                                            }
                                                        >
                                                            +
                                                        </Button>
                                                    </Grid>
                                                </td>
                                                <td className="unit-price"><div className="available-info"><span className="icon fa fa-check"></span> Item(s) <br />Avilable Now</div></td>
                                                <td className="price">${catItem.price}</td>
                                                <td className="sub-total">${catItem.qty * catItem.price}</td>
                                                <td className="remove"><button className="remove-btn" onClick={() => props.removeFromCart(catItem.id)}><span className="flaticon-cancel-1"></span></button></td>
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

