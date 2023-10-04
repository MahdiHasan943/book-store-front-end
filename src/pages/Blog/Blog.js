import React from 'react'
import { Link } from 'react-router-dom'
import Button3 from '../../component/shared/Button/Button3'
import useTitle from '../../Router/hook/useTitle'

const Blog = () => {
  useTitle(' Blog page')

  return (
    <div className='my-6'>

      <div className="grid px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

      <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img    className='h-[200px] '  src="https://cdn.educba.com/academy/wp-content/uploads/2020/01/React-Native-Architecture-1-768x427.jpg" alt="Shoes" /></figure>
  <div className="card-body sm:h-[400px]">
    <h2 className="card-title">What are the different ways to manage a state in a React application ?</h2>
            <p>A simple guide to proper state management in React <br /> 
              

1 React Component Props This is the most basic way <br /> to manage state for your components, you simply pass <br /> the state via props. ...
<br />
     
              2 React Context React Context was added to React to <br /> help solve the problem of sharing state between multiple components, especially between ones that are not close in the component hierarchy. ...
                 <br />
              3 Redux state management ..</p>
    <div className="card-actions justify-end">
      <Link >  <Button3>Read More</Button3>  </Link>
    </div>
  </div>
        </div>
        



        <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img  className='h-[200px]' src="https://developingschool.com/photo/48/resized/prototypal-vs-classical-inheritance.png" alt="Shoes" /></figure>
  <div className="card-body  sm:h-[350px]">
    <h2 className="card-title">How does prototypical inheritance work?</h2>
    <p>When React first came out, the idea of using prototypal inheritance all over the place to create a component was considered laughable just because there is so much setup you have to do (as you saw above) whenever you are creating a subclass that inherits from another object. Instead, to create a component, we would use the createClass helper. This is a part of React, but I want to show you an instance of where some existing library migrated towards classes...</p>
    <div className="card-actions justify-end">
    <Link >  <Button3>Read More</Button3>  </Link>
    </div>
  </div>
        </div>
        




        <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img  className='h-[200px]' src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200514113957/What-is-Unit-Testing-and-Why-Developer-Should-Learn-It.png" alt="Shoes" /></figure>
  <div className="card-body h-[400px] sm:h-[350px]">
    <h2 className="card-title"> What is a unit test? Why should we write unit tests ?</h2>
    <p className='py-0 my-0'>Let’s start with the definition: Unit testing is a software testing method where “units”—the individual components of software—are tested. Developers write unit tests for their code to make sure that the code works correctly. This helps to detect and protect against bugs in the future.</p>
    <p className='py-0 mt-[-50px]'>Unit Tests are Repeatable and it Makes Coding Agile. The best thing about the Unit tests is …
</p>
            <div className="card-actions justify-end">
    <Link >  <Button3>Read More</Button3>  </Link>
    </div>
  </div>
        </div>
        





        <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img  className='h-[200px]' src="https://th.bing.com/th/id/OIP.0VAMg2DGEZ38Qy4mskfnkgHaEO?pid=ImgDet&rs=1" alt="Shoes" /></figure>
  <div className="card-body h-full sm:h-[350px]">
    <h2 className="card-title">Diffrece React vs. Angular vs. Vue ?</h2>
    <p>Angular has 25.1%, while Vue is utilized by slightly fewer developers: 17.3%. To compare, NPM trends have estimated the downloads of all three web development frameworks …</p>
    <p className='mt-[-40px]'>Vue is simpler to understand than Angular or React since it is more adaptable. Furthermore, Vue’s functionality, such as the use of components, overlaps with that of Angular and React. Vue.js’s simplicity and adaptability ... </p>
            <div className="card-actions justify-end">
    <Link>  <Button3>Read More</Button3>  </Link>
    </div>
  </div>
</div>

      </div>



    </div>
  )
}

export default Blog