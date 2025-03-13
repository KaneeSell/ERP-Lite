import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Definição do tipo do contexto
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// Criando o contexto de tema
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provedor do contexto
export function ThemeProviderComponent({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<string>("light"); // Estado inicial como "light"
  const [isMounted, setIsMounted] = useState(false); // Estado para verificar se o componente montou

  // 🔹 Atualiza o estado depois que o componente for montado no cliente
  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  // 🔹 Atualiza o atributo do Bootstrap e salva no localStorage quando o tema mudar
  useEffect(() => {
    if (isMounted) {
      document.documentElement.setAttribute("data-bs-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme, isMounted]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook para acessar o contexto
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme deve ser usado dentro de um ThemeProviderComponent");
  return context;
}
