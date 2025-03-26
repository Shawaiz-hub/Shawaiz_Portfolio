
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus, Pencil, Trash2, Eye } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  techStack: string;
  demoLink: string;
  status: "published" | "draft";
}

const initialProjects: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    description: "Personal portfolio website built with React",
    thumbnail: "/placeholder.svg",
    techStack: "React, TailwindCSS, Framer Motion",
    demoLink: "https://example.com",
    status: "published",
  },
  {
    id: "2",
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    thumbnail: "/placeholder.svg",
    techStack: "Next.js, Prisma, Stripe, TypeScript",
    demoLink: "https://ecommerce-demo.com",
    status: "published",
  },
  {
    id: "3",
    title: "AI Chat Application",
    description: "Chat application powered by OpenAI",
    thumbnail: "/placeholder.svg",
    techStack: "React, Node.js, OpenAI API",
    demoLink: "https://aichat-demo.com",
    status: "draft",
  },
];

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [isOpen, setIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const { toast } = useToast();

  const defaultProject: Project = {
    id: "",
    title: "",
    description: "",
    thumbnail: "/placeholder.svg",
    techStack: "",
    demoLink: "",
    status: "draft",
  };

  const handleAddEdit = () => {
    if (currentProject) {
      if (currentProject.id) {
        // Update existing project
        setProjects(
          projects.map((p) => (p.id === currentProject.id ? currentProject : p))
        );
        toast({
          title: "Project updated",
          description: `"${currentProject.title}" has been updated successfully.`,
        });
      } else {
        // Add new project
        const newProject = {
          ...currentProject,
          id: Date.now().toString(),
        };
        setProjects([...projects, newProject]);
        toast({
          title: "Project added",
          description: `"${currentProject.title}" has been added successfully.`,
        });
      }
      setIsOpen(false);
      setCurrentProject(null);
    }
  };

  const handleDelete = (id: string) => {
    const projectToDelete = projects.find(p => p.id === id);
    if (projectToDelete) {
      setProjects(projects.filter((p) => p.id !== id));
      toast({
        title: "Project deleted",
        description: `"${projectToDelete.title}" has been deleted.`,
        variant: "destructive",
      });
    }
  };

  const handleAddNew = () => {
    setCurrentProject({ ...defaultProject });
    setIsOpen(true);
  };

  const handleEdit = (project: Project) => {
    setCurrentProject({ ...project });
    setIsOpen(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof Project
  ) => {
    if (currentProject) {
      setCurrentProject({
        ...currentProject,
        [field]: e.target.value,
      });
    }
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (currentProject) {
      setCurrentProject({
        ...currentProject,
        status: e.target.value as "published" | "draft",
      });
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Manage Projects</h1>
        <Button onClick={handleAddNew}>
          <Plus className="mr-2 h-4 w-4" /> Add Project
        </Button>
      </div>

      <Card className="backdrop-blur-lg bg-black/30 border-white/10">
        <CardHeader>
          <CardTitle>All Projects</CardTitle>
          <CardDescription>
            Manage your portfolio projects
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Tech Stack</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className="font-medium">{project.title}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        project.status === "published"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </TableCell>
                  <TableCell>{project.techStack}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEdit(project)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(project.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                      >
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          <Eye className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {currentProject?.id ? "Edit Project" : "Add New Project"}
            </DialogTitle>
            <DialogDescription>
              Fill in the details to {currentProject?.id ? "update" : "add"} a project to your portfolio.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={currentProject?.title || ""}
                  onChange={(e) => handleInputChange(e, "title")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  rows={4}
                  value={currentProject?.description || ""}
                  onChange={(e) => handleInputChange(e, "description")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="techStack">Tech Stack</Label>
                <Input
                  id="techStack"
                  value={currentProject?.techStack || ""}
                  onChange={(e) => handleInputChange(e, "techStack")}
                  placeholder="e.g. React, Node.js, MongoDB"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="demoLink">Demo Link</Label>
                <Input
                  id="demoLink"
                  value={currentProject?.demoLink || ""}
                  onChange={(e) => handleInputChange(e, "demoLink")}
                  placeholder="https://example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <select
                  id="status"
                  value={currentProject?.status || "draft"}
                  onChange={handleStatusChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                </select>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddEdit}>
              {currentProject?.id ? "Update" : "Add"} Project
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectsPage;
