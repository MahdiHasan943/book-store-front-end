import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51M66vYFykkGEJaxgprDaZ5MiX2FbTng1R0FL15Lobo6YXuOUmgOGMvrxF60qAPDmqtIyDbnItMJuAoO1yst0fRK800pYtt8iqa');
const Payment = () => {

    const booking = useLoaderData()
    console.log(booking);



    const { name, resaleprice,time ,location} = booking;
    
  return (
    <div>
    <h3 className="text-3xl">Payment for {name}</h3>
    <p className="text-xl">Please pay <strong>${resaleprice}</strong> for your appointment on {location} at {time}</p>
    <div className='w-96 my-12'>
   
              <Elements stripe={stripePromise}>
                  <CheckoutForm booking={booking}>
                      
                  </CheckoutForm>
        </Elements>
    </div>
</div>
)}

export default Payment