import React from 'react'
import blogs from '../../api/blogs'
import Link from 'next/link'
import Image from 'next/image'


const BlogSection2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className={`news-section-two ${props.sClass}`}>
            <div className={`pattern-layer-two ${props.patClass}`}></div>
            <div className="auto-container">

                <div className="sec-title centered">
                    <div className="title">OUR BLOG</div>
                    <h2>Our Latest Media</h2>
                    <div className="text">Our campaigns get your business in front of the right people at the <br /> right time to increase organic traffic and boost engagement.</div>
                </div>

                <div className="row clearfix">
                    {blogs.slice(0, 3).map((blog, Bitem) => (
                        <div className="news-block-two style-two col-lg-4 col-md-6 col-sm-12" key={Bitem}>
                            <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="image">
                                    <Image src={blog.screens} alt="" />
                                    <div className="overlay-box">
                                        <div className="overlay-inner">
                                            <div className="content">
                                                <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`} className="icon flaticon-unlink"></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lower-content">
                                    <ul className="post-meta">
                                        <li><Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}><span className="icon fa fa-user"></span> {blog.author}</Link></li>
                                        <li><Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}><span className="icon fa fa-calendar"></span> {blog.create_at}</Link></li>
                                    </ul>
                                    <h5><Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>{blog.title}</Link></h5>
                                    <div className="social-boxed">
                                        <div className="social-inner">
                                            <span className="share-now fa fa-share-alt"></span>
                                            <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}><span className="fa fa-facebook"></span></Link>
                                            <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}><span className="fa fa-twitter"></span></Link>
                                            <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}><span className="fa fa-dribbble"></span></Link>
                                            <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}><span className="fa fa-behance"></span></Link>
                                        </div>
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

export default BlogSection2;