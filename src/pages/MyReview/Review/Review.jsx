import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, Navigate } from 'react-router-dom';
import { authContext } from '../../../contexts/AuthProvider';

const Review = ({ item, dltrefresh, setDltRefresh }) => {
    const { logOut } = useContext(authContext);
    const { _id, name, comment, photo, time } = item;
    // comment delete function 
    const handleDelete = () => {
        fetch(`http://localhost:3001/reviews/${_id}`, {
            method: "DELETE",
            headers: {
                authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                setDltRefresh(!dltrefresh)
                toast.success('DELETED SUCCESSFULLY')
            })
            .catch(err => {
                toast.error('HAVING ISSUE WITH DELETE TRY AGAIN')
                console.log(err)
            })
        }
        <Navigate to='/myreviews'/>
    // comment update function
    
    return (
        <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
        <footer className="flex justify-between items-center mb-2">
            <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><img
                        className="mr-2 w-6 h-6 rounded-full"
                        src={photo}
                        alt="img" />{ name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-02-08"
                        title="February 8th, 2022">{time}</time></p>
            </div>
            <button onClick={handleDelete} id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button">
                    Delete
                {/* <span className="sr-only">Comment settings</span> */}
            </button>
        </footer>
        <p className="text-gray-500 dark:text-gray-400">{comment.comment}</p>
        <div className="flex items-center mt-4 space-x-4">
                <Link to={`/update/${_id}`}>
                <button type="button"
                className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
                <svg aria-hidden="true" className="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                Update
            </button>
                </Link>
        </div>
    </article>

    );
};

export default Review;