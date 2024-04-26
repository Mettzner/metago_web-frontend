// import { SheetHeader, SheetTitle } from "./ui/sheet";

// const SideMenu = () => {

//   return (
//     <>
//       <SheetHeader className="text-left border-b border-solid border-secondary p-5">
//         <SheetTitle>
//           Menu
//         </SheetTitle>
//       </SheetHeader>
//     </>
//   );
// }

// export default SideMenu;
"use client"

import { useContext, createContext, ReactNode, useState, useEffect } from 'react'
import { AuthContext } from '../_contexts/AuthContext'
import { useTheme } from 'next-themes'

import { api } from '../_services/apiCliente'

import { destroyCookie, setCookie, parseCookies } from 'nookies'

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../_components/ui/sheet'
import { Card, CardContent } from '../_components/ui/card'
import { Button } from '../_components/ui/button'
import { MenuIcon } from 'lucide-react'
import SideMenu from '../_components/side-menu'

export function Sidebar() {
  // const { theme, setTheme } = useTheme()
  // const currentTheme = theme

  // const cookies = parseCookies();

  // const nivel = cookies['@nivel']
  // const usuario = nivel === "1" ? <div id='usuario' className={styles.None}>
  //   <MdIcons.MdManageAccounts size={30} color="#FFF" />
  //   <a href="/acesso_usuario">
  //     <a>Cadastro de Usuário</a>
  //   </a>
  // </div> : <div id='usuario' className={styles.navText}>
  //   <MdIcons.MdManageAccounts size={30} color="#FFF" />
  //   <a href="/acesso_usuario">
  //     <a>Cadastro de Usuário</a>
  //   </a>
  // </div>

  // function alteraTema() {
  //   if (currentTheme === 'dark') {
  //     setTheme('light')
  //   } else {
  //     setTheme('dark')
  //   }
  // }
  // const icone = currentTheme === "dark" ? <SunIcon className={styles.MoonIcon} /> : <MoonIcon className={styles.SunIcon} />

  // const [sidebar, setSidebar] = useState(false);

  // const showSidebar = () => setSidebar(!sidebar);

  // const { signOut } = useContext(AuthContext);

  return (
    <>
      <Card>
        <CardContent className="p-5 justify-between items-center flex flex-row">
          {/* <Image src="/Logo.png" alt="MetaGo Barber Logo" height={22} width={120} /> */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <MenuIcon size={18} />
              </Button>
            </SheetTrigger>

            <SheetContent className="p-0">
              <SideMenu />
            </SheetContent>
          </Sheet>
        </CardContent>
      </Card>
      {/* <form>
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className={styles.navBar}>
            <div className={styles.menuBars}>
              <a href='#'>
                <FaIcons.FaBars onClick={showSidebar} />
              </a>
            </div>
          </div>

          <nav className={sidebar ? styles.navMenuActive : styles.navMenu} onClick={showSidebar}>
            <ul className={styles.navMenuItems}>
              <li className={styles.navbarToggle}>
                <a href="/home">
                  <></>
                </a>
              </li> */}

      {/* <div className={styles.groupText}>
                <div className={styles.ThemeIcon}>
                  <div className={styles.grupoBotoes}>
                    <Button onClick={alteraTema}>{icone}</Button>
                  </div>
                </div>
                <div className={styles.navText}>
                  <IoIcons.IoMdPeople size={30} color="#FFF" />
                  <a href="/acesso_cliente">
                    <a>Cadastro de Cliente</a>
                  </a>
                </div>

                <div className={styles.navText}>
                  <CgIcons.CgMenuBoxed size={30} color="#FFF" />
                  <a href="/acesso_servico">
                    <a>Cadastro de Serviços</a>
                  </a>
                </div>

                <div className={styles.navText}>
                  <TbIcons.TbTractor size={30} className={styles.Icones} />
                  <a href="/acesso_maquina">
                    <a>Cadastro de Maquina</a>
                  </a>
                </div>

                <div className={styles.navText}>
                  <BsIcons.BsFillPersonPlusFill size={30} color="#FFF" />
                  <a href="/acesso_funcionario">
                    <a>Cadastro de Funcionario</a>
                  </a>
                </div>

                <div className={styles.navText}>
                  <CgIcons.CgBox size={28} color="#FFF" />
                  <a href="/acesso_produto">
                    <a>Cadastro de Produto</a>
                  </a>
                </div>
                <div className={styles.navText}>
                  <CgIcons.CgFileRemove size={32} color="#FFF" />
                  <a href="/acesso_pagar">
                    <a>Contas a Pagar</a>
                  </a>
                </div>
                <div className={styles.navText}>
                  <CgIcons.CgFileAdd size={32} color="#FFF" />
                  <a href="/acesso_receber">
                    <a>Contas a Receber</a>
                  </a>
                </div>

                <div>
                  {usuario}
                </div>

              </div> */}

      {/* <button onClick={signOut} className={styles.outButton}>
                <a><FiLogOut size={30} /></a>
              </button>
            </ul>
          </nav>
        </IconContext.Provider>
      </form> */}
    </>
  )
}

export default Sidebar;