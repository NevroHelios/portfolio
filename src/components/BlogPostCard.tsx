// src/components/BlogPostCard.tsx

import { FC } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Calendar } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: FC<BlogPostCardProps> = ({ post }) => {
  // Format the date
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Card className="bg-gray-800/60 border-gray-700 hover:border-violet-500 transition-colors h-full flex flex-col">
      <CardContent className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-3 text-white">{post.title}</h3>
        <div className="flex items-center gap-4 text-gray-400 mb-4 text-sm">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {formattedDate}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {post.readTime}
          </div>
        </div>
        <p className="text-gray-300">{post.excerpt}</p>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button 
          className="bg-transparent hover:bg-gray-700 text-violet-400 hover:text-violet-300 p-0"
          variant="ghost"
          asChild
        >
          <a href={`/blog/${post.slug}`}>
            Read Article →
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogPostCard;