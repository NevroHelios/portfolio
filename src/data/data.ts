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

const PLACE_HOLDER_IMAGE = "https://img.posterstore.com/zoom/wb0043-8batman-gothamcityskyline50x70-81979-93867.jpg"

const featuredProjects = [
  {
    id: 1,
    title: "Data Ingestion AWS",
    description: "CSV Processing System with AWS and Terraform. Utilizes AWS Lambda, S3, DynamoDB, and LocalStack.",
    tags: ["AWS", "Terraform", "HCL", "Data Processing"],
    imageUrl: "image.png",
    githubUrl: "https://github.com/NevroHelios/data-ingestion-aws",
    demoUrl: null
  },
  {
    id: 2,
    title: "Used Car Price Prediction",
    description: "Jupyter Notebook project for predicting used car prices using statistical modeling and machine learning.",
    tags: ["Python", "Jupyter Notebook", "Statistical Modeling", "Machine Learning"],
    imageUrl: PLACE_HOLDER_IMAGE,
    githubUrl: "https://github.com/NevroHelios/Used-Car-Price-Prediction-endToEnd",
    demoUrl: null
  },
  {
    id: 3,
    title: "Check Octo",
    description: "Python application for detecting plastic garbage, utilizing machine learning techniques.",
    tags: ["Python", "Machine Learning", "Environmental Monitoring"],
    imageUrl: PLACE_HOLDER_IMAGE,
    githubUrl: "https://github.com/NevroHelios/check-octo",
    demoUrl: null
  },
  {
    id: 4,
    title: "SAR-Colorization",
    description: "GAN-based multispectral image enhancement framework (MIT Licensed).",
    tags: ["Python", "GAN", "Computer Vision"],
    imageUrl: PLACE_HOLDER_IMAGE,
    githubUrl: "https://github.com/NevroHelios/SAR-Colorization",
    demoUrl: null
  },
  {
    id: 5,
    title: "Spam Detection System",
    description: "Flask/PyTorch NLP model for spam email detection. Integrated NLTK and implemented CI/CD with GitHub Actions.",
    tags: ["Python", "PyTorch", "NLP", "Flask", "CI/CD"],
    imageUrl: PLACE_HOLDER_IMAGE,
    githubUrl: "https://github.com/NevroHelios/Spam-Detection",
    demoUrl: null
  },
  {
    id: 6,
    title: "Pantalaimon",
    description: "E2EE aware proxy daemon for matrix clients. Implemented improvements in media handling and reduced client decryption latency.",
    tags: ["Python", "E2EE", "Security", "Multithreading"],
    imageUrl: PLACE_HOLDER_IMAGE,
    githubUrl: "https://github.com/NevroHelios/pantalaimon",
    demoUrl: null
  },
  {
    id: 7,
    title: "Code-Relay 3.0",
    description: "Real-time collaborative coding platform. Led development at KGEC Development Team.",
    tags: ["TypeScript", "React", "Express.js", "Full-Stack Development"],
    imageUrl: PLACE_HOLDER_IMAGE,
    githubUrl: "https://github.com/NevroHelios/code-relay-3.0",
    demoUrl: null
  },
  {
    id: 8,
    title: "GitGet Backend",
    description: "TypeScript backend for GitGet application, focusing on robust API design and data management.",
    tags: ["TypeScript", "API Design", "Data Management"],
    imageUrl: PLACE_HOLDER_IMAGE,
    githubUrl: "https://github.com/NevroHelios/gitget-backend",
    demoUrl: null
  },
  {
    id: 9,
    title: "GitGet Frontend",
    description: "TypeScript frontend for GitGet application, emphasizing user experience and UI design.",
    tags: ["TypeScript", "UI/UX", "Frontend Development"],
    imageUrl: PLACE_HOLDER_IMAGE,
    githubUrl: "https://github.com/NevroHelios/gitget-frontend",
    demoUrl: null
  },
  {
    id: 10,
    title: "Facial Reconstruction",
    description: "Python project focusing on facial reconstruction techniques using computer vision and machine learning.",
    tags: ["Python", "Computer Vision", "Machine Learning", "Facial Reconstruction"],
    imageUrl: PLACE_HOLDER_IMAGE,
    githubUrl: "https://github.com/NevroHelios/facial-reconstruction",
    demoUrl: null
  },
  {
    id: 11,
    title: "Cart-Pole PPO",
    description: "Python implementation of the PPO algorithm for the Cart-Pole environment, focusing on reinforcement learning.",
    tags: ["Python", "Reinforcement Learning", "PPO"],
    imageUrl: PLACE_HOLDER_IMAGE,
    githubUrl: "https://github.com/NevroHelios/cart-pole-PPO",
    demoUrl: null
  }
];


const skills = {
  "Languages": ["Python", "C", "TypeScript", "SQL", "Go", "Rust"],
  "Frameworks/Libraries": ["PyTorch", "React", "Flask", "Express.js", "TensorFlow", "Pandas", "NumPy", "NLTK", "OpenCV"],
  "Tools": ["Docker", "GitHub Actions", "ESLint", "Jupyter", "Git"],
  "Concepts": ["E2EE", "CI/CD", "REST APIs", "Web3", "Data Structures", "NLP", "Statistical Modeling"]
};

const achievements = [
  "LeetCode 1500+ rating (Top 15% globally)",
  "Won Code Relay 3.0 Hackathon organized by IIT Bhubaneswar",
];

export { featuredProjects, recentBlogPosts, skills, achievements };
