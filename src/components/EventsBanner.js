import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import BannerLeft from "./BannerLeft";
import Title from "./Title";

export default function EventsBanner() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    let isUnmount = false;

    fetch('http://hung-json-server.herokuapp.com/api/events')
    .then(res => res.json())
    .then(res => {
      if (!isUnmount) {
        setEvents(res.data);
      }
    });

    return () => {
      isUnmount = true;
    }
  }, [])

  return (
    <div className="flex">
      <BannerLeft />
      <div className="events-banner-right">
        <Title>Events</Title>
        <div>
          <div className="events-ct">
            <div className="events-introduce">
              <div className="events-icons-ct">
                <FontAwesomeIcon icon={['fas', 'bullhorn']} className="events-icons" />
              </div>
              <div className="events-grid-right">
                <h4 className="events-grid-title">CUM SOLUTA NOBIS ELIGENDI</h4>
                <p className="events-grid-description">Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus.</p>
              </div>
            </div>
            <div className="events-introduce">
              <div className="events-icons-ct">
                <FontAwesomeIcon icon={['fas', 'bullseye']} className="events-icons" />
              </div>
              <div className="events-grid-right">
                <h4 className="events-grid-title">RERUM HIC TENETUR A SAPIENTE</h4>
                <p className="events-grid-description">Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus.</p>
              </div>
            </div>
          </div>
          <div className="events-ct">
            <div className="events-introduce">
              <div className="events-icons-ct">
                <FontAwesomeIcon icon={['far', 'credit-card']} className="events-icons" />
              </div>
              <div className="events-grid-right">
                <h4 className="events-grid-title">CUM SOLUTA NOBIS ELIGENDI</h4>
                <p className="events-grid-description">Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus.</p>
              </div>
            </div>
            <div className="events-introduce">
              <div className="events-icons-ct">
                <FontAwesomeIcon icon={['far', 'eye']} className="events-icons" />
              </div>
              <div className="events-grid-right">
                <h4 className="events-grid-title">RERUM HIC TENETUR A SAPIENTE</h4>
                <p className="events-grid-description">Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus.</p>
              </div>
            </div>
          </div>
          <div className="events-ct">
            <div className="events-introduce">
              <div className="events-icons-ct">
                <FontAwesomeIcon icon={['fas', 'cog']} className="events-icons" />
              </div>
              <div className="events-grid-right">
                <h4 className="events-grid-title">CUM SOLUTA NOBIS ELIGENDI</h4>
                <p className="events-grid-description">Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus.</p>
              </div>
            </div>
            <div className="events-introduce">
              <div className="events-icons-ct">
                <FontAwesomeIcon icon={['fas', 'trophy']} className="events-icons" />
              </div>
              <div className="events-grid-right">
                <h4 className="events-grid-title">RERUM HIC TENETUR A SAPIENTE</h4>
                <p className="events-grid-description">Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="events-latest">
          {events.length > 0 && events.sort((a, b) => {
            let date1 = new Date(a.date).getTime();
            let date2 = new Date(b.date).getTime();
            if (date1 < date2) return -1;
            else if (date1 > date2) return 1;
            return 0;
          })
          .filter((_, index) => index >= events.length-2)
          .map(element => {
            const arrayMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const date = new Date(element.date).getDate(); 
            const month = arrayMonth[new Date(element.date).getMonth()]; 
            const year = new Date(element.date).getFullYear(); 
            let hours = new Date(element.date).getHours();
            let minutes = new Date(element.date).getMinutes();

            if (minutes < 10) {
              minutes = "0" + minutes;
            }

            return (
                <div key={element.id} className="event-now">
                  <div className="date-event">
                    <div>{date}</div>
                    <div className="my-event">{month}, {year}</div>
                  </div>
                  <div className="img-event-now">
                    <img src={element.img} />
                    <h4 className="events-title">{element.title}</h4>
                    <div className="center-events-des">
                      <FontAwesomeIcon icon={['far', 'clock']} className="events-icons-ca" />
                      {hours < 12 && <span>{hours}:{minutes} AM</span>}
                      {hours > 12 && (
                        <span>{hours - 12}:{minutes} PM</span>
                      )}
                      <FontAwesomeIcon icon={['fas', 'user']} className="events-icons-ca" />
                      <span>{element.user}</span>
                    </div>
                    <div className="events-description">{element.description}</div>
                  </div>
                </div>
            )
          })
          }
        </div>     
      </div>
    </div>
  )
}