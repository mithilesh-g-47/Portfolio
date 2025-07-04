"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { EXPERIENCE, EDUCATION } from "@/lib/constants";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

export default function ExperiencePage() {
  return (
    <main className="experience-page min-h-screen bg-background py-12 pt-24">
      <div className="container px-4 mx-auto max-w-4xl">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-2">
            <Briefcase className="w-3 h-3" />
            Career Journey
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            Experience & <span className="gradient-text">Education</span>
          </h1>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            My professional journey and academic background, showcasing growth, 
            learning, and contributions across various domains.
          </p>
        </motion.div>

        <Tabs defaultValue="experience" className="max-w-5xl mx-auto">
          <TabsList className="mb-6 flex justify-center bg-muted/50 p-1 rounded-lg">
            <TabsTrigger 
              value="experience" 
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md data-[state=active]:bg-background data-[state=active]:shadow-sm text-sm"
            >
              <Briefcase className="w-3 h-3" />
              Professional Experience
            </TabsTrigger>
            <TabsTrigger 
              value="education"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md data-[state=active]:bg-background data-[state=active]:shadow-sm text-sm"
            >
              <GraduationCap className="w-3 h-3" />
              Education
            </TabsTrigger>
          </TabsList>

          <TabsContent value="experience">
            <div className="space-y-8">
              {EXPERIENCE.map((job, idx) => (
                <motion.div
                  key={job.company + job.position}
                  variants={fadeIn("up", 0.1 * idx)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="group card-enhanced p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-white border shadow-sm">
                        <Image
                          src={"/bct.jpeg"}
                          alt={job.company + " logo"}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <div>
                          <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                            {job.position}
                          </h3>
                          <p className="text-primary font-medium">{job.company}</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 sm:mt-0">
                          <Calendar className="w-4 h-4" />
                          {job.duration}
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-3">
                        {job.description.map((point, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <div className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
                          </div>
                        ))}
                      </div>
                      
                      {job.technologies && (
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="education">
            <div className="space-y-8">
              {EDUCATION.map((edu, idx) => (
                <motion.div
                  key={edu.institution}
                  variants={fadeIn("up", 0.1 * idx)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="group card-enhanced p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-white border shadow-sm">
                        <Image
                          src={edu.logo}
                          alt={edu.institution + " logo"}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <div>
                          <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                            {edu.institution}
                          </h3>
                          <p className="text-primary font-medium">{edu.degree}</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 sm:mt-0">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Skills Section */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h2 className="text-lg font-semibold mb-4">Core Technologies</h2>
          <div className="flex flex-wrap justify-center gap-1.5 max-w-3xl mx-auto">
            {[
              'Python', 
            
              'Streamlit', 'Pandas','Pytorch', 'Tensorflow','Numpy',
              'Flask', 'SQL', 'FireBase', 'Git','AWS','Plotly','Java'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}