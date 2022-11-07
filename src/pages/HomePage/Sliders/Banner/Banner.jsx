import React from 'react';

const Banner = () => {
    return (
        <div>
            <div class="min-h-screen flex">
            <div class="container m-auto px-6 py-40 md:px-12 lg:py-0 lg:px-7">
                <div class="flex items-center flex-wrap gap-12 lg:gap-0">
                    <div class="lg:w-5/12 space-y-8">
                        <span class="flex space-x-2">
                            <span class="block w-14 mb-2 border-b-2 border-gray-600"></span>
                            <span class="font-medium text-gray-600 dark:text-gray-400">New this summer</span>
                        </span>
                        <h1 class="text-4xl font-bold md:text-6xl dark:text-white">The New <br/> Way To Discover</h1>
                        <p class="text-xl text-gray-700 dark:text-gray-300">Booking Company-Wide Savings, Invoicing and reporting docs.</p>
                        
                        <div class="flex space-x-4">
                            <button type="button" title="Start buying" class="w-full py-3 px-6 text-center transition bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 active:bg-gray-700 focus:bg-gray-800 sm:w-max">
                                <span class="block text-white font-semibold">
                                    Shop now
                                </span>
                            </button>
                            <button type="button" title="Start buying" class="group w-full py-3 px-6 text-center transition dark:active:bg-yellow-800 dark:focus:bg-yellow-900 active:bg-yellow-200 focus:bg-yellow-100 sm:w-max">
                                <span class="block text-gray-700 dark:text-white font-semibold group-focus:text-yellow-700 dark:group-focus:text-yellow-100">
                                    Our showreel
                                </span>
                            </button>
                        </div>
                    </div>

                    <div class="hidden relative md:block lg:w-7/12">
                        <div aria-hidden="true" class="absolute inset-0 m-auto w-[30rem] h-[30rem] rounded-full bg-yellow-200">

                        </div>
                        <img src="images/shoes.png" class="relative ml-auto" alt=""/>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-8 w-full">
                <div class="container m-auto px-6 flex items-end justify-between md:px-12 lg:px-7">
                    <a href="" class="hidden space-x-4 md:flex md:items-center">
                        <img class="w-14 h-14 rounded-full object-cover" src="images/user.png" alt=""/>
                        <div class="text-gray-600 dark:text-gray-400">
                            <span class="text-sm">Question ?</span>
                            <p class="font-semibold text-gray-700 dark:text-gray-300">Talk to our assistant</p>
                        </div>
                    </a>
                    <div>
                        <a href="#" class="hover:text-yellow-700 dark:text-gray-300 dark:hover:text-red-400">Facebook /</a>
                        <a href="#" class="hover:text-yellow-700 dark:text-gray-300 dark:hover:text-red-400">YouTube / </a>
                        <a href="#" class="hover:text-yellow-700 dark:text-gray-300 dark:hover:text-red-400">Twitter</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;