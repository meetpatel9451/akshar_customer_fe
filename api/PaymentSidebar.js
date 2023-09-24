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

const PaymentSidebar = [
    {
        Id: '1',
        sTitle: 'Profile', 
        slug: 'profile',
        sImg:highQualityPrinting,
        Icon:'flaticon-pie-chart',
        sIcon:sIcon1,
        des:'Add/Update the profile',
    },
    {
        Id: '2',
        sTitle: 'Order And History', 
        slug: 'history',
        sImg:simg2,
        sIcon:sIcon2,
        Icon:'flaticon-line-chart',
        des:'To show the past order and history',
    },
    {
        Id: '3',
        sIcon:sIcon3,
        sTitle: 'Cash Memo', 
        slug: 'cash-memo',
        sImg:simg3,
        Icon:'flaticon-bar-chart',
        des:'To manage the cash memo',
    },
    {
        Id: '4',
        sIcon:sIcon3,
        sTitle: 'Ladger Statement', 
        slug: 'ladger-statement',
        sImg:simg3,
        Icon:'flaticon-bar-chart',
        des:'To manage the ladger statement',
    },
    {
        Id: '5',
        sIcon:sIcon3,
        sTitle: 'Change Password', 
        slug: 'change-password',
        sImg:simg3,
        Icon:'flaticon-bar-chart',
        des:'To reset the password',
    },
    {
        Id: '6',
        sIcon:sIcon3,
        sTitle: 'Payment', 
        slug: 'payment',
        sImg:simg3,
        Icon:'flaticon-bar-chart',
        des:'To upload the payment receipt',
    },
]

export default PaymentSidebar;