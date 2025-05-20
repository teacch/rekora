import React from 'react'
import {
  BookOpen,
  FileText,
  PlayCircle,
} from 'lucide-react'
import { PlayschoolDoodles } from './PlaySchoolDoodles'
import StemProgram from './StemProgram'
import ImageGallery from './ImageGallery'

const typeImages = {
  Course: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",   // book icon
  Ebook: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png",    // document icon
  Video: "https://cdn-icons-png.flaticon.com/512/727/727245.png",     // play button icon
}

const contentItems = [
  {
    type: "Course",
    title: "Brain Science Basics",
    description: "Explore how the brain works. Fun facts and simple activities. Learn with ease.",
    icon: BookOpen,
    tag: "Science"
  },
  {
    type: "Course",
    title: "Neuroscience for Kids",
    description: "Neurons and brains made simple. Fun lessons for curious kids. Start exploring today.",
    icon: BookOpen,
    tag: "Biology"
  },
  {
    type: "Ebook",
    title: "The Thinking Brain",
    description: "What happens when you think? A colorful guide to your mind. Easy and exciting read.",
    icon: FileText,
    tag: "Neuroscience"
  },
  {
    type: "Ebook",
    title: "Neurons & Synapses",
    description: "See how brain cells talk. A simple, smart guide. Great for learning together.",
    icon: FileText,
    tag: "Science"
  },
  {
    type: "Video",
    title: "Meet Your Brain!",
    description: "Animated video on brain parts. Colorful and fun learning. Science has never been cooler.",
    icon: PlayCircle,
    tag: "Biology"
  },
  {
    type: "Video",
    title: "Journey of a Nerve Signal",
    description: "Watch how nerves work. Exciting animations. Understand your body's messages.",
    icon: PlayCircle,
    tag: "Biology"
  }
]

const Library = () => {
  return (
<>
    <section className="relative w-full bg-rekora-dark-blue py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      <PlayschoolDoodles />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Learn Beyond the Classroom
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contentItems.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <img
                  src={typeImages[item.type]}
                  alt={item.type}
                  className="h-24 w-auto object-contain"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-teal-100 rounded-full p-1">
                    <item.icon className="h-4 w-4 text-teal-600" />
                  </div>
                </div>

                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold font-heading">{item.title}</h3>
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-medium">
                    {item.tag}
                  </span>
                </div>

                <p className="text-gray-600 text-lg mb-4">{item.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-600">Free</span>
                  <span className="text-sm text-gray-600">1 {item.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            {[1, 2, 3].map((dot) => (
              <button
                key={dot}
                className={`h-2 rounded-full ${dot === 1 ? "w-6 bg-yellow-400" : "w-2 bg-white/50"}`}
                aria-label={`Go to slide ${dot}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
         <div className='bg-rekora-light-blue'>
            <ImageGallery/>

         </div>
</>

  )
}

export default Library
