import React from 'react';
import { Globe, Smartphone, Cpu, Brain, BookOpen, Terminal } from 'lucide-react';
import { Translations } from './translations';

export interface ProjectItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  tech: string[];
}

export const getProjectsData = (t: Translations): ProjectItem[] => [
  {
    icon: <Globe className="w-8 h-8" />,
    title: t.projects.fields.web.title,
    description: t.projects.fields.web.description,
    tech: ["React", "Node.js", "Next.js"]
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: t.projects.fields.mobile.title,
    description: t.projects.fields.mobile.description,
    tech: ["React Native", "Flutter", "Swift"]
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: t.projects.fields.iot.title,
    description: t.projects.fields.iot.description,
    tech: ["Arduino", "Raspberry Pi", "ESP32"]
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: t.projects.fields.ai.title,
    description: t.projects.fields.ai.description,
    tech: ["TensorFlow", "PyTorch", "OpenAI"]
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: t.projects.fields.blockchain.title,
    description: t.projects.fields.blockchain.description,
    tech: ["Blockchain", "Smart Contracts", "DeFi"]
  },
  {
    icon: <Terminal className="w-8 h-8" />,
    title: t.projects.fields.devtools.title,
    description: t.projects.fields.devtools.description,
    tech: ["CLI Tools", "Libraries", "Frameworks"]
  }
];