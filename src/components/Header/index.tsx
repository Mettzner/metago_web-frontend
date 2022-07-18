import { useContext, createContext, ReactNode, useState, useEffect } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import Link from 'next/link'
import { useTheme } from 'next-themes'

import { api } from '../../services/apiCliente'

import { destroyCookie, setCookie, parseCookies } from 'nookies'

import * as MdIcons from "react-icons/md"
import * as TbIcons from "react-icons/tb"
import * as CgIcons from "react-icons/cg"
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import { FiLogOut } from 'react-icons/fi'
import { IconContext } from "react-icons";
import { MoonIcon, SunIcon } from '@heroicons/react/solid'

import styles from './styles.module.scss'
import Button from '@mui/material/Button';

export function Sidebar() {
  const { theme, setTheme } = useTheme()
  const currentTheme = theme

  const cookies = parseCookies();

  const nivel = cookies['@nivel']
  const usuario = nivel === "1" ? <div id='usuario' className={styles.None}>
    <MdIcons.MdManageAccounts size={30} color="#FFF" />
    <Link href="/acesso_usuario">
      <a>Cadastro de Usuário</a>
    </Link>
  </div> : <div id='usuario' className={styles.navText}>
    <MdIcons.MdManageAccounts size={30} color="#FFF" />
    <Link href="/acesso_usuario">
      <a>Cadastro de Usuário</a>
    </Link>
  </div>

  function alteraTema() {
    if (currentTheme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }
  const icone = currentTheme === "dark" ? <SunIcon className={styles.MoonIcon} /> : <MoonIcon className={styles.SunIcon} />

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const { signOut } = useContext(AuthContext);

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
                <Link href="/home">
                  <></>
                </Link>
              </li>

              <div className={styles.groupText}>
                <div className={styles.ThemeIcon}>
                  <div className={styles.grupoBotoes}>
                    <Button onClick={alteraTema}>{icone}</Button>
                  </div>
                </div>
                <div className={styles.navText}>
                  <IoIcons.IoMdPeople size={30} color="#FFF" />
                  <Link href="/acesso_cliente">
                    <a>Cadastro de Cliente</a>
                  </Link>
                </div>

                <div className={styles.navText}>
                  <CgIcons.CgMenuBoxed size={30} color="#FFF" />
                  <Link href="/acesso_servico">
                    <a>Cadastro de Serviços</a>
                  </Link>
                </div>

                <div className={styles.navText}>
                  <TbIcons.TbTractor size={30} className={styles.Icones} />
                  <Link href="/acesso_maquina">
                    <a>Cadastro de Maquina</a>
                  </Link>
                </div>

                <div className={styles.navText}>
                  <BsIcons.BsFillPersonPlusFill size={30} color="#FFF" />
                  <Link href="/acesso_funcionario">
                    <a>Cadastro de Funcionario</a>
                  </Link>
                </div>

                <div className={styles.navText}>
                  <CgIcons.CgBox size={28} color="#FFF" />
                  <Link href="/acesso_produto">
                    <a>Cadastro de Produto</a>
                  </Link>
                </div>
                <div className={styles.navText}>
                  <CgIcons.CgFileRemove size={32} color="#FFF" />
                  <Link href="/acesso_pagar">
                    <a>Conta a Pagar</a>
                  </Link>
                </div>
                <div className={styles.navText}>
                  <CgIcons.CgFileAdd size={32} color="#FFF" />
                  <Link href="/acesso_receber">
                    <a>Contas a Receber</a>
                  </Link>
                </div>

                <div>
                  {usuario}
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

export default Sidebar;