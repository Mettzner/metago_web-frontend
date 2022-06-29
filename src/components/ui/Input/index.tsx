import { ButtonHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import styles from './styles.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }
interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> { }
interface ButtonBuscaProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

export function Input({ ...rest }: InputProps) {
    return (
        <input className={styles.input} {...rest} />
    )
}
export function Input100({ ...rest }: InputProps) {
    return (
        <input className={styles.input100} {...rest} />
    )
}
export function Input90({ ...rest }: InputProps) {
    return (
        <input className={styles.input90} {...rest} />
    )
}
export function Input80({ ...rest }: InputProps) {
    return (
        <input className={styles.input80} {...rest} />
    )
}
export function Input70({ ...rest }: InputProps) {
    return (
        <input className={styles.input70} {...rest} />
    )
}
export function Input60({ ...rest }: InputProps) {
    return (
        <input className={styles.input60} {...rest} />
    )
}
export function Input50({ ...rest }: InputProps) {
    return (
        <input className={styles.input50} {...rest} />
    )
}
export function Input40({ ...rest }: InputProps) {
    return (
        <input className={styles.input40} {...rest} />
    )
}
export function Input30({ ...rest }: InputProps) {
    return (
        <input className={styles.input30} {...rest} />
    )
}
export function Input20({ ...rest }: InputProps) {
    return (
        <input className={styles.input20} {...rest} />
    )
}

export function Input10({ ...rest }: InputProps) {
    return (
        <input className={styles.input10} {...rest} />
    )
}

export function TextArea({ ...rest }: TextAreaProps) {
    return (
        <textarea className={styles.input} {...rest}></textarea>
    )
}