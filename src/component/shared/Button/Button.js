import React, { useState } from 'react';
import ReactiveButton from 'reactive-button';


const Button = ({ children }) => {
  

  const [state, setState] = useState('idle');
  


  const onClickHandler = () => {
   setState('loading');
   setTimeout(() => {
       setState('success');
   }, 2000);
 }
    return (<>
        <div 
      >
         <ReactiveButton
            buttonState={state}
            onClick={onClickHandler}
            color={'teal'}
            idleText={children}
            loadingText={'Loading'}
            successText={'Success'}
            errorText={'Error'}
            type={'button'}
            className={'class1 class2'}
            style={{ borderRadius: '5px', font:'bold' ,padding:'15px 60px' }}
            outline={true}
            shadow={true}
            rounded={true}
         
            messageDuration={2000}
           


        > </ReactiveButton>
        </div>
      
    </>
      );
};

export default Button;