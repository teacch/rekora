import { Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative w-full bg-rekora-dark-blue py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
       

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:text-center">
          <div>
            <h3 className="font-medium mb-4 text-white">Programs</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Science Workshops
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Math Enrichment
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Robotics & Coding
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Summer Camps
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  After-School Clubs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Educator Resources
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-white">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-white">Discover</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Our Impact
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Partnerships
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Volunteer
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  About Rekora
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Donate
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center lg:justify-items-center">
          <div className="lg:text-center">
            <h3 className="font-medium mb-4 text-white">Join Our Newsletter</h3>
            <p className="text-sm text-gray-300 mb-4">Stay updated on Rekora's exciting programs and events. No spam, just science!</p>
            <div className="flex gap-2 lg:justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 rounded px-3 py-2 w-full max-w-xs bg-rekora-dark-blue text-white"
              />
              <button className="bg-teal-700 hover:bg-teal-800 text-white px-4 py-2 rounded">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          © 2023 Rekora. All rights reserved.

          <div className="flex flex-col md:items-end lg:items-center">
            <div className="flex gap-4 mt-4 lg:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}