import { useContext, useState } from 'react'
import { ProductsContext } from '../../Context/AddTocartContext';
import { AuthContext } from '../../Context/UserContext';
import PriceCard from './PriceCard';
const OrderSummeryTwo = () => {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');



    //for checkout
    const { addItemToCart, deleteItemFromCart,  cart} = useContext(ProductsContext);
    const {user}=useContext(AuthContext)
    let detialsProduct = Array.isArray(cart)
    ? cart.filter((item) => item?.email === user?.email)
    : [];
    const subtotalPrice = detialsProduct?.reduce((acc, item) => acc + item?.price * item?.quantity, 0);
    const grandTotal = subtotalPrice + 5;
// chekcout
const [firstName,setFirstName] = useState('');
const [lastName,setLastName] = useState('');
const [city,setCity] = useState('');

const [company,setCompany] = useState('');
const [street, setStreet] = useState('');
  const [postal, setPostal] = useState('');
  const [state, setState] = useState('');
  const [amit, setAmit] = useState('');

  const orders = {
    firstName,
    lastName,
    country,
    region,
    company,
    street,
    amit,
    city,
    state,
    postal,
  };

  const detialsProductWithUserInputs = detialsProduct?.map(product => ({
    ...product,
    orders,
  }));


  const handleCheckout = async (event) => {
    event.preventDefault(); // Prevent default form submission
    // try {
    //   const stripe = await getStripePromise();
    //   const response = await fetch("/api/checkout", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(detialsProductWithUserInputs),
    //   });

    //   const data = await response.json();
    //   if (data.session) {
    //     stripe?.redirectToCheckout({ sessionId: data.session.id });
    //   }
    // } catch (error) {
    //   console.error("Error during checkout:", error);
    //   // Handle error gracefully
    // }
  };
  


  

  return (

      
      
      <div className='px-4 sm:px-16 py-10'>
         
          <div className="flex items-center gap-4">
              <img src="/redLine.png" alt="" />
          <h2 className='text-[28px] my-4 font-lato font-bold text-[#3C4242]'>Check Out</h2>
          </div>
          <h2 className='text-[22px] font-lato font-bold text-[#3C4242]'>Billing Details</h2>

          <form  onSubmit={handleCheckout} className="flex flex-col-reverse md:flex-none md:grid grid-cols-3 mx-auto  py-10 items-center gap-4">
              <div className="col-span-2">
                  
          <div  >
 

                      
                      <div className="sm:grid py-4 grid-cols-2 gap-4">
                      <div className="">
              <p className="font-lato tracking-wide font-normal  my-3	">
              First Name*              </p>
              <input
                type="text"
                  placeholder=" First Name"
                  value={firstName} onChange={e => setFirstName(e.target.value)}
                     required
                className="py-4 px-24 w-full focus:outline-none outline-none border rounded-md  bg-[#F6F6F6] border-[#F6F6F6]"
                name="firstName"
              />
                          </div>
                          <div className="">
              <p className="font-lato tracking-wide font-normal  my-3	">
              Last Name*              </p>
              <input
                type="text"
                  placeholder="Last Name" required
                  value={lastName} onChange={e => setLastName(e.target.value)}

                     
                className="py-4 px-24 w-full focus:outline-none outline-none border rounded-md  bg-[#F6F6F6] border-[#F6F6F6]"
                name="lastName"
              />
            </div>


                      </div>
                      {/* <div className="sm:grid py-4 grid-cols-2 gap-4">
                      <div className="">
              <p className="font-lato tracking-wide font-normal  my-3	">
                  Country / Region*            </p>
             
              
                          </div>
                          <div className="">
              <p className="font-lato tracking-wide font-normal  my-3	">
              Company Name            </p>
              <input
                type="text"
                placeholder="  Company Name "
                     
                className="py-4 px-24 w-full focus:outline-none outline-none border rounded-md  bg-[#F6F6F6] border-[#F6F6F6]"
                  name="company"
                  value={company} onChange={e => setCompany(e.target.value)} required
                    

              />
            </div>


                      </div> */}
                      <div className="sm:grid py-4 grid-cols-2 gap-4">
                      <div className="">
              <p className="font-lato tracking-wide font-normal  my-3	">
              Street Address*            </p>
              <input
                type="text"
                placeholder="Street Address   "
                     
                className="py-4 px-24 w-full focus:outline-none outline-none border rounded-md  bg-[#F6F6F6] border-[#F6F6F6]"
                  name="street"
                  value={street} onChange={e => setStreet(e.target.value)}
                  required

              />
                          </div>
                          <div className="">
              <p className="font-lato tracking-wide font-normal  my-3	">
              Apt, suite, unit             </p>
              <input
                type="text"
                placeholder="apartment, suite, unit, etc. (optional)"
                     
                className="py-4 px-24 w-full focus:outline-none outline-none border rounded-md  bg-[#F6F6F6] border-[#F6F6F6]"
                name="amit"    required               value={amit} onChange={e => setAmit(e.target.value)}
                  

              />
            </div>


            </div>
            <div className="sm:grid py-4 grid-cols-3 gap-4">
                      <div className="">
              <p className="font-lato tracking-wide font-normal  my-3	">
              City*           </p>
              <input
                type="text"
                placeholder=" City"
                     
                className="py-4 px-24 w-full focus:outline-none outline-none border rounded-md  bg-[#F6F6F6] border-[#F6F6F6]"
                  name="city"
                  value={city} onChange={e => setCity(e.target.value)} required
                    

              />
              </div>
              <div className="">
              <p className="font-lato tracking-wide font-normal  my-3	">
              State*         </p>
              <input
                type="text"
                placeholder=" State"
                     
                className="py-4 px-24 w-full focus:outline-none outline-none border rounded-md  bg-[#F6F6F6] border-[#F6F6F6]"
                  name="state"
                  value={state} onChange={e => setState(e.target.value)} required
                    

              />
                          </div>
                          <div className="">
              <p className="font-lato tracking-wide font-normal  my-3	">
              Postal Code*       </p>
              <input
                type="number"
                placeholder=" Postal Code"
                       
                className="py-4 px-24 w-full focus:outline-none outline-none border rounded-md  bg-[#F6F6F6] border-[#F6F6F6]"
                  name="postal"
                  value={postal} onChange={e => setPostal(e.target.value)} required
               
              />
            </div>


                      </div>
                      
              <button type='submit' className=" rounded-lg py-[17px] px-[30px] text-white font-lato 
                     bg-[#f3592a] duration-500 ease-out  ">
Continue to delivery                </button>

                  </div>
              </div>

              <div className="shadow-summery px-6 py-6 lg:mt-[-70px] lg:w-[400px] max-w-[400px] rounded-md ">
                  <h2 className='text-[24px] font-lato font-bold text-[#3C4242]'>Order Summary</h2>
                  <img className='my-4' src="/summerLine.png" alt="" />
                  <div className="">
                      {
                          detialsProduct?.map((price,index) =>(<PriceCard key={index} price={price} />))
                     }
                      
                      <div className="">
                          <p className='text-[18px] font-lato flex justify-between text-[#000000]'> SubTotal  : <span> ${subtotalPrice?.toFixed(2)}</span></p>
                          <p className='text-[18px] font-lato text-[#000000] flex justify-between my-3'> Shipping  : <span> $5.00</span></p>
                          <p className='text-[18px] font-lato text-[#000000] flex justify-between'> Total     :  <span> ${grandTotal?.toFixed(2)}</span></p>

                      </div>
                  </div>

                  

              </div>
        
              
              
          </form>


    </div>
  )
}

export default OrderSummeryTwo