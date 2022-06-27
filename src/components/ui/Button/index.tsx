import { ReactNode, ButtonHTMLAttributes } from 'react'
import styles from './styles.module.scss'
import { FaSpinner } from 'react-icons/fa'
import * as BsIcons from "react-icons/bs";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean,
    children: ReactNode,
}

interface ButtonPesquisaProps extends ButtonHTMLAttributes<HTMLButtonElement>{}

export function Button({ loading, children, ...rest }: ButtonProps){
    return(
        <button
          className={styles.button}
          disabled={loading}
          {...rest}
        >
          {  loading ? (
          <FaSpinner color="#FFF" size={16} />
          ) : (
              <a className={styles.buttonText}>
                {children}
              </a>
         )}
        </button>
    )
}
export function Button40({ loading, children, ...rest }: ButtonProps){
    return(
        <button
          className={styles.button40}
          disabled={loading}
          {...rest}
        >
          {  loading ? (
          <FaSpinner color="#FFF" size={16} />
          ) : (
              <a className={styles.buttonText40}>
                {children}
              </a>
         )}
        </button>
    )
}

export function ButtonDelete({ loading, children, ...rest }: ButtonProps){
    return(
      <button
      className={styles.buttonDelete}
      disabled={loading}
      {...rest}
      >
          {  loading ? (
            <FaSpinner color="#FFF" size={16} />
            ) : (
              <a className={styles.buttonTextDelete}>
                {children}
              </a>
         )}
        </button>
    )
  }
export function ButtonDelete40({ loading, children, ...rest }: ButtonProps){
    return(
        <button
          className={styles.buttonDelete40}
          disabled={loading}
          {...rest}
          >
          {  loading ? (
            <FaSpinner color="#FFF" size={16} />
          ) : (
              <a className={styles.buttonTextDelete}>
                {children}
              </a>
         )}
        </button>
    )
  }

  export function ButtonPesquisa({...rest }: ButtonPesquisaProps){
    return(
      <button
          className={styles.buttonPesquisa}
          {...rest}
          >
          <BsIcons.BsSearch></BsIcons.BsSearch>
        </button>
    )
}