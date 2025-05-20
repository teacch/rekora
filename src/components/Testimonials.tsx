import React from 'react'

const Testimonials = () => {
  return (
    <>
    <section className="py-16 px-4 md:px-16 lg:px-20 bg-rekora-light-blue mt-16">
      <div className="container mx-auto">
      

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border rounded-lg p-6">
            <div className="flex mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <blockquote className="text-gray-700 mb-4">
              <p className="text-sm mb-2">This is the first time science felt real!</p>
              <p className="text-sm">across 33 Countries. 20% incremental revenue growth in the first 7 days.</p>
              <p className="text-sm mt-2">was a fundamental reason for the success of our campaign. One of the best!</p>
            </blockquote>

            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
              <div>
                <p className="font-medium">David, 14</p>
                <p className="text-xs text-gray-500">Student</p>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <div className="flex mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <blockquote className="text-gray-700 mb-4">
              <p>
              Our students were amazed. Thank you, Rekora!
              </p>
            </blockquote>

            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
              <div>
                <p className="font-medium">Ms Lami Jeffrey</p>
                <p className="text-xs text-gray-500">Biology Teacher @TR College</p>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <div className="flex mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <blockquote className="text-gray-700 mb-4">
              <p className="text-sm mb-2">+20% revenue in 5 countries! Everyone needs a Jasmin Alić on their team.</p>
              <p className="text-sm">across 33 Countries. 20% incremental revenue growth in the first 7 days.</p>
              <p className="text-sm mt-2">was a fundamental reason for the success of our campaign. One of the best!</p>
            </blockquote>

            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
              <div>
                <p className="font-medium">Fred Ove</p>
                <p className="text-xs text-gray-500">School Teacher</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Testimonials