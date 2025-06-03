'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { fadeIn, textVariant } from '@/lib/animations';
import { NavTabs } from '@/components/nav-tabs';

export default function Home() {
  return (
    <>
      <NavTabs />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <div className="container px-4 mx-auto">
            <motion.div
              variants={textVariant(0.1)}
              initial="hidden"
              animate="show"
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Hi, I'm <span className="text-primary">Mithilesh Gopalakrishnan. S</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
                {/* Full Stack Developer */}
              </h2>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              className="flex justify-center gap-4 mb-12"
            >
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/mithilesh-g-47" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.linkedin.com/in/mithileshgopalakrishnan/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:mithileshg47@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              animate="show"
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <ChevronDown className="h-8 w-8 animate-bounce" />
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-muted/30">
          <div className="container px-4 mx-auto">
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
              <div className="prose dark:prose-invert mx-auto">
                <p className="text-lg mb-4">
                  I am a passionate Full Stack Developer with expertise in building modern web applications.
                  With a strong foundation in both frontend and backend technologies, I create seamless,
                  user-friendly experiences that solve real-world problems.
                </p>
                <p className="text-lg mb-4">
                  My journey in software development started with a deep curiosity for technology
                  and has evolved into a professional career where I continuously learn and adapt
                  to new technologies and best practices.
                </p>
                <p className="text-lg">
                  When I'm not coding, you can find me exploring new technologies, contributing to
                  open-source projects, or sharing my knowledge with the developer community.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="container px-4 mx-auto">
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
              <p className="text-lg text-muted-foreground">
                Here are some of the technologies I work with
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {[
                { name: 'React', level: 'Advanced' },
                { name: 'Next.js', level: 'Advanced' },
                { name: 'TypeScript', level: 'Advanced' },
                { name: 'Node.js', level: 'Advanced' },
                { name: 'Python', level: 'Intermediate' },
                { name: 'PostgreSQL', level: 'Intermediate' },
                { name: 'AWS', level: 'Intermediate' },
                { name: 'Docker', level: 'Intermediate' },
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={fadeIn('up', 0.1 * index)}
                  className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold mb-2">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.level}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-muted/30">
          <div className="container px-4 mx-auto">
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-lg text-muted-foreground">
                Here are some of my recent projects
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: 'Project One',
                  description: 'A full-stack web application built with Next.js and Node.js',
                  image: '/project1.jpg',
                  tags: ['Next.js', 'Node.js', 'PostgreSQL'],
                  demoLink: 'https://project1.demo',
                  githubLink: 'https://github.com/yourusername/project1',
                },
                {
                  title: 'Project Two',
                  description: 'A real-time chat application with WebSocket integration',
                  image: '/project2.jpg',
                  tags: ['React', 'Socket.io', 'Express'],
                  demoLink: 'https://project2.demo',
                  githubLink: 'https://github.com/yourusername/project2',
                },
                {
                  title: 'Project Three',
                  description: 'An e-commerce platform with payment integration',
                  image: '/project3.jpg',
                  tags: ['Next.js', 'Stripe', 'Prisma'],
                  demoLink: 'https://project3.demo',
                  githubLink: 'https://github.com/yourusername/project3',
                },
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={fadeIn('up', 0.1 * index)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden"
                >
                  <div className="aspect-video bg-muted" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container px-4 mx-auto">
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Feel free to reach out for collaborations or just a friendly hello
              </p>
              
              <div className="flex flex-col items-center gap-4">
                <Button size="lg" asChild>
                  <a href="mailto:mithileshg47@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    mithileshg47@gmail.com
                  </a>
                </Button>
                
                <div className="flex gap-4">
                  <Button variant="outline" size="lg" asChild>
                    <a href="https://github.com/mithilesh-g-47" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-5 w-5" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="https://www.linkedin.com/in/mithileshgopalakrishnan/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-5 w-5" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
