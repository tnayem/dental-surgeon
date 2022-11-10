import React from 'react';

const MyAllReview = ({ myReview }) => {
    console.log(myReview);
    const {displayName,email,review,serviceName,services,_id,image}=myReview;
    return (

        <tbody>
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{displayName}</div>
                        </div>
                    </div>
                </td>
                <td>
                {review}
                </td>
                <td>{serviceName}</td>
                <th>
                    <button className="btn btn-ghost btn-xs">Edit</button>
                    <button className="btn btn-ghost btn-xs">Delate</button>
                </th>
            </tr>
        </tbody>
    );
};

export default MyAllReview;