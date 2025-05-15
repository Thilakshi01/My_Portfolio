import React from 'react';

interface ProjectProps {
  number: string;
  title: string;
  description: string;
  images: string[];
}

const Project: React.FC<ProjectProps> = ({ number, title, description, images }) => {
  return (
    <section className="w-full bg-[#FAF9F6] py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold flex items-center">
            PROJECT {number}
            <span className="ml-2 text-2xl">*</span>
          </h2>
          <h3 className="text-2xl italic mt-2">{title}</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              {description}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div key={index} className="aspect-square bg-gray-100">
                {/* Replace with actual images */}
                <img
                  src={image}
                  alt={`Project ${number} image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project; 