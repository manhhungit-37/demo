import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Title from "./Title";

export default function AboutMeeting({ mem }) {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    let isUnmount = false;

    fetch("http://hung-json-server.herokuapp.com/api/members")
    .then(res => res.json())
    .then(res => {
      if (!isUnmount) {
        setMembers(res.data)
      }
    })
    .catch(err => console.log(err))

    return () => {
      isUnmount = true;
    }
  }, [])

  return (
    <div className="team-description">
      <Title>Meet Our Amazing Team</Title>
      <div className="meeting-ct"> 
        {members.length > 0 && mem.filter(element => members[element-1])
        .reduce((acc, curr) => [...acc, members[curr-1]],[])
        .map(member => {
          return (
              <div key={member.id} className="text-center">
                <img src={member.img} alt={member.name + "-img"} />
                <h3 className="member-name">{member.name}</h3>
                <div className="member-position">{member.position}</div>
                <ul className="member-contact">
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                      </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={['fab', 'google-plus-g']} />
                    </a>
                  </li>
                </ul>
              </div>
          )
        })}
      </div>
    </div>
  )
}