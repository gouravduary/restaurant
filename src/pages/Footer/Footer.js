import React from 'react'
import styles from '../../styles/footer.module.css'
import { SlLocationPin } from 'react-icons/sl'
import { BsTelephone } from 'react-icons/bs'
import { MdOutlineAlternateEmail } from 'react-icons/md'

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.location}><SlLocationPin className={styles.footerIcon}/> PHN Building, Pune <a href='https://goo.gl/maps/CaXKFAWWhr8LY6eb8'>visit</a></div>
        <div className={styles.email}><MdOutlineAlternateEmail className={styles.footerIcon}/> care@phn.com</div>
        <div className={styles.contact}><BsTelephone className={styles.footerIcon}/> +91 9876543210</div>
      </div>
    </>
  )
}
