import React from 'react'
import style from '../styles/CurrentCases.module.css'
import { useState, useEffect } from 'react';
export default function CurrentCases() {

   const [isMobile, setIsMobile] = useState(false);
       
           useEffect(()=>{
               setIsMobile(window.innerWidth <= 650)
           })

   const cases = [

      {

         "title": "Medical case",
         "description": "A woman 32 years old has 2 children, resident of chichawatni,Is suffering from breast cancer and needs an urgent surgery, her family is unable to bear her surgery expenses.it's a humble request to donate some amount so she can survive, and grow up her little children.",
         "AmountRequired": "40k",
         "AmountCollected": "",
         "Deadline": "10 July",
         "Account1": "0282268153946 (M.Nayab Ali) UBL",
         "Account2": "03430868800 (M Nayab Ali) JazzCash",
         "contact": "03097852424 (M. Junaid Rashid  President)"
      },
      {

        "title": "Support Serve Humanity's Palestine Relief Drive",
         "description": "Support Serve Humanity's Palestine Relief Drive and help bring hope to those in need. Your donation can make a difference in the lives of Palestinians affected by crisis. Donate now and join us in serving humanity.",
         "AmountRequired": "Donate as much as you can. ",
         "AmountCollected": "",
         "Deadline": "We will transfer your amount at the end of every month",
         "Account1": "0282268153946 (M.Nayab Ali) UBL",
         "Account2": "03430868800 (M Nayab Ali) Nayapay",
         "contact": "03097852424 (M. Junaid Rashid  President)"
      },
   ]

   const getDocuments = (case_val, case_contact)=>{
      const text = 'I need documents for '+case_val;
      const phone = case_contact;
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${text}`;
      window.open(whatsappUrl, '_blank'); // Opens WhatsApp in a new tab
   }
         return (
         <div className={`${isMobile ? style.mobile_cases_main : style.cases_main}`}>
            <br />
            <h1>Current Cases</h1> <br />
            <p className = {style.para}>Our team, along with dedicated volunteers, is working tirelessly to drive this revolutionary effort forward. Below are the cases that are currently active, while many others have already been successfully resolved. We appreciate the commitment of everyone involved and acknowledge their valuable contributions.</p>
            <div className={`${isMobile ? style.mobile_cases : style.cases}`}>
               {cases.map((ccase, index) => {
                  return <div className={`${isMobile ? style.mobile_ccase : style.ccase}`}>
                     <h1>{ccase.title}</h1>
                     <h6>{ccase.description}</h6> <br />
                     <p className = {style.required}>Amount Required: {ccase.AmountRequired}</p>
                     <p className = {style.collected}>Amount Collected: {ccase.AmountCollected}</p>
                     <p className = {style.deadline}>Deadline: {ccase.Deadline}</p>
                     <p>Account 1: {ccase.Account1}</p>
                     <p>Account 2: {ccase.Account2}</p> <br />
                     <button onClick={()=>{
                         getDocuments(ccase.title, ccase.contact);
                     }}>Ask for documents</button>
                    <br />
                  </div>
               })}
            </div>
         </div>
         )

}
