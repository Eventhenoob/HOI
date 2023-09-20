import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const MobileContext = createContext<boolean | null>(null);

export const MobileProvider = ({ children }: { children: ReactNode }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (screen.width < 900) {
      setIsMobile(true);
    }
  }, []);

  return (
    <MobileContext.Provider value={isMobile}>{children}</MobileContext.Provider>
  );
};

export function useMobile() {
  const context = useContext(MobileContext);
  if (context === null) {
    throw new Error("useMobile must be used within a MobileProvider");
  }

  return context;
}
