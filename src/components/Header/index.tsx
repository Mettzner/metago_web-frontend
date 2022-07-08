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

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export function Header() {
  const { theme, setTheme } = useTheme()

  const renderThemeChanger = () => {
    const currentTheme = theme === 'dark' ? 'dark' : 'light';

    if (currentTheme === 'dark') {
      return (
        <SunIcon
          role="button"
          onClick={() => setTheme('light')}
        />
      )
    }
    else {
      <SunIcon className={styles.somebtn} />
      return (
        <MoonIcon
          role="button"
          onClick={() => setTheme('dark')}
        />
      )
    }
  }

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const { signOut } = useContext(AuthContext);
  // const { user } = useContext(AuthContext)

  renderThemeChanger()
  return (
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
              </li>

              <div className={styles.groupText}>
                <div className={styles.ThemeIcon}>
                  <div className={styles.grupoBotoes}>
                    <Button id='light' className={styles.SunIcon}><SunIcon onClick={() => setTheme('light')}></SunIcon></Button>
                    <Button id='dark' className={styles.MoonIcon}><MoonIcon onClick={() => setTheme('dark')}></MoonIcon></Button>
                  </div>
                </div>
                <div className={styles.navText}>
                  <IoIcons.IoMdPeople size={30} color="#FFF" />
                  <Link href="/clientelista">
                    <a>Cadastro de Cliente</a>
                  </Link>
                </div>

                <div className={styles.navText}>
                  <IoIcons.IoMdPeople size={30} color="#FFF" />
                  <Link href="/cadservico">
                    <a>Cadastro de Serviços</a>
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
                  <Link href="/funcionario">
                    <a>Cadastro de Funcionario</a>
                  </Link>
                </div>

                <div className={styles.navText}>
                  <IoIcons.IoMdPeople size={30} color="#FFF" />
                  <Link href="/cadproduto">
                    <a>Cadastro de Produto</a>
                  </Link>
                </div>
                <div className={styles.navText}>
                  <IoIcons.IoMdPeople size={30} color="#FFF" />
                  <Link href="/pagar">
                    <a>Cadastro de Contas a pagar</a>
                  </Link>
                </div>
              </div>

              <button onClick={signOut} className={styles.outButton}>
                <a><FiLogOut size={30} /></a>
              </button>
            </ul>
          </nav>
        </IconContext.Provider>
      </form>
    </>
  )
}

export default Header;