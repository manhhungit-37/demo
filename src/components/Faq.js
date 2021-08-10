import React from 'react';
import ActiveNav from './ActiveNav';
import Title from './Title';
import BannerLeft from './BannerLeft';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Faq() {

  return (
    <>
      <ActiveNav active="FAQ's" />
      <div className="flex">
        <BannerLeft />
        <div className="width-80 padding-80">
          <Title>FAQ's</Title>
          <div className="margin-top-50">
            <div className="faq">
              <a href="#" >
                <FontAwesomeIcon icon={['fas', 'plus']} className="plus-faq" />
                <h4>Assumenda Est Cliche Reprehenderit</h4>
              </a>
              <div className="faq-para-none">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
              </div>
            </div>
            <div className="faq">
              <a href="#">
                <FontAwesomeIcon icon={['fas', 'plus']} className="plus-faq" />
                <h4>Itaque Earum Rerum</h4>
              </a>
            </div>
            <div className="faq">
              <a href="#">
                <FontAwesomeIcon icon={['fas', 'plus']} className="plus-faq" />
                <h4>Autem Accusamus Terry Quibusdam</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;