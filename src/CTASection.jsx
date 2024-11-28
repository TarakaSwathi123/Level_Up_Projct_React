// /* eslint-disable react/prop-types */



export default function CTASection() {
  return (
    <section className="w-full bg-[#1A1E23] py-24">
      <div className="container mx-auto px-4">
        <div className="relative w-full max-w-[1440px] mx-auto">
          {/* Glow effects */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl blur-2xl opacity-30" />
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl blur-lg opacity-20" />
          
          {/* Content container */}
          <div className="relative bg-[#1E242B] rounded-2xl p-16 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Join for <span className="bg-gradient-to-t from-[#73dfe7] to-[#0063f7] bg-clip-text text-transparent pr-3">
  FREE 
</span>
 today
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Elevate your interview skills with practice-based learning and gain insights from expert mock interviews. Supercharge your interview game with LevelUp today!
            </p>
            <button className="px-8 py-4 bg-[#4F46E5] text-white rounded-lg hover:bg-[#4338CA] transition-colors text-lg font-medium">
              Get started for FREE
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

