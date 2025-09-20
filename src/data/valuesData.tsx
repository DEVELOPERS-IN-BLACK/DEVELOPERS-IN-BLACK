import React from 'react';
import { Heart, Users, Code } from 'lucide-react';
import { Translations } from './translations';

export interface ValueItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  detail: string;
}

export const getValuesData = (t: Translations): ValueItem[] => [
  {
    icon: <Heart className="w-12 h-12 text-red-400" />,
    title: t.values.passion.title,
    description: t.values.passion.description,
    detail: t.values.passion.detail
  },
  {
    icon: <Users className="w-12 h-12 text-blue-400" />,
    title: t.values.community.title,
    description: t.values.community.description,
    detail: t.values.community.detail
  },
  {
    icon: <Code className="w-12 h-12 text-green-400" />,
    title: t.values.opensource.title,
    description: t.values.opensource.description,
    detail: t.values.opensource.detail
  }
];