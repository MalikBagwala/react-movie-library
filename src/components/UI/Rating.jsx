import React from "react"
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Rating = ({ rating }) => {
  let stars = [];
  const noStars = Math.round(rating / 2);
  for (let i = 0; i < noStars; i++) {
    stars.push(i);
  }
  return (
    <div>
      {stars.map((star) => (
        <FontAwesomeIcon
          key={star}
          style={{ marginRight: 5 }}
          color="#FFC940"
          icon={faStar}>

        </FontAwesomeIcon>
      ))}
    </div>)
}

export default Rating;