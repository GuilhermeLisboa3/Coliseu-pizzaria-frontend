'use client'
import { colors } from '@/application/styles'
import { Container as Cont } from 'reactstrap'
import styled from 'styled-components'

export const Background = styled.div`
  width: 100%;
  background: linear-gradient(to top, #FFFFFF 50%, #F7F8FA 50%);

  @media (max-width: 768px) {
    background: linear-gradient(to top, #FFFFFF 70%, #F7F8FA 30%);
  }

`

export const Cover = styled(Cont)`
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    h1 {
      font-weight: 500;
      font-size: 3rem;
      color: ${colors.black};
      margin: 0.5rem 0;
      letter-spacing: 1px;
    }

    span {
      font-size: 3.4rem;
      color: ${colors.redDark}
    }

    p {
      font-weight: 400;
      font-size: 1.25rem;
      color: ${colors.black};
      margin: 2rem 0 1rem;
      letter-spacing: 0.5px;
      width: 75%;
    }
  }

  img {
    max-width: 700px;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 1200px) {
    min-height: calc(100vh - 98.03px);
    div {
      h1 {
      font-size: 2.5rem;
    }

    span {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
    }
    }
    img {
      max-width: 500px;
    }
  }

  @media (max-width: 992px) {
    img {
      max-width: 350px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    div {
      text-align: center;
      h1 {
        font-size: 3.5rem;
      }

      span {
        font-size: 3.5rem;
      }

      p {
        width: 100%;
        margin: 10px 0px;
      }

      button {
        width: 260px;
        margin: auto auto;
      }
    }
  }

  @media (max-width: 502px) {
    div {
      h1 {
        font-size: 1.8rem;
      }

      span {
        font-size: 2.0rem;
      }
    }
  }
`

export const Cards = styled(Cont)`
  margin-top: 7.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    display: block;
    text-align: center;
    margin-bottom: 0;
  }

  hr {
    margin: 30px 0px 35px;
    width: 600px;
    color: ${colors.grayDark};
  }

  section {
    display: flex;
    gap: 7rem;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      width: 285px;
      height: 290px;
      border-radius: 9px;
      box-shadow: #EDEEF0 0px 8px 24px;
      padding: 15px;
      margin-bottom: 10px;
  
      svg {
        font-size: 3.8rem;
      }
  
      img {
        width: 88px;
      }
  
      h5 {
        font-size: 1.6rem;
      }
  
      p {
        text-align: center;
        margin-bottom: 0;
        color: ${colors.grayDark};
        font-weight: 500;
      }
    }
  }

  @media (max-width: 1090px) {
    margin-top: 0rem;
    section {
      gap: 20px;
    }
  }

  @media (max-width: 910px) {
    margin-top: 3rem;
    hr {
      width: 90%;
    }
    section {
      flex-direction: column;
      gap: 20px;
    }
  }

  @media (max-width: 345px) {
    h1 {
      font-size: 1.4rem;
    }
  }
`

export const Mobile = styled(Cont)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 110px auto;
  img {
    width: 220px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 30px;

    img {
      display: none;
    }

    h3 {
      font-size: 3.5rem;
      font-weight: bolder;
      text-align: center;
    }
    
    p {
      font-size: 1.3rem;
      font-weight: 500;
      color: ${colors.grayDark};
      text-align: center;
    }

    div {
      display: flex;
      justify-content: center;
      flex-direction: row;
      gap: 20px;

      div {
        width: 220px;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 9px;
        box-shadow: #EDEEF0 0px 8px 24px;
        transition: 0.4s;
        cursor: pointer;

        &:hover {
          transform: scale(1.1);
        }

        svg {
          font-size: 2rem;
        }

        p {
          font-weight: bold;
          margin-bottom: 0;
          text-align: left;
          color: ${colors.grayDark};
          font-size: 0.9rem;
          line-height: 17px;
          span {
            color: ${colors.black};
            font-size: 1.2rem;
          }
        }
      }
    }
  }

  @media (max-width: 990px) {
    justify-content: center;
    gap: 40px;
  }

  @media (max-width: 750px) {
    img {
      width: 180px;
    }

    div {
      h3 {
        font-size: 2.5rem;
      }
      
      p {
        font-size: 1rem;
      }

      div {
        div {
          width: 160px;
          svg {
            font-size: 1.5rem;
          }
          p {
            font-size: 0.7rem;
            span {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }

  @media (max-width: 570px) {
    img {
      display: none;
    }

    div {
      img {
        display: block;
        width: 200px;
        margin: auto auto;
      }
    }
  }

  @media (max-width: 346px) {
    div {
      div {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        div {
          flex-direction: row;
          width: 160px;
        }
      }
    }
  }
`

export const Feedback = styled(Cont)`
  margin: 50px auto;
  h2 {
    font-size: 3.5rem;
    text-align: center;
    margin: 30px;
  }

  @media (max-width: 557px) {
    margin: 0px auto 30px;
    h2 {
      font-size: 2.5rem;
      margin: 0px 0px;
    }
  }
`
