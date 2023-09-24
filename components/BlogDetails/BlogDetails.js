import React from 'react';
import Link from 'next/link'
import blog1 from '/public/images/resource/author-8.jpg'
import blog2 from '/public/images/resource/author-1.png'
import blog3 from '/public/images/resource/author-2.png'
import gl1 from '/public/images/resource/news-12.jpg'
import gl2 from '/public/images/resource/news-13.jpg'
import blogs from '../../api/blogs';
import { useRouter } from 'next/router'
import BlogSidebar from '../BlogSidebar';
import Image from 'next/image';

const BlogSingle = (props) => {

    const router = useRouter()

    const BlogDetails = blogs.find(item => item.slug === router.query.slug)

    const submitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="sidebar-page-container">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="content-side col-lg-8 col-md-12 col-sm-12">
                        <div className="news-detail">
                            <div className="inner-box">
                                <div className="image">
                                    <Image src={BlogDetails?.blogSingleImg} alt="" />
                                </div>
                                <div className="lower-content">
                                    <ul className="post-meta">
                                        <li><span className="icon fa fa-user"></span> {BlogDetails?.author}</li>
                                        <li><span className="icon fa fa-calendar"></span> {BlogDetails?.create_at}</li>
                                    </ul>
                                    <h2>{BlogDetails?.title}</h2>
                                    <p>It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
                                    <p>The basic premise of search engine reputation management in to use the greate work  Why I say old chap that is, spiffing jolly good a load of old tosh spend a penny tosser arse over </p>
                                    <p>Spring is often associated with a fresh, new, clean start and a renewed sense of life. For many, this getting rid of the old and in with the new takes on the form of spring cleaning.  While you may be thinking about the house, why not think of refreshing and reviving your business’ website?  After all, your website is your business’ presence online and is the first interaction customers have with your company.</p>
                                    <p>Does your website accurately display your company’s character, personality and culture? Is it current and up to date?</p>
                                    <p>Like your home, you may acquire a different taste in décor and choose to go beyond cleaning to overhauling a room’s look. Spring is a great time to do the same for your business website.</p>
                                    <blockquote>
                                        “I cannot give you the formula for success, but I can give you the formula for failure. It is: Try to please everybody.”
                                        <span className="author-name">Bayard Herbert</span>
                                    </blockquote>
                                    <div className="row clearfix">
                                        <div className="column col-lg-6 col-md-6 col-sm-12">
                                            <div className="image">
                                                <Image src={gl1} alt="" />
                                            </div>
                                        </div>
                                        <div className="column col-lg-6 col-md-6 col-sm-12">
                                            <div className="image">
                                                <Image src={gl2} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <h3>Absolute Links vs. Relative Links – SEO Intrinsic Value</h3>
                                    <p>Some SEO-related tools such as the Google Keyword Planner and Google Analytics provide quantitative data to help you understand your market, analyze the trends, and know your competitors’ standings. It helps you identify popular and valuable keywords so you can decide how to structure or revise your content. It also gives you insights on your market’s behavior such as location, times of activity, frequency of searches, technologies used, product preferences, etc. All these metrics are useful in helping you get to know your audience, their needs, and their expectations.</p>

                                    <div className="post-share-options">
                                        <div className="post-share-inner clearfix">
                                            <div className="pull-left">
                                                <div className="post-title">Tags:</div>
                                                <ul className="tags">
                                                    <li><Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links">App,</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links">Agencyco,</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links">History,</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links">Blue,</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links">Gold</Link></li>
                                                </ul>
                                            </div>
                                            <ul className="social-box pull-right">
                                                <li className="facebook"><Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-facebook-f"></span></Link></li>
                                                <li className="twitter"><Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-twitter"></span></Link></li>
                                                <li className="linkedin"><Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-google-plus"></span></Link></li>
                                                <li className="pinterest"><Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-pinterest-p"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="authors-box">
                                <div className="author-inner">
                                    <div className="thumb"><Image src={blog1} alt="" /></div>
                                    <div className="author">Author</div>
                                    <h4 className="name">Manika Rock</h4>
                                    <div className="text">He is attended the State University of New York at Oswego where he majored in English Literature and Creative Writing.</div>
                                    <ul className="social-icon clearfix">
                                        <li><Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links"><i className="fa fa-facebook-f"></i></Link></li>
                                        <li><Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links"><i className="fa fa-google-plus"></i></Link></li>
                                        <li><Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links"><i className="fa fa-twitter"></i></Link></li>
                                        <li><Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links"><i className="fa fa-linkedin"></i></Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="comments-area">
                                <div className="group-title"><h4>Read Comments</h4></div>
                                <div className="comment-box">
                                    <div className="comment">
                                        <div className="author-thumb"><Image src={blog2} alt="" /></div>
                                        <div className="comment-inner">
                                            <div className="comment-info clearfix">Steven Rich – Dec 17, 2020</div>
                                            <div className="rating">
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star light"></span>
                                            </div>
                                            <div className="text">How all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-box reply-comment">
                                    <div className="comment">
                                        <div className="author-thumb"><Image src={blog3} alt="" /></div>
                                        <div className="comment-inner">
                                            <div className="comment-info clearfix">William Cobus – Dec 20, 2020</div>
                                            <div className="rating">
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star-half-empty"></span>
                                            </div>
                                            <div className="text">There anyone who loves or pursues or desires to obtain pain itself, because it is pain sed, because occasionally circumstances occur some great pleasure.</div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="comment-form">
                                <div className="group-title"><h4>Add Your Reviews</h4></div>
                                <div className="rating-box">
                                    <div className="text"> Your Rating:</div>
                                    <div className="rating">
                                        <Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
                                    </div>
                                    <div className="rating">
                                        <Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
                                        <Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
                                    </div>
                                    <div className="rating">
                                        <Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
                                        <Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
                                        <Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
                                    </div>
                                    <div className="rating">
                                        <Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
                                        <Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
                                        <Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
                                        <Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
                                    </div>
                                    <div className="rating">
                                        <Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
                                        <Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
                                        <Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
                                        <Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
                                        <Link onClick={ClickHandler} href="/blog-single/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
                                    </div>
                                </div>
                                <form method="post" onSubmit={submitHandler}>
                                    <div className="row clearfix">
                                        <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                                            <label>Your Name*</label>
                                            <input type="text" name="username" placeholder="" required />
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                                            <label>Last Name*</label>
                                            <input type="text" name="username" placeholder="" required />
                                        </div>
                                        <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                                            <label>Email*</label>
                                            <input type="email" name="email" placeholder="" required />
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                            <label>Your Comments*</label>
                                            <textarea name="message" placeholder=""></textarea>
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                            <button className="theme-btn btn-style-two" type="submit" name="submit-form"><span className="txt">Submit Now</span></button>
                                        </div>

                                    </div>
                                </form>

                            </div>

                        </div>
                    </div>
                    <BlogSidebar />
                </div>
            </div>
        </div>
    )

}

export default BlogSingle;
