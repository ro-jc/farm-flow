import React, { createContext, useContext, useState, ReactNode } from 'react';

export type FarmingPractice = 'integrated' | 'organic';
export type CropType = 'rice' | 'maize' | 'cotton';
export type Season = 'kharif' | 'rabi' | 'summer';

export interface SoilHealth {
  soilType: string;
  soilGroup: string;
  irrigationSystem: string;
  soilPH: number;
  availableN: number;
  availableP: number;
  availableK: number;
}

export interface FertilizerSources {
  nSource: string;
  pSource: string;
  kSource: string;
}

export interface FarmPlanData {
  practice: FarmingPractice;
  crop: CropType | null;
  region: string;
  season: Season | null;
  sowingDate: Date | null;
  farmArea: number;
  areaUnit: 'acres' | 'hectares';
  soilHealth: SoilHealth;
  fertilizerSources: FertilizerSources;
  isOffSeason: boolean;
  planGenerated: boolean;
}

interface FarmPlanContextType {
  farmPlan: FarmPlanData;
  updateFarmPlan: (updates: Partial<FarmPlanData>) => void;
  resetFarmPlan: () => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const defaultFarmPlan: FarmPlanData = {
  practice: 'integrated',
  crop: null,
  region: '',
  season: null,
  sowingDate: null,
  farmArea: 1,
  areaUnit: 'acres',
  soilHealth: {
    soilType: '',
    soilGroup: '',
    irrigationSystem: '',
    soilPH: 6.5,
    availableN: 280,
    availableP: 15,
    availableK: 100,
  },
  fertilizerSources: {
    nSource: 'urea',
    pSource: 'dap',
    kSource: 'mop',
  },
  isOffSeason: false,
  planGenerated: false,
};

const FarmPlanContext = createContext<FarmPlanContextType | undefined>(undefined);

export const FarmPlanProvider = ({ children }: { children: ReactNode }) => {
  const [farmPlan, setFarmPlan] = useState<FarmPlanData>(defaultFarmPlan);
  const [currentStep, setCurrentStep] = useState(0);

  const updateFarmPlan = (updates: Partial<FarmPlanData>) => {
    setFarmPlan(prev => ({ ...prev, ...updates }));
  };

  const resetFarmPlan = () => {
    setFarmPlan(defaultFarmPlan);
    setCurrentStep(0);
  };

  return (
    <FarmPlanContext.Provider value={{ farmPlan, updateFarmPlan, resetFarmPlan, currentStep, setCurrentStep }}>
      {children}
    </FarmPlanContext.Provider>
  );
};

export const useFarmPlan = () => {
  const context = useContext(FarmPlanContext);
  if (!context) {
    throw new Error('useFarmPlan must be used within a FarmPlanProvider');
  }
  return context;
};
