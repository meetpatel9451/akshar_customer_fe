import simg1 from '/public/images/resource/service-1.jpg'
import highQualityPrinting from '/public/images/icons/high-quality-printing.png' 
import simg2 from '/public/images/resource/service-5.jpg'
import simg3 from '/public/images/resource/service-6.jpg'
import simg4 from '/public/images/resource/service-7.jpg'
import simg5 from '/public/images/resource/service-8.jpg'
import simg6 from '/public/images/resource/service-9.jpg'

import sIcon1 from '/public/images/icons/service-1.png' 
import sIcon2 from '/public/images/icons/service-2.png' 
import sIcon3 from '/public/images/icons/service-3.png' 



const Services = [
    {
        Id: '1',
        sTitle: 'Return & Exchnage', 
        slug: 'return',
        sImg:highQualityPrinting,
        Icon:'flaticon-pie-chart',
        sIcon:sIcon1,
        des:'Ensure top-notch quality in every print job, from business cards to large format banners.',
    },
    {
        Id: '2',
        sTitle: 'Refund and cancellation policy', 
        slug: 'refund',
        sImg:simg2,
        sIcon:sIcon2,
        Icon:'flaticon-line-chart',
        des:'Offer tailored graphic design services to create unique and eye-catching visuals for clients.',
    },
    {
        Id: '3',
        sIcon:sIcon3,
        sTitle: 'Shipping And Payments', 
        slug: 'shipping',
        sImg:simg3,
        Icon:'flaticon-bar-chart',
        des:'Create, publish, and promote engaging content to generate more traffic and build a dedicated community.',
    },
    {
        Id: '4',
        sIcon:sIcon3,
        sTitle: 'Privacy Policy', 
        slug: 'privacy',
        sImg:simg3,
        Icon:'flaticon-bar-chart',
        des:'Create, publish, and promote engaging content to generate more traffic and build a dedicated community.',
    },
    {
        Id: '5',
        sIcon:sIcon3,
        sTitle: 'Disclmimer', 
        slug: 'disclaimer',
        sImg:simg3,
        Icon:'flaticon-bar-chart',
        des:'Create, publish, and promote engaging content to generate more traffic and build a dedicated community.',
    },
    {
        Id: '6',
        sIcon:sIcon3,
        sTitle: 'Inquiry', 
        slug: 'inquiry',
        sImg:simg3,
        Icon:'flaticon-bar-chart',
        des:'Create, publish, and promote engaging content to generate more traffic and build a dedicated community.',
    },
]

export default Services;