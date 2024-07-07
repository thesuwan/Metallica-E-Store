import React from 'react'
import type { Metadata } from 'next'
import img from "@/img/logo.png";

//Ask to the teacher why there is undefined in title.
type DataOfUrlForTitle = { params: { slug: string } }
export const generateMetadata = (props: DataOfUrlForTitle): Metadata => {
    return {
        title: `Metallica : ${props.params.slug}`
    }
}

export default function loginPage() {

    return (

        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 my-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src="https://www.pngall.com/wp-content/uploads/9/Metallica-Logo-PNG-Download-Image.png"
                        className="mx-auto h-30 w-auto"
                    />
                    <h2 className=" text-center text-sm font-bold leading-9 tracking-tight text-gray-900">
                        Unlock the Possibilities: Sign In Now
                    </h2>
                </div>

                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="/forgot" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a user?{' '}
                        <a href="./register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Click here to register.
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}
