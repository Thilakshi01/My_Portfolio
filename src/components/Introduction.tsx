import React from 'react';

const Introduction: React.FC = () => {
  return (
    <section className="w-full bg-[#FAF9F6] py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start gap-12">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6 flex items-center">
              INTRODUCTION
              <span className="ml-2 text-2xl">*</span>
            </h2>
            <div className="text-xl leading-relaxed">
              <p className="mb-4">
                Hi, I'm a passionate creator focused on crafting authentic content that connects.
                From eye-catching designs to relatable digital moments, I bring brands to life with
                meaningful storytelling. Let's collaborate and create something unforgettable together!
              </p>
            </div>
          </div>
          <div className="flex-1">
            {/* Image placeholder - replace src with your actual image */}
            <div className="aspect-[3/4] bg-gray-100"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction; 