import React from 'react';

const Strengths: React.FC = () => {
  const strengths = [
    {
      title: 'Adaptability',
      description: 'Strong ability to adapt to new technologies and changing requirements, ensuring projects stay current and effective.'
    },
    {
      title: 'Creative Storytelling',
      description: 'Expertise in crafting compelling narratives that engage audiences and drive meaningful connections.'
    },
    {
      title: 'Tech-Savvy',
      description: 'Proficient in modern tools and technologies, enabling efficient workflow and innovative solutions.'
    }
  ];

  return (
    <section className="w-full bg-black text-white py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start gap-12">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-12 flex items-center">
              MY STRENGTHS
              <span className="ml-2 text-2xl">*</span>
            </h2>
            <div className="space-y-8">
              {strengths.map((strength, index) => (
                <div key={index} className="border-t border-white/20 pt-6">
                  <h3 className="text-xl font-semibold mb-3">{strength.title}</h3>
                  <p className="text-gray-300">{strength.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            {/* Image placeholder - replace src with your actual image */}
            <div className="aspect-[3/4] bg-gray-800"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strengths; 