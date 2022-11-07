import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        
    <div class="m-auto xl:container px-12 sm:px-0 mx-auto">
    <div class="mx-auto h-full sm:w-max">
      <div class="m-auto  py-12">
      <div class="mt-12 rounded-3xl border bg-gray-50 dark:border-gray-700 dark:bg-gray-800 -mx-6 sm:-mx-10 p-8 sm:p-10">
        <h3 class="text-2xl font-semibold text-gray-700 dark:text-white">Login to your account</h3>
        <div class="mt-12 flex flex-wrap sm:grid gap-6 grid-cols-2">
          <button
            class="w-full h-11 rounded-full border border-gray-300/75 bg-white px-6 transition active:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700"
          >
            <div class="w-max mx-auto flex items-center justify-center space-x-4">
              <img src="images/google.svg" class="w-5" alt="" />
              <span class="block w-max text-sm font-semibold tracking-wide text-cyan-700 dark:text-white"
                >With Google</span>
              
            </div>
          </button>
          <button
            class="w-full h-11 rounded-full bg-gray-900 px-6 transition hover:bg-gray-800 focus:bg-gray-700 active:bg-gray-600 dark:bg-gray-700 dark:border dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700"
          >
            <div class="w-max mx-auto flex items-center justify-center space-x-4 text-white">
              
              <span class="block w-max text-sm font-semibold tracking-wide text-white"
                >Sign Up Here</span
              >
            </div>
          </button>
        </div> 
  
        <form action="" class="mt-10 space-y-8 dark:text-white">
          <div>
            <div class="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
              <input id="" type="email" placeholder="Your email or user name" class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"/>
            </div>
          </div>
  
          <div class="flex flex-col items-end">
            <div class="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
              <input id="" type="Your password" placeholder="Your answer" class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"/>
            </div>
            <button type="reset" class="-mr-3 w-max p-3">
              <span class="text-sm tracking-wide text-sky-600 dark:text-sky-400">Forgot password ?</span>
            </button>
          </div>
  
          <div>
            <button
              class="w-full rounded-full bg-sky-500 dark:bg-sky-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800"
            >
              <span class="text-base font-semibold text-white dark:text-gray-900">Login</span>
            </button>
            <button href="#" type="reset" class="-ml-3 w-max p-3">
              <span class="text-sm tracking-wide text-sky-600 dark:text-sky-400">Create new account</span>
            </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  </div>
  
    );
};

export default Login;