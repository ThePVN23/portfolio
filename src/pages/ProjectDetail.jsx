import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { portfolioData } from '../data';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Flatten all items to find the one with the matching slug
    const allItems = portfolioData.flatMap(cat => 
      cat.structure.flatMap(sec => 
        sec.items || (sec.subcategories ? sec.subcategories.flatMap(sub => sub.items) : [])
      )
    );
    
    const found = allItems.find(p => p.slug === slug);
    if (found) {
      setProject(found);
    } else {
      navigate('/404'); 
    }
  }, [slug, navigate]);

  if (!project) return <div className="bg-black min-h-screen"></div>;

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-4 md:px-12 animate-fade-in">
      
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="mb-8 text-neutral-500 hover:text-white transition-colors flex items-center gap-2"
        >
          ← Back
        </button>

        {/* Video Player (Placeholder or Real) */}
        <div className="aspect-video w-full bg-neutral-900 border border-neutral-800 mb-8">
            {project.videoId ? (
                <iframe 
                    src={`https://www.youtube.com/embed/${project.videoId}`} 
                    className="w-full h-full" 
                    frameBorder="0" 
                    allowFullScreen 
                    title={project.title}
                ></iframe>
            ) : (
                <img src={project.thumbnail} alt="" className="w-full h-full object-cover opacity-50" />
            )}
        </div>

        {/* Header & Description */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
              {project.title}
            </h1>
            <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </div>

          {/* Credits Section */}
          <div className="md:col-span-1">
             <div className="border-t border-neutral-800 pt-6 md:border-t-0 md:pt-0">
                
                {/* Loop through credits if they exist */}
                {project.credits && project.credits.length > 0 && (
                  <div className="space-y-4">
                    {project.credits.map((credit, index) => (
                      <div key={index} className="flex flex-col">
                        <span className="text-neutral-500 text-sm uppercase tracking-wider mb-1">
                          {credit.role}
                        </span>
                        <span className="text-white font-medium">
                          {credit.name}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Date/Year (Fallback if no credits, or strictly as footer) */}
                <div className="mt-8 pt-6 border-t border-neutral-800">
                    <span className="text-neutral-500 text-sm">Released</span>
                    <div className="text-white mt-1">{project.year}</div>
                </div>

             </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;