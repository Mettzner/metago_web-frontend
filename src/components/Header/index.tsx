import { useContext, useState } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import { FiLogOut } from 'react-icons/fi'
import { AuthContext } from '../../contexts/AuthContext'
import * as IoIcons from "react-icons/io";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";


export function Header () {
  let [teste ,setTeste] = useState('')

  const [sidebar, setSidebar] = useState(false);
  
  const showSidebar = () =>  setSidebar(!sidebar);

  const { signOut } = useContext(AuthContext);
    // const { user } = useContext(AuthContext)

    return(
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <div className={styles.navBar}>
                    <div className={styles.menuBars}>
                      <Link href='#'>
                          <FaIcons.FaBars onClick={showSidebar} />
                      </Link>
                    </div>
                </div>

                <nav className={sidebar ? styles.navMenuActive : styles.navMenu}>
                    <ul className={styles.navMenuItems} onClick={showSidebar}>
                        <li className={styles.navbarToggle}>
                          <Link href="/principal">
                            <></>
                          </Link>
                            <div className={styles.menuBarsClose}>
                              <Link  href='#'>
                                  <a><AiIcons.AiOutlineClose /></a>
                              </Link>
                            </div>
                        </li>
                            <div className={styles.navText}>
                              <IoIcons.IoMdPeople size={30} color="#FFF" />
                              <Link href="/entidade">
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

                        <button onClick={signOut} className={styles.outButton}>
                            <FiLogOut  size={30}/>
                        </button>
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Header;