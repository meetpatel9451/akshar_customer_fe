import React from 'react'
import Link from 'next/link'
import Teams from '../../api/Teams'
import Image from 'next/image'


const TeamSectionS2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="team-section">
            <div className="outer-container">
                <div className="row clearfix">
                    {Teams.slice(3, 8).map((team, aitem) => (
                        <div className="team-block" key={aitem}>
                            <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="image">
                                    <Image src={team.tImg} alt="" />
                                    <ul className="social-box">
                                        <li><Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`} className="fa fa-facebook-f"></Link></li>
                                        <li><Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`} className="fa fa-linkedin"></Link></li>
                                        <li><Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`} className="fa fa-twitter"></Link></li>
                                        <li><Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`} className="fa fa-google"></Link></li>
                                    </ul>
                                </div>
                                <div className="lower-content">
                                    <div className="content">
                                        <h4><Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}>{team.name}</Link></h4>
                                        <div className="designation">{team.title}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default TeamSectionS2;
