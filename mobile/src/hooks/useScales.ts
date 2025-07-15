import { api } from "@/src/lib/axios";

interface Colaborator {
  name: string;
  turn: boolean;
  sunday: number;
  weekday: number[];
}

interface Scale {
  title: string;
  periodScale: string;
  colaborators: Colaborator;
}

export function useScale() {
  
}
