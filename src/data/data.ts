const featuredProjects = [
    {
      id: 1,
      title: "Machine Learning Image Classifier",
      description: "A PyTorch-based image classification system with 98% accuracy on the test dataset.",
      tags: ["PyTorch", "Python", "Computer Vision"],
      imageUrl: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/08/Jujutsu-Kaisen.jpg",
      githubUrl: "https://github.com/yourusername/ml-image-classifier",
      demoUrl: "https://ml-image-classifier-demo.vercel.app"
    },
    {
      id: 2,
      title: "Data Visualization board",
      description: "Interactive board built with Next.js and D3.js for visualizing complex datasets.",
      tags: ["Next.js", "TypeScript", "D3.js", "Tailwind CSS"],
      imageUrl: "https://hobiverse.com.vn/cdn/shop/articles/anime-vs-manhwa_thumbnail_hobi_ff9ace15891a4a6f8bf01e8ed70b2a64.jpg?v=1716185823",
      githubUrl: "https://github.com/yourusername/data-viz-board",
      demoUrl: "https://data-viz-board.vercel.app"
    },
    {
      id: 3,
      title: "Open Source Contribution: Pandas Enhancement",
      description: "Contributed performance improvements to the Pandas library's dataframe operations.",
      tags: ["Python", "Pandas", "Open Source"],
      imageUrl: "https://cdn.pixabay.com/video/2021/08/10/84574-586228759_tiny.jpg",
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