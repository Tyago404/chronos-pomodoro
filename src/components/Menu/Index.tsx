//Import do css
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react'
import styles from'./Styles.module.css'
import { useState } from 'react'


type AvailableThemes = 'dark' | 'light'



export const Menu = ()=> { 
    /////////////////////////
    // //<dark | light> para que sua variavel aceite apenas os dois estados definidos 
    //   const [theme, setTheme] = useState<'dark' |'light'>('dark')
    /////////////////////////

    //Usando Type
    const [theme,setTheme] = useState<AvailableThemes>('dark')
      
    //Precisamos tipar o evento que o React cria para poder cancelar o mesmo e não seguir o link do href na tag A 
    const handleThemeChange = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>{
        e.preventDefault(); //Desabilita o link da tag A

        setTheme((prevTheme)=> {
          const nextTheme = prevTheme === 'dark'? 'light' : 'dark'
          return nextTheme
        })
      }


  return(
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      <a href="#" className={styles.menuLink} aria-label='ir para home' title='ir para home'> <HouseIcon /></a>
      <a href="#" className={styles.menuLink} aria-label='ver histórico' title='ver histórico'> <HistoryIcon /></a>
      <a href="#" className={styles.menuLink} aria-label='ir para configurações' title='ir para configurações'> <SettingsIcon /></a>
      <a href="#" className={styles.menuLink} aria-label='Mudar tema' title='Mudar tema' onClick={handleThemeChange}> <SunIcon /></a>
    </nav>
  )
} 