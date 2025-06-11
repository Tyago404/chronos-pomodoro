//Import do css
import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './Styles.module.css';
import { useEffect, useState } from 'react';
import { RouterLink } from '../../RouterLink';

type AvailableThemes = 'dark' | 'light';

export const Menu = () => {
  const [theme, setTheme] = useState<AvailableThemes>(()=>{
    const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark'

    return storageTheme
  });

  const handleThemeChange = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,) => {
    e.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    //para criar uma key e o valor da key no localstorage do navegador
    localStorage.setItem('theme',theme)
    // console.log('Fui Executado! e o theme mudou');

    return () => {
      // console.log('Função de limpeza foi executada!');
    };
  }, [theme]);

  const nextThemeIcon = {
    dark:  <SunIcon />,
    light: <MoonIcon />
  }

  return (
    <nav className={styles.menu}>
      <RouterLink
        href='/'
        className={styles.menuLink}
        aria-label='ir para home'
        title='ir para home'
      >
        <HouseIcon />
      </RouterLink>
      <RouterLink
        href='/history'
        className={styles.menuLink}
        aria-label='ver histórico'
        title='ver histórico'
      >

        <HistoryIcon />
      </RouterLink>
      <RouterLink
        href='#'
        className={styles.menuLink}
        aria-label='ir para configurações'
        title='ir para configurações'
      >
     
        <SettingsIcon />
      </RouterLink>
      <RouterLink
        href='#'
        className={styles.menuLink}
        aria-label='Mudar tema'
        title='Mudar tema'
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </RouterLink>

        

    </nav>
  );
};
