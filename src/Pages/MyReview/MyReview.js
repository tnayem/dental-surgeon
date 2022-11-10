import React from 'react';
import useTitle from '../../Hooks/useTitle';

const MyReview = () => {
    useTitle("My Review")
    return (
        <div>
            <p>MY Id Is{process.env.REACT_APP_apiKey}</p>
        </div>
    );
};

export default MyReview;