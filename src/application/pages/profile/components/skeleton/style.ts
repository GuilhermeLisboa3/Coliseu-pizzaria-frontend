'use client'
import { colors, shimmer } from '@/application/styles'
import styled from 'styled-components'

export const Container = styled.div`
  margin: 10px 0px;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  border: 2px solid ${colors.grayLight};
  border-radius: 5px;
  width: 800px;
  height: 119.17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  background: no-repeat;
  background-image:
    linear-gradient(to right, ${colors.grayLight}, ${colors.grayLight}),
    linear-gradient(to right, ${colors.grayLight}, ${colors.grayLight}),
    linear-gradient(to right, ${colors.grayLight}, ${colors.grayLight}),
    linear-gradient(to right, ${colors.grayLight}, ${colors.grayLight}),
    linear-gradient(to right, ${colors.grayLight}, ${colors.grayLight});
  background-position:
    left 5px top 18px,
    left 5px top 60px,
    left 5px top 85px,
    right 15px top 43px,
    right 48px top 43px;
  background-size:
    20% 26px,
    35% 0.875rem,
    25% 0.875rem,
    1.5rem 1.8rem,
    1.5rem 1.8rem;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transform: translateX(-100%);
      background-image: linear-gradient(to right, transparent, #F7F8FA, transparent);
      animation: ${shimmer} 1.2s infinite;
    }

    @media (max-width: 991px) {
      width: 100%;
    }

    @media (max-width: 502px) {
      height: 151.97px;
      background: no-repeat;
      background-image:
        linear-gradient(to right, ${colors.grayLight}, ${colors.grayLight}),
        linear-gradient(to right, ${colors.grayLight}, ${colors.grayLight}),
        linear-gradient(to right, ${colors.grayLight}, ${colors.grayLight}),
        linear-gradient(to right, ${colors.grayLight}, ${colors.grayLight}),
        linear-gradient(to right, ${colors.grayLight}, ${colors.grayLight});
      background-position:
        left 5px top 18px,
        left 5px top 60px,
        left 5px top 85px,
        right 15px bottom 10px,
        right 48px bottom 10px;
      background-size:
        20% 26px,
        80% 0.875rem,
        40% 0.875rem,
        1.5rem 1.8rem,
        1.5rem 1.8rem;
    }

    @media (max-width: 422px) {
      background: no-repeat;
      background-image:
        linear-gradient(to right, ${colors.grayLight}, ${colors.grayLight}),
        linear-gradient(to right, ${colors.grayLight}, ${colors.grayLight}),
        linear-gradient(to right, ${colors.grayLight}, ${colors.grayLight}),
        linear-gradient(to right, ${colors.grayLight}, ${colors.grayLight}),
        linear-gradient(to right, ${colors.grayLight}, ${colors.grayLight});
      background-position:
        left 5px top 18px,
        left 5px top 52px,
        left 5px top 74px,
        right 10px bottom 10px,
        right 40px bottom 10px;
      background-size:
        20% 26px,
        80% 0.875rem,
        40% 0.875rem,
        1.5rem 1.8rem,
        1.5rem 1.8rem;
    }

    @media (max-width: 353px) {
      height: 162.81px;
      background: no-repeat;
      background-image:
        linear-gradient(to right, ${colors.grayLight}, ${colors.grayLight}),
        linear-gradient(to right, ${colors.grayLight}, ${colors.grayLight}),
        linear-gradient(to right, ${colors.grayLight}, ${colors.grayLight}),
        linear-gradient(to right, ${colors.grayLight}, ${colors.grayLight}),
        linear-gradient(to right, ${colors.grayLight}, ${colors.grayLight});
      background-position:
        left 50% top 18px,
        left 50% top 52px,
        left 50% top 95px,
        right 150px bottom 10px,
        right 120px bottom 10px;
      background-size:
        25% 26px,
        90% 0.875rem,
        40% 0.875rem,
        1.5rem 1.8rem,
        1.5rem 1.8rem;
    }
`
