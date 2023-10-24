import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import API from "../../store/api";
import { useEffect } from "react";
import { useState } from "react";


const ShopProduct = ({ products, addToCartProduct, addToWishListProduct }) => {
 console.log("products ", products);

    const router = useRouter();

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const [productsList, setProductList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const user_id = localStorage.getItem("user_id");
            const url = `api/v1/category`;
      
            try {
              const response = await API.get(url);
              console.log("response", response?.data?.data?.items);
              setProductList(response?.data?.data?.items)
              // Handle the response data here
            } catch (error) {
              console.error("Error fetching data:", error);
              // Handle the error here
            }
          }
      
          fetchData();
      
    },[])



    return (
        <div className="sidebar-page-container">
            <div className="auto-container">
                <div className="row clearfix">

                    <div className="content-side col-lg-12 col-md-12 col-sm-12">
                        <div className="shop-section">

                            {/* <div className="items-sorting">
                                <div className="row clearfix">
                                    <div className="results-column col-lg-8 col-md-8 col-sm-12">
                                        <h4>Showing 1-9 of 12 results</h4>
                                    </div>
                                    <div className="select-column pull-right col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                            <select name="sort-by">
                                                <option>Default Sorting</option>
                                                <option>By Order</option>
                                                <option>By Price</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            <div className="row clearfix">

                                {productsList?.length > 0 &&
                                    productsList?.slice(0, 9).map((product, pitem) => (
                                        <div className="shop-item col-lg-4 col-md-6 col-sm-6 col-xs-12" key={pitem}>
                                            <div className="inner-box">
                                                <div className="image">
                                                    <img src={product?.proImg} alt="" />
                                                    <div className="overlay-box" onClick={() => router.push(`/product-single/${product?.id}`)}>
                                                        <ul className="cart-option">
                                                            {/* <li>
                                                                <button
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-html="true"
                                                                    title="Add to Cart"
                                                                    onClick={() => addToCartProduct(product)}
                                                                >
                                                                    <span className="flaticon-shopping-cart-1"></span>
                                                                    
                                                                </button>
                                                            </li> */}
                                                            <li>
                                                                <button
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-html="true"
                                                                    title="View More"
                                                                    // onClick={() => router.push('/product-single/Book-Item-1')}
                                                                >
                                                                    {/* <Link href="/product-single/Book-Item-1"> */}
                                                                <i className="fa fa-plus"></i>
                                                                    {/* </Link> */}
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="lower-content">
                                                    <div className="clearfix" >
                                                        <div className="pull-left">
                                                            <h3><Link onClick={ClickHandler} href={'/product-single/[slug]'} as={`/product-single/${product?.id}`}>{product.name}</Link></h3>
                                                        </div>
                                                        {/* <div className="pull-right">
                                                            <div className="rating">
                                                                <span className="fa fa-star"></span>
                                                                <span className="fa fa-star"></span>
                                                                <span className="fa fa-star"></span>
                                                                <span className="fa fa-star"></span>
                                                                <span className="fa fa-star-half-empty"></span>
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                    {/* <div className="price">${product.price}</div> */}
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                            </div>
                            {/* <div className="styled-pagination text-center mt-5">
                                <ul className="clearfix">
                                    <li className="prev"><Link href="/"><span className="fa fa-angle-left"></span> </Link></li>
                                    <li><Link href="/">01</Link></li>
                                    <li className="active"><Link href="/">02</Link></li>
                                    <li><Link href="/">03</Link></li>
                                    <li className="next"><Link href="/"><span className="fa fa-angle-right"></span> </Link></li>
                                </ul>
                            </div> */}
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ShopProduct;
