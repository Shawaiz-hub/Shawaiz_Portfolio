
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, Database, Palette, Server, 
  FileDown, Briefcase, GraduationCap, Award 
} from "lucide-react";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-muted-foreground text-lg mb-8">
            I'm a passionate full-stack developer with expertise in modern web technologies.
            I love creating beautiful, functional, and user-friendly applications.
          </p>
          <Button asChild variant="outline">
            <a href="public/CV.docx" download>
              <FileDown className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </Button>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Personal Biography</h2>
              <p className="text-muted-foreground mb-4">
                Hello! I'm Shawaiz, a full-stack developer with over 5 years of experience in building web applications.
                I specialize in JavaScript-based technologies like React, Node.js, and modern frameworks.
              </p>
              <p className="text-muted-foreground mb-4">
                My journey in programming began during college when I built my first website. Since then,
                I've worked with startups and established companies to create innovative digital solutions.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you can find me hiking, reading science fiction, or experimenting with new recipes in the kitchen.
                I believe in continuous learning and regularly attend tech conferences and workshops to stay updated with the latest trends.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-square rounded-lg overflow-hidden">
                <img 
                    src="/images/shawaiz2.jpg" 
                  alt="Shawaiz Profile" 
                  className="w-100% h-100% object-fill"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Technologies */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <SkillCard 
              icon={<Code className="h-10 w-10 text-primary" />}
              title="Frontend Development"
              skills={["React", "Next.js", "Vue.js", "TailwindCSS", "Sass", "JavaScript", "TypeScript"]}
            />
            <SkillCard 
              icon={<Server className="h-10 w-10 text-primary" />}
              title="Backend Development"
              skills={["Node.js", "Express", "Django", "Flask", "PHP", "REST APIs", "GraphQL"]}
            />
            <SkillCard 
              icon={<Database className="h-10 w-10 text-primary" />}
              title="Databases"
              skills={["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "Prisma", "Sequelize"]}
            />
            <SkillCard 
              icon={<Palette className="h-10 w-10 text-primary" />}
              title="Design & Tools"
              skills={["Figma", "Adobe XD", "Git", "Docker", "AWS", "CI/CD", "Webpack"]}
            />
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-8">
                <Briefcase className="h-6 w-6 mr-3 text-primary" />
                <h2 className="text-3xl font-bold">Work Experience</h2>
              </div>
              
              <div className="space-y-8">
                <TimelineItem 
                  years="2021 - Present"
                  title="Senior Full Stack Developer"
                  company="Tech Innovations Inc."
                  description="Lead developer for multiple web applications, overseeing the entire development lifecycle and mentoring junior developers."
                />
                <TimelineItem 
                  years="2019 - 2021"
                  title="Frontend Developer"
                  company="WebSolutions Co."
                  description="Developed responsive and accessible user interfaces for client projects using React and modern CSS frameworks."
                />
                <TimelineItem 
                  years="2017 - 2019"
                  title="Junior Web Developer"
                  company="Digital Creations"
                  description="Assisted in the development of websites and web applications using HTML, CSS, JavaScript, and PHP."
                />
              </div>
            </div>
            
            <div>
              <div className="flex items-center mb-8">
                <GraduationCap className="h-6 w-6 mr-3 text-primary" />
                <h2 className="text-3xl font-bold">Education</h2>
              </div>
              
              <div className="space-y-8">
                <TimelineItem 
                  years="2015 - 2017"
                  title="Master's in Computer Science"
                  company="Tech University"
                  description="Specialized in web technologies and software engineering. Thesis on scalable web applications."
                />
                <TimelineItem 
                  years="2011 - 2015"
                  title="Bachelor's in Computer Science"
                  company="State University"
                  description="Foundations in programming, algorithms, data structures, and software development methodologies."
                />
                <TimelineItem 
                  years="2020"
                  title="Certification in UI/UX Design"
                  company="Design Academy"
                  description="Intensive program covering user interface design principles, user experience, and prototyping tools."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <div className="flex items-center mb-12 justify-center">
            <Award className="h-6 w-6 mr-3 text-primary" />
            <h2 className="text-3xl font-bold">Certifications & Achievements</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AchievementCard 
              title="AWS Certified Developer"
              year="2022"
              description="Professional certification for Amazon Web Services cloud development."
            />
            <AchievementCard 
              title="MongoDB Certified Developer"
              year="2021"
              description="Expert-level certification in MongoDB database design and implementation."
            />
            <AchievementCard 
              title="Google UX Design Certification"
              year="2020"
              description="Comprehensive training in user experience design principles and practices."
            />
            <AchievementCard 
              title="Hackathon Winner"
              year="2019"
              description="First place in Regional Web Development Hackathon for an innovative education platform."
            />
            <AchievementCard 
              title="Open Source Contributor"
              year="2018 - Present"
              description="Active contributor to several popular open-source JavaScript libraries."
            />
            <AchievementCard 
              title="Technical Speaker"
              year="2020 - Present"
              description="Regular speaker at local tech meetups and conferences on web development topics."
            />
          </div>
        </div>
      </section>

      {/* Hobbies & Interests */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Hobbies & Interests</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-4">
              Beyond coding, I have a variety of interests that keep me balanced and inspired:
            </p>
            <ul className="list-disc text-left pl-8 mb-6 text-muted-foreground">
              <li><strong>Photography</strong> – Capturing landscapes and street scenes</li>
              <li><strong>Hiking</strong> – Exploring nature and staying active</li>
              <li><strong>Reading</strong> – Science fiction, technology, and psychology books</li>
              <li><strong>Cooking</strong> – Experimenting with international cuisines</li>
              <li><strong>Chess</strong> – Strategic thinking and mental challenges</li>
              <li><strong>Travel</strong> – Experiencing different cultures and perspectives</li>
            </ul>
            <p className="text-muted-foreground">
              I believe these diverse interests contribute to my creativity and problem-solving approach in development projects.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const SkillCard = ({ icon, title, skills }: SkillCardProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {icon}
          <h3 className="text-xl font-bold ml-3">{title}</h3>
        </div>
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center">
              <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
              <span className="text-muted-foreground">{skill}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

interface TimelineItemProps {
  years: string;
  title: string;
  company: string;
  description: string;
}

const TimelineItem = ({ years, title, company, description }: TimelineItemProps) => {
  return (
    <div className="relative pl-8 border-l border-border">
      <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary"></div>
      <div className="text-sm text-muted-foreground mb-1">{years}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="text-primary mb-2">{company}</div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

interface AchievementCardProps {
  title: string;
  year: string;
  description: string;
}

const AchievementCard = ({ title, year, description }: AchievementCardProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <div className="text-sm text-primary mb-2">{year}</div>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default About;
