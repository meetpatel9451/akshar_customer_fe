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
import { Alert, IconButton, Snackbar, Typography } from '@mui/material';

const visitingCardArray = {
  name: "Visiting card",
  data: [
    {
    name: "NT SINGLE SIDE",
    baseprice: "240",
    price: "240",
    quantity: "1000",
    image: ""
    },
    {
    name: "NT FRONT BACK",
    baseprice: "280",
    price: "280",
    quantity: "1000",
    image: ""
    },
    {
    name: "250 GSM BOTH SIDE",
    baseprice: "210",
    price: "210",
    quantity: "1000",
    image: ""
    },
    {
    name: "250 GSM ONE SIDE",
    baseprice: "160",
    price: "160",
    quantity: "1000",
    image: ""
    },
    {
    name: "250 BOTH SIDE GLOSSY CARD",
    baseprice: "230",
    price: "230",
    quantity: "1000",
    image: ""
    },
    {
    name: "350 GSM THERMAL MATT LAMINATION CARD",
    baseprice: "400",
    price: "400",
    quantity: "1000",
    image: ""
    },
    {
    name: "350 GSM SINGLE SIDE UV CARD",
    baseprice: "520",
    price: "520",
    quantity: "1000",
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

const sqinchjobArray = {
  name: "Sq. Inch Job",
  data: [
  {
  name: "ART CARD SINGLE SIDE (SQ.INCH)",
  baseprice: "19",
  price: "19",
  height: "1",
      width: "1",
  quantity: "1000",
  image: ""
  },
  {
  name: "ART CARD BOTH SIDE (SQ.INCH)",
  baseprice: "23",
  price: "23",
  height: "1",
      width: "1",
  quantity: "1000",
  image: ""
  },
  {
  name: "ART CARD BOTH SIDE LAMINATION (SQ.INCH)",
  baseprice: "34",
  price: "34",
  height: "1",
  width: "1",
  quantity: "1000",
  image: ""
  }
]}

const letterheadenvelopeArray = {
  name: "Letter Head/ Envelope",
  data:[
  {
  name: "100 ALABASTER (210X297)",
  baseprice: "1100",
  price: "1100",
  quantity: "1000",
  image: ""
  },
  {
  name: "80 GSM JK FINISH (210X285)",
  baseprice: "1000",
  price: "1000",
  quantity: "1000",
  image: ""
  },
  {
  name: "100 GSM JK (210X297)",
  baseprice: "1175",
  price: "1175",
  quantity: "1000",
  image: ""
  },
  {
      name: "80 GSM JK FINISH FRONT BACK (210X285)",
      baseprice: "1900",
      price: "1900",
      quantity: "1000",
      image: ""
  },
  {
      name: "100 GSM FRONT BACK (210X297)	",
      baseprice: "2300",
      price: "2300",
      quantity: "1000",
      image: ""
  },
  {
      name: "100 ALABSTER FRO-BACK(210X297)",
      baseprice: "2200",
      price: "2200",
      quantity: "1000",
      image: ""
  },
  {
      name: "9.5X4.25___ENVELOPE_80 JK ULTRA",
      baseprice: "1200",
      price: "1200",
      quantity: "1000",
      image: ""
  },
  {
      name: "9.5X4.25__ENVELOPE_100 GSM",
      baseprice: "1375",
      price: "1375",
      quantity: "1000",
      image: ""
  },
  {
      name: "9.5X4.25__ENVELOPE_100 ALABSTER",
      baseprice: "1300",
      price: "1300",
      quantity: "1000",
      image: ""
  }
]}

const brocherArray = {
  name: "Brocher",
  data:[
  {
  name: "A4 SIZE SINGLE SIDE",
  baseprice: "2000",
  price: "2000",
  quantity: "1000",
  image: ""
  },
  {
  name: "A4 SIZE BOTH SIDE WITHOUT LAMI.",
  baseprice: "2400",
  price: "2400",
  quantity: "1000",
  image: ""
  },
  {
  name: "A4 SIDE BOTH SIDE LAMINATION",
  baseprice: "2850",
  price: "2850",
  quantity: "1000",
  image: ""
  },
  {
      name: "A8 250 TERRABLE SS",
      baseprice: "1000",
      price: "1000",
      quantity: "1000",
      image: ""
  },
  {
      name: "A8 250 TERRABLE FB	",
      baseprice: "1200",
      price: "1200",
      quantity: "1000",
      image: ""
  },
  {
      name: "A8 250 LAMINATION FB",
      baseprice: "1425",
      price: "1425",
      quantity: "1000",
      image: ""
  }
]}

const leafletArray = {
  name: "Leaflet",
  data: [
    {
      name: "A4 130 GSM ART PAPER (S/S) F/B",
      baseprice: "1800",
      price: "1800",
      quantity: "1000",
      image: ""
    },
    {
      name: "A4 170 GSM ART PAPER (S/S OR F/B)",
      baseprice: "1950",
      price: "1950",
      quantity: "1000",
      image: ""
    },
    {
      name: "9.5X4.25_COVER_130 GSM ART PAPER",
      baseprice: "2100",
      price: "2100",
      quantity: "1000",
      image: ""
    },
    {
      name: "9.5X4.25_COVER_170 GSM ART PAPER",
      baseprice: "2300",
      price: "2300",
      quantity: "1000",
      image: ""
    }
  ]
}

const stickerArray = {
  name: "Sticker",
  data: [
    {
      name: "STICKER WITHOUT LAMIN. (80/90) (SQ.INCH)",
      baseprice: "26",
      price: "26",
      height: "1",
      width: "1",
      quantity: "1000",
      image: ""
    },
    {
      name: "STICKER WITH LAMINATION (80/90) (SQ.INCH)",
      baseprice: "30",
      price: "30",
      height: "1",
      width: "1",
      quantity: "1000",
      image: ""
    }
  ]
}

const othersArray = {name: "Others",
data:[
  {
  name: "00 PRINTING JOB WORK",
  baseprice: "1800",
  price: "1800",
  quantity: "1000",
  image: ""
  },
  {
  name: "REPEAT FILE FOR PRINTING",
  baseprice: "0",
  price: "0",
  quantity: "1000",
  image: ""
  },
  {
      name: "EXTRA FILE UPLOAD",
      baseprice: "0",
      price: "0",
      quantity: "1000",
      image: ""
  }
  
]}
const newproductArray = {name: "New Product",
data: [
  {
  name: "500 A4 250 GSM FB WITH LAMINATION",
  baseprice: "2400",
  price: "2400",
  quantity: "1000",
  image: ""
  },
  {
  name: "17X5.5 250 GSM FB WITH LAMINATION",
  baseprice: "2400",
  price: "2400",
  quantity: "1000",
  image: ""
  }
]}

const paperjobArray = {name: "Paper 500+500 Qty. job",
data:[
  {
  name: "500 COPY 100 GSM 2 JOB",
  baseprice: "2100",
  price: "2100",
  quantity: "1000",
  image: ""
  },
  {
  name: "500 COPY 100 ALABASTER 2 JOB",
  baseprice: "2200",
  price: "2200",
  quantity: "1000",
  image: ""
  }
]}

const ProductSinglePage = (props) => {
    const router = useRouter()

    const productsArray = api();
    const Allproduct = productsArray;

    const [open, setOpen] = useState(false);

    const addToCartProduct = (product, qty = 1) => {
        addToCart(product, qty);
    };

    const handleClose = () => {
 console.log("handleClose ");
      setOpen(false)
    }

    const { addToCart } = props;
    const [product, setProduct] = useState({});
    const [selectedArray, setSelectedArray] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState([]);
 console.log("selectedProduct ", selectedProduct, stickerArray);

    useEffect(() => {
        setProduct(Allproduct.filter(Allproduct => Allproduct.slug === router.query.slug))
 console.log("router.query.slug ", router.query.slug == "sticker");
      switch(router.query.slug) {
        case "new-product":
        return setSelectedProduct(newproductArray);
        case "visiting-card":
        return setSelectedProduct(visitingCardArray);
        case "sq-inch-job":
        return setSelectedProduct(sqinchjobArray);
        case "envelope":
        return setSelectedProduct(letterheadenvelopeArray);
        case "brocher":
        return setSelectedProduct(brocherArray);
        case "leafleft":
        return setSelectedProduct(leafletArray);
        case "sticker":
        return setSelectedProduct(stickerArray);
        case "others":
        return setSelectedProduct(othersArray);
        case "paper-job":
        return setSelectedProduct(paperjobArray);
      }
    }, []);

    const item = product[0];

    return (
        <Fragment>
          <Snackbar open={open} autoHideDuration={6000}  anchorOrigin={{
          vertical: 'top', 
          horizontal: 'right', 
        }} 
        
        // onClose={handleClose}
>
          <Alert  severity="error" onClose={handleClose}>
            Please enter value of quantity multiply by 1000.
          </Alert>
        </Snackbar>
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

            {(router.query.slug == "sticker" || router.query.slug == "sq-inch-job") ? <div className="col-lg-7 col-md-7 col-sm-12">
              <table className="cart-table">
                <thead className="cart-header">
                  <tr>
                    <th >PRODUCT</th>
                    <th >Price</th>
                    <th >Quantity</th>
                    <th >Height</th>
                    <th >Width</th>
                    <th >Image Upload</th>
                    <th >Remove</th>
                  </tr>
                </thead>

                <tbody>
                 
                    {selectedArray.map((item, arrayIndex) => (

                    <tr>
                        <td> {item?.name}</td>
                        <td><b>{item?.price}</b></td>
                        <td><div>
                        <input type="number" name="code" value={item?.quantity} onBlur={(e) => {
                          if((e.target.value % 1000) === 0){
                            console.log("Valid")
                          }else{
                            console.log("invalid ");
                            setOpen(true);
                          }
                        }} onChange={(e) => {
                            var tempArray = [...selectedArray];
                            tempArray[arrayIndex].quantity = (e.target.value);
                            tempArray[arrayIndex].price = (tempArray[arrayIndex].baseprice)*(e.target.value)*(tempArray[arrayIndex].width)*(tempArray[arrayIndex].height)/1000;
                            setSelectedArray(tempArray)
                            }} placeholder="Enter Quentity" />
                      </div></td>
                      <td ><input type="number" name="code" value={item?.height} onChange={(e) => {
                            var tempArray = [...selectedArray];
                            tempArray[arrayIndex].height = (e.target.value);
                            tempArray[arrayIndex].price = (tempArray[arrayIndex].baseprice)*(e.target.value)*(tempArray[arrayIndex].width)*(tempArray[arrayIndex].quantity)/1000;
                            setSelectedArray(tempArray)
                            }} placeholder="Enter Quentity" /></td>
                      <td >
                      <input type="number" name="code" value={item?.width} onChange={(e) => {
                            var tempArray = [...selectedArray];
                            tempArray[arrayIndex].width = (e.target.value);
                            tempArray[arrayIndex].price = (tempArray[arrayIndex].baseprice)*(e.target.value)*(tempArray[arrayIndex].height)*(tempArray[arrayIndex].quantity)/1000;
                            setSelectedArray(tempArray)
                            }} placeholder="Enter Quentity" /></td>
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
            </div> : <div className="col-lg-7 col-md-7 col-sm-12">
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
                        <td className='justify-center'>{item?.price}</td>
                        <td ><div>
                        <input type="number" name="code" value={item?.quantity} onBlur={(e) => {
                          if((e.target.value % 1000) === 0){
                            console.log("Valid")
                          }else{
                            console.log("invalid ");
                            setOpen(true);
                          }
                        }} onChange={(e) => {
                            var tempArray = [...selectedArray];
                            tempArray[arrayIndex].quantity = (e.target.value);
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
            </div>}
            </div>
            </div>
            </div>
            <div className="p-5 text-right" style={{display: 'flex', justifyContent: 'flex-end'}}><button type="submit" className="theme-btn btn-style-two"><span className="txt">Proceed to Checkout</span></button></div>
                                        </div>

                                    {/* <ProductTabs /> */}
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
