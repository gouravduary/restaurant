import React from 'react'
import Navbar from '../Header/Navbar'
import styles from '../../styles/reservation.module.css'

export default function index() {
    let today = new Date()
    let date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()
    let tommorw = new Date(new Date().getTime() + (24 * 60 * 60 * 1000))
    let tommorwDate = tommorw.getDate() + '/' + (tommorw.getMonth() + 1) + '/' + tommorw.getFullYear()
    let nextDay = new Date(new Date().getTime() + (2 * 24 * 60 * 60 * 1000))
    let nextDate = nextDay.getDate() + '/' + (nextDay.getMonth() + 1) + '/' + nextDay.getFullYear()

    const postdata = (e) =>{
        e.preventDefault()
        document.getElementById("myForm").reset();
        alert('Reservation successful');
    }
    return (
        <div className={styles.reservation}>
            <Navbar />
            <form method='post' className={styles.form} onSubmit={postdata} id='myForm'>
                <h1>Reservation at PHN Restaurant</h1>

                <div className={styles.name}>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' placeholder='Enter your name' required />
                </div>

                <div className={styles.contact}>
                    <label htmlFor='phno'>Contact No.</label>
                    <input type='number' id='phno' placeholder='Enter your phone number' required />
                </div>

                <div className={styles.date}>
                    <label htmlFor='date'>Date</label>
                    <select id="date"  required>
                        <option value={date}>{date}</option>
                        <option value={tommorwDate}>{tommorwDate}</option>
                        <option value={nextDate}>{nextDate}</option>
                    </select>
                </div>

                <div className={styles.time}>
                    <label htmlFor='time'>Time <span className={styles.notice}>*Book at least 2 hours prior.</span></label>
                    <select id="time" required>
                        <option value='11 AM'>11 AM</option>
                        <option value='12 AM'>12 AM</option>
                        <option value='1 PM'>1 PM</option>
                        <option value='2 PM'>2 PM</option>
                        <option value='3 PM'>3 PM</option>
                        <option value='4 PM'>4 PM</option>
                        <option value='5 PM'>5 PM</option>
                        <option value='6 PM'>6 PM</option>
                        <option value='7 PM'>7 PM</option>
                        <option value='8 PM'>8 PM</option>
                        <option value='9 PM'>9 PM</option>
                        <option value='10 PM'>10 PM</option>
                        <option value='11 PM'>11 PM</option>
                        <option value='12 PM'>12 PM</option>
                    </select>
                </div>

                <div className={styles.people}>
                    <label htmlFor='people'>People</label>
                    <select id="people" required>
                        <option value="2">2</option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                    </select>
                </div>

                <div className={styles.req}>
                    <label htmlFor='req'>Special Request</label>
                    <select id="req" required>
                        <option value="Special Request">Special Request</option>
                        <option value="Kids Chair">Kids Chair</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>
                </div>

                <div className={styles.reqText}>
                    <label htmlFor='reqText'>Please share additional details</label>
                    <textarea id='reqText'/>
                </div>

                <label htmlFor='tnc' className={styles.tnc}> <input type='checkbox' id='tnc' required /> I agree to all the <span className='terms'>Terms & Conditions</span> of this resturant.</label>
                <label htmlFor='subscribe' className={styles.subscribe}> <input type='checkbox' id='subscribe' /> Sign me up to receive dining offers.</label>
                <button type='submit' className={styles.btn}>Reserve</button>
            </form>
        </div>
    )
}