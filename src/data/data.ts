import { title } from "process";

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

const PLACE_HOLDER_IMAGE = "archlinux.png" // "https://img.posterstore.com/zoom/wb0043-8batman-gothamcityskyline50x70-81979-93867.jpg"

const _featuredProjects = [
  {
    title: "Sticker Sales Forecasting",
    description: [
      "Top 120 rank in Kaggle competition",
      "Time series forecasting with ARIMA & Prophet",
      "Feature engineering: sinusoidal & economic factors",
      "EDA with 15+ visualization techniques"
    ],
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit", "Matplotlib", "Seaborn", "Plotly"],
    imageUrl: 'k-ps5.png',
    githubUrl: "https://github.com/NevroHelios/sales-forecasting",
    demoUrl: "https://nevrohelios-p5e1.streamlit.app/"
  },
  {
    title: "Real-time Sentiment Analysis Application",
    description: [
      "<10ms response time with ONNX optimization",
      "React frontend + FastAPI backend",
      "Transformer model inference optimization",
      "Docker containerization + CI/CD pipeline"
    ],
    tags: ["Python", "FastAPI", "React", "ONNX Runtime", "Docker", "CI/CD"],
    imageUrl: 'sent-clf.png',
    githubUrl: "https://github.com/NevroHelios/Sentiment-analysis-realtime",
    demoUrl: null
  },
  {
    title: "RAG Institute: Hybrid Retrieval System",
    description: [
      "Neo4j graph DB for entity relations",
      "Vector search for semantic similarity",
      "LLM integration for document Q&A",
      "Hybrid retrieval architecture"
    ],
    tags: ["Python", "LangChain", "Neo4j", "LlamaIndex", "Docker"],
    imageUrl: "visualisation.png",
    githubUrl: "https://github.com/NevroHelios/rag-agent",
    demoUrl: null
  },
  {
    title: "Deep-Viz: Explainable AI Tool",
    description: [
      "SmoothGradCAM++ implementation",
      "Integrated Gradients visualization",
      "Interactive Streamlit dashboard",
      "CNN model explainability analysis"
    ],
    tags: ["Python", "PyTorch", "Captum", "Streamlit"],
    imageUrl: PLACE_HOLDER_IMAGE,
    githubUrl: "https://github.com/NevroHelios/deep-viz",
    demoUrl: null
  },
  {
    title: "Data Ingestion AWS",
    description: [
      "AWS Lambda + S3 + DynamoDB architecture",
      "Terraform IaC deployment",
      "LocalStack for local testing",
      "Automated CSV processing pipeline"
    ],
    tags: ["AWS", "Terraform", "HCL", "Data Processing"],
    imageUrl: "image.png",
    githubUrl: "https://github.com/NevroHelios/data-ingestion-aws",
    demoUrl: null
  },
  {
    title: "Customer Profiling",
    description: [
      "K-Means & DBSCAN clustering algorithms",
      "Customer segmentation analysis",
      "Interactive Streamlit deployment",
      "Real-time profiling dashboard"
    ],
    tags: ["Python", "Machine Learning", "Clustering", "Kmeans", "DBSCAN"],
    imageUrl: "profiling.png",
    githubUrl: "https://github.com/NevroHelios/customer-profiling",
    demoUrl: "https://customer-profiling.streamlit.app/"
  },
  {
    title: "Used Car Price Prediction",
    description: [
      "End-to-end ML pipeline in Jupyter",
      "Statistical modeling & regression analysis",
      "Feature engineering & data preprocessing",
      "Model evaluation & validation"
    ],
    tags: ["Python", "Jupyter Notebook", "Statistical Modeling", "Machine Learning"],
    imageUrl: "zenml.png",
    githubUrl: "https://github.com/NevroHelios/Used-Car-Price-Prediction-endToEnd",
    demoUrl: null
  },
  {
    title: "SAR-Colorization",
    description: [
      "GAN-based image enhancement",
      "Multispectral image processing",
      "MIT Licensed framework",
      "Computer vision pipeline"
    ],
    tags: ["Python", "GAN", "Computer Vision"],
    imageUrl: PLACE_HOLDER_IMAGE,
    githubUrl: "https://github.com/NevroHelios/SAR-Colorization",
    demoUrl: null
  },
  {
    title: "Facial Reconstruction",
    description: [
      "CV-based facial reconstruction",
      "ML model implementation",
      "Image processing algorithms",
      "Deep learning techniques"
    ],
    tags: ["Python", "Computer Vision", "Machine Learning", "Facial Reconstruction"],
    imageUrl: PLACE_HOLDER_IMAGE,
    githubUrl: "https://github.com/NevroHelios/facial-reconstruction",
    demoUrl: null
  },
  {
    title: "Spam Detection System",
    description: [
      "Flask web app with PyTorch NLP",
      "NLTK integration for text processing",
      "GitHub Actions CI/CD pipeline",
      "Real-time email classification"
    ],
    tags: ["Python", "PyTorch", "NLP", "Flask", "CI/CD"],
    imageUrl: PLACE_HOLDER_IMAGE,
    githubUrl: "https://github.com/NevroHelios/Spam-Detection",
    demoUrl: null
  },
  {
    title: "Code-Relay 3.0",
    description: [
      "Real-time collaborative coding platform",
      "TypeScript + React + Express.js stack",
      "Led development at KGEC team",
      "Multi-user synchronization"
    ],
    tags: ["TypeScript", "React", "Express.js", "Full-Stack Development"],
    imageUrl: PLACE_HOLDER_IMAGE,
    githubUrl: "https://github.com/NevroHelios/code-relay-3.0",
    demoUrl: null
  },
];

const featuredProjects = _featuredProjects.map((project, index) => ({ ...project, id: index + 1 }));

const skills = {
  "Languages": ["JavaScript", "Python", "TypeScript", "SQL", "HTML/CSS", "Bash"],
  "Web Development": ["React", "FastAPI", "Flask", "REST APIs", "Responsive Design"],
  "Tools": ["Git/GitHub", "Docker", "CI/CD (GitHub Actions)", "Linux/Unix"],
  "Databases": ["SQL", "DynamoDB", "Neo4j", "Qdrant"],
  "Concepts": ["Scalable Web Apps", "Microservices", "Agile Workflows", "Debugging", "Testing"]
};

const achievements = [
  "LeetCode 1500+ rating (Top 15% globally)",
  "Won Code Relay 3.0 Hackathon organized by IIT Bhubaneswar",
  "Achieved top 120 rank in Kaggle Sticker Sales Forecasting competition",
];

export { featuredProjects, recentBlogPosts, skills, achievements };
