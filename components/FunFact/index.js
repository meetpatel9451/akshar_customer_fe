import React from 'react'
import CountUp from 'react-countup';

const FunFact = (props) => {

    const funFact = [
        {
            title: '230',
            subTitle: 'ACTIVE CLIENTS',
            Symbol: '+',
        },
        {
            title: '95',
            subTitle: 'TEAM ADVISORS',
            Symbol: '+',
        },
        {
            title: '820',
            subTitle: 'PROJECTS DONE',
            Symbol: '+',
        },
        {
            title: '25',
            subTitle: 'GLORIOUS YEARS',
            Symbol: '+',
        },


    ]

    return (

        <section className={`counter-section ${props.styleClass}`}>
            <div className="auto-container">
                <div className="inner-container">
                    <div className="fact-counter">
                        <div className="row clearfix">
                            {funFact.map((funfact, fitem) => (
                                <div className="column counter-column col-lg-3 col-md-6 col-sm-12" key={fitem}>
                                    <div className="inner">
                                        <div className="content">
                                            <div className="count-outer count-box">
                                                <span className="count-text"><CountUp end={funfact.title} enableScrollSpy /></span>{funfact.Symbol}
                                            </div>
                                            <h4 className="counter-title">{funfact.subTitle}</h4>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <span id="counter" className='d-none' />
        </section>
    )
}

export default FunFact;