import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Scrollbar = () => {

    return(
        <AnchorLink href='#__next'>
            <div className="back-to-top scroll-to-target show-back-to-top">TOP</div>
        </AnchorLink>
        
    )
}

export default Scrollbar;
