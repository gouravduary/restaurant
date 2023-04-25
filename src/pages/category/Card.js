import React from 'react'
import Image from 'next/image'
import styles from '../../styles/cards.module.css'

export default function Card(props) {
  return (
    <>
      <div className={styles.card}>
        <Image src={props.img} alt={props.alt} height={100} width={100} className={styles.img}/>
        <div className={styles.text}>{props.title}</div>
      </div>
    </>
  )
}
