import React from 'react'
import styles from '../styles/About.module.css'
import { useState, useEffect } from 'react'
import Aboutimg from '../public/images/logo.png'
export default function AboutUs() {

    const [isNotMobile, setIsNotMobile] = useState(false);

    useEffect(() => {
        setIsNotMobile(window.innerWidth >= 760);
    });
    return (
        <div>
            <div className={styles.desktop_about}>
                <h1>About us</h1> <br />
                <div className={isNotMobile ? styles.desktop_about_columns : styles.mobile_about_columns}>
                    <div className={isNotMobile ? styles.desktop_about_column : styles.mobile_about_column}>
                        <img src={Aboutimg.src} alt="img" />
                    </div>
                    <div className={isNotMobile ? styles.desktop_about_column : styles.mobile_about_column}>
                        <p>
                           <b>Serve Humanity</b>  is a non-profitable welfare organization dedicated to improving the lives of
                            needy and poor people. This organization was established on 13-05-2023. It has solved more
                            than 100 cases so far. We collect donations as well as cases from all over Pakistan. Serve
                            Humanity collabs with Pakistan citizen alliance and run a wonderful winter drive. It also
                            includes certification like Appreciation, Achievement and Donar of the month that awards to
                            those members who performed very well. <br /> <br />
                           
                            Its Founder is Engr M. Nayab Ali 19 MED UET Taxila and Co-Founder is Engr M. Basit
                            Iqbal 19 MED UET Taxila. And current President is Anas Naveed from 21 MED UET Taxila.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
