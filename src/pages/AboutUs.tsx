import React from 'react';
import { Mission } from '../components/about/Mission';
import { Team } from '../components/about/Team';
import { Values } from '../components/about/Values';
import { Stats } from '../components/about/Stats';
import { Story } from '../components/about/Story';

export function AboutUs() {
  return (
    <main className="pt-24 pb-16">
      <Story />
      <Mission />
      <Values />
      <Stats />
      <Team />
    </main>
  );
}