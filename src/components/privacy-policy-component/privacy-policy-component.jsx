import React from 'react';
import './privacy-policy-component.scss';

const PrivacyPolicyComponent=()=>(
    <div className ='policy-class'>
        <h2 className='privacy-policy'>SuperPay Privacy Policy</h2>
        <h3 className='heading'>About Us</h3>
        <p>
            Superpay is an application that is poised to making life easier for its customers.
            We process Electricity bills and Tv subscription payments for our customers via online channels(Debit Card and Bank Transfer).
        </p>
        

      <h3 className='heading'>How we user your personal data:</h3>
      <ul>
          <li>
              The email information we collect enables us to authentic each user and also helps in
              resolution of user's issues if there is any difficulty in transaction.   
          </li>
          <li>
              The phone number we collect enables us to easily send you the details of the transaction you do with us
              and it is locally saved on your device so that you would'nt need to input your phone number every time 
              you intend to carry out a transaction.
          </li>
          <li>
              Your Tv Smart Card Number is used to get your Tv account details for the purpose of subscribing for the right 
              Tv subscription package.
          </li>
          <li>
              The Electricity account details(Meter/Account number) are being used for the sole purpose of paying your Electricity
              bills.
          </li>
      </ul>
      
           <h3 className='heading'>Account Security</h3>
           <p>SuperPay does not have access to any of your bank details(Card Number, Card Expiry Date, CVV, and Card Password).
           </p>
               <p>
               <a href="https://www.monnify.com/terms.html" target="_blank">Monnify</a>, a third party that is licensed to carry out such transaction, handles the payment processing following the
               Payment Card Industry Data Security Standard(PCIDSS) requirents.
               Your can learn/read more about them more <a href="https://www.monnify.com/terms.html" target="_blank">here</a>.
               </p> 
               <h3 className='heading'>Age Restriction</h3>
      <p>Our services are not directed to children under 18. We do not knowingly
           transact or provide any services to children under 18.</p>

               <h6>By using any of our services, you have agreed to these terms.</h6>             
           
    </div>
);

export default PrivacyPolicyComponent;