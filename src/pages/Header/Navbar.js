import React from 'react'
import Image from 'next/image'
import styles from '../../styles/nav.module.css'
import logo from '../../../public/favicon.ico'

import { Audiowide } from 'next/font/google'
const audiowide = Audiowide({
    weight: '400',
    subsets : ['latin']
})

export default function Navbar() {
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.navLeft}>
                    {/* Logo */}
                    <div className={styles.logo}>
                        <Image src={logo} alt='PHN Logo' height={50} width={50} />
                    </div>
                    {/* company name */}
                    <div className={`${styles.company} ${audiowide.className}`}>PHN Restaurant</div>
                </div>
                <div className={styles.navRight}>
                    {/* navList */}
                    <div className={styles.navList}>
                        <a href='' className={styles.noentry}>Delivary</a>
                        <a href='' className={styles.noentry}>Contact</a>
                    </div>
                </div>
            </nav>
        </>
    )
}
