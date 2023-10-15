import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Route';
import { Toaster } from 'react-hot-toast';
import { AddTocartContext } from './Context/AddTocartContext';

function App() {
  return (
    <div  className=''>
     <AddTocartContext>        
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
      </AddTocartContext>
    </div>
  );
}

export default App;
