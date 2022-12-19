import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { authContext } from "../../contexts/AuthProvider";
import Comments from './Comments';

const Details = () => {
  const { user } = useContext(authContext);
  // all states are here
  const [refresh,setRefresh]=useState(false)
  const [comment, setComment] = useState('');
  const [comments,setComments]=useState([])
  const service=useLoaderData()
    const { title,service_id,img,desc,price,rating} = service;
  // comment data fetching function here
  useEffect(() => {
    fetch(`https://assignment-11-server-ten.vercel.app/reviews/${service_id}`)
      .then(res => res.json())
      .then(data => {
        setComments(data)
      })
    .catch(err=>console.error(err))
  },[service_id,refresh])
  // console.log(comments);
  // handle post comment api
  const handleComment = (e) => {
    e.preventDefault();
    const review = {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      service_id: service_id,
      serviceName: title,
      time:new Date().toLocaleTimeString(),
      comment: {
        comment:comment
      }
    }
    fetch('https://assignment-11-server-ten.vercel.app/reviews', {
      method: "POST",
      headers: {
        "content-type":"application/json"
      },
      body:JSON.stringify(review)
    })
    .then(res => res.json())
    .then(data => {
        setRefresh(!refresh)
        toast.success('Comment posted successfully')
      })
      .catch(err => console.error(err))
    e.target.reset();
    
  }

  return (
    <div data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500">
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:flex lg:-mx-6">
            <div className="lg:w-3/4 lg:px-6">
              <img
                className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
                src={img}
                alt=""
              />

              <div>
                <p className="mt-6 text-sm text-blue-500 uppercase">Details of</p>

                <h1 className="max-w-lg mt-4 text-4xl font-semibold leading-tight text-gray-800 dark:text-white">
                  {title}
                </h1>
                              <p>{ desc}</p>
                <div className="flex items-center mt-6">

                  <div className="mx-4">
                    <h1 className="text-sm text-gray-700 dark:text-gray-200">
                      Price : {price}$
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Rating : {rating}
                    </p>
                    {/* comment box */}
                    {user ?
                      <form onSubmit={handleComment} className="my-6">
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label htmlFor="comment" className="sr-only">Your comment</label>
            <textarea id="comment" onBlur={(e)=>setComment(e.target.value)} rows="6" cols="80"
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..." required></textarea>
        </div>
        <button type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
            Post comment
        </button>
    </form>
                   : <div className="my-5">
                    <Link to='/login'>
                    <button 
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
            Please Login To post a comment
        </button>
                    </Link>
                    </div>}
                    {/* comment box */}
                  </div>
                </div>
              </div>
            </div>
              <>
            {comments.length?<div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
              {
                comments.map(item => <Comments key={item._id} item={ item} />)
              }
              </div>
                :
                <h3 className="">No Comment Found</h3>
              }
              </>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
