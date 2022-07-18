import React from 'react'
import { canSSRAuth } from '../../utils/canSSRAuth'
import Head from 'next/head'
import Image from 'next/image'
import { Sidebar } from '../../components/Header'
import { setUpAPIClient } from '../../services/api'
import styles from './home.module.scss'
import Modal from 'react-modal'



export default function Principal() {
    const fill = 'rgb(134, 65, 244)'
    const data = [50, 10, 40, 95, -4, -24, null, 85, undefined, 0, 35, 53, -53, 24, 50, -20, -80]

    Modal.setAppElement('#__next')

    return (
        <>
            <Head>
                <title>Home - Metago</title>
            </Head>

            <Sidebar />

            <div className={styles.container}>
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