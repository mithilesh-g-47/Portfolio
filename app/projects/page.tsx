'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { fadeIn } from '@/lib/animations';
import { NavTabs } from '@/components/nav-tabs';

export default function ProjectsPage() {
  return (
    <>
      <NavTabs />
      <main className="min-h-screen bg-background py-20">
        <div className="container px-4 mx-auto">
          {/* Experience Section */}
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Professional Experience</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  title: 'Software Engineer Intern',
                  company: 'Bahwan Cybertek',
                  period: 'May - July 2025',
                  description: [
                    'Led development of multiple high-impact projects',
                    'Mentored junior developers and conducted code reviews',
                    'Implemented CI/CD pipelines and improved deployment processes',
                  ],
                },
                {
                  title: 'Full Stack Developer',
                  company: 'Digital Solutions Ltd.',
                  period: '2020 - 2022',
                  description: [
                    'Developed and maintained multiple client projects',
                    'Implemented responsive web applications using React and Node.js',
                    'Collaborated with design team to improve user experience',
                  ],
                },
              ].map((job, index) => (
                <motion.div
                  key={job.title}
                  variants={fadeIn('up', 0.1 * index)}
                  className="p-6 rounded-lg border bg-card text-card-foreground"
                >
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-primary mb-2">{job.company}</p>
                  <p className="text-sm text-muted-foreground mb-4">{job.period}</p>
                  <ul className="list-disc list-inside space-y-2">
                    {job.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground">{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Projects Section */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            animate="show"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Featured Projects</h2>
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
          </motion.div>
        </div>
      </main>
    </>
  );
} 