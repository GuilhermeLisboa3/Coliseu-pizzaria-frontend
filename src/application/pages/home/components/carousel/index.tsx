'use client'

import React from 'react'
import { Container, Card } from './style'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { AiFillStar } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import feedback from './feedback.json'

export const Carousel: React.FC = (): JSX.Element => {
  return (
  <Container>
    <Splide options={{
      type: 'loop',
      perPage: 2,
      perMove: 1,
      width: 2 * 465,
      pagination: true,
      gap: 30,
      arrows: false,
      drag: true,
      breakpoints: {
        992: {
          perPage: 1,
          width: 450,
          gap: 30
        },
        465: {
          width: 300,
          gap: 20
        }
      }
    }}
    >
      {feedback.map(user => (
        <SplideSlide key={user.name}>
        <Card>
          <div>
            <BiUser/>
            <div>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
            </div>
          </div>
          <div>
            <p>{user.name}</p>
            <hr />
            <p>{user.description}</p>
          </div>
        </Card>
        </SplideSlide>
      ))}
    </Splide>
  </Container>
  )
}
