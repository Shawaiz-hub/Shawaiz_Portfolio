
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Share2, Facebook, Twitter, Linkedin, Calendar, User, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    content: `
      <p>React Hooks were introduced in React 16.8 as a way to use state and other React features without writing a class. They allow you to "hook into" React state and lifecycle features from function components.</p>
      
      <h2>Why Use Hooks?</h2>
      <p>Hooks solve several problems that developers encountered in class components:</p>
      <ul>
        <li>It's hard to reuse stateful logic between components</li>
        <li>Complex components become hard to understand</li>
        <li>"this" keyword in JavaScript is confusing</li>
        <li>Classes don't minify well and make hot reloading less reliable</li>
      </ul>
      
      <h2>Basic Hooks</h2>
      
      <h3>useState</h3>
      <p>The useState hook lets you add state to functional components:</p>
      <pre><code>
        import React, { useState } from 'react';
        
        function Counter() {
          const [count, setCount] = useState(0);
          
          return (
            <div>
              <p>You clicked {count} times</p>
              <button onClick={() => setCount(count + 1)}>
                Click me
              </button>
            </div>
          );
        }
      </code></pre>
      
      <h3>useEffect</h3>
      <p>The useEffect hook lets you perform side effects in function components:</p>
      <pre><code>
        import React, { useState, useEffect } from 'react';
        
        function Example() {
          const [count, setCount] = useState(0);
          
          // Similar to componentDidMount and componentDidUpdate:
          useEffect(() => {
            document.title = \`You clicked \${count} times\`;
          });
          
          return (
            <div>
              <p>You clicked {count} times</p>
              <button onClick={() => setCount(count + 1)}>
                Click me
              </button>
            </div>
          );
        }
      </code></pre>
      
      <h3>useContext</h3>
      <p>The useContext hook lets you subscribe to React context without introducing nesting:</p>
      <pre><code>
        import React, { useContext } from 'react';
        
        function ThemedButton() {
          const theme = useContext(ThemeContext);
          
          return (
            <button style={{ background: theme.background, color: theme.foreground }}>
              I am styled by theme context!
            </button>
          );
        }
      </code></pre>
      
      <h2>Additional Hooks</h2>
      <p>React also provides several additional hooks like useReducer, useCallback, useMemo, useRef, useImperativeHandle, useLayoutEffect, and useDebugValue.</p>
      
      <h2>Rules of Hooks</h2>
      <p>Hooks come with two important rules:</p>
      <ol>
        <li>Only call hooks at the top level. Don't call hooks inside loops, conditions, or nested functions.</li>
        <li>Only call hooks from React function components or custom hooks. Don't call hooks from regular JavaScript functions.</li>
      </ol>
      
      <h2>Creating Your Own Hooks</h2>
      <p>You can also create your own hooks, allowing you to extract component logic into reusable functions.</p>
      <pre><code>
        import { useState, useEffect } from 'react';
        
        function useWindowWidth() {
          const [width, setWidth] = useState(window.innerWidth);
          
          useEffect(() => {
            const handleResize = () => setWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
            return () => {
              window.removeEventListener('resize', handleResize);
            };
          }, []);
          
          return width;
        }
        
        function ResponsiveComponent() {
          const width = useWindowWidth();
          return (
            <div>Window width: {width}</div>
          );
        }
      </code></pre>
      
      <h2>Conclusion</h2>
      <p>React Hooks provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle. They don't replace your knowledge of React concepts but rather provide a more ergonomic way to use them.</p>
      
      <p>By using hooks, you can write more concise and reusable code in your React applications. They help separate concerns and make your components more readable and maintainable.</p>
    `,
    date: "2023-06-15",
    image: "https://picsum.photos/seed/react/1200/600",
    author: "Shawaiz",
    categories: ["React", "JavaScript", "Web Development"],
    readTime: "5 min read",
    relatedPosts: [2, 3, 4]
  },
  {
    id: 2,
    title: "Building Responsive Layouts with Tailwind CSS",
    slug: "building-responsive-layouts-with-tailwind-css",
    excerpt: "Discover how to create beautiful responsive layouts using Tailwind CSS utility classes.",
    content: "Detailed content about Tailwind CSS...",
    date: "2023-05-22",
    image: "https://picsum.photos/seed/tailwind/1200/600",
    author: "Shawaiz",
    categories: ["CSS", "Tailwind", "Web Design"],
    readTime: "7 min read",
    relatedPosts: [1, 3, 5]
  },
  {
    id: 3,
    title: "Introduction to TypeScript for JavaScript Developers",
    slug: "introduction-to-typescript-for-javascript-developers",
    excerpt: "A comprehensive guide to TypeScript for JavaScript developers looking to improve their code quality.",
    content: "Detailed content about TypeScript...",
    date: "2023-04-10",
    image: "https://picsum.photos/seed/typescript/1200/600",
    author: "Shawaiz",
    categories: ["TypeScript", "JavaScript", "Programming"],
    readTime: "8 min read",
    relatedPosts: [1, 2, 4]
  },
  {
    id: 4,
    title: "State Management with Redux Toolkit",
    slug: "state-management-with-redux-toolkit",
    excerpt: "Learn how to simplify your Redux code using Redux Toolkit, the official recommended approach.",
    content: "Detailed content about Redux Toolkit...",
    date: "2023-03-18",
    image: "https://picsum.photos/seed/redux/1200/600",
    author: "Shawaiz",
    categories: ["Redux", "React", "State Management"],
    readTime: "6 min read",
    relatedPosts: [1, 3, 5]
  },
  {
    id: 5,
    title: "Building a REST API with Node.js and Express",
    slug: "building-a-rest-api-with-nodejs-and-express",
    excerpt: "A step-by-step guide to creating a RESTful API using Node.js and Express framework.",
    content: "Detailed content about Node.js and Express...",
    date: "2023-02-25",
    image: "https://picsum.photos/seed/nodejs/1200/600",
    author: "Shawaiz",
    categories: ["Node.js", "Express", "Backend", "API"],
    readTime: "10 min read",
    relatedPosts: [2, 3, 4]
  }
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the post with the matching slug
  const post = blogPosts.find(p => p.slug === slug);
  
  // If post not found, show a message
  if (!post) {
    return (
      <div className="container mx-auto py-20 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }
  
  // Format the date
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  
  // Get related posts
  const relatedPosts = post.relatedPosts 
    ? post.relatedPosts.map(id => blogPosts.find(p => p.id === id)).filter(Boolean) 
    : [];
  
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-32 px-4" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${post.image})` 
        }}
      >
        <div className="container mx-auto text-center text-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              {post.categories.map((category, index) => (
                <Badge key={index} variant="secondary" className="bg-white/20 hover:bg-white/30">
                  {category}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex flex-wrap justify-center gap-6 text-sm opacity-90">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {formattedDate}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <Button asChild variant="outline" size="sm">
                <Link to="/blog" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                </Link>
              </Button>
            </div>
            
            {/* Blog Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />
            
            {/* Social Sharing */}
            <div className="mb-12">
              <p className="font-semibold mb-4 flex items-center">
                <Share2 className="mr-2 h-4 w-4" /> Share this post:
              </p>
              <div className="flex space-x-4">
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${post.title}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            {/* Comments Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Comments</h2>
              <Card>
                <CardContent className="p-6">
                  <p className="text-center text-muted-foreground py-8">
                    Comments are currently disabled. Check back later!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {post.categories.map((category, index) => (
                    <Badge key={index} variant="outline" className="flex items-center">
                      <Tag className="h-3 w-3 mr-1" />
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <Separator className="my-8" />
              
              {relatedPosts.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Related Posts</h3>
                  <div className="space-y-4">
                    {relatedPosts.map(relatedPost => relatedPost && (
                      <Card key={relatedPost.id} className="overflow-hidden">
                        <Link to={`/blog/${relatedPost.slug}`}>
                          <img 
                            src={relatedPost.image} 
                            alt={relatedPost.title} 
                            className="w-full h-36 object-cover"
                          />
                        </Link>
                        <CardContent className="p-4">
                          <Link to={`/blog/${relatedPost.slug}`}>
                            <h4 className="font-bold hover:text-primary transition-colors">
                              {relatedPost.title}
                            </h4>
                          </Link>
                          <div className="flex items-center text-xs text-muted-foreground mt-2">
                            <Calendar className="h-3 w-3 mr-1" />
                            {new Date(relatedPost.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
