import React from 'react'
import Link from 'next/link'

const PageTitle = (props) => {
    return (
        <section className="page-title" style={{ backgroundImage: `url(${'/images/background/pattern-16.png'})` }}>
            <div className="pattern-layer-one" style={{ backgroundImage: `url(${'/images/main-slider/pattern-1.png'})` }}></div>
            <div className="pattern-layer-two" style={{ backgroundImage: `url(${'/images/background/pattern-17.png'})` }}></div>
            <div className="pattern-layer-three" style={{ backgroundImage: `url(${'/images/background/pattern-18.png'})` }}></div>
            <div className="pattern-layer-four" style={{ backgroundImage: `url(${'/images/icons/cross-icon.png'})` }}></div>
            <div className="auto-container">
                <h2>{props.pageTitle}</h2>
                {props.pagesub &&<ul className="page-breadcrumb">
                    {/* <li><Link href="/home">Home</Link></li> */}
                     <li><span>{props.pagesub}</span></li>
                </ul>}
            </div>
        </section>
    )
}

export default PageTitle;