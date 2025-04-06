import React from 'react'
import styles from '../styles/Projects.module.css';
import mc_pic from '../public/images/mc.jpg';
import Ration_Drive from '../public/images/Ramzan_Ration.jpeg';

export default function OurProjects() {

    const projects = [
        {
            'Title':'Medical Camp',
            'Description': 'Serve Humanity and Kare-e-Kamal Taxila Chapter successfully organized a free medical camp, providing vital healthcare services to over 250 patients in need. Our team of dedicated medical professionals conducted thorough check-ups, diagnosed ailments, and dispensed essential medications to those seeking care. This initiative embodies our commitment to serving humanity and promoting health and wellness in our community. <a href="https://drive.google.com/file/d/1lusn2hwPJ0h1hVn_6ibxBdQtI1MzZ7R5/view?usp=drivesdk" target="_blank" rel="noopener noreferrer"><br>Click to Watch!!! </a>',
            'StartDate':'16-02-2025 (11:00 am)',
            'EndDate':'16-02-2025 (4:00 pm)',
            'image': mc_pic
        },
        {
          'Title':'Ramzan Ration Drive',
          'Description': 'In the spirit of compassion and community, Serve Humanity is proud to present our Ramzan Ration Drive. This initiative aims to provide essential food supplies to underprivileged families, ensuring they have access to nutritious meals during the holy month of Ramzan. Our team has worked tirelessly to identify 22 deserving families who will benefit from this drive. Join us in making a positive impact in our community and serving humanity. <a href="https://drive.google.com/file/d/1kqLRw6y4SrcMJguObpLD--4xe_lnwAot/view?usp=drivesdk" target="_blank" rel="noopener noreferrer"><br>Click to Watch!!! </a>',
          'StartDate':'02-03-2025',
          'EndDate':'15-03-2025',
          'image': Ration_Drive
      }
        
    ]
  return (
    <div className = {styles.projects}>
        <h1>Our Projects</h1>
       {
        projects.map((project, index)=>{
           return  <div className = {styles.project}>
                <h1>{project.Title}</h1>
                <strong>{project.StartDate} to {project.EndDate}</strong>
                <img src={project.image.src} alt="No associated image" className="w-full h-auto rounded-md" />
                <p dangerouslySetInnerHTML={{ __html: project.Description }} />
                
            </div>
        })
       }
    </div>
  )
}
