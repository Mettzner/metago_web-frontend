import { canSSRAuth } from '../../utils/canSSRAuth'
import Head from 'next/head'
import { Header } from '../../components/Header'
import { Input } from '../../components/ui/Input'
import { setUpAPIClient } from '../../services/api'

import { Button } from '../../components/ui/Button'
import styles from './principal.module.scss'

import Modal from 'react-modal'



export default function Principal() {

    Modal.setAppElement('#__next')

    return (
        <>
            <Head>
                <title>Painel - Pizzaria</title>
            </Head>

            <Header />

            <div className={styles.container}>
                <h1>PRINCIPAL</h1>

            </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    const apiClient = setUpAPIClient(ctx);


    return {
        props: {}
    }
})