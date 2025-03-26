
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    image: "https://picsum.photos/seed/ecom/600/400",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    id: 2,
    title: "AI Image Generator",
    description: "An application that uses AI to generate images based on text prompts.",
    image: "https://picsum.photos/seed/ai/600/400",
    category: "ai",
    technologies: ["Python", "TensorFlow", "React", "Flask"],
  },
  {
    id: 3,
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets and analytics.",
    image: "https://picsum.photos/seed/data/600/400",
    category: "data",
    technologies: ["D3.js", "React", "Node.js", "PostgreSQL"],
  },
  {
    id: 4,
    title: "Social Media App",
    description: "A social networking application with real-time chat and media sharing.",
    image: "https://picsum.photos/seed/social/600/400",
    category: "web",
    technologies: ["React Native", "Firebase", "Redux", "Socket.io"],
  },
  {
    id: 5,
    title: "Natural Language Processor",
    description: "A tool for analyzing and processing natural language text data.",
    image: "https://picsum.photos/seed/nlp/600/400",
    category: "ai",
    technologies: ["Python", "NLTK", "SpaCy", "FastAPI"],
  },
  {
    id: 6,
    title: "Stock Market Analysis Tool",
    description: "Application for analyzing stock market trends and making predictions.",
    image: "https://picsum.photos/seed/stock/600/400",
    category: "data",
    technologies: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-muted-foreground">
            Explore my portfolio of projects across web development, AI, and data science.
          </p>
        </div>
        
        <Tabs defaultValue="all" className="mb-12">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setActiveCategory("all")}>All Projects</TabsTrigger>
              <TabsTrigger value="web" onClick={() => setActiveCategory("web")}>Web Apps</TabsTrigger>
              <TabsTrigger value="ai" onClick={() => setActiveCategory("ai")}>AI</TabsTrigger>
              <TabsTrigger value="data" onClick={() => setActiveCategory("data")}>Data Science</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="web" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="ai" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="data" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
        <Button asChild variant="outline" size="sm" className="w-full">
          <Link to={`/projects/${project.id}`}>View Details</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default Projects;
