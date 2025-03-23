import React from 'react';
import styles from '../styles/Stats.module.css';
import { useState, useEffect } from 'react';

export default function TotalStats() {
    const [isMobile, setIsMobile] = useState(false);
           
               useEffect(()=>{
                   setIsMobile(window.innerWidth <= 650)
               })
    const stats = {
        OverallAmountCollected: "2,225,672 rupees",
        TotalCasesSolved: "92",
        AreasCovered: "Health, Education, General Needs, Student Fees",
        CurrentlyPending: "3",
        CurrentlyRunning: "2",
        NoteForViewers: "Nan",
    };

    return (
        <div className={`${isMobile ? styles.mobile_stats_main : styles.stats_main}`}>
            <br />
           {isMobile ?  <h1>Our Performance</h1>  :  <h1>Our Performance Stats</h1> }<br />
            <p>
            Our team is driven by dedicated individuals who work tirelessly to bring positive change to society. Alongside our core leadership, many volunteers contribute their time and effort to this revolutionary cause. We deeply appreciate the commitment of every team member and acknowledge their invaluable contributions.
            </p>
            <table className= {styles.stats_table} >
                <thead>
                    <tr>
                        <th>Stat</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(stats).map(([key, value], index) => (
                        <tr key={index}>
                            <td>{key.replace(/([A-Z])/g, ' $1').trim()}</td>
                            <td>{value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
