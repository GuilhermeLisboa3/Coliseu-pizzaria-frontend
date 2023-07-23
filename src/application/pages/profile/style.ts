'use client'
import { colors } from '@/application/styles'
import { Container as Cont } from 'reactstrap'
import styled from 'styled-components'

export const Container = styled(Cont)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 0;
  }
  p {
    font-size: 1.5rem;
    font-weight: 400;
  }

  @media (max-width: 502px) {
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
`

export const Addresess = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 800px;
  margin: 0 auto;

  a {
    text-decoration: none;
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 140px;
        gap: 3px;
        svg {
          font-size: 1.1rem;
          color: ${colors.white}
        }
      }
  }

  section {
    margin: 10px 0px;
    box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
    border: 2px solid ${colors.grayLight};
    border-radius: 5px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    div {
      margin: 0;
      box-shadow: none;
      border: none;
      padding: 10px;
      p {
        margin-bottom: 0;
      }
    }

    div:nth-child(1) {
      display: flex;
      flex-direction: column;

      p {
        font-size: 1.1rem;
        color: ${colors.grayDark};
        font-weight: 400;
      }

      p:nth-child(1) {
        color: ${colors.black};
        font-size: 1.8rem;
        font-weight: bolder;
      }
    }

    div:nth-child(2) {
      display: flex;
      svg {
        font-size: 2rem;
        color: ${colors.redDark}; 
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }

  section.active {
    border: 2px solid ${colors.redDark};
  }

  @media (max-width: 991px) {
    width: 100%;
  }

  @media (max-width: 502px) {
    section {
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      padding: 10px;
      div {
        padding: 0;
      }
      div:nth-child(1) {
        width: 100%;
        align-items: flex-start;
      }
    }
  }

  @media (max-width: 422px) {
    section {
      div:nth-child(1) {
        p {
          font-size: 0.9rem;
          font-weight: 500;
        }

        p:nth-child(1) {
          font-size: 1.6rem;
        }
      }
      div:nth-child(2) {
        svg {
          font-size: 1.6rem;
        }
      }
    }
  }

  @media (max-width: 353px) {
    section {
      text-align: center;
      align-items: center;
      gap: 10px;
      div:nth-child(1) {
        align-items: center;
      }
    }
  }
`

export const Error = styled.div`
  margin: 10px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;

  span {
    text-align: center;
    font-size: 1.25rem;
    font-weight: 500;
    color: ${colors.black};
  }

  button {
    width: auto;
    margin-top: 2rem;
  }
`

export const Skeleton = styled.div`
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
