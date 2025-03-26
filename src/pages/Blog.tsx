
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, CalendarIcon, Tag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    slug: "getting-started-with-react-hooks",
    excerpt: "Learn how to use React Hooks to simplify your functional components and manage state effectively.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    date: "2023-06-15",
    image: "https://picsum.photos/seed/react/800/400",
    author: "Shawaiz",
    categories: ["React", "JavaScript", "Web Development"],
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Building Responsive Layouts with Tailwind CSS",
    slug: "building-responsive-layouts-with-tailwind-css",
    excerpt: "Discover how to create beautiful responsive layouts using Tailwind CSS utility classes.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    date: "2023-05-22",
    image: "https://picsum.photos/seed/tailwind/800/400",
    author: "Shawaiz",
    categories: ["CSS", "Tailwind", "Web Design"],
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Introduction to TypeScript for JavaScript Developers",
    slug: "introduction-to-typescript-for-javascript-developers",
    excerpt: "A comprehensive guide to TypeScript for JavaScript developers looking to improve their code quality.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    date: "2023-04-10",
    image: "https://picsum.photos/seed/typescript/800/400",
    author: "Shawaiz",
    categories: ["TypeScript", "JavaScript", "Programming"],
    readTime: "8 min read"
  },
  {
    id: 4,
    title: "State Management with Redux Toolkit",
    slug: "state-management-with-redux-toolkit",
    excerpt: "Learn how to simplify your Redux code using Redux Toolkit, the official recommended approach.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    date: "2023-03-18",
    image: "https://picsum.photos/seed/redux/800/400",
    author: "Shawaiz",
    categories: ["Redux", "React", "State Management"],
    readTime: "6 min read"
  },
  {
    id: 5,
    title: "Building a REST API with Node.js and Express",
    slug: "building-a-rest-api-with-nodejs-and-express",
    excerpt: "A step-by-step guide to creating a RESTful API using Node.js and Express framework.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    date: "2023-02-25",
    image: "https://picsum.photos/seed/nodejs/800/400",
    author: "Shawaiz",
    categories: ["Node.js", "Express", "Backend", "API"],
    readTime: "10 min read"
  }
];

// Get all unique categories from blog posts
const allCategories = Array.from(
  new Set(blogPosts.flatMap(post => post.categories))
).sort();

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === null || 
                           post.categories.includes(selectedCategory);
    
    return matchesSearch && matchesCategory;
  });
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };
  
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl font-bold mb-6">Blog</h1>
          <p className="text-muted-foreground text-lg mb-8">
            Thoughts, tutorials, and insights on web development, design, and technology.
          </p>
          <div className="relative max-w-xl mx-auto">
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h2 className="text-xl font-bold mb-4">Categories</h2>
                <div className="space-y-2">
                  {allCategories.map(category => (
                    <Badge
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      className="mr-2 mb-2 cursor-pointer"
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
                
                <Separator className="my-6" />
                
                <h2 className="text-xl font-bold mb-4">Recent Posts</h2>
                <ul className="space-y-3">
                  {blogPosts.slice(0, 3).map(post => (
                    <li key={post.id}>
                      <Link 
                        to={`/blog/${post.slug}`} 
                        className="text-sm hover:text-primary transition-colors"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Blog Posts */}
            <div className="lg:col-span-3">
              {searchTerm && (
                <p className="mb-6 text-muted-foreground">
                  {filteredPosts.length} {filteredPosts.length === 1 ? 'result' : 'results'} found for "{searchTerm}"
                </p>
              )}
              
              {selectedCategory && (
                <div className="mb-6 flex items-center">
                  <p className="text-muted-foreground">
                    Filtered by category:
                  </p>
                  <Badge className="ml-2">
                    {selectedCategory}
                  </Badge>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="ml-2 h-auto p-1"
                    onClick={() => setSelectedCategory(null)}
                  >
                    Clear
                  </Button>
                </div>
              )}
              
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-xl font-bold mb-2">No posts found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or filter to find what you're looking for.
                  </p>
                </div>
              ) : (
                <div className="space-y-8">
                  {filteredPosts.map(post => (
                    <BlogPostCard key={post.id} post={post} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  author: string;
  categories: string[];
  readTime: string;
}

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  // Format the date
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-48 md:h-full object-cover"
          />
        </div>
        <div className="md:w-2/3">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <div className="flex items-center">
                <CalendarIcon className="h-3 w-3 mr-1" />
                {formattedDate}
              </div>
              <span>•</span>
              <div>{post.readTime}</div>
            </div>
            
            <Link to={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-bold mb-2 hover:text-primary transition-colors">
                {post.title}
              </h2>
            </Link>
            
            <p className="text-muted-foreground mb-4">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((category, index) => (
                <Badge key={index} variant="secondary">
                  <Tag className="h-3 w-3 mr-1" />
                  {category}
                </Badge>
              ))}
            </div>
            
            <Button asChild variant="ghost" className="p-0 hover:bg-transparent">
              <Link to={`/blog/${post.slug}`} className="flex items-center text-primary">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default Blog;
