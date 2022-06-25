import { useContext, useState, useEffect } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import { FiLogOut } from 'react-icons/fi'
import { AuthContext } from '../../contexts/AuthContext'
import * as IoIcons from "react-icons/io";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/solid' 


export function Header () {  
  const { theme, setTheme } = useTheme()

  const renderThemeChanger = () => {
    const currentTheme = theme === 'dark' ?  'dark' : 'light';

    if(currentTheme === 'dark') {
      return(
        <SunIcon 
        className="w-7 h-7" 
        role="button" 
        onClick={() => setTheme('light')}
        />
      )
    }
    else {
      return (
        <MoonIcon 
        className="w-7 h-7" 
        role="button" 
        onClick={() => setTheme('dark')} 
        />
      )
    }
  }

  const [sidebar, setSidebar] = useState(false);
  
  const showSidebar = () =>  setSidebar(!sidebar);

  const { signOut } = useContext(AuthContext);
    // const { user } = useContext(AuthContext)

    return(
        <>
        <form>
            <IconContext.Provider value={{ color: "#fff" }}>
                <div className={styles.navBar}>
                    <div className={styles.menuBars}>
                      <Link href='#'>
                          <FaIcons.FaBars onClick={showSidebar} />
                      </Link>
                    </div>
                </div>

                <nav className={sidebar ? styles.navMenuActive : styles.navMenu} onClick={showSidebar}>
                    <ul className={styles.navMenuItems}>
                        <li className={styles.navbarToggle}>
                          <Link href="/principal">
                            <></>
                          </Link>
                            {/* <div className={styles.menuBarsClose}>
                              <Link  href='#'>
                                  <a><AiIcons.AiOutlineClose /></a>
                              </Link>
                            </div> */}
                        </li>

                        <div className={styles.groupText}>
                              <div className={styles.ThemeIcon}>
                                <button onClick={() => setTheme('light')}>Light Mode</button>
                                <button onClick={() => setTheme('dark')}>Dark Mode</button> 
                                {/* <a className={styles.SunIcon}><SunIcon onClick={() => setTheme('light')}></SunIcon></a>
                                <a className={styles.MoonIcon}><MoonIcon onClick={() => setTheme('dark')}></MoonIcon></a> */}
                              </div>
                            <div className={styles.navText}>
                              <IoIcons.IoMdPeople size={30} color="#FFF" />
                              <Link href="/cliente">
                                  <a>Cadastro de Cliente</a>
                              </Link>
                            </div>

                            <div className={styles.navText}>
                              <IoIcons.IoMdPeople size={30} color="#FFF" />
                              <Link href="/cadusuario">
                                  <a>Cadastro de Usuário</a>
                              </Link>
                            </div>

                            <div className={styles.navText}>
                              <IoIcons.IoMdPeople size={30} color="#FFF" />
                              <Link href="/cadmaquina">
                                  <a>Cadastro de Maquina</a>
                              </Link>
                            </div>

                            <div className={styles.navText}>
                              <IoIcons.IoMdPeople size={30} color="#FFF" />
                              <Link href="/represen">
                                  <a>Cadastro de Funcionario</a>
                              </Link>
                            </div>

                            <div className={styles.navText}>
                              <IoIcons.IoMdPeople size={30} color="#FFF" />
                              <Link href="/category">
                                  <a>Categoria</a>
                              </Link>
                            </div>

                            <div className={styles.navText}>
                              <IoIcons.IoMdPeople size={30} color="#FFF" />
                                <Link href="/product">
                                  <a>Cardapio</a>
                                </Link>
                            </div>
                          </div>

                        <button onClick={signOut} className={styles.outButton}>
                            <a><FiLogOut  size={30}/></a>
                        </button>
                    </ul>
                </nav>
            </IconContext.Provider>
            </form>
        </>
    )
}

export default Header;