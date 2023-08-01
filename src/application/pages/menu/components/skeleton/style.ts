'use client'
import { colors, shimmer } from '@/application/styles'
import styled from 'styled-components'
import cardProduct from '@/application/assets/menu/card-product.svg'

export const Container = styled.div`
  margin-top: 20px;
  position: relative;
  overflow: hidden  ;
  background: no-repeat;
  background-image:
    linear-gradient(to right, ${colors.shimmer}, ${colors.shimmer});
  background-position:
    left 0px top 0px;
  background-size:
    190px 30px;
  ul {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
  }

  &::after {
    content: '';
    position: absolute;
    width: 120px;
    height: 30px;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(to right, transparent, #F7F8FA, transparent);
    animation: ${shimmer} 1s infinite;
  }

`

export const Product = styled.li`
  margin-top: 30px;
  width: 270px;
  height: 434px;
  background-image: url(${cardProduct.src});
  background-size: cover;
  background-repeat: no-repeat;
  list-style: none;
  position: relative;

  div {
    overflow: hidden;
    height: 410px;
    width: 100%;
    position: relative;
    margin: 0;
    border-radius: 10px;
    padding: 15px;

    &:empty {
      background: no-repeat;
      background-image:
        linear-gradient(to right, ${colors.shimmer}, ${colors.shimmer}),
        linear-gradient(to right, ${colors.shimmer}, ${colors.shimmer}),
        linear-gradient(to right, ${colors.shimmer}, ${colors.shimmer}),
        linear-gradient(to right, ${colors.shimmer}, ${colors.shimmer});
      background-position:
        left 43px top 18px,
        left 70px top 146px,
        left 15px top 205px,
        right 85px top 330px;
      background-size:
        190px 100px,
        130px 35px,
        230px 110px,
        100px 1.8rem;

        &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transform: translateX(-100%);
        background-image: linear-gradient(to right, transparent, #F7F8FA, transparent);
        animation: ${shimmer} 1s infinite;
      }
    }
  }

  span {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${colors.redDark};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.white};
    cursor: pointer;
    position: absolute;
    bottom: 15px;
    left: 115px;
  }
`
