import styles from '../styles/Mission.module.css'
import { useEffect, useState } from 'react';

export default function Mission() {

  const [isNotMobile, setIsNotMobile] = useState(false);
  useEffect(() => {
    setIsNotMobile(window.innerWidth >= 760);
  });

  return (
    <div>
      
          <div className={isNotMobile? styles.desktop_mission: styles.mobile_mission}>
            <div className={isNotMobile?styles.column:styles.mobile_column}>
              <h1>Our Mission</h1>
            </div>

           {isNotMobile ?  <div className={styles.line}><span>.</span></div> : null}
           

            <div className={isNotMobile? styles.column: styles.mobile_column}>
              <p>
              At Serve Humanity, our mission is to create a compassionate and equitable society by providing financial and emotional support to those in need. We focus on critical areas such as medical assistance, monthly rations, student fees at UET Taxila, and support for orphan marriages, ensuring no one is left behind. Our impactful drives, including the Winter Drive to distribute warm clothing, the Ramadan Drive to provide meals for fasting families, the ongoing Ration Drive to deliver essential food supplies, and the Palestine Drive to support those affected by crises, exemplify our commitment to making a difference. Through collective effort and unwavering dedication, we strive to alleviate hardships and foster hope, building a better tomorrow for all.
              </p>
            </div>
          </div>
        
    </div>
  );
}
