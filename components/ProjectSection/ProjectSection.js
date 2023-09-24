import React from 'react';
import Projects from '../../api/project'
import Link from "next/link";
import cImg from '/public/images/resource/cta-bg.png'
import Image from 'next/image';




const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ProjectSection = (props) => {

    return (

        <section className="gallery-section">
            <div className="pattern-layer" style={{ backgroundImage: `url(${cImg})` }}></div>
            <div className="auto-container">
                <div className="mixitup-gallery">

                    <div className="sec-title centered">
                        <div className="clearfix">
                            <div className="title">RECENT PROJECTS</div>
                            <h2>Our Latest Case Works</h2>
                        </div>
                    </div>

                    <div className="filter-list row clearfix filter-container">
                        {Projects.slice(0, 6).map((project, prj) => (
                            <div className="gallery-block col-lg-4 col-md-6 col-sm-12 filter-item" key={prj}>
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <Image src={project.pImg} alt="project" className="img img-responsive" />
                                        <div className="overlay-box">
                                            <div className="overlay-inner">
                                                <div className="content">
                                                    <Link onClick={ClickHandler} href={'/project-single/[slug]'} as={`/project-single/${project.slug}`} className="icon flaticon-plus"></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                    <div className="lower-content">
                                        <div className="title">{project.title}</div>
                                        <h5><Link onClick={ClickHandler} href={'/project-single/[slug]'} as={`/project-single/${project.slug}`}>{project.subTitle}</Link></h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="btn-box text-center">
                        <Link onClick={ClickHandler} href="/projects" className="theme-btn btn-style-eight"><span className="txt">View More</span></Link>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ProjectSection;