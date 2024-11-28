/* eslint-disable react/prop-types */
import { TbSquareRoundedCheckFilled } from 'react-icons/tb'

export default function DailyQuizSection({ title, description, features }) {
  return (
    <div className='bg-[#1F3343] w-full'>
    <section className="container mx-auto px-4 py-16">
      <div className="flex justify-between">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-left">
              <span className="bg-gradient-to-t from-[#3E7BFA] to-[#6600CC] bg-clip-text text-transparent">{title.highlight}</span>
              {title.rest}
            </h2>
            <p className="text-gray-400 text-left">{description}</p>
          </div>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <TbSquareRoundedCheckFilled className="w-7 h-7 text-white  rounded-full" />
                <p className="text-gray-300">
                  <span className="text-purple-500">{feature.highlight}</span>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
            <img src="/image4.png" alt="Practice to level up" className="w-[531px] h-[421px] rounded-lg" />
          </div>
      </div>
    </section>
    </div>
  )
}

