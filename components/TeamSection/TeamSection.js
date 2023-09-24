import React from 'react'
import Link from 'next/link'
import Teams from '../../api/Teams'
import SectionTitle from '../SectionTitle/SectionTitle'
import Image from 'next/image'


const TeamSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="team-section-two">
            <div className="auto-container">
                <SectionTitle subTitle={'Our Team'} MainTitle={'Our Expert Leadership'} />
                <div className="row clearfix">
                    {Teams.slice(0, 3).map((team, aitem) => (
                        <div className="team-block-two col-lg-4 col-md-6 col-sm-12" key={aitem}>
                            <div className="inner-box">
                                <ul className="team-social-box">
                                    <li className="youtube"><Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`} className="fa fa-youtube"></Link><span className="social-name">youtube</span></li>
                                    <li className="linkedin"><Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`} className="fa fa-linkedin"></Link><span className="social-name">linkedin</span></li>
                                    <li className="facebook"><Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`} className="fa fa-facebook-f"></Link><span className="social-name">facebook</span></li>
                                    <li className="twitter"><Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`} className="fa fa-twitter"></Link><span className="social-name">twitter</span></li>
                                </ul>
                                <div className="image">
                                    <Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}><Image src={team.tImg} alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h3><Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}>{team.name}</Link></h3>
                                    <div className="designation">{team.title}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TeamSection;
