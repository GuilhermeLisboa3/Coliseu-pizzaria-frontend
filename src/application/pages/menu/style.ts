'use client'
import { colors } from '@/application/styles'
import { Container as Cont } from 'reactstrap'
import styled from 'styled-components'
import cardProduct from '@/application/assets/menu/card-product.svg'

export const Container = styled(Cont)`
  display: flex;
  flex-direction: column;
  flex: 1;

  h1 {
    font-weight: bold;
    text-align: center;
  }

  div {
    margin-top: 20px;
    h2 { 
      font-weight: 500;
    }
    ul {
      margin-top: 30px;
      display: flex;
      flex-wrap: wrap;
      gap: 4rem;
  }
}

  @media (max-width: 767px) {
    h1 {
      margin-top: 20px;
    }

    ul {
      justify-content: center;
      align-items: center;
      padding: 0;
    }
  }
`

export const Product = styled.li`
  width: 270px;
  height: 434px;
  background-image: url(${cardProduct.src});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  list-style: none;
  padding: 15px;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 350px;

    img {
      width: 220px;
      margin: 10px auto;
    }

    img.sobremesas {
      width: 75px;
      height: 111px;
    }

    img.bebidas {
      width: 40px;
      height: 111px;
    }

    h3 {
      text-align: center;
      font-size: 2rem;
      margin-top: 10px;
      margin-bottom: 0;
    }

    hr {
      margin: 5px 0px;
      width: 90%;
    }

    p {
      color: ${colors.grayDark};
      font-weight: 400;
      margin: 10px 0;
    }

    p:nth-child(5) {
      color: ${colors.black};
      font-size: 1.5rem;
      font-weight: bolder;
      position: absolute;
      bottom: 50px;
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
