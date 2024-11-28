/* eslint-disable react/prop-types */
import { TbSquareRoundedCheckFilled } from 'react-icons/tb'

export default function InterviewSection({ title, description, features }) {
  return (
       
    <div className='bg-[#1F3343] w-full'>
    <section className="container mx-auto px-4 py-16">
      <div className="flex justify-between">
        <div className="grid gap-6">
          <div >
            <div className="relative aspect-video">
              <img
                src="/image3.png"
                className="w-[500px] h-[400px] object-cover"
              />
              
            </div>
           
          </div>

          
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-left">
              <span className="text-[#00E5B2]">{title.highlight}</span>
              {title.rest}
            </h2>
            <p className="text-gray-400 text-left">{description}</p>
          </div>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                 <TbSquareRoundedCheckFilled className="w-7 h-7 text-white  rounded-full" />
                <p className="text-gray-300">
                  {feature.text}
                  <span className="text-[#00E5B2]">{feature.highlight}</span>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

