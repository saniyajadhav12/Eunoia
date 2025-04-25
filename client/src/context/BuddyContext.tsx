import React, { createContext, useState, useContext, ReactNode } from 'react';

type BuddyData = {
  name: string;
  tone: string;
  lifestyle: string;
};

type BuddyContextType = {
  buddy: BuddyData;
  setBuddy: (data: Partial<BuddyData>) => void;
};

const defaultBuddy: BuddyData = {
  name: '',
  tone: '',
  lifestyle: '',
};

const BuddyContext = createContext<BuddyContextType>({
  buddy: defaultBuddy,
  setBuddy: () => {},
});

export const BuddyProvider = ({ children }: { children: ReactNode }) => {
  const [buddy, setBuddyState] = useState<BuddyData>(defaultBuddy);

  const setBuddy = (data: Partial<BuddyData>) => {
    setBuddyState((prev) => ({ ...prev, ...data }));
  };

  return (
    <BuddyContext.Provider value={{ buddy, setBuddy }}>
      {children}
    </BuddyContext.Provider>
  );
};

export const useBuddy = () => useContext(BuddyContext);
