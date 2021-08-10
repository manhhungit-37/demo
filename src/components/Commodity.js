import { useEffect, useState } from 'react'
import tag from "../assets/images/tag.png";
import offer from "../assets/images/offer.png";


export default function Commodity({ comm, children, classContain, commContain, kindOfComm }) {
  const [listCommodity, setListCommodity] = useState([]);

  useEffect(() => {
    let isUnmount = false;

    fetch("http://hung-json-server.herokuapp.com/api/commodity")
      .then(res => res.json())
      .then(res => {
        if (!isUnmount) {
        setListCommodity(res.data);
        }
      })
      .catch(err => console.log(err))

    return () => {
      isUnmount = true;
    }
  }, [])

  return (
    <div className={classContain}>
      {children}
      {kindOfComm && <h6 className="kind-of-comm-all">{kindOfComm}</h6>}
      <div className={commContain}>
        {listCommodity.length > 0 && comm.filter(value => listCommodity[value-1])
        .reduce((acc, curr) => {return [...acc, listCommodity[curr-1]]}, [])     
        .map((comodity, index) => {
          return (
            <div className="out-border" key={index}>
              <div className="wrap-element">
                <a href="#" className="commodity-link">
                  <img src={comodity.img} alt={comodity.name} />
                </a>
                <div className="price-cl">
                  <p className="commodity-name">{comodity.name}</p>
                  <span className="commodity-price">${comodity.price.toFixed(2)}</span>
                  <span className="commodity-real-price">${comodity.realPrice.toFixed(2)}</span>
                </div>
                <a href="#" className="add-to-cart">ADD TO CART</a>
                {comodity.position === "gift" && 
                  <img src={tag} className="gift" alt="gift" />
                }
                {
                  comodity.position === "offer" &&
                  <img src={offer} alt="offer" className="offer" />
                }
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}