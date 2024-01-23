// MyContext.tsx
import { createContext, useContext } from "react";

export interface Doctor {
  img: string;
  name: string;
  specialties: string;
  city: string;
}

type Cities = string[];
interface ContextValue {
  doctors: Doctor[];
  updateDoctor: (newValue: Doctor[]) => void;
  cities: Cities;
}
export const DocContext = createContext<ContextValue | undefined>(undefined);

export const useDoctorContext = (): ContextValue => {
  const context = useContext(DocContext);
  if (!context) {
    throw new Error("useDoctorContext must be used within a MyContextProvider");
  }
  return context;
};
