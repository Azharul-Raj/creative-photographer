import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";
import Review from "./Review/Review";

const MyReview = () => {
  useTitle('My Reviews')
  const { user,logOut } = useContext(authContext);
  const [dltrefresh, setDltRefresh] = useState(false);
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    fetch(`https://assignment-11-server-ten.vercel.app/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut()
        }
        return res.json()
      })
      .then((data) => setAllComments(data))
      .catch((err) => console.log(err));
  }, [user?.email, dltrefresh]);
  console.log(allComments);
  return (
    <>
      {allComments?.length ? (
        <div className="lg:mt-10 lg:mx-5">
          {allComments.map((item) => (
            <Review
              key={item._id}
              item={item}
              dltrefresh={dltrefresh}
              setDltRefresh={setDltRefresh}
            />
          ))}
        </div>
      ) : (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto">
            <a href="/" className="mb-4 mr-8">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </a>
            <div>
              <p className="mb-2 text-4xl font-semibold tracking-wide text-white uppercase">
                'No reviews were added'
              </p>
              <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"></h2>
              {/* <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae.
        </p> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyReview;
