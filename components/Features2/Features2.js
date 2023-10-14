import React from 'react'
import Link from 'next/link'
import sIcon from '/public/images/icons/service-pattern.png'
import sIcon2 from '/public/images/icons/service-pattern-2.png'
import businessCard from '/public/images/icons/business-card.svg'
import Sticker from '../../icons/Sticker'
import Envelope from '../../icons/Envelope'
import LetterHead from '../../icons/LetterHead'
import BusinessCard from '../../icons/BusinessCard'

const Features2 = (props) => {


    const featres = [
        {
            fIcon: <LetterHead />,
            title: 'Letter Head',
            des: 'We have seen great successes with everyone companies.',
            path: 'envelope'
        },
        {
            fIcon: <BusinessCard />,
            title: 'Business Card',
            des: 'We have seen great successes with everyone companies.',
            path: 'visiting-card'
        },
        {
            fIcon: <Envelope />,
            title: 'Envelope',
            des: 'We have seen great successes with everyone companies.',
            path: 'envelope'
        },
        {
            fIcon: <Sticker />,
            title: 'Stickers',
            des: 'We have seen great successes with everyone companies.',
            path: 'sticker'
        },

    ]


    return (
        <section className="services-section margin-top" style={{ marginTop: '-450px'}}>
            <div className="auto-container" style={{maxWidth: '1400px'}}>
            <div className="color-layer"></div>
                <div className="row clearfix">
                {featres.map((featres, fitem) => (
                        <div className="service-block col-lg-3 col-md-6 col-sm-12" key={fitem}>
                            <Link href={`/product-single/${featres.path}`}>
                            <div className="inner-box">
                                <div className="color-layer"></div>
                                <div className="pattern-layer-one" style={{ backgroundImage: `url(${sIcon})` }}></div>
                                <div className="pattern-layer-two" style={{ backgroundImage: `url(${sIcon2})` }}></div>
                                <div className="icon-box">
                                    {featres.fIcon}
                                    {/* <span className={`${featres.fIcon}`}></span> */}
                                </div>
                                <h5><Link href={`/product-single/${featres.path}`}>{featres.title}</Link></h5>
                                <div className="text">{featres.dec}</div>
                                <Link href={`/product-single/${featres.path}`} className="arrow-icon flaticon-arrow-pointing-to-right"></Link>
                            </div>
                                </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features2;