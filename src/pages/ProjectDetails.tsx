
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";

// Mock project data - in a real app, this would come from an API or database
const projects = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    longDescription: "This e-commerce platform was built to provide a seamless shopping experience for users and an intuitive management interface for administrators. The application includes features such as product browsing, search functionality, cart management, secure checkout, and order tracking. The admin panel allows for product management, inventory tracking, and order processing.",
    image: "https://picsum.photos/seed/ecom/1200/600",
    gallery: [
      "https://picsum.photos/seed/ecom1/600/400",
      "https://picsum.photos/seed/ecom2/600/400",
      "https://picsum.photos/seed/ecom3/600/400",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "Redux"],
    liveDemo: "https://example.com",
    githubRepo: "https://github.com",
    challenges: "One of the main challenges was implementing a real-time inventory system that could handle multiple concurrent orders without overselling products. This was solved by implementing a locking mechanism during the checkout process.",
    solutions: "The solution involved using MongoDB transactions to ensure data consistency and implementing a queue system for processing orders to prevent race conditions.",
  },
  // More projects would be defined here
];

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the project with the matching ID
  const project = projects.find(p => p.id === id);
  
  // If project not found, show a message
  if (!project) {
    return (
      <div className="container mx-auto py-20 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/projects">Back to Projects</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto py-12 px-4">
      <Button asChild variant="outline" className="mb-8">
        <Link to="/projects" className="flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Link>
      </Button>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-muted-foreground mb-6">{project.description}</p>
          
          <div className="mb-8">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p>{project.longDescription}</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {project.gallery.map((image, index) => (
                <img 
                  key={index}
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-48 object-cover rounded-md shadow-sm"
                />
              ))}
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Challenges & Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Challenges</h3>
                  <p>{project.challenges}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Solutions</h3>
                  <p>{project.solutions}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Project Details</h2>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <Button asChild className="w-full">
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
                
                <Button asChild variant="outline" className="w-full">
                  <a 
                    href={project.githubRepo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <Github className="mr-2 h-4 w-4" /> View Code
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
