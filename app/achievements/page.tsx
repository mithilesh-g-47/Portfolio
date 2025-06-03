'use client';

import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { fadeIn } from '@/lib/animations';
import { NavTabs } from '@/components/nav-tabs';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

export default function AchievementsPage() {
  const hackathonAchievements = [
    {
      title: 'First Place - Vashishth Hackathon',
      venue: 'IIITDM Kancheepuram, 2024',
      description: 'Developed an innovative IoT solution for urban waste management',
      images: [
        '/hackathon1/image1.jpg',
        '/hackathon1/image2.jpg',
        '/hackathon1/image3.jpg',
      ],
    },
    {
      title: 'First Place - Machine Learning Mania',
      venue: 'Anna University, 2024',
      description: 'Created an AI-powered health monitoring system',
      images: [
        '/hackathon2/image1.jpg',
        '/hackathon2/image2.jpg',
        '/hackathon2/image3.jpg',
      ],
    },
    {
      title: 'Winners - Data-A-Thon',
      venue: 'VIT, 2025',
      // description: 'Built a blockchain-based payment solution',
      images: [
        '/hackathon3/IMG_5843.png',
        '/hackathon3/2.png',
        '/hackathon3/IMG_6402.jpg',
        '/hackathon3/IMG_6406.jpg',
      ],
    },
    {
      title: 'Finalist - CodeCycle ',
      venue: 'Anna University , 2024',
      // description: 'Developed an AR-based learning platform',
      images: [
        '/hackathon4/CodeCycle24 x GT-0332.png',
        '/hackathon4/CodeCycle24 x GT-0040.png',
      ],
    },
    {
      title: 'Special Mention - Sustainability Challenge',
      venue: '2024',
      description: 'Created an eco-friendly supply chain solution',
      images: [
        '/hackathon5/IMG_0660.png',
        '/hackathon5/IMG_0663.png',
        '/hackathon5/IMG_0674.jpg',
      ],
    },
  ];

  return (
    <>
      <NavTabs />
      <main className="min-h-screen bg-background py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hackathon Achievements</h1>
            <p className="text-lg text-muted-foreground">
              Showcasing innovation and problem-solving through competitive coding
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-16">
            {hackathonAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                variants={fadeIn('up', 0.1 * index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="group"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Trophy className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h2 className="text-2xl font-semibold">{achievement.title}</h2>
                        <p className="text-sm text-muted-foreground mt-1">
                          {achievement.venue}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>

                  <div className="relative rounded-lg overflow-hidden border border-border">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {achievement.images.map((image, imageIndex) => (
                          <CarouselItem key={imageIndex}>
                            <div className="relative aspect-[16/9]">
                              <Image
                                src={image}
                                alt={`${achievement.title} image ${imageIndex + 1}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
