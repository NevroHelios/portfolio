const featuredProjects = [
    {
      id: 1,
      title: "Machine Learning Image Classifier",
      description: "A PyTorch-based image classification system with 98% accuracy on the test dataset.",
      tags: ["PyTorch", "Python", "Computer Vision"],
      imageUrl: "/projects/ml-image-classifier.jpg",
      githubUrl: "https://github.com/yourusername/ml-image-classifier",
      demoUrl: "https://ml-image-classifier-demo.vercel.app"
    },
    {
      id: 2,
      title: "Data Visualization board",
      description: "Interactive board built with Next.js and D3.js for visualizing complex datasets.",
      tags: ["Next.js", "TypeScript", "D3.js", "Tailwind CSS"],
      imageUrl: "/projects/data-viz-board.jpg",
      githubUrl: "https://github.com/yourusername/data-viz-board",
      demoUrl: "https://data-viz-board.vercel.app"
    },
    {
      id: 3,
      title: "Open Source Contribution: Pandas Enhancement",
      description: "Contributed performance improvements to the Pandas library's dataframe operations.",
      tags: ["Python", "Pandas", "Open Source"],
      imageUrl: "/projects/pandas-contribution.jpg",
      githubUrl: "https://github.com/pandas-dev/pandas/pull/12345",
      demoUrl: null
    }
  ];

  // Sample blog posts data
  const recentBlogPosts = [
    {
      id: 1,
      title: "Optimizing PyTorch Models for Production",
      excerpt: "Learn how to optimize your PyTorch models for production environments with these advanced techniques.",
      date: "2025-02-15",
      readTime: "8 min",
      slug: "optimizing-pytorch-models"
    },
    {
      id: 2,
      title: "Building Type-Safe APIs with TypeScript and Next.js",
      excerpt: "A comprehensive guide to creating robust, type-safe APIs using TypeScript and Next.js.",
      date: "2025-01-28",
      readTime: "12 min",
      slug: "type-safe-apis-typescript-nextjs"
    }
  ];

  // Skills grouped by category
  const skills = {
    "Machine Learning & Data Science": ["PyTorch", "TensorFlow", "Scikit-learn", "Data Analysis"],
    "Languages & Frameworks": ["Python", "TypeScript", "JavaScript", "Next.js", "React"],
    "Tools & Libraries": ["Pandas", "NumPy", "Git", "Docker", "Tailwind CSS"],
    "Other": ["Open Source Contribution", "CI/CD", "Cloud Deployment", "Technical Writing"]
  };


  export { featuredProjects, recentBlogPosts, skills };