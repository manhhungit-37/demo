import React, { useEffect, useState, useRef } from 'react';
import BannerLeft from './BannerLeft';
import Title from './Title';
import service1 from '../assets/images/18.jpg';
import service2 from '../assets/images/19.jpg';
import service3 from '../assets/images/20.jpg';
import service4 from '../assets/images/banner-bt-1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function ServicesBanner() {
  const [service, setService] = useState({});
  const followersRef = useRef();
  const savingsRef = useRef();
  const supportRef = useRef();
  const popularityRef = useRef();
  const arrayObjKeys = Object.keys(service);

  useEffect(() => {
    let isUnmount = false;

    fetch("http://hung-json-server.herokuapp.com/api/services")
    .then(res => res.json())
    .then(res => {
      if (!isUnmount) {
        animationCount(followersRef, 0, res.data.followers, 1000);
        animationCount(savingsRef, 0, res.data.savings, 1000);
        animationCount(supportRef, 0, res.data.support, 1000);
        animationCount(popularityRef, 0, res.data.popularity, 1000);
        setService(res.data);
      }
    })
    .catch(err => console.log(err));

    return () => {
      isUnmount = true;
    }
  }, [])

  function animationCount(node, start, end, duration) {
    let current = start;
    let range = end - start;
    let increment = end > start ? 100 : -100;
    const stepTime = Math.abs(Math.floor(duration / Math.abs(range)) + 1);
    let timer = setInterval(() => {
      current += increment;
      node.current.innerHTML = current.toLocaleString();
      if (current >= end) {
        node.current.innerHTML = end.toLocaleString();
        clearInterval(timer);
      };
    }, stepTime);

  }

  return (
    <div>
      <div className="flex">
        <BannerLeft />
        <div className="about-banner-right ">
          <Title>Services</Title>
          <div className="services-banner-right">
            <div className="services-grid-left">
              <h3>CUM SOLUTA NOBIS EST</h3>
              <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
            </div>
            <div className="services-grid-right">
                <img src={service1} alt="service-1" />
                <img src={service2} alt="service-2" />
                <img src={service3} alt="service-3" />
            </div>
          </div>
          <div className="flex">
            <div className="text-center width-50">
              <img src={service4} alt="service-4" />
            </div>
            <div className="width-50 services-right-list">
              <ul>
                <li>
                  <FontAwesomeIcon icon={['fas', 'arrow-right']} className="arrow-service" /> 
                  Et Voluptates Repudiandae Sint Et Molestiae
                </li>
                <li>
                  <FontAwesomeIcon icon={['fas', 'arrow-right']} className="arrow-service" /> 
                  Rerum Necessitatibus Saepe Eveniet Ut
                </li>
                <li>
                  <FontAwesomeIcon icon={['fas', 'arrow-right']} className="arrow-service" /> 
                  Placeat Facere Possimus, Omnis Voluptas
                </li>
                <li>
                  <FontAwesomeIcon icon={['fas', 'arrow-right']} className="arrow-service" /> 
                  Et Harum Quidem Rerum Facilis Est Et Expedita
                </li>
                <li>
                  <FontAwesomeIcon icon={['fas', 'arrow-right']} className="arrow-service" /> 
                  Similique Sunt In Culpa Qui Officia Deserunt
                </li>
                <li>
                  <FontAwesomeIcon icon={['fas', 'arrow-right']} className="arrow-service" /> 
                  Odio Dignissimos Ducimus Qui Blanditiis
                </li>
              </ul>
              <a href="/">SHOP NOW</a>
            </div>
          </div>
        </div>
      </div>
      {arrayObjKeys.length > 0 && (
        <div className="service-bottom">
          <div className="service-data">
            <div className="text-center">
              <div className="circle-icon-service">
                <FontAwesomeIcon icon={['fas', 'user']} className="service-data-icon" />
              </div>
              <div ref={followersRef} className="service-data-number" >{service.followers}</div>
              <h3>{arrayObjKeys[0]}</h3>
            </div>
            <div className="text-center">
              <div className="circle-icon-service">
                <FontAwesomeIcon icon={['fas', 'piggy-bank']} className="service-data-icon" />
              </div>
              <div ref={savingsRef}  className="service-data-number">{service.savings}</div>
              <h3>{arrayObjKeys[1]}</h3>
            </div>
            <div className="text-center">
              <div className="circle-icon-service">
                <FontAwesomeIcon icon={['fas', 'file-export']} className="service-data-icon" />
              </div>
              <div ref={supportRef} className="service-data-number">{service.support}</div>
              <h3>{arrayObjKeys[2]}</h3>
            </div>
            <div className="text-center">
              <div className="circle-icon-service">
                <FontAwesomeIcon icon={['fas', 'bullhorn']} className="service-data-icon" />
              </div>
              <div ref={popularityRef} className="service-data-number">{service.popularity}</div>
              <h3>{arrayObjKeys[3]}</h3>
            </div>
          </div>
        </div>
      )}
      <div className="news-service">
        <div className="news-service-ct">
          <div className="news-one">
            <FontAwesomeIcon icon={['fas', 'shopping-cart']} className="news-service-icon" />
            <h3>Nam Libero Tempore</h3>
            <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et.</p>
          </div>
          <div className="news-one">
            <FontAwesomeIcon icon={['far', 'chart-bar']} className="news-service-icon" />
            <h3>Nam Libero Tempore</h3>
            <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et.</p>
          </div>
          <div className="news-one">
            <FontAwesomeIcon icon={['fas', 'truck']} className="news-service-icon" />
            <h3>Nam Libero Tempore</h3>
            <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesBanner;