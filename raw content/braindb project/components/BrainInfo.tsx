import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const brainData = {
  Cerebrum: "The largest part of the brain, responsible for higher-order functions like thinking, perceiving, planning, and understanding language.",
  Cerebellum: "Located at the back of the brain, it coordinates muscle movements, posture, and balance.",
  Brainstem: "Connects the cerebrum with the spinal cord and controls vital functions like breathing, digestion, heart rate, and blood pressure.",
  // Add more brain regions and their descriptions
};

const BrainInfo = ({ region }) => {
  const [info, setInfo] = useState('');

  useEffect(() => {
    setInfo(brainData[region] || 'Select a brain region to see information.');
  }, [region]);

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>{region || 'Brain Information'}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{info}</p>
      </CardContent>
    </Card>
  );
};

export default BrainInfo;