import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../contexts/AuthProvider';
import Review from './Review/Review';

const MyReview = () => {
    const { user } = useContext(authContext);
    const [allComments,setAllComments]=useState([])
    useEffect(() => {
        fetch(`http://localhost:3001/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setAllComments(data))
        .catch(err=>console.log(err))
    },[user?.email])
    return (
        <div>
            {
                allComments.map(item=><Review key={item._id} item={item}/>)
            }
        </div>
    );
};

export default MyReview;