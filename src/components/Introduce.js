import { useEffect, useState } from "react"

export default function Introduce({ intros }) {
  const [introduces, setIntroduces] = useState([]);

  useEffect(() => {
    let isUnmount = false;

    fetch("http://hung-json-server.herokuapp.com/api/introduce")
    .then(res => res.json())
    .then(res => {
      if (!isUnmount) {
        setIntroduces(res.data)
      }
    })
    .catch(err => console.log(err))

    return () => {
      isUnmount = true;
    }
  }, [])

  return (
    <div className="flex-intro">
      {introduces.length > 0 && intros.filter(intro => introduces[intro-1])
      .reduce((acc, curr) => {
        return [...acc, introduces[curr-1]]
      } ,[])
      .map(element => {
        return (
          <div key={element.id} className="intro-one">
            <div className="intro-relative">
              <img src={element.img} alt={element.title} />
              <div className="intro-para-img">
                <h4>GROCERY STORE</h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
              </div>
            </div>
            <div className="text-left">
              <h4 className="intro-title">{element.title}</h4>
              <ol>
                {element.li.map((li, index) => <li key={index}>{li}</li>)}
              </ol>
            </div>
          </div>
        )
      })
      }
    </div>
  )
}