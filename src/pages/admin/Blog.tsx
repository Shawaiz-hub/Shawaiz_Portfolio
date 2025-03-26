
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

interface BlogPost {
  id: string;
  title: string;
  content: string;
  image: string;
  tags: string;
  date: string;
  status: "published" | "draft";
}

const initialPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with React Hooks",
    content: "React Hooks are a powerful feature that allow you to use state and other React features without writing a class...",
    image: "/placeholder.svg",
    tags: "React, Programming, Frontend",
    date: "2023-05-15",
    status: "published",
  },
  {
    id: "2",
    title: "The Future of AI in Web Development",
    content: "Artificial Intelligence is rapidly changing how we approach web development...",
    image: "/placeholder.svg",
    tags: "AI, Web Development, Future Tech",
    date: "2023-06-22",
    status: "published",
  },
  {
    id: "3",
    title: "Optimizing React Performance",
    content: "Learn advanced techniques to optimize the performance of your React applications...",
    image: "/placeholder.svg",
    tags: "React, Performance, Optimization",
    date: "2023-07-10",
    status: "draft",
  },
];

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(null);
  const { toast } = useToast();

  const defaultPost: BlogPost = {
    id: "",
    title: "",
    content: "",
    image: "/placeholder.svg",
    tags: "",
    date: new Date().toISOString().split("T")[0],
    status: "draft",
  };

  const handleAddEdit = () => {
    if (currentPost) {
      if (currentPost.id) {
        // Update existing post
        setPosts(
          posts.map((p) => (p.id === currentPost.id ? currentPost : p))
        );
        toast({
          title: "Blog post updated",
          description: `"${currentPost.title}" has been updated successfully.`,
        });
      } else {
        // Add new post
        const newPost = {
          ...currentPost,
          id: Date.now().toString(),
        };
        setPosts([...posts, newPost]);
        toast({
          title: "Blog post created",
          description: `"${currentPost.title}" has been added successfully.`,
        });
      }
      setIsOpen(false);
      setCurrentPost(null);
    }
  };

  const handleDelete = (id: string) => {
    const postToDelete = posts.find(p => p.id === id);
    if (postToDelete) {
      setPosts(posts.filter((p) => p.id !== id));
      toast({
        title: "Blog post deleted",
        description: `"${postToDelete.title}" has been deleted.`,
        variant: "destructive",
      });
    }
  };

  const handleAddNew = () => {
    setCurrentPost({ ...defaultPost });
    setIsOpen(true);
  };

  const handleEdit = (post: BlogPost) => {
    setCurrentPost({ ...post });
    setIsOpen(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof BlogPost
  ) => {
    if (currentPost) {
      setCurrentPost({
        ...currentPost,
        [field]: e.target.value,
      });
    }
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (currentPost) {
      setCurrentPost({
        ...currentPost,
        status: e.target.value as "published" | "draft",
      });
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Manage Blog</h1>
        <Button onClick={handleAddNew}>
          <Plus className="mr-2 h-4 w-4" /> Add Post
        </Button>
      </div>

      <Card className="backdrop-blur-lg bg-black/30 border-white/10">
        <CardHeader>
          <CardTitle>All Blog Posts</CardTitle>
          <CardDescription>
            Manage your blog content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Tags</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell className="font-medium">{post.title}</TableCell>
                  <TableCell>{post.date}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        post.status === "published"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {post.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {post.tags.split(",").map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-primary/20 rounded-full text-xs"
                        >
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEdit(post)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(post.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                      >
                        <a href={`/blog/${post.id}`} target="_blank" rel="noopener noreferrer">
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
              {currentPost?.id ? "Edit Blog Post" : "Add New Blog Post"}
            </DialogTitle>
            <DialogDescription>
              Fill in the details to {currentPost?.id ? "update" : "create"} a blog post.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={currentPost?.title || ""}
                  onChange={(e) => handleInputChange(e, "title")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  rows={10}
                  value={currentPost?.content || ""}
                  onChange={(e) => handleInputChange(e, "content")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input
                  id="tags"
                  value={currentPost?.tags || ""}
                  onChange={(e) => handleInputChange(e, "tags")}
                  placeholder="e.g. React, Programming, Tips"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={currentPost?.date || ""}
                  onChange={(e) => handleInputChange(e, "date")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <select
                  id="status"
                  value={currentPost?.status || "draft"}
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
              {currentPost?.id ? "Update" : "Publish"} Post
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BlogPage;
