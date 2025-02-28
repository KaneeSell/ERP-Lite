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
  // 🔹 Tenta carregar do localStorage, se não existir, usa "light"
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Atualiza o atributo do Bootstrap e salva no localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

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
