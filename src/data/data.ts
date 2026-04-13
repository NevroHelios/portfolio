const papers = [
  {
    id: 1,
    title: "Perturbation-Based Generation Profiling Detects Covert AI Agent Attacks Where Token-Level Statistics Fail",
    authors: "Yatharth Maheshwari, Arka Dash, Abhineet Som",
    oneLiner: "Unsupervised attack detection via cross-perturbation generation profiling — 0.94–1.00 AUROC across six LLMs (8B–32B) with zero training data, where token-level baselines plateau at 0.56–0.83.",
    url: "https://apartresearch.com/project/perturbationbased-generation-profiling-detects-covert-ai-agent-attacks-where-tokenlevel-statistics-fail-09im",
  },
];

export type Project = {
  id: number;
  title: string;
  oneLiner: string;
  stack: string[];
  githubUrl: string | null;
  demoUrl: string | null;
};

const _featuredProjects: Omit<Project, "id">[] = [
  {
    title: "Power Load Forecasting System",
    oneLiner: "Time-series load classification on 35K+ records at 430 RPS — LightGBM with cyclical feature engineering and GCP deployment.",
    stack: ["LightGBM", "FastAPI", "Docker", "GCP", "Next.js"],
    githubUrl: "https://github.com/NevroHelios/power-load-forcasting",
    demoUrl: "power-load-forcasting.vercel.app",
  },
  {
    title: "Genrefy — Audio Classifier",
    oneLiner: "EfficientNet-V2 trained on log-mel spectrograms for 10-genre music classification under distribution shift (clean stems → noisy mashups) — 0.930 on Kaggle private LB.",
    stack: ["PyTorch Lightning", "EfficientNet", "W&B", "Streamlit"],
    githubUrl: "https://github.com/NevroHelios/genai",
    demoUrl: "genrefy.streamlit.app/",
  },
  {
    title: "DeepWaste — CNN vs Fine-tuning Benchmark",
    oneLiner: "Deployment benchmark across 5 inference formats — TensorRT FP16 achieved 6,905 img/s with 98.41% accuracy on garbage classification.",
    stack: ["PyTorch Lightning", "ONNX", "TensorRT", "W&B"],
    githubUrl: "https://github.com/NevroHelios/DeepWaste-Optimization",
    demoUrl: null,
  },
  {
    title: "Sales Forecasting — Kaggle Rank 133",
    oneLiner: "Multiplicative forecasting model with Fourier analysis and GDP indicators — 12.7% MAPE across 6 countries, 10 years of data.",
    stack: ["Python", "Scikit-learn", "Fourier Analysis", "Streamlit"],
    githubUrl: "https://github.com/NevroHelios/sales-forecasting",
    demoUrl: "nevrohelios-p5e1.streamlit.app/",
  },
  {
    title: "Customer Profiling",
    oneLiner: "K-Means & DBSCAN clustering algorithms for customer segmentation analysis with interactive profiling dashboard.",
    stack: ["Python", "Machine Learning", "Clustering", "K-Means", "DBSCAN"],
    githubUrl: "https://github.com/NevroHelios/customer-profiling",
    demoUrl: "https://customer-profiling.streamlit.app/",
  },
  {
    title: "CrossEmotion — Multimodal Emotion Recognition",
    oneLiner: "Fusion of video (R3D-18), text (BERT), and audio (Conformer) with cross-modal attention — 67.8% accuracy on MELD dataset.",
    stack: ["PyTorch", "R3D-18", "BERT", "Conformer", "AWS SageMaker"],
    githubUrl: "https://github.com/NevroHelios/CrossEmotion",
    demoUrl: null,
  },
  {
    title: "Logic-Guided Diagnosis — Neuro-Symbolic AI",
    oneLiner: "Residual MLP trained with differentiable rule-agreement loss — 88.32% accuracy, 0.9516 ROC-AUC on heart disease prediction.",
    stack: ["PyTorch", "Decision Trees", "Scikit-learn"],
    githubUrl: "https://github.com/NevroHelios/Logic-Guided-Diagnosis",
    demoUrl: null,
  },
];

const featuredProjects: Project[] = _featuredProjects.map((project, index) => ({
  ...project,
  id: index + 1,
}));

export type Experience = {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
};

const experiences: Experience[] = [
  {
    id: 1,
    role: "Founding Engineer — LLM Evaluation Infrastructure",
    company: "SUAV Tech",
    period: "2025 – Present",
    description: [
      "Designed end-to-end LLM evaluation pipelines across 15+ risk categories, reducing undetected violations 40% pre-deployment.",
      "Built modular Python harness enabling new benchmark integration in under 2 hours.",
    ],
  },
  {
    id: 2,
    role: "WebOps Secretary",
    company: "Student Executive Council, IIT Madras BS",
    period: "Jan 2026 – Present",
    description: [
      "Built and shipped a production RAG chatbot serving 40,000+ students with a daily CI/CD sync pipeline using hash-based incremental chunk invalidation.",
      "Engineered a multi-layer query pipeline — NER-keyed Redis cache, semantic cache, and Qdrant hybrid search (dense + sparse + RRF) — optimizing for latency and cost while maintaining recall.",
    ],
  },
];

const skills = {
  "Languages": ["Python", "TypeScript", "JavaScript", "SQL", "Bash"],
  "Machine Learning": ["PyTorch", "PyTorch Lightning", "Scikit-learn", "LightGBM", "ONNX", "TensorRT", "W&B"],
  "MLOps & Deployment": ["Docker", "CI/CD (GitHub Actions)", "GCP", "AWS SageMaker", "FastAPI"],
  "Databases": ["SQL", "DynamoDB", "Neo4j", "Qdrant"],
  "Concepts": ["Model Optimization", "Time-Series Forecasting", "Computer Vision", "Multimodal Learning", "Neuro-Symbolic AI"]
};

const education = [
  {
    id: 1,
    institution: "IIT Madras",
    degree: "Bachelor of Science in Data Science and Programming",
    period: "2023 – 2027",
    cgpa: "8.8/10",
    location: "Remote (Dual Degree)",
  },
  {
    id: 2,
    institution: "Kalyani Government Engineering College",
    degree: "Bachelor of Technology in Computer Science",
    period: "2023 – 2027",
    cgpa: "8.4/10",
    location: "Kalyani, India",
  },
];

const achievements = [
  "AIR 27 @AmazonMLChallenge",
  "SIH 2025 Finalist",
  "LeetCode 1500+ rating (Top 15% globally)",
  "Won Code Relay 3.0 Hackathon organized by IIT Bhubaneswar",
  "Achieved top 120 rank in Kaggle Sticker Sales Forecasting competition",
];

export { featuredProjects, experiences, papers, skills, achievements, education };
