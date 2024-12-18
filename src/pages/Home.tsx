import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Earnings } from '../components/Earnings';
import { CTA } from '../components/CTA';

export function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Earnings />
      <CTA />
    </main>
  );
}