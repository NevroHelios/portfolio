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

const featuredProjects = [
  {
    id: 1,
    title: "Code-Relay 2.0",
    description: "Real-time collaborative coding platform used by 200+ students. Led development at KGEC Development Team.",
    tags: ["React", "Express.js", "Docker", "Full-Stack Development"],
    imageUrl: "https://cdn.pixabay.com/video/2021/08/10/84574-586228759_tiny.jpg", // Replace with actual image URL
    githubUrl: "https://github.com/KGEC-DEV-TEAM-2025/code-relay-2.0", // Replace with actual GitHub URL
    demoUrl: null
  },
  {
    id: 2,
    title: "Spam Detection System",
    description: "Flask/PyTorch NLP model achieving 92% classification accuracy. Integrated NLTK and TF-IDF. Implemented CI/CD with GitHub Actions.",
    tags: ["Python", "PyTorch", "NLP", "Flask", "CI/CD"],
    imageUrl: "https://hobiverse.com.vn/cdn/shop/articles/anime-vs-manhwa_thumbnail_hobi_ff9ace15891a4a6f8bf01e8ed70b2a64.jpg?v=1716185823", // Replace with actual image URL
    githubUrl: "https://github.com/yourusername/spam-detection-system", // Replace with actual GitHub URL
    demoUrl: null
  },
  {
    id: 3,
    title: "SAR-Colorization",
    description: "GAN-based multispectral image enhancement framework (MIT Licensed). Optimized inference speed by 35% using ONNX runtime.",
    tags: ["Python", "GAN", "ONNX", "Computer Vision"],
    imageUrl: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/08/Jujutsu-Kaisen.jpg", // Replace with actual image URL
    githubUrl: "https://github.com/yourusername/sar-colorization", // Replace with actual GitHub URL
    demoUrl: null
  },
  {
    id: 4,
    title: "Pantalaimon Fork",
    description: "Implemented E2EE media handling improvements, enhanced CBC mode cipher security, and reduced client decryption latency.",
    tags: ["Python", "E2EE", "Security", "Multithreading", "Open Source"],
    imageUrl: "https://example.com/pantalaimon-image.png", // Replace with actual image URL
    githubUrl: "https://github.com/yourusername/pantalaimon-fork", // Replace with actual GitHub URL
    demoUrl: null
  }
];

const skills = {
  "Languages": ["Python", "TypeScript", "JavaScript", "SQL", "Go"],
  "Frameworks/Libraries": ["PyTorch", "React", "Flask", "Express.js", "TensorFlow", "Pandas", "NumPy", "NLTK", "OpenCV"],
  "Tools": ["Docker", "GitHub Actions", "ESLint", "Jupyter", "Git"],
  "Concepts": ["E2EE", "CI/CD", "REST APIs", "Web3", "Data Structures", "NLP", "Statistical Modeling"]
};

const achievements = [
  "GitHub Pull Shark Award (2x) for open-source contributions",
  "Quickdraw Award for rapid issue resolution (avg. 2.1h response time)",
  "LeetCode 1500+ rating (Top 15% globally)",
  "Won Code Relay 3.0 Hackathon organized by IIT Bhubaneswar",
  "Implemented E2EE media handling improvements, resulting in successful upstream merge",
  "Reduced client decryption latency by 40% through multithreading optimizations"
];

export { featuredProjects, recentBlogPosts, skills, achievements };
