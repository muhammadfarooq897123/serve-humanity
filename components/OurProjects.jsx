import React from 'react'
import styles from '../styles/Projects.module.css';
import mc_pic from '../public/images/mc.jpg';

export default function OurProjects() {

    const projects = [
        {
            'Title':'Medical Camp',
            'Description': 'Serve Humanity and Kare-e-Kamal Taxila Chapter successfully organized a free medical camp, providing vital healthcare services to over 250 patients in need. Our team of dedicated medical professionals conducted thorough check-ups, diagnosed ailments, and dispensed essential medications to those seeking care. This initiative embodies our commitment to serving humanity and promoting health and wellness in our community.',
            'StartDate':'16-02-2025 (11:00 am)',
            'EndDate':'16-02-2025 (4:00 pm)',
            'image': mc_pic
        },
        
    ]
  return (
    <div className = {styles.projects}>
        <h1>Our Projects</h1>
       {
        projects.map((project, index)=>{
           return  <div className = {styles.project}>
                <h1>{project.Title}</h1>
                <strong>{project.StartDate} to {project.EndDate}</strong>
                <img src={project.image.src} alt="No associated image" />
                <p>{project.Description}</p>
                
            </div>
        })
       }
    </div>
  )
}
