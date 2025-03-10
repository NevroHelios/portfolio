import { motion } from 'framer-motion';
import SkillBadge from './SkillBadge';
import BatLogo from './BatLogo';
import { featuredProjects, recentBlogPosts, skills } from "@/data/data";


const Skill_About = () => {

    return (
        <>
        {/* Combined About & Skills Section */}
            <section id="about-skills" className="py-20 bg-zinc-900/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/gotham-skyline.png')] bg-no-repeat bg-cover opacity-10"></div>
            <div className="absolute inset-0 bg-[url('/bat-pattern.png')] bg-repeat opacity-5 mask-radial-gradient"></div>
            <div className="container mx-auto px-4 relative z-10">
                <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl mx-auto"
                >
                <div className="flex items-center justify-center mb-10">
                    <div className="h-px bg-yellow-500 w-12 mr-4"></div>
                    <h2 className="text-3xl font-bold text-white uppercase tracking-wider">
                    The Batman
                    </h2>
                    <div className="h-px bg-yellow-500 w-12 ml-4"></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                    {/* About Section - Left Half */}
                    <div className="space-y-6">
                    <div className="flex items-center mb-6">
                        <div className="h-px bg-yellow-500 w-8 mr-3"></div>
                        <h3 className="text-xl font-bold text-yellow-400 uppercase tracking-wider">
                        The Identity
                        </h3>
                    </div>
                    
                    <div className="bg-zinc-900/80 p-8 rounded shadow-xl relative overflow-hidden">
                        {/* Inverted corner borders */}
                        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-yellow-500"></div>
                        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-yellow-500"></div>
                        
                        <div className="relative z-10">
                        <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                            I'm a dual degree graduate specializing in Machine Learning and Data Science with a strong foundation in full-stack development. My technical journey spans from developing deep learning models to building responsive web applications.
                        </p>
                        <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                            With experience in PyTorch, pandas, and the React ecosystem, I hunt down complex problems at the intersection of data science and software engineering. I'm particularly driven to create intuitive interfaces for complex systems.
                        </p>
                        </div>
                    </div>
                    
                    <div className="bg-zinc-900/80 p-8 rounded shadow-xl relative overflow-hidden">
                        {/* Reversed corner borders */}
                        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-yellow-500/50"></div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-yellow-500/50"></div>
                        
                        <div className="relative z-10">
                        <h3 className="font-medium text-xl mb-6 text-yellow-400 uppercase tracking-wide flex items-center">
                            <BatLogo className="w-4 h-4 mr-2 text-yellow-500" />
                            Training
                        </h3>
                        <div className="mb-6 pb-6 border-b border-zinc-700">
                            <p className="font-bold text-white">Dual Degree in Computer Science</p>
                            <p className="text-yellow-400/80">University Name</p>
                            <p className="text-sm text-gray-500">2018 - 2023</p>
                        </div>
                        <h3 className="font-medium text-xl mb-6 text-yellow-400 uppercase tracking-wide flex items-center">
                            <BatLogo className="w-4 h-4 mr-2 text-yellow-500" />
                            Operations
                        </h3>
                        <div>
                            <p className="font-bold text-white">Machine Learning Engineer</p>
                            <p className="text-yellow-400/80">Company Name</p>
                            <p className="text-sm text-gray-500">2023 - Present</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                    {/* Skills Section - Right Half */}
                    <div className="space-y-6">
                    <div className="flex items-center mb-6">
                        <div className="h-px bg-yellow-500 w-8 mr-3"></div>
                        <h3 className="text-xl font-bold text-yellow-400 uppercase tracking-wider">
                        The Arsenal
                        </h3>
                    </div>
                    
                    {Object.entries(skills).map(([category, categorySkills], index) => (
                        <motion.div 
                        key={category} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-zinc-900/50 p-8 rounded shadow-lg relative overflow-hidden"
                        >
                        {/* Diagonal corner borders */}
                        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-yellow-500/30 transform rotate-0"></div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-yellow-500/30 transform rotate-0"></div>
                        
                        <div className="relative z-10">
                            <h3 className="text-xl font-medium mb-6 text-yellow-400 uppercase tracking-wide flex items-center">
                            <BatLogo className="w-4 h-4 mr-2 text-yellow-500" />
                            {category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                            {categorySkills.map((skill) => (
                                <SkillBadge key={skill} name={skill} />
                            ))}
                            </div>
                        </div>
                        </motion.div>
                    ))}
                    </div>
                </div>
                </motion.div>
            </div>
            
            {/* Add bat silhouette decoration */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[url('/bat-silhouette.png')] bg-no-repeat bg-contain opacity-5 transform translate-x-1/4 translate-y-1/4"></div>
            <div className="absolute top-0 left-0 w-64 h-64 bg-[url('/bat-silhouette.png')] bg-no-repeat bg-contain opacity-5 transform -translate-x-1/4 -translate-y-1/4 rotate-180"></div>
            </section>

            {/* Add this to your global CSS or styled-jsx */}
            <style jsx global>{`
            .mask-radial-gradient {
                mask-image: radial-gradient(circle at center, black 30%, transparent 80%);
            }
`}</style>
        </>
    );
}


export default Skill_About;