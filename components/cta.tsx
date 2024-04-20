"use client"
import Image from "next/image"
import { useState } from "react"

export const CTA= () => {

    const [state, setState] = useState(false)

    // Replace javascript:void(0) path with your path
    const navigation = [
        { title: "Partners", path: "javascript:void(0)" },
        { title: "Customers", path: "javascript:void(0)" },
        { title: "Team", path: "javascript:void(0)" },

    ]

    return (
        <>
            <section className="py-28">
                <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                        <h1 className="text-sm text-indigo-600 font-medium">
                            Over 200 successful deals
                        </h1>
                        <h2 className="text-4xl text-white font-extrabold md:text-5xl">
                            We help startups to grow and make money
                        </h2>
                        <p>
                            Branding is simply a more efficient way to make sales
                        </p>
                        <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <a href="javascript:void(0)" className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                                Let&#39;s get started
                            </a>
                           
                        </div>
                    </div>
                    <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
                        <img
                            src="https://images.unsplash.com/photo-1573164713619-24c711fe7878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
                            className=" md:rounded-tl-[108px]"
                            alt=""
                        />
                    </div>
                </div>
                <div className="mt-14 px-4 md:px-8">
                    <p className="text-center text-sm  text-sky-200 font-semibold">Trusted by the best companies</p>
                    <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-6">
                        <div className=" w-[150px] h-[150px] rounded relative">
                            <Image
                              src={"/images/safcom.jpeg"}
                              alt=""
                              className=" bg-center bg-cover rounded-lg"
                              fill
                              />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}