import React from 'react'
import styles from '../../styles/map.module.css'
export default function Map() {
  return (
    <div className={styles.map}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.256219120918!2d73.91161787402926!3d18.56248396789483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc29549e9ddd8e1%3A0xf57b5e702d9a0c8b!2sPHN%20Technology%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1682255829130!5m2!1sen!2sin" className={styles.mapLoc}></iframe>
    </div>
  )
}
