import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const tourSteps = [
  {
    title: "Welcome to the 3D Brain Explorer",
    description: "This tour will guide you through the main features of our application."
  },
  {
    title: "3D Brain Model",
    description: "Interact with the 3D brain model on the right. You can rotate and zoom to explore different areas."
  },
  {
    title: "Search Functionality",
    description: "Use the search bar to find specific brain regions quickly."
  },
  {
    title: "Brain Information",
    description: "Click on different parts of the brain to view detailed information about each region."
  },
  {
    title: "That's it!",
    description: "You're now ready to explore the human brain in 3D. Enjoy your learning journey!"
  }
];

const GuidedTour = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{tourSteps[currentStep].title}</DialogTitle>
          <DialogDescription>
            {tourSteps[currentStep].description}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={handlePrevious} disabled={currentStep === 0}>
            Previous
          </Button>
          <Button onClick={handleNext}>
            {currentStep === tourSteps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default GuidedTour;