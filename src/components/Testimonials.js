import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Title from "./Title";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    let isUnmount = false;

    fetch("http://hung-json-server.herokuapp.com/api/testimonials")
    .then(res => res.json())
    .then(res => {
      if (!isUnmount) {
        setTestimonials(res.data)
      }
    })
    .catch(err => console.log(err))

    return () => {
      isUnmount = true;
    }
  }, [])

  return (
    <div className="testi-description">
      <Title>Testimonials</Title>
        {testimonials.length > 0 && testimonials.sort((a, b) => {
          if (a.createdAt < b.createdAt) return -1;
          else if (a.createdAt > b.createdAt) return 1;
          return 0;
        })
        .filter((_, index) => index >= testimonials.length-6)
        .map(element => {
          return (
            <div key={element.id} className="meeting-ct">
              <div>
                <FontAwesomeIcon icon={['fas', 'quote-right']} />
                <div>{element.feedback}</div>
                <h4>
                  {element.user}
                  <div>{element.position}</div>
                </h4>
              </div>
            </div>
          )
        })
        }
        <div className="dott">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
    </div>
  )
}