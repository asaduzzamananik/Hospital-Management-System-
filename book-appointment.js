import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Remove.module.css'
import executioner from '../Backend/executioner'
import Query from '../Backend/Queries'
import {v4 as uuid} from 'uuid'

const Book = () => {
    const router = useRouter();
    const [id, setId] = useState("");
    const [name, setname] = useState("");
    const [room, setroom] = useState("");
    const [date, setdate] = useState("");
    const [time, settime] = useState("");
    
    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <div className={styles.nav_left}>
                    hospital management system
                </div>
                <div className={styles.nav_right} onClick={() => { router.push('/login') }}>
                    logout
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.left}>
                    <div className={styles.left_item_dash}>
                        Dashboard
                    </div>
                    <div className={styles.left_item} onClick={() => { router.push('/admin'); }}>
                        Admin homepage
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.right_row}>
                        Add Appointment
                    </div>


                    <div className={styles.right_row}>

                        <input type="text"
                            placeholder="enter patient ID" spellCheck="false"
                            onChange={(e) => { setId(e.target.value) }}

                        />
                    </div>
                    <div className={styles.right_row}>

                        <input type="text"
                            placeholder="enter doctor name" spellCheck="false"
                            onChange={(e) => { setname(e.target.value) }}

                        />
                    </div>
                    <div className={styles.right_row}>
                        <input type="text"
                            placeholder="enter doctor room" spellCheck="false"
                            onChange={(e) => { setroom(e.target.value) }}

                        />
                    </div>
                    <div className={styles.right_row}>
                        <input type="text"
                            placeholder="enter date" spellCheck="false"
                            onChange={(e) => { setdate(e.target.value) }}

                        />
                    </div>
                    <div className={styles.right_row}>
                        <input type="text"
                            placeholder="enter time" spellCheck="false"
                            onChange={(e) => { settime(e.target.value) }}
                        
                        />
                    </div>

                    <div className={styles.right_row}>
                        <div className={styles.button} onClick={async() => { 
                               await executioner(Query.addAppointment(uuid(), id, name, room, date, time ), "send");
                               location.reload();
                        }}>
                            Add Appointment
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Book