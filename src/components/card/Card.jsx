import React from 'react'
import earth from "../../images/desktop/image-deep-earth.jpg"
import night from "../../images/desktop/image-night-arcade.jpg"
import soccer from "../../images/desktop/image-soccer-team.jpg"
import grid from "../../images/desktop/image-grid.jpg"
import above from "../../images/desktop/image-from-above.jpg"
import pocket from "../../images/desktop/image-pocket-borealis.jpg"
import curiosity from "../../images/desktop/image-curiosity.jpg"
import fisheye from "../../images/desktop/image-fisheye.jpg"

const listCards = [
  {
    image: earth,
    title: "DEEP HEARTH"
  },
  {
    image: night,
    title: "NIGHT ARCADE"
  },
  {
    image: soccer,
    title: "SOCCER TEAM VR"
  },
  {
    image: grid,
    title: "THE GRID"
  },
  {
    image: above,
    title: "FROM UP ABOVE VR"
  },
  {
    image: pocket,
    title: "POCKET BOREALIS"
  },
  {
    image: curiosity,
    title: "THE CURIOSITY"
  },
  {
    image: fisheye,
    title: "MAKE IT FISHEYE"
  }
]

const Card = () => {
  return (
    <div>
              {listCards.map((data, index) => (
      <div key = { index }>
          < img src = { data.image } alt = "" />
          <span>{data.title}</span>
      </div>
      ))}
    </div>
  )
}

export default Card