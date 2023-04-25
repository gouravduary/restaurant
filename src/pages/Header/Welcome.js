import React from 'react'
import { Babylonica } from 'next/font/google'
const wlcMsg = Babylonica({
    weight: '400',
    subsets: ['latin']
})
import styles from '../../styles/welcome.module.css'
import Navbar from './Navbar'

export default function Welcome() {
    return (
        <div className={styles.wlc}>
            <Navbar/>
            <div className={styles.wlcMsg}>
                <p className={wlcMsg.className}>We Serve The Teste <br/> You Love</p>
                <a href='../Reservation'>Dine out</a>
            </div>
        </div>
    )
}
