import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='mb-8 '>
            <div id='banner-height' className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img alt='Banner Img' src="https://www.cochrane.org/sites/default/files/public/styles/social_media/public/uploads/news/young-confident-asian-male-dentist-medical-treatment-to-a-female-patient-at-the-clinic.-dental-clinic-concept-911844046_1257x838_3.jpeg?itok=Gf5izRh3" className="w-full h-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img alt='Banner Img' src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_33/1763010/dentist-vaccine-kb-main-210818.jpg" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img alt='Banner Img' src="https://ichef.bbci.co.uk/news/976/cpsprodpb/5435/production/_113475512__110894880_gettyimages-1055182908.jpg" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img alt='Banner Img' src="https://ket-uploads-education-ga.s3.amazonaws.com/wp-content/uploads/id1671.jpg" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;