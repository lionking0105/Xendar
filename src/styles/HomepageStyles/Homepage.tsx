import { css, styled } from "styled-components";

// welcome comp
export const WelcomeStyles = styled.div`
  img {
    border-radius: 1rem;
  }
  margin-top: 2.5rem;
  .fill-img {
    width: 100%;
    height: auto;
  }
  .mobile {
    margin-top: 0.5rem;
  }
  .welcome {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }
  h3 {
    color: var(--grey-700, #272727);
    font-size: 2rem;
    font-family: Raleway;
    font-weight: 700;
    line-height: 3rem;
    text-align: center;
  }
  .small {
    color: var(--grey-500, #525252);
    font-size: 0.875rem;
    font-family: DM Sans;
    line-height: 1.5rem;
    text-align: center;
  }
  @media screen and (min-width: 728px) {
    .welcome {
      flex-direction: row;
      align-items: unset;
      justify-content: unset;
      gap: 3rem;
    }
    h3 {
      font-size: 2rem;
      line-height: 2.5rem;
      text-align: left;
    }
    .small {
      font-size: 1rem;
      text-align: left;
    }
    .one {
      width: 50%;
    }
    .texts {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.75rem;
    }
  }
  @media screen and (min-width: 998px) {
    .welcome {
      justify-content: center;
      align-items: center;
      flex-direction: row;
      gap: 10.25rem;
    }
    .img-cont {
      display: flex;
      justify-content: right;
    }
    h3 {
      font-size: 2.5rem;
      line-height: 3rem;
    }
    .texts {
      gap: 1.5rem;
      width: 70%;
    }
  }
`;

// choose us comp

export const ChooseusStyles = styled.div`
  margin-top: 2.5rem;
  .reasons {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  @media screen and (min-width: 728px) {
    .reasons {
      gap: 2.5rem;
      justify-content: space-evenly;
    }
  }
  @media screen and (min-width: 728px) {
    .reasons {
      gap: 2.5rem;
      justify-content: space-evenly;
    }
  }
`;

export const ReasonStyles = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  border-radius: 16px;
  background: var(--off-white, #fefefe);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.25);
  .ele {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  h4 {
    color: var(--grey-700, #272727);
    font-size: 1.25rem;
    font-family: Raleway;
    font-weight: 700;
    line-height: 2rem;
    text-align: center;
  }
  p {
    color: var(--grey-500, #525252);
    text-align: center;
    font-size: 0.875rem;
    font-family: DM Sans;
    line-height: 1.5rem;
  }
  @media screen and (min-width: 728px) {
    gap: 3rem;
    width: 45%;
    .ele {
      gap: 2rem;
    }
    h3 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 998px) {
    gap: 3rem;
    width: 30%;
  }
`;

export const TestimonialStyles = styled.div`
  margin-top: 0.5rem;
  background: var(--purple-100, #e5d4f5);
  .testimonies {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  @media screen and (min-width: 728px) {
    .testimonies {
      margin-top: 3rem;
      flex-direction: row;
      gap: 0rem;
    }
    padding-bottom: 4rem;
  }
`;

export interface ITestimonyStyle {
  $isActive: boolean;
}
export const TestimonyStyles = styled.div<ITestimonyStyle>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  .comment {
    display: flex;
    padding: 1.5rem 1rem;
    gap: 0.5rem;
    border-radius: 16px;
    background: var(--off-white, #fefefe);
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
  .comment p {
    color: var(--grey-500, #525252);
    font-size: 1rem;
    font-family: DM Sans;
    line-height: 1.5rem;
  }
  ${(props) =>
    props.$isActive &&
    css`
      .comment {
        background: var(--purple, #7d26cd);
      }
      .comment p {
        color: var(--off-white, #fefefe);
      }
    `}
  h4 {
    color: var(--grey-700, #272727);
    font-size: 0.875rem;
    font-family: DM Sans;
    font-weight: 700;
    line-height: 1.5rem;
  }
  span {
    color: var(--grey-500, #525252);
    font-size: 0.75rem;
    font-family: DM Sans;
    line-height: 1.5rem;
  }
  .below {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
  }
  @media screen and (min-width: 728px) {
    width: 33.3%;
    .comment {
      display: flex;
      padding: 1.5rem 1rem;
      align-items: flex-start;
      gap: 1rem;
      width: 95%;
    }
    transition: 0.5s ease-in-out;
    ${(props) =>
      props.$isActive &&
      css`
        transform: translateY(15%);
        transition: 0.5s ease-in-out;
      `}
  }
  @media screen and (min-width: 998px) {
    .comment {
      display: flex;
      padding: 2.5rem 1.5rem;
      align-items: flex-start;
      gap: 1rem;
      width: 95%;
    }
  }
`;