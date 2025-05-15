import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-black text-white py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-8xl font-bold mb-8">PORTFOLIO</h1>
        <p className="text-xl opacity-80 max-w-2xl">
          The desire to create is one of the deepest yearnings of the human soul.
        </p>
        <div className="mt-4">
          <p className="text-lg">your.email@gmail.com</p>
        </div>
      </div>
    </header>
  );
};

export default Header; 