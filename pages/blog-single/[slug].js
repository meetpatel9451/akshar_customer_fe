
import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useRouter } from 'next/router'
import BlogSingle from '../../components/BlogDetails/BlogDetails';
import blogs from '../../api/blogs'
import Footer from '../../components/footer/Footer';
import PartnerSection from '../../components/PartnerSection';

const submitHandler = (e) => {
    e.preventDefault()
}


const BlogSinglePage = (props) => {
    const router = useRouter()

    const BlogDetails = blogs.find(item => item.slug === router.query.slug)


    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'} />
            <PageTitle pageTitle={BlogDetails?.title} pagesub={'Blog'} />
            <BlogSingle />
            <PartnerSection styleClass={'style-two'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};
export default BlogSinglePage;
