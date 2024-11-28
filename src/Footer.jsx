/* eslint-disable react/prop-types */
import { Twitter, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

export default function Footer({ description, links, company, copyright }) {
  return (
    <footer className="bg-[#0F1921] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 pb-12">
          <div className="md:col-span-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-left">LevelUp</h2>
              <p className="text-gray-400 text-sm max-w-md text-left">{description}</p>
               <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-[#3E7BFA] mb-4">{links.title}</h3>
            <ul className="space-y-2 text-left pl-[45%]">
              {links.items.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-gray-400 hover:text-white text-sm text-left">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#3E7BFA] mb-4">{company.title}</h3>
            <ul className="space-y-2 text-left pl-[45%]">
              {company.items.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-gray-400 hover:text-white text-sm">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center pt-8 border-t border-gray-800">
         
          <p className="text-gray-400 text-sm text-center">{copyright}</p>
        </div>
      </div>
    </footer>
  )
}

