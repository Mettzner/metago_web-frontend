import React from 'react'
import { canSSRAuth } from '../../utils/canSSRAuth'
import Head from 'next/head'
import Image from 'next/image'
import { Sidebar } from '../../components/Header'
import { setUpAPIClient } from '../../services/api'
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

            <div className="d-flex w-full h-full justify-center items-center flex-col bg-[#201b2c]">
                {/* <div className={styles.container}> */}
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