import React from 'react'
import Card from './Card'
import indian from '../../imgs/indian.jpg'
import chinese from '../../imgs/chinese.jpg'
import western from '../../imgs/western.jpg'
import mughlai from '../../imgs/mughlai.jpg'
import styles from '../../styles/cards.module.css'
export default function Category() {
  return (
    <div className={styles.cards}>
      <div className={styles.card1}><Card img={indian}  alt="Indian" title="Indian"/></div>
      <div className={styles.card2}><Card img={chinese} alt="Chinese" title="Chinese"/></div>
      <div className={styles.card3}><Card img={western} alt="Western" title="Western"/></div>
      <div className={styles.card4}><Card img={mughlai} alt="Mughlai" title="Mughlai"/></div>
    </div>
  )
}
