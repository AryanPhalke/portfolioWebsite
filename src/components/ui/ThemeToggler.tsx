import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const next = theme === 'dark' ? 'light' : 'dark';
  return (
    <button
      onClick={toggleTheme}
      className="icon-btn"
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      type="button"
    >
      {theme === 'dark' ? <FiSun /> : <FiMoon />}
    </button>
  );
};

export default ThemeToggle;
