import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { SkillsGrid } from '@/components/sections/skills-grid';
import { Timeline } from '@/components/sections/timeline';
import { ProjectGrid } from '@/components/sections/project-grid';
import { StartupHighlight } from '@/components/sections/startup-highlight';
import { Awards } from '@/components/sections/awards';
import { Education } from '@/components/sections/education';
import { Contact } from '@/components/sections/contact';
import { BlogSection } from '@/components/sections/blog-section';
import { Now } from '@/components/sections/now';
import { Certifications } from '@/components/sections/certifications';

export default function HomePage() {
  return (
    <div className="container space-y-16 pb-16 md:space-y-20">
      <Hero />
      <About />
      <SkillsGrid />
      <Timeline />
      <ProjectGrid />
      <StartupHighlight />
      <Awards />
      <Education />
      <Certifications />
      <Now />
      {/* <BlogSection /> */}
      <Contact />
    </div>
  );
}
