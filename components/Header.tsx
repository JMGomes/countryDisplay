import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

function capitalizeFirstLetter(s?: string): string {
  if (!s) return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export const Header = () => {
  const [mounted, setMounted] = useState(false);
  const {theme, setTheme} = useTheme();

  useEffect(() => setMounted(true), [])

  if (!mounted) return null;

  return (
      <div style={{
        boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
        padding: '20px',
        marginBottom: '10px'
      }} className="elementsColor">
        <span style={{fontWeight: "bold"}}><a href={'/'}>Where in the world?</a></span>
        <button style={{float: 'right', padding: '4px'}} onClick={() => {
          theme === 'light' ? setTheme('dark') : setTheme('light')
        }}>{capitalizeFirstLetter(theme)} Mode</button>
      </div>);
}