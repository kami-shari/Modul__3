import Header from "./Header";
import { useThemeContext } from "../contexts/themeContext";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { theme } = useThemeContext()
  return (
    <div className={`theme theme--${theme}`}>
      <Header />
      {children}
    </div>
  );
}