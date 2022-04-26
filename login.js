import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Login.module.css'
import executioner from '../Backend/executioner'
import Query from '../Backend/Queries'
import { v4 as uuid } from 'uuid'

const Login = () => {

    const router = useRouter();
    const [WrongPassword, setWrongPassword] = useState(false);
    const [ForgotPassword, setForgotPassword] = useState(false);
    const TYPE =
    {
        DOCTOR: 'Doctor Portal',
        ADMIN: 'Admin Portal',
        PATIENT: 'Patient Portal',
    }
    const [type, setType] = useState(TYPE.ADMIN);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <div className={styles.nav_left}>
                    hospital management system
                </div>
                <div className={styles.nav_right}>

                    <div className={styles.nav_right_link} onClick={() => { router.push('/login') }}>
                        home
                    </div>
                    <div className={styles.nav_right_link} onClick={() => { router.push('/about') }}>
                        about us
                    </div>
                    <div className={styles.nav_right_link} onClick={() => { router.push('/contact') }}>
                        contact
                    </div>
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.box_left}>
                    <div className={styles.image}>
                        <img src='/logo.jpg' />
                    </div>
                    <div className={styles.prompt}>
                        <p>
                            hospital management system
                        </p>
                        <p>
                            Stay safe, stay healthy
                        </p>
                    </div>
                </div>
                <div className={styles.box_right}>
                    <div className={styles.box_right_top}>
                        <div onClick={() => { setType(TYPE.PATIENT) }}
                            className={(type !== TYPE.PATIENT) ? styles.box_right_top_item : styles.box_right_top_selected}>
                            patient
                        </div>
                        <div onClick={() => { setType(TYPE.ADMIN) }}
                            className={(type !== TYPE.ADMIN) ? styles.box_right_top_item : styles.box_right_top_selected}>
                            admin
                        </div>
                        <div onClick={() => { setType(TYPE.DOCTOR) }}
                            className={(type !== TYPE.DOCTOR) ? styles.box_right_top_item : styles.box_right_top_selected}>
                            doctor
                        </div>
                    </div>
                    <div className={styles.box_right_title}>
                        {type}
                    </div>
                    <div className={styles.box_right_inputs}>
                        <input type="text"
                            placeholder="user name" spellCheck="false"
                            onChange={(e) => { setName(e.target.value) }}
                        />
                        <input type="password"
                            placeholder="password" spellCheck="false"
                            autoComplete="new-password"
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                    </div>
                    {
                        WrongPassword &&
                        <div className={styles.box_right_inputs}>
                            <p>The password/username does not match</p>
                        </div>
                    }
                    <div className={styles.button_box}>
                        <div className={styles.button} onClick={async () => {
                            let res = await executioner(Query.verifyUser(name, password), "GET");
                            if (res?.data?.data?.length === 0) {
                                setWrongPassword(true);
                                return;
                            }
                            setWrongPassword(false);
                            localStorage.setItem('health-user', JSON.stringify(res.data.data[0]));
                            if (res.data.data[0].type === 'admin') router.push('/admin');
                            else if (res.data.data[0].type === 'patient') router.push('/patient');
                            else router.push('/doctor');

                        }}>
                            login
                        </div>
                    </div>
                    {
                        WrongPassword &&
                        <div className={styles.link_box}>
                            <div className={styles.link} onClick={() => { router.push('/forgot') }}>
                                Forgot password?
                            </div>
                        </div>
                    }
                    <div className={styles.link_box}>

                        <div className={styles.link_prompt}>
                            Don't have an account?
                        </div>
                        <div className={styles.link} onClick={() => { router.push('/register') }}>
                            register
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login