import React from 'react';
import Button from './Common/Button';

const AppIntro = ({onEnterApp}) => {
  return(
    <div className="app-intro">
      <h3>Hi, thanks for your time! <br/>Here is the assignment.</h3>
      <p>To quickly switch between products, press number keys:</p>
      <p>
        NUMBER "1" is for the shirt, <br/>
        NUMBER "2" is for the shoes, <br/>
        NUMBER "3" is for the iPhone
      </p>
      <Button blue outlined onClick={onEnterApp}>
        <span className="mgr10" role="img" aria-label="PointRight">&#x1F449;</span>
        OK
      </Button>
    </div>
  );
}

export default AppIntro;
