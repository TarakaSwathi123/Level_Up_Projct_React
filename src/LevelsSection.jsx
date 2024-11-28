/* eslint-disable react/prop-types */

export default function LevelsSection({ title, description, features }) {
  return (
    <div className='bg-[#1F3343] w-full'>
    <section className="container mx-auto px-4 py-16">
      <div className="flex justify-between gap-6">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-left">
            {title.start}
            <span className="bg-gradient-to-t from-[#00CFDE] to-[#0FA660] bg-clip-text text-transparent">{title.highlight}</span>
            {title.end}
          </h2>
          <p className="text-gray-400 text-left">{description}</p>
        </div>

        <div className="space-y-8">
          {features.map((feature, index) => {
            return (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12  flex items-center justify-center">
                  
                  <img 
        src={feature.icon} 
        alt={feature.title} 
        className="w-12 h-12" 
      />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1 text-left">{feature.title}</h3>
                  <p className="text-gray-400 text-sm text-left">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
    </div>
  )
}

