import React from 'react';
import Link from 'next/link'
import BlogSidebar from '../BlogSidebar'
import blogs from '../../api/blogs'
import Image from 'next/image';


const BlogList = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="sidebar-page-container" >
            <div className="auto-container">
                <div className="row clearfix">
                    <div className={`content-side col-lg-8 col-md-12 col-sm-12 ${props.blRight}`}>
                        <div className="row clearfix">
                            {blogs.slice(0, 10).map((blog, Bitem) => (
                                <div className="news-block col-lg-6 col-md-6 col-sm-12" key={Bitem}>
                                    <div className="inner-box">
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
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="styled-pagination text-center">
                            <ul className="clearfix">
                                <li className="prev"><Link onClick={ClickHandler} href="/blog"><span className="fa fa-angle-left"></span> </Link></li>
                                <li><Link onClick={ClickHandler} href="/blog">01</Link></li>
                                <li className="active"><Link onClick={ClickHandler} href="/blog">02</Link></li>
                                <li><Link onClick={ClickHandler} href="/blog">03</Link></li>
                                <li className="next"><Link onClick={ClickHandler} href="/blog"><span className="fa fa-angle-right"></span> </Link></li>
                            </ul>
                        </div>
                    </div>
                    <BlogSidebar blLeft={props.blLeft} />
                </div>
            </div>
        </div>

    )

}

export default BlogList;
