import React from 'react';
import Link from 'next/link'
import Services from '../../api/Services';
import about from '/public/images/resource/author-7.jpg'
import blogs from '../../api/blogs'
import Image from 'next/image';


const BlogSidebar = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className={`sidebar-side col-lg-4 col-md-12 col-sm-12 ${props.blLeft}`}>
            <aside className="sidebar sticky-top">
                <div className="sidebar-widget search-box">
                    <form method="post" onSubmit={SubmitHandler}>
                        <div className="form-group">
                            <input type="search" name="search-field" value="" placeholder="Search Here" required />
                            <button type="submit"><span className="icon fa fa-search"></span></button>
                        </div>
                    </form>
                </div>

                <div className="sidebar-widget categories-widget">
                    <div className="sidebar-title">
                        <h4>Categories</h4>
                    </div>
                    <div className="widget-content">
                        <ul className="blog-cat">
                            {Services.slice(0, 6).map((service, i) => (
                                <li key={i}><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>{service.sTitle} <span>( {service.id} )</span></Link></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="sidebar-widget popular-posts">
                    <div className="sidebar-title">
                        <h4>Recent Post</h4>
                    </div>
                    <div className="widget-content">
                        {blogs.slice(0, 3).map((blog, Bitem) => (
                            <article className="post" key={Bitem}>
                                <figure className="post-thumb"><Image src={blog.screens} alt="" /><Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`} className="overlay-box"><span className="icon fa fa-link"></span></Link></figure>
                                <div className="text"><Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>{blog.title}</Link></div>
                                <div className="post-info">{blog.create_at}</div>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="sidebar-widget author-widget">
                    <div className="widget-content" style={{ backgroundImage: `url(${'/images/background/author-bg.jpg'})` }}>
                        <div className="image">
                            <Image src={about} alt="" />
                        </div>
                        <div className="name">Pablo Villalpando</div>
                        <div className="text">I got lucky because I never gave up the search. Are you quitting too soon? Or, are you willing to pursue luck with a vengeance?</div>
                        <ul className="social-box">
                            <li><Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links" className="fa fa-facebook-f"></Link></li>
                            <li><Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links" className="fa fa-linkedin"></Link></li>
                            <li><Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links" className="fa fa-twitter"></Link></li>
                            <li><Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links" className="fa fa-google"></Link></li>
                        </ul>
                    </div>
                </div>

                <div className="sidebar-widget instagram-widget">
                    <div className="sidebar-title">
                        <h4>Instagram</h4>
                    </div>
                    <div className="widget-content">
                        <div className="clearfix">
                            {Services.slice(0, 6).map((service, i) => (
                                <figure className="post-thumb" key={i}><Image src={service.sImg} alt="" /><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`} className="overlay-box"><span className="icon fa fa-link"></span></Link></figure>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="sidebar-widget popular-tags">
                    <div className="sidebar-title">
                        <h4>Tags</h4>
                    </div>
                    <div className="widget-content">
                        <Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links">Business</Link>
                        <Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links">Marketing</Link>
                        <Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links">SEO</Link>
                        <Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links">SEO</Link>
                        <Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links">SMM</Link>
                        <Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links">Solution</Link>
                        <Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links">Tips</Link>
                        <Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links">Startup</Link>
                        <Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links">Strategy</Link>
                    </div>
                </div>

            </aside>
        </div>
    )

}

export default BlogSidebar;
