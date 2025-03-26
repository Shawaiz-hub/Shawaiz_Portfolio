
import { createContext, useContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const navigate = useNavigate();
  const { toast } = useToast();

  const login = async (username: string, password: string): Promise<boolean> => {
    // Hardcoded credentials validation
    if (username === "Shawaiz" && password === "231980079") {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      toast({
        title: "Login successful",
        description: "Welcome back to the admin panel.",
      });
      return true;
    } else {
      toast({
        title: "Login failed",
        description: "Invalid username or password.",
        variant: "destructive",
      });
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    navigate("/admin/login");
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
