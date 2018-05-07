import React from 'react';
import Button from '../Common/Button';
import colors from '../Common/Colors';
import sellpyBag from '../../assets/images/sellpy-bag.png';

const ExtraPackage = () => {
  return(
    <div className="item-extra-package">
      <div className="container clearfix">
        <div className="eight columns">
          <h2>
            Vill ha en överraskning?
          </h2>
          <p>
            Du kan lägga till&nbsp;
            <span style={{color: colors.sellpyGreen}}>
            10 kr
            </span>
            &nbsp;för att få en extra relaterad produkt,
            leverans tillsammns.
          </p>
          <Button green>
            Ja, få mig en överraskning
          </Button>
        </div>
        <div className="four columns">
          <img src={sellpyBag} alt="Sellpy Bag" />
        </div>
      </div>
    </div>
  );
};

export default ExtraPackage;
