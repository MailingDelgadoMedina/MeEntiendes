import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Speech from '../components/Speech'
import Listen from '../components/Listen'

import MeSection from '../components/MeSection'

function meentiendes() {
    return (
        <div className='bg-bgbody2'>
            <Header />

            <MeSection />
            <Speech />

            <Listen />

            <Footer />
        </div>
    )
}

export default meentiendes