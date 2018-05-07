import React from 'react';
import A from '../Common/A';
import './footer.css';
import sLogoFull from '../../assets/images/icons/sLogoFull.png';

export default class Footer extends React.Component {
  render() {
    return (
        <div className="footer footer-default">
          <div className="container">
            <ul className="three columns footer-column">
              <li><A>Säljvillkor</A></li>
              <li><A>Köpvillkor</A></li>
              <li><A>Cookies policy</A></li>
              <li><A>Företagsförsäljning</A></li>
            </ul>
            <ul className="three columns footer-column">
              <li><A>Support</A></li>
              <li><A>Press</A></li>
              <li><A>Jobba hos oss</A></li>
            </ul>
            <div className="three columns footer-profile">
              <img src={sLogoFull} width="70%" alt="Sellpy Logo"/>
              <div className="footer-social">
                <A><i className="icon ion-social-facebook"></i></A>
                <A><i className="icon ion-social-twitter"></i></A>
                <A><i className="icon ion-social-instagram"></i></A>
              </div>
            </div>
            <div className="three columns footer-contact">
              <p>
                Frihamnsgatan 56<br />115 56 Stockholm
              </p>
              <p>
                <A href="mailto:kundtjanst@sellpy.se">
                  Kundtjanst@sellpy.se
                </A><br/>
                +46 8 446 830 92<br/>
                Mån-Fre 9-17
              </p>
            </div>
            <small className="twelve columns footer-sellpy">
              Made with <span role="img" aria-label="BlueHeart">&#x1f499;</span> by Sellpy
            </small>
          </div>
        </div>
    )
  }
}
