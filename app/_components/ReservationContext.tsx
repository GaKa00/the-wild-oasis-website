"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type DateRange = {
  from?: Date;
  to?: Date;
};

interface ReservationContextType {
  range: DateRange;
  setRange: React.Dispatch<React.SetStateAction<DateRange>>;
  resetRange: () => void;
}

const ReservationContext = createContext<ReservationContextType | undefined>(
  undefined
);

const initialState: DateRange = { from: undefined, to: undefined };

interface ReservationProviderProps {
  children: ReactNode;
}

function ReservationProvider({ children }: ReservationProviderProps) {
  const [range, setRange] = useState<DateRange>(initialState);
  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation(): ReservationContextType {
  const context = useContext(ReservationContext);
  if (!context)
    throw new Error("useReservation must be used within a ReservationProvider");
  return context;
}

export { ReservationProvider, useReservation };
