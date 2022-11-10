import React from 'react';

const About = () => {
    return (
        <div className='py-24'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className='bg-base-200 p-4 rounded-lg'>
                    <input type="email" placeholder="email" className="input input-bordered input-primary w-full max-w-xs" />
                    <input type="text" placeholder="About More Info Type Hear" className="input input-bordered input-lg w-full max-w-xs my-6" />
                    <button className="btn px-6">Send</button>
                </div>
                <div className='bg-base-200 p-4 rounded-lg'>
                    <h3 className='text-2xl'>Call Us Today</h3>
                    <p className='text-justify'>Prevent Serious Health Complications. The complications from a lack of dental care can extend far beyond gingivitis .Increase Confidence. A lack of dental care can become visually apparent over time.</p>
                    <p className='font-bold py-4'>Phone: 01732862871</p>
                    <p className='font-bold py-4'>Email:abdulJolil@gmail.com</p>
                </div>
                <div className='text-center bg-base-200 p-4 rounded-lg'>
                    <h3 className='text-2xl'>Opening Hour</h3>
                    <p className='py-4'>Monday - Friday: 09-15h</p>
                    <p>Saturday: 09-12h</p>
                    <p className='py-4'>Sunday: Closed</p>
                </div>
            </div>
        </div>
    );
};

export default About;