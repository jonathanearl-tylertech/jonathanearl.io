import React from 'react';
import { ProfileCard } from './components/ProfileCard'
import { Skills } from './components/SkillsSection';
import { ProjectSection } from './components/ProjectSection'

export default function App() {
  return (
    <div className="v-screen h-screen mx-auto">
      <main className="flex flex-col">
        <ProfileCard />
        <Skills />
        <ProjectSection />
      </main>
    </div>
  );
}