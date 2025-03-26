
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Briefcase, Globe } from "lucide-react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-primary">Shawaiz</span><br />
              Full Stack Developer
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              I build exceptional and accessible digital experiences for the web.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link to="/projects">View My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <img 
                   src="/images/shawaiz2.jpg"
                alt="Shawaiz Profile" 
                className="w-100% h-100% object-fill"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground">
              I'm a full-stack developer with a passion for building digital products that are both beautiful and functional. 
              With expertise in modern web technologies, I create seamless user experiences across platform.
            </p>
            <div className="mt-8 flex justify-center space-x-8">
              <div className="text-center">
                <Code className="h-8 w-8 mb-2 mx-auto text-primary" />
                <h3 className="font-medium">Web Development</h3>
              </div>
              <div className="text-center">
                <Briefcase className="h-8 w-8 mb-2 mx-auto text-primary" />
                <h3 className="font-medium">UI/UX Design</h3>
              </div>
              <div className="text-center">
                <Globe className="h-8 w-8 mb-2 mx-auto text-primary" />
                <h3 className="font-medium">Cloud Services</h3>
              </div>
            </div>
            <Button asChild variant="outline" className="mt-8">
              <Link to="/about">Read More About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Featured Projects</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <Card key={project} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={`https://picsum.photos/seed/${project}/600/400`} 
                  alt="Project Thumbnail" 
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project Title {project}</h3>
                  <p className="text-muted-foreground mb-4">
                    A brief description of the project and what technologies were used to build it.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Node.js</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">MongoDB</span>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to={`/projects/${project}`}>View Project</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild>
              <Link to="/projects" className="flex items-center">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">What People Say</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Feedback from clients and colleagues I've worked with.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { 
                name: "Jane Smith", 
                role: "Project Manager", 
                content: "Working with Shawaiz was a pleasure. He delivered the project on time and exceeded our expectations with the quality of his work." 
              },
              { 
                name: "Alex Johnson", 
                role: "Startup Founder", 
                content: "Shawaiz helped us bring our idea to life. His technical expertise and attention to detail made our product stand out in the market." 
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <blockquote className="text-muted-foreground italic mb-4">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto text-center max-w-xl">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground mb-8">
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link to="/contact">Contact Me</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
