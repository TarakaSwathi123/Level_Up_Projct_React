/* eslint-disable react/prop-types */
import { TbSquareRoundedCheckFilled } from "react-icons/tb";


export default function PracticeSection({ title, description, features }) {
  return (
    <div className='bg-[#1F3343] w-full'>
    <section className="container mx-auto px-4 py-16">
      <div className="space-y-16">
        <div className="flex justify-between items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-left">
              <span className=" bg-gradient-to-t from-[#FF8800] to-[#E63535] bg-clip-text text-transparent">{title.highlight}</span>
              {title.rest}
            </h2>
            <p className="text-gray-400 text-left">{description}</p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className='flex justify-center items-center'>
                  <TbSquareRoundedCheckFilled className="w-7 h-7 text-white  rounded-full" />
                  </div>
                  <p className="text-gray-300 ">
                    {feature.text}
                    <span className="text-[#FF4F17]">{feature.highlight}</span>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src="/image2.png" alt="Practice to level up" className="w-[530px]  h-[420px] rounded-lg" />
            <div className="absolute inset-0 " />
          </div>
        </div>

       
        
      </div>
    </section>
    </div>
  )
}


