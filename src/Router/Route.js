
import { createBrowserRouter } from 'react-router-dom'
import AdminRoute from './AdminRoute';

import Login from '../component/login/Login';
import Register from '../component/login/Register';
import Error from '../component/shared/error/Error';
import DashboardLayout from '../layout/DashboardLayout';
import Main from '../layout/Main'
import Blog from '../pages/Blog/Blog';
import AddProducts from '../pages/dashboard/AddProducts';
import MyBuyer from '../pages/dashboard/MyBuyer';
import Myorders from '../pages/dashboard/Myorders';
import MyProducts from '../pages/dashboard/MyProducts';
import Home from '../pages/Home/Home';
import Products from '../pages/Home/Products';
import Service from '../pages/service/Service';
import Private from './Private';
import Allseller from '../pages/dashboard/adimin/Allseller';
import AllBuyer from '../pages/dashboard/adimin/AllBuyer';
import BuyerRoute from './BuyerRoute';
import SellerRout from './SellerRout';
import Quiezone from '../pages/Blog/Quiezone';
import QuiezTwo from '../pages/Blog/QuiezTwo';
import QuiezThree from '../pages/Blog/QuiezThree';
import QuiezFour from '../pages/Blog/QuiezFour';
import Payment from '../pages/Home/payment/Payment';
import AllCatergory from '../pages/Home/AllCatergory';
import ProductsDetails from '../pages/Home/ProductsDetails';



const router = createBrowserRouter([

    {
        path: '/',
        errorElement:<Error></Error>,
        element: <Main></Main>,
        children: [
            
           
            {
                path: '/home',
                element:<Home></Home>
                
            },

            {
                path: '/',
                element:<Home></Home>
                
            },

            
            {
                path: '/login',
                element:<Login></Login>
                
            },
            
            {
                path: '/register',
                element:<Register></Register>
                
            },



            { path: '/Service',
                element: <Service></Service>
        
            },
            
        



            
      {

        path: '/service/:id',
          element: <Private><Products></Products></Private>  ,
          loader: ({params})=> fetch(`http://localhost:5000/api/v1/category/${params?.id}`)
      }
            ,
            {

                path: '/books/:id',
                  element: <ProductsDetails/> ,
                  loader: ({params})=> fetch(`http://localhost:5000/api/v1/stock/${params?.id}`)
              }
,
            { path: '/blog',
            element:<Blog></Blog>
            },
            {
                path: '/allCategory',
                element:<AllCatergory/>
            },
            { path: '/quiezone',
            element:<Quiezone></Quiezone>
            },
            
            { path: '/quieztwo',
            element:<QuiezTwo></QuiezTwo>
            },
            
            { path: '/quiezthree',
            element:<QuiezThree></QuiezThree>
            },
            
            { path: '/quiezfour',
            element:<QuiezFour></QuiezFour>
            },
            

            



        ]

    }
    ,
    {
        path: '/dashboard',

         element:<Private> <DashboardLayout></DashboardLayout></Private>,
         children: [
             
             {
                 path: '/dashboard/myproducts',
                 loader: ()=> fetch('http://localhost:5000/users'),

                 element:<MyProducts></MyProducts>
             }
             ,
             {
                path: '/dashboard/mybuyers',
                element:<MyBuyer></MyBuyer>
                 
             },
             
             
             {
                path: '/dashboard/addproducts',
                element: <AddProducts></AddProducts>
                 
             },
             
         
             {
                 path: '/dashboard/myorders',
                 element:<Myorders></Myorders>  
             },
             {
                path :'/dashboard/payment/:id',   
                 element: <Payment></Payment> ,
                 loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
             }  ,
             {
                path: '/dashboard/allseller',
                element:<AdminRoute><Allseller></Allseller></AdminRoute> 
             },
             {
                path: '/dashboard/allbuyer',
                element:<AdminRoute><AllBuyer></AllBuyer></AdminRoute> 
            },
                
             

         ]
     
         }


])
export default router;