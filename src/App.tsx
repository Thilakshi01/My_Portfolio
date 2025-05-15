import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Strengths from './components/Strengths';
import Project from './components/Project';
import Contact from './components/Contact';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App: React.FC = () => {
  const projects = [
    {
      number: '01',
      title: 'Brand',
      description: 'Developed for all skin types, the formulations aim to provide effective skincare solutions. Focusing on natural ingredients and luxury feel.',
      images: ['/project1-1.jpg', '/project1-2.jpg', '/project1-3.jpg', '/project1-4.jpg']
    },
    {
      number: '02',
      title: 'Brand',
      description: 'A minimalist approach to modern fashion, emphasizing comfort and style through carefully selected materials and timeless designs.',
      images: ['/project2-1.jpg', '/project2-2.jpg', '/project2-3.jpg', '/project2-4.jpg']
    }
  ];

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
      <div className="min-h-screen bg-[#FAF9F6]">
        <Header />
        <Introduction />
        <Strengths />
        {projects.map((project, index) => (
          <Project
            key={index}
            number={project.number}
            title={project.title}
            description={project.description}
            images={project.images}
          />
        ))}
        <Contact />
      </div>
    </QueryClientProvider>
  );
};

export default App;
