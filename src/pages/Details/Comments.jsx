import React from 'react';

const Comments = () => {
    return (
        <div className="flex items-center mt-6">
                  <img
                    className="object-cover object-center w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    alt=""
                  />

                  <div className="mx-4">
                    <h1 className="text-sm text-gray-700 dark:text-gray-200">
                      Price : $
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Rating : 
                    </p>
                  </div>
                </div>
    );
};

export default Comments;