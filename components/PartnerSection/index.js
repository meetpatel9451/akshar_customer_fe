import React from "react";
import Link from 'next/link'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pimg1 from '/public/images/clients/1.png'
import pimg2 from '/public/images/clients/2.png'
import pimg3 from '/public/images/clients/3.png'
import pimg4 from '/public/images/clients/4.png'
import pimg5 from '/public/images/clients/5.png'
import Image from "next/image";

const partners = [
    {
        pImg: pimg1,
    },
    {
        pImg: pimg2,
    },
    {
        pImg: pimg3,
    },
    {
        pImg: pimg4,
    },
    {
        pImg: pimg5,
    },
    {
        pImg: pimg3,
    },
]


const PartnerSection = (props) => {

    var settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <section className={`clients-section ${props.styleClass}`}>
            <div className="auto-container">
                <div className="inner-container">
                    <div className="sponsors-outer">
                        <ul className="sponsors-carousel">
                            <Slider {...settings}>
                                {partners.map((partner, pitem) => (
                                    <li key={pitem} className="slide-item"><figure className="image-box"><Link href="/"><Image src={partner.pImg} alt="" /></Link></figure></li>
                                ))}
                            </Slider>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PartnerSection;