"use client"

import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import BrainModel from '@/components/BrainModel';
import BrainInfo from '@/components/BrainInfo';
import SearchBar from '@/components/SearchBar';
import GuidedTour from '@/components/GuidedTour';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [showGuidedTour, setShowGuidedTour] = useState(false);

  return (
    <div className="flex h-screen bg-background text-foreground">
      <div className="w-1/3 p-4 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-4">3D Brain Explorer</h1>
        <SearchBar onSearch={setSelectedRegion} />
        <BrainInfo region={selectedRegion} />
        <Button onClick={() => setShowGuidedTour(true)} className="mt-4">
          Start Guided Tour
        </Button>
      </div>
      <div className="w-2/3">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <BrainModel onRegionSelect={setSelectedRegion} />
          <OrbitControls />
        </Canvas>
      </div>
      {showGuidedTour && (
        <GuidedTour onClose={() => setShowGuidedTour(false)} />
      )}
    </div>
  );
}