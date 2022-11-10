import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/UserContext';
import useTitle from '../../Hooks/useTitle';
import MyAllReview from '../MyAllReview/MyAllReview';

const MyReview = () => {
    const [myReviews, setMyReviews] = useState([]);
    useTitle("My Review");
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.email])
    return (
        <div>
            <h1 className='text-4xl text-center py-12'>My All Review</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Review</th>
                            <th>Service Name</th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                      myReviews?.map(myReview=><MyAllReview
                        key={myReview._id}
                        myReview={myReview}
                        ></MyAllReview>)
                    }
                </table>
            </div>
        </div>
    );
};

export default MyReview;