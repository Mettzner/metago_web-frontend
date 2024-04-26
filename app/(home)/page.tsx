import React from 'react'
import { canSSRAuth } from '../_utils/canSSRAuth'
import { setUpAPIClient } from '../_services/api'
import Header from '../_components/header'
import Modal from 'react-modal'

export default function Principal() {

    return (
        <div>
            <Header />
        </div>
    )
}

// export const getServerSideProps = canSSRAuth(async () => {
//     const apiClient = setUpAPIClient();

//     return {
//         props: {}
//     }
// })