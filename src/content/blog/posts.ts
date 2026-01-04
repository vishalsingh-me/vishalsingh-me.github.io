import type { ComponentType } from 'react';
import RoadSafety, { metadata as roadSafetyMeta } from './road-safety-analytics.mdx';
import FrontEndToAI, { metadata as frontEndMeta } from './front-end-to-ai.mdx';

export type BlogPost = {
  slug: string;
  Component: ComponentType;
  metadata: {
    title: string;
    description: string;
    date: string;
    readTime: string;
    tags?: string[];
  };
};

export const posts: BlogPost[] = [
  {
    slug: 'road-safety-analytics',
    Component: RoadSafety,
    metadata: roadSafetyMeta,
  },
  {
    slug: 'front-end-to-ai',
    Component: FrontEndToAI,
    metadata: frontEndMeta,
  },
];
