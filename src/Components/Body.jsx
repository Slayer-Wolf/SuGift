/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Feature from "./Feature"
import Carousel from "./Carousel"
import Stats from "./Stats"
import Review from "./Review"
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Body() {
  return (
    <>
           <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
            <h1 className="text-3xl font-bold  text-gray-900">Suhanee</h1>
              </div>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}

            <Feature/>
          
            {/* /End replace */}
          </div>
           
        </main>
      <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}

      <Stats/>
          
            {/* /End replace */}
          </div>
           
        </main>
     <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          </div>
        </header>
        <main>
          <div className="max-w-7xl flex flex items-center mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}

            <Review/>
          
            {/* /End replace */}
          </div>
           
        </main>
      <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}

            <Carousel/>
          
            {/* /End replace */}
          </div>
           
        </main>
    </>
   
  );
}
