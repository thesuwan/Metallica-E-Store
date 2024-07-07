import React from 'react'
import { Fragment } from 'react';

const header = () => {
        return (
            <Fragment>
                
                <header className="w-full mt-3 text-gray-700 bg-white shadow-sm body-font">
                    <div className="container flex flex-col items-center justify-between p-0 mx-auto md:flex-row">
                        <a href="#_" className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
                            <img className="w-30 h-20 text-gray-900 fill-current" src="https://iconape.com/wp-content/files/gf/295817/svg/295817.svg" alt="image" />
                        </a>
                        <nav className="flex items-center justify-center text-base md:ml-auto">
                            <a href="#_" className="mr-5 font-medium hover:text-gray-900">Home</a>
                            <a href="#_" className="mr-5 font-medium hover:text-gray-900">About</a>
                            <a href="#_" className="font-medium hover:text-gray-900">Contact</a>
                        </nav>
                        <div className="flex items-center mt-4 mx-5 md:mt-0">
                            <a href="#_" className="mr-5 font-medium hover:text-gray-900">Login</a>
                            <a href="#_" className="mr-5 font-medium hover:text-gray-900">
                                Sign Up
                            </a>
                        </div>
                    </div>
                </header>
            </Fragment>
        );
    };
    
export default header;
 