import { canSSRAuth } from '../../utils/canSSRAuth'
import Head from 'next/head'
import { Sidebar } from '../../components/Header'
import { Input } from '../../components/ui/Input'
import { setUpAPIClient } from '../../services/api'

import { Button } from '../../components/ui/Button'
import styles from './home.module.scss'

import Modal from 'react-modal'



export default function Principal() {

    Modal.setAppElement('#__next')

    return (
        <>
            <Head>
                <title>Home - Metago</title>
            </Head>

            <Sidebar />

            <div className={styles.container}>
                <h1>HOME</h1>

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