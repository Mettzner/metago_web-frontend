import React from 'react'
// import { canSSRAuth } from '../_utils/canSSRAuth'
import { setUpAPIClient } from '../_services/api'
import Header from '../_components/header'

export default function Principal() {
    // Modal.setAppElement('#__next')

    return (
        <div>
            <Header />
        </div>
    )
}

// export const getServerSideProps = canSSRAuth(async (ctx) => {
//     const apiClient = setUpAPIClient(ctx);


//     return {
//         props: {}
//     }
// })