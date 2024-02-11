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
import { Alert, Backdrop, Box, CircularProgress, FormHelperText, IconButton, Snackbar, TextField, Typography } from '@mui/material';
import API from '../../store/api';

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
  ]
}

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
  ]
}

const letterheadenvelopeArray = {
  name: "Letter Head/ Envelope",
  data: [
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
  ]
}

const brocherArray = {
  name: "Brocher",
  data: [
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
  ]
}

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

const othersArray = {
  name: "Others",
  data: [
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

  ]
}
const newproductArray = {
  name: "New Product",
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
  ]
}

const paperjobArray = {
  name: "Paper 500+500 Qty. job",
  data: [
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
  ]
}

const ProductSinglePage = (props) => {
  const router = useRouter()
  const [notificationMsg, setNotificationMsg] = useState({})
  const [clientData, setClientData] = useState(null);

  const [error, setError] = useState({ quantity: [], height: [], width: [] });
  const [errorQuantity, setErrorQuantity] = useState([]);
  const [errorHeight, setErrorHeight] = useState([]);
  const [errorWidth, setErrorWidth] = useState([]);
  const [errorImage, setErrorImage] = useState([]);
  const [loading, setLoading] = useState(false);

  // const productsArray = api();
  // const Allproduct = productsArray;

  // const addToCartProduct = (product, qty = 1) => {
  //   addToCart(product, qty);
  // };

  // const { addToCart } = props;
  // const [product, setProduct] = useState({});
  const [selectedArray, setSelectedArray] = useState([]);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    if (router?.query?.slug) {
      async function fetchData() {
        const user_id = localStorage.getItem("user_id");

        if (user_id) {
          const url = `/api/v1/client/${user_id}`;

          try {
            const response = await API.get(url);
            setClientData(response?.data?.data || null)
            // Handle the response data here
          } catch (error) {
            console.error("Error fetching data:", error);
            // Handle the error here
          }
        }
        const url = `api/v1/product/category/${+router?.query?.slug}/client/${user_id}`;

        try {
          const response = await API.get(url);
          setProductList(response?.data?.data?.items)
          // Handle the response data here
        } catch (error) {
          console.error("Error fetching data:", error);
          // Handle the error here
        }
      }
      fetchData()
    }
    // setProduct(Allproduct.filter(Allproduct => Allproduct.slug === router.query.slug))
    // switch (router.query.slug) {
    //   case "new-product":
    //     return setSelectedProduct(newproductArray);
    //   case "visiting-card":
    //     return setSelectedProduct(visitingCardArray);
    //   case "sq-inch-job":
    //     return setSelectedProduct(sqinchjobArray);
    //   case "envelope":
    //     return setSelectedProduct(letterheadenvelopeArray);
    //   case "brocher":
    //     return setSelectedProduct(brocherArray);
    //   case "leafleft":
    //     return setSelectedProduct(leafletArray);
    //   case "sticker":
    //     return setSelectedProduct(stickerArray);
    //   case "others":
    //     return setSelectedProduct(othersArray);
    //   case "paper-job":
    //     return setSelectedProduct(paperjobArray);
    // }
  }, [router?.query?.slug]);

  const onClose = () => {
    setNotificationMsg({})
  }

  const handleAddToCart = (item) => {
    const selectedItem = selectedArray.filter((val) => val?.product_id == item?.id);

    if (!selectedItem?.length) {
      setSelectedArray([...selectedArray, {
        product_id: item?.id,
        name: item?.name,
        price: getPrice(item),
        image: "",
        height_width: item?.height_width,
        total_price: getPrice(item),
        quantity: 1,
        width: "",
        height: ""
      }])
    }
  }

  const handleProceedToCheckout = async () => {
    setLoading(true)
    const user_id = localStorage.getItem("user_id");
    const url = `api/v1/order/client/${user_id}`;

    const formData = new FormData();
    const tempError = error;
    let quamtityErr = [];
    let heightErr = [];
    let widthErr = [];
    let imageErr = [];

    selectedArray.forEach((product, index) => {
      if (!product.quantity) {
        quamtityErr = [...quamtityErr, index]
        // setErrorQuantity([...errorQuantity, index])
      }
      if (!product.height && product?.height_width == "yes") {
        heightErr = [...heightErr, index]
        // setErrorWidth([...errorHeight, index])
      }
      if (!product.width && product?.height_width == "yes") {
        widthErr = [...widthErr, index]
        // setErrorHeight([...errorWidth, index])
      }

      if (!product.image) {
        imageErr = [...imageErr, index]
        // setErrorImage([...errorImage, index])
      }

      // tempError["quantity"] = [...tempError["quantity"], index];
      // if(!product.width){
      // tempError["width"] = [...tempError["width"], index];
      // }
      // if(!product.height){
      // tempError["height"] = [...tempError["height"], index];
      // }


      formData.append(`products[${index}][product_id]`, product.product_id);
      formData.append(`products[${index}][name]`, product.name);
      formData.append(`products[${index}][price]`, product.price);
      formData.append(`products[${index}][file]`, product.image);
      formData.append(`products[${index}][total_price]`, product.total_price);
      formData.append(`products[${index}][quantity]`, product.quantity);
      formData.append(`products[${index}][width]`, product?.width || "");
      formData.append(`products[${index}][height]`, product?.height || "");
    });
    setErrorQuantity(quamtityErr)
    setErrorHeight(heightErr);
    setErrorWidth(widthErr)
    // setErrorImage(imageErr)
    setError(tempError);
    if (!errorQuantity?.length && !errorHeight?.length && !errorWidth?.length && !errorImage?.length) {
      try {
        const response = await API.post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }).then((val) => {
          setLoading(false)
          setNotificationMsg({ status: 200, msg: "Order Submitted Sucessfully!" })
        }).catch((err) => {
          setLoading(false)
          setNotificationMsg({ status: err?.response?.data?.statusCode || 500, msg: err?.response?.data?.message || err?.message })
        });
        // setProductList(response?.data?.data?.items)
        // Handle the response data here
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error here
      }
    }
  }

  const getPrice = (product) => {
    if (product && product?.ClientProduct?.length) {
      return product?.ClientProduct[0]?.price
    } else {
      if (clientData?.client_category == "categoty_a") {
        return product?.price_A
      }
      else if (clientData?.client_category == "categoty_b") {
        return product?.price_B
      }
      else if (clientData?.client_category == "categoty_c") {
        return product?.price_C
      }
      else if (clientData?.client_category == "categoty_d") {
        return product?.price_D
      }
      else if (clientData?.client_category == "categoty_e") {
        return product?.price_E
      }
      else if (clientData?.client_category == "categoty_g") {
        return product?.price_G
      } else {
        return product?.price_A
      }
    }
  }

  const handleChangeQuantity = (arrayIndex) => (e) => {
    var tempArray = [...selectedArray];
    const quantityValue = e.target.value;

    if (quantityValue) {
      // Check if the entered value is negative, if yes, set it to zero
      tempArray[arrayIndex].quantity = quantityValue < 1 ? 1 : quantityValue;
    } else {
      // Check if the entered value is negative, if yes, set it to zero
      tempArray[arrayIndex].quantity = "";
    }

    // Update total_price accordingly
    // tempArray[arrayIndex].total_price = Number(tempArray[arrayIndex].price) * tempArray[arrayIndex].quantity * Number(tempArray[arrayIndex].height) * Number(tempArray[arrayIndex].width);
    if (tempArray[arrayIndex].height && tempArray[arrayIndex].width) {
      tempArray[arrayIndex].total_price = Number(tempArray[arrayIndex].price) * tempArray[arrayIndex].quantity * Number(tempArray[arrayIndex].height) * Number(tempArray[arrayIndex].width);
    } else {
      tempArray[arrayIndex].total_price = Number(tempArray[arrayIndex].price) * tempArray[arrayIndex].quantity
    }
    setSelectedArray(tempArray);
  }

  const handleChangeheightWidth = (arrayIndex) => (e) => {
    var tempArray = [...selectedArray];
    const heightWidth = e.target.value;

    if (heightWidth) {
      // Check if the entered value is negative, if yes, set it to zero
      tempArray[arrayIndex][e.target.name] = heightWidth < 1 ? 1 : heightWidth;
    } else {
      // Check if the entered value is negative, if yes, set it to zero
      tempArray[arrayIndex][e.target.name] = "";
    }

    // Update total_price accordingly
    tempArray[arrayIndex].total_price = Number(tempArray[arrayIndex].price) * tempArray[arrayIndex].quantity * Number(tempArray[arrayIndex].height) * Number(tempArray[arrayIndex].width)

    setSelectedArray(tempArray);
  }

  const handleOnBlurQuantity = (e, index) => {
    if (errorQuantity?.includes(index)) {
      if (e.target.value) {
        const filter = errorQuantity?.filter((item) => item != index)
        setErrorQuantity(filter)
      }
    } else {
      if (!(e.target.value)) {
        setErrorQuantity([...errorQuantity, index])
      }
    }
  }

  const handleOnBlurHeight = (e, index) => {
    if (errorHeight?.includes(index)) {
      if (((e.target.value) % 0.25) == 0 && e.target.value > 0) {
        const filter = errorHeight?.filter((item) => item != index)
        setErrorHeight(filter)
      }
    } else {
      if (((e.target.value) % 0.25) != 0 || (!e.target.value)) {
        setErrorHeight([...errorHeight, index])
      }
    }
  }


  const handleOnBlurWidth = (e, index) => {
    if (errorWidth?.includes(index)) {
      if (((e.target.value) % 0.25) == 0 && e.target.value > 0) {
        const filter = errorWidth?.filter((item) => item != index)
        setErrorWidth(filter)
      }
    } else {
      if (((e.target.value) % 0.25) != 0 || (!e.target.value)) {
        setErrorWidth([...errorWidth, index])
      }
    }
  }


  const handleOnBlur = (e, index) => {
    let tempError = error;
    if (!tempError[e.target.name]?.includes(index)) {
      if (!(e.target.value)) {
        const name = tempError[e.target.name]
        tempError[e.target.name] = [...name, index]
      }
      // else{
      //   const name = tempError[e.target.name]
      //   tempError[e.target.name] = tempError[e.target.name]?.filter((item) => item != index);
      // }
    }
    else {
      if (e.target.value) {
        const name = tempError[e.target.name]
        tempError[e.target.name] = name?.filter((item) => item != index);
      }
    }
    setError(tempError);
    // else{
    // }
  }

  return (
    <Fragment>
      <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'} />
      <PageTitle pageTitle={productList[0]?.category?.name || "Product"} />
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="sidebar-page-container">
        {/* <div className="auto-container"> */}
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
                    {/* <div className="auto-container"> */}
                    <div className="row clearfix">
                      <div className="col-lg-4 col-md-4 col-sm-12 product-table" style={{ marginRight: "4rem" }}>
                        <div className="table-outer" style={{ border: "1px solid #d7d7d7", borderRadius: "6px", boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.10)", transition: "box-shadow 0.3s ease-in-out" }}>
                          <table className="cart-table" style={{ width: "100%" }}>
                            <thead className="cart-header" style={{ borderBottom: "1px solid rgb(215, 215, 215)" }}>
                              <tr>
                                <th className="prod-column">PRODUCT</th>
                                <th className='justify-center'>Price <sub>(1000</sub>&nbsp;<sub>pc.)</sub></th>
                                <th className="price">Action</th>
                              </tr>
                            </thead>

                            <tbody>
                              {productList?.map((item, index) => (
                                <tr>
                                  <td > <Box style={{ display: 'flex', justifyContent: 'center', paddingLeft: "12px" }}>{item?.name}</Box></td>
                                  <td> <Box style={{ display: 'flex', justifyContent: 'center' }}>{getPrice(item)}</Box></td>
                                  <td> <Box style={{ display: 'flex', justifyContent: 'center' }}><IconButton style={{ display: 'flex', justifySelf: 'center' }} onClick={() => handleAddToCart(item)}><i className="fa fa-cart-plus" ></i></IconButton></Box></td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          {
                            productList?.length <= 0 && (
                              <div style={{ width: "100%", textAlign: "center", padding: "12px" }}>
                                <p style={{ margin: 0, fontWeight: 500 }}>Product not available.</p>
                              </div>
                            )
                          }
                        </div>
                      </div>

                      {(router.query.slug == "sticker" || router.query.slug == "sq-inch-job") ?
                        <div className="col-lg-7 col-md-7 col-sm-12">
                          <div className="table-outer" style={{ border: "1px solid #d7d7d7", borderRadius: "6px", boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.10)", transition: "box-shadow 0.3s ease-in-out" }}>
                            <table className="cart-table" style={{ width: "100%" }}>
                              <thead className="cart-header" style={{ borderBottom: "1px solid rgb(215, 215, 215)" }}>
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
                                    <td>  {item?.name}</td>
                                    <td><b>{item?.price}</b></td>
                                    <td><div>
                                      <input type="number" name="code" value={item?.quantity} onBlur={() => console.log("bjhjbjbjh")} onChange={(e) => handleOnQuantity(e, arrayIndex)} placeholder="Enter Quantity" />
                                    </div></td>
                                    <td ><input type="number" name="code" value={item?.height} onChange={(e) => {
                                      var tempArray = [...selectedArray];
                                      tempArray[arrayIndex].height = (e.target.value);
                                      tempArray[arrayIndex].price_A = (getPrice(tempArray[arrayIndex]).price_A) * (e.target.value) * (tempArray[arrayIndex].width) * (tempArray[arrayIndex].quantity) / 1000;
                                      setSelectedArray(tempArray)
                                    }} placeholder="Enter Quantity" /></td>
                                    <td >
                                      <input type="number" name="code" value={item?.width} onChange={(e) => {
                                        var tempArray = [...selectedArray];
                                        tempArray[arrayIndex].width = (e.target.value);
                                        tempArray[arrayIndex].price_A = (tempArray[arrayIndex].price_A) * (e.target.value) * (tempArray[arrayIndex].height) * (tempArray[arrayIndex].quantity) / 1000;
                                        setSelectedArray(tempArray)
                                      }} placeholder="Enter Quantity" /></td>
                                    <td ><input type="file" id="imageUpload" name="imageUpload" accept="application/cdr" onChange={(e) => {
                                      let tempArray = [...selectedArray];
                                      tempArray[arrayIndex].image = e.target.files[0];
                                      setSelectedArray(tempArray);
                                    }} /></td>
                                    <td >
                                      <IconButton onClick={() => {
                                        const filter = selectedArray?.filter((item, index) => index != arrayIndex)
                                        setSelectedArray(filter)
                                      }}><i className="fa fa-close" ></i></IconButton>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                            {
                              selectedArray?.length <= 0 && (
                                <div style={{ width: "100%", textAlign: "center", padding: "12px" }}>
                                  <p style={{ margin: 0, fontWeight: 500 }}>Product not selected yet.</p>
                                </div>
                              )
                            }
                          </div>
                          {selectedArray?.length > 0 && (<p>Please increase the quantity in increments of 1000 pieces for optimal order processing.</p>)}
                          <div className="pt-5 text-right" style={{ display: 'flex', justifyContent: 'flex-end' }}><button type="submit" className="theme-btn btn-style-two"
                            onClick={handleProceedToCheckout}
                          ><span className="txt">Proceed to Checkout</span></button></div>
                        </div> : <div className="col-lg-7 col-md-7 col-sm-12">
                          <div className="table-outer" style={{ border: "1px solid #d7d7d7", borderRadius: "6px", boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.10)", transition: "box-shadow 0.3s ease-in-out" }}>
                            <table className="cart-table" style={{ width: "100%" }}>
                              <thead className="cart-header" style={{ borderBottom: "1px solid rgb(215, 215, 215)" }}>
                                <tr>
                                  <th >PRODUCT</th>
                                  <th >Price</th>
                                  <th >Quantity</th>
                                  <th >Height</th>
                                  <th >Width</th>
                                  <th >Total Price</th>
                                  <th >Image Upload</th>
                                  <th >Remove</th>
                                </tr>
                              </thead>

                              <tbody>
                                {selectedArray.map((item, arrayIndex) => (

                                  <tr>
                                    <td> <Box style={{ display: 'flex', justifyContent: 'center', paddingLeft: "12px" }}>{item?.name}</Box></td>
                                    <td ><Box style={{ display: 'flex', justifyContent: 'center' }}> {item?.price}</Box></td>
                                    <td >
                                      <div style={{ textAlign: "center" }}>
                                        <TextField size='small' type="number" name="quantity" value={item?.quantity}
                                          onBlur={(e) => handleOnBlurQuantity(e, arrayIndex)}
                                          // onBlur={(e) => {
                                          //   if ((e.target.value % 1000) === 0) {
                                          //     console.log("Valid")
                                          //   } else {
                                          //     console.log("invalid ");
                                          //     setOpen(true);
                                          //   }
                                          // }}
                                          style={{ maxWidth: "90px" }}
                                          onChange={handleChangeQuantity(arrayIndex)} placeholder="Enter Quantity"
                                          error={errorQuantity?.length > 0 && errorQuantity.includes(arrayIndex)}
                                        />
                                        {errorQuantity?.length > 0 && errorQuantity.includes(arrayIndex) && (<FormHelperText error>{"Please Enter Quantity"}</FormHelperText>)}
                                      </div>
                                    </td>
                                    {
                                      item?.height_width == "yes" ? (
                                        <>
                                          <td >
                                            <div style={{ textAlign: "center" }}>
                                              <TextField
                                                size='small'
                                                type="number"
                                                InputProps={{ inputProps: { min: 0, step: "0.25" } }}
                                                name="height"
                                                value={item?.height}
                                                style={{ maxWidth: "100px" }}
                                                onBlur={(e) => handleOnBlurHeight(e, arrayIndex)}
                                                onChange={handleChangeheightWidth(arrayIndex)}
                                                error={errorHeight?.length > 0 && errorHeight.includes(arrayIndex)}
                                                placeholder="Height" />
                                              {errorHeight?.length > 0 && errorHeight.includes(arrayIndex) && (<FormHelperText error>{item?.height ? "Width multiply by 0.25" : "Please Enter Height"}</FormHelperText>)}
                                            </div>
                                          </td>
                                          <td >
                                            <div style={{ textAlign: "center" }}>
                                              <TextField
                                                size='small'
                                                type="number"
                                                name="width"
                                                InputProps={{ inputProps: { min: 0, step: "0.25" } }}
                                                value={item?.width}
                                                onBlur={(e) => handleOnBlurWidth(e, arrayIndex)}
                                                style={{ maxWidth: "100px" }}
                                                onChange={handleChangeheightWidth(arrayIndex)}
                                                error={(errorWidth?.length > 0) && errorWidth.includes(arrayIndex)}
                                                placeholder="Width" />
                                              {(errorWidth?.length > 0) && errorWidth.includes(arrayIndex) && (<FormHelperText error>{item?.width ? "Width multiply by 0.25" : "Please Enter Width"}</FormHelperText>)}
                                            </div>
                                          </td>
                                        </>
                                      ) : (
                                        <>
                                          <td><Box style={{ display: 'flex', justifyContent: 'center' }}>-</Box></td>
                                          <td><Box style={{ display: 'flex', justifyContent: 'center' }}>-</Box></td>
                                        </>
                                      )
                                    }
                                    <td> <Box style={{ display: 'flex', justifyContent: 'center' }}>{item?.total_price}</Box></td>
                                    <td ><input type="file" style={{ maxWidth: "180px" }} id="imageUpload" name="imageUpload" accept="application/cdr" onChange={(e) => {
                                      let tempArray = [...selectedArray];
                                      tempArray[arrayIndex].image = e.target.files[0];
                                      setSelectedArray(tempArray);
                                    }} />
                                      {errorImage?.length > 0 && errorImage.includes(arrayIndex) && (<FormHelperText error>{"Please Enter Images"}</FormHelperText>)}

                                    </td>
                                    <td>
                                      <div style={{ textAlign: "center" }}>
                                        <IconButton onClick={() => {
                                          const filter = selectedArray?.filter((obj, index) => obj?.id != item?.id)
                                          setSelectedArray(filter)
                                        }}><i className="fa fa-close" ></i></IconButton>
                                      </div>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                            {
                              selectedArray?.length <= 0 && (
                                <div style={{ width: "100%", textAlign: "center", padding: "12px" }}>
                                  <p style={{ margin: 0, fontWeight: 500 }}>Product not selected yet.</p>
                                </div>
                              )
                            }
                          </div>
                          {selectedArray?.length > 0 && (<p>Please increase the quantity in increments of 1000 pieces for optimal order processing.</p>)}
                          <div className="pt-5 text-right" style={{ display: 'flex', justifyContent: 'flex-end' }}><button type="submit" className="theme-btn btn-style-two"
                            onClick={handleProceedToCheckout}
                          ><span className="txt">Proceed to Checkout</span></button></div>
                        </div>}
                    </div>
                    {/* </div> */}
                  </div>

                </div>

                {/* <ProductTabs /> */}
              </div>
            </div>

          </div>
        </div>
        <Box>
          <Snackbar open={Object.keys(notificationMsg).length > 0 ? true : false} autoHideDuration={6000} sx={{ marginTop: 10 }} onClose={onClose} anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }} >
            <Alert severity={notificationMsg?.status == 200 ? "success" : "error"} sx={{ width: '100%' }}>
              {notificationMsg?.msg || ""}
            </Alert>
          </Snackbar>
        </Box>
        {/* </div> */}
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
