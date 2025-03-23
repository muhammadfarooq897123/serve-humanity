import React from 'react'
import styles from '../styles/Educate.module.css'
import logo from '../public/images/image.png'
export default function EducateHUmanity() {

    const data = {
        "title": "Educating Humanity, Transforming Lives",
        "mission": "We believe that education should be easily accessible to everyone. In a country like Pakistan, where 28.3 million are out of school, we are keen on providing orphans and underprivileged children with a better education until primary school and mitigating child labor all over Pakistan.",
        "founder": {
          "name": "Taha Yasin",
          "role": "Founder Educate Humanity"
        },
        "teams": [
          {
            "region": "Punjab",
            "teamHead": "Muhammad Abdullah",
            "volunteerForm": "https://forms.gle/P1MkHpYLKEhZRpVy9"
          },
          {
            "region": "KPK",
            "teamHead": "Sabih Ullah Turk",
            "volunteerForm": "https://forms.gle/P1MkHpYLKEhZRpVy9"
          },
          {
            "region": "Baluchistan",
            "volunteerForm": "https://forms.gle/P1MkHpYLKEhZRpVy9"
          },
          {
            "region": "Sindh",
            "volunteerForm": "https://forms.gle/P1MkHpYLKEhZRpVy9"
          },
          {
            "region": "Gilgit Baltistan",
            "volunteerForm": "https://forms.gle/P1MkHpYLKEhZRpVy9"
          },
          {
            "region": "Azad Jammu and Kashmir",
            "volunteerForm": "https://forms.gle/P1MkHpYLKEhZRpVy9"
          }
        ],
        "ongoingProjects": [
          {
            "region": "Punjab",
            "details": ""
          },
          {
            "region": "KPK",
            "details": "Collaboration with Community Support and Care Foundation, Children Supported: 43/Monthly"
          },
          {
            "region": "Baluchistan",
            "details": ""
          },
          {
            "region": "Sindh",
            "details": ""
          },
          {
            "region": "Gilgit Baltistan",
            "details": ""
          },
          {
            "region": "Azad Jammu and Kashmir",
            "details": ""
          }
        ],
        "orphanVerificationDocuments": [
          "Death Certificate of Father",
          "School fee proof",
          "Proof of Cost of Uniform and other expenses regarding study",
          "Mark sheet of the previous exam",
          "Electricity Bill",
          "Guardian’s CNIC",
          "Proof of Rental Agreement (In case of rental house)"
        ],
        "needyStudentVerificationDocuments": [
          "Father's Salary should be less than 45000",
          "Father's Cnic",
          "Father’s Salary slip",
          "Electricity Bill",
          "Agreement of rent (if living in a rental house)",
          "School fees proof",
          "Proof of Cost of Uniform and other expenses regarding study",
          "Mark sheet of the previous exam"
        ],
        "donation": {
          "supportChildEducation": "Rs.5000 per month (includes a fee, uniform, books, and other study-related expenses)",
          "contribute": "Rs.3000 per month (includes fee and uniform)",
          "easypaisa": {
            "number": "03108323340",
            "name": "Taha Yaseen"
          },
          "bank": {
            "name": "Allied Bank Ltd.",
            "accountNumber": "06420010094463410013",
            "accountHolder": "Taha Yasin"
          }
        }
      }
      
      return (
        <div className= {styles.mainDiv}>
            <img src={logo.src} alt="" />
            <div className={styles.container}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.mission}>{data.mission}</p>
          <h2 className={styles.sectionTitle}>Our Founder</h2>
          <p className={styles.founder}>{data.founder.name} - {data.founder.role}</p>
    
          <h2 className={styles.sectionTitle}>Our Teams</h2>
          {data.teams.map((team, index) => (
            <div key={index} className={styles.teamCard}>
              <h3>{team.region}</h3>
              {team.teamHead && <p><strong>Team Head:</strong> {team.teamHead}</p>}
              <a href={team.volunteerForm} target="_blank" rel="noopener noreferrer" className={styles.volunteerLink}>
                Fill out the Volunteer Form
              </a>
            </div>
          ))}
    
          <h2 className={styles.sectionTitle}>Ongoing Projects</h2>
          {data.ongoingProjects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <h3>{project.region}</h3>
              <p>{project.details || "No ongoing projects currently."}</p>
            </div>
          ))}
    
          <h2 className={styles.sectionTitle}>Documents Required</h2>
          <div className={styles.documents}>
            <div>
              <h3>Orphan Students</h3>
              <ul>
                {data.orphanVerificationDocuments.map((doc, index) => <li key={index}>{doc}</li>)}
              </ul>
            </div>
            <div>
              <h3>Needy Students</h3>
              <ul>
                {data.needyStudentVerificationDocuments.map((doc, index) => <li key={index}>{doc}</li>)}
              </ul>
            </div>
          </div>
    
          <h2 className={styles.sectionTitle}>Donations</h2>
          <p><strong>Support a child:</strong> {data.donation.supportChildEducation}</p>
          <p><strong>Contribute:</strong> {data.donation.contribute}</p>
          <p><strong>Easypaisa:</strong> {data.donation.easypaisa.number} ({data.donation.easypaisa.name})</p>
          <p><strong>Bank:</strong> {data.donation.bank.name} - {data.donation.bank.accountNumber} ({data.donation.bank.accountHolder})</p>
        </div>
        </div>
      );
}
