import React from 'react';
import { Profile } from './components/Profile'
import { Skills } from './components/Skills';

export default function App() {
  return (
    <main className="flex flex-col h-screen v-screen">
      <Profile />
      <Skills />
    </main>
  );
}