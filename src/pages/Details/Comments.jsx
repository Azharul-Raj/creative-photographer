import React from 'react';

const Comments = ({ item }) => {
  const { name,photo,comment} = item;
    return (
        <div className="flex items-center mt-6">
                  <img
                    className="object-cover object-center w-10 h-10 rounded-full"
                    src={photo}
                    alt=""
                  />

                  <div className="mx-4">
                    <h1 className="text-sm text-gray-700 dark:text-gray-200">
                      {name}
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {comment.comment}
                    </p>
                  </div>
                </div>
    );
};

export default Comments;