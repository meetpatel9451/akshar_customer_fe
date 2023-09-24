import React from 'react';

const carts = [];

const CashMemoPage = () => {

    return (
        <div>
            <section className="history-section">
                <div className="auto-container">
                    <div className="sec-title centered" style={{marginBottom: "4rem"}}>
                        <h2>Cash Memo</h2>
                        <div className="text">Our approach to SEO is uniquely built around what we know works…and what we know <br /> doesn’t work. With over 200 verified factors in play.</div>
                    </div>
                    <div className="cart-outer">
                        <div className="table-outer">
                            <table className="cart-table">
                                <thead className="cart-header">
                                    <tr>
                                        <th className="prod-column">OrderId</th>
                                        <th>&nbsp;</th>
                                        <th>DateTime</th>
                                        <th>Total</th>
                                        <th className="price">Advance</th>
                                        <th>Remaining</th>
                                        <th>&nbsp;</th>
                                        <th>View</th>
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

export default CashMemoPage;
