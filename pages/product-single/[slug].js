import React, { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { connect } from "react-redux";
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { addToCart } from "../../store/actions/action";
import Product from './product'
import api from "../../api";
import Footer from '../../components/footer/Footer';
import ProductTabs from './alltab';
import { IconButton } from '@mui/material';

const visitingCardArray = {
  name: "Visiting card",
  data: [
    {
    name: "NT SINGLE SIDE",
    baseprice: "240",
    price: "240",
    quantity: "1",
    image: ""
    },
    {
    name: "NT FRONT BACK",
    baseprice: "280",
    price: "280",
    quantity: "1",
    image: ""
    },
    {
    name: "250 GSM BOTH SIDE",
    baseprice: "210",
    price: "210",
    quantity: "1",
    image: ""
    },
    {
    name: "250 GSM ONE SIDE",
    baseprice: "160",
    price: "160",
    quantity: "1",
    image: ""
    },
    {
    name: "250 BOTH SIDE GLOSSY CARD",
    baseprice: "230",
    price: "230",
    quantity: "1",
    image: ""
    },
    {
    name: "350 GSM THERMAL MATT LAMINATION CARD",
    baseprice: "400",
    price: "400",
    quantity: "1",
    image: ""
    },
    {
    name: "350 GSM SINGLE SIDE UV CARD",
    baseprice: "520",
    price: "520",
    quantity: "1",
    image: ""
    },
    {
    name: "350 GSM FRONT BACK UV CARD",
    baseprice: "240",
    price: "240",
    quantity: "1000",
    image: ""
    },
]}

const ProductSinglePage = (props) => {
    const router = useRouter()

    const productsArray = api();
    const Allproduct = productsArray

    const addToCartProduct = (product, qty = 1) => {
        addToCart(product, qty);
    };


    const { addToCart } = props;
    const [product, setProduct] = useState({});
    const [selectedArray, setSelectedArray] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState([]);

    useEffect(() => {
        setProduct(Allproduct.filter(Allproduct => Allproduct.slug === router.query.slug))
 console.log("router.query.slug ", router.query.slug);
      switch(router.query.slug) {
        case "visiting-card":
        return setSelectedProduct(visitingCardArray);
      }
    }, []);

    const item = product[0];

    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'} />
            <PageTitle pageTitle={selectedProduct?.name}  />
            <div className="sidebar-page-container">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="content-side col-lg-12 col-md-12 col-sm-12">
                            <div className="shop-single">
                                <div className="product-details">
                    {/* {item ? <Product
                      item={item}
                      addToCart={addToCart}
                    /> : null} */}

                    <div>
                      <div className="cart-outer">
                        <div className="auto-container">
                          <div className="row clearfix">
                            <div className="col-lg-4 col-md-4 col-sm-12" >
                              <table className="cart-table">
                                <thead className="cart-header">
                                  <tr>
                                    <th className="prod-column">PRODUCT</th>
                                    <th className='justify-center'>Price <sub>(1000</sub>&nbsp;<sub>pc.)</sub></th>
                                    <th className="price">Action</th>
                                  </tr>
                                </thead>

                <tbody>
                  {/* {carts &&
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
                    ))} */}
                    {selectedProduct?.data?.map((item, index) => (

                    <tr>
                        <td>{item?.name}</td>
                        <td className='justify-center'>{item?.baseprice}</td>
                        <td ><IconButton style={{display: 'flex', justifySelf: 'center'}} onClick={() => setSelectedArray([...selectedArray, selectedProduct?.data[index]])}><i className="fa fa-cart-plus" ></i></IconButton></td>
                    </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-1"></div>

            <div className="col-lg-7 col-md-7 col-sm-12">
              <table className="cart-table">
                <thead className="cart-header">
                  <tr>
                    <th >PRODUCT</th>
                    <th >Price</th>
                    <th >Quantity</th>
                    <th >Image Upload</th>
                    <th >Remove</th>
                  </tr>
                </thead>

                <tbody>
                 
                    {selectedArray.map((item, arrayIndex) => (

                    <tr>
                        <td>{item?.name}</td>
                        <td >{item?.price}</td>
                        <td ><div>
                        <input type="number" name="code" value={item?.quantity} onChange={(e) => {
                            var tempArray = [...selectedArray];
                            tempArray[arrayIndex].quantity = e.target.value;
                            tempArray[arrayIndex].price = (tempArray[arrayIndex].baseprice)*(e.target.value);
                            setSelectedArray(tempArray)
                            }} placeholder="Enter Quentity" />
                      </div></td>
                        <td ><input type="file" id="imageUpload" name="imageUpload" accept="application/cdr" /></td>
                        <td >
                            {/* <button onClick={() => {
                            const filter = selectedArray?.filter((item, index) => index != arrayIndex)
                            setSelectedArray(filter)
                        }}> Remove</button> */}
                        <IconButton onClick={() => {
                            const filter = selectedArray?.filter((item, index) => index != arrayIndex)
                            setSelectedArray(filter)
                        }}><i className="fa fa-close" ></i></IconButton>
                        </td>
                    </tr>
                    ))}
                </tbody>
              </table>
            </div>
            </div>
            </div>
            </div>
            <div className="p-5 text-right" style={{display: 'flex', justifyContent: 'flex-end'}}><button type="submit" className="theme-btn btn-style-two"><span className="txt">Proceed to Checkout</span></button></div>
                                        </div>

                                    <ProductTabs />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

const mapStateToProps = state => {
    return {
        products: state.data.products,
    }
};

export default connect(mapStateToProps, { addToCart })(ProductSinglePage);
