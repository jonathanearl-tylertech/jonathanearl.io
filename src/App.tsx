import React from 'react';
import { ProfileCard } from './components/ProfileCard'
import { Skills } from './components/SkillsSection';

export default function App() {
  return (
    <main className="flex flex-col h-screen v-screen">
      <ProfileCard />
      <Skills />
    </main>
  );
}