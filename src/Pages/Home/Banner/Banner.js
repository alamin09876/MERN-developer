import React from 'react';
import img1 from '../../../assest/images/1.png'
import img2 from '../../../assest/images/2.jpeg'
import img3 from '../../../assest/images/3.png'
import BannerItem from './BannerItem';



    const bannerData = [
        {
            image: img1,
            prev: 6,
            id: 1,
            next: 2
        },
        {
            image: img2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: img3,
            prev: 2,
            id: 3,
            next: 1
        },
        
    ]
    
    const Banner = () => {
        return (
            <div className="carousel w-full py-10">
                {
                    bannerData.map(slide => <BannerItem
                        key={slide.id}
                        slide={slide}
                    >

                    </BannerItem>)
                }
                
            </div>
        );
    };
    

export default Banner;