import { styled } from "styled-components";

export const StyledBody = styled.div`
  padding: 2rem 1rem;

  .name {
    text-align: center;
    margin-bottom: 2rem;
  }

  .box {
    border-radius: 1rem;
    background-color: var(--primary-normal);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    h2 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: var(--primary-light);
    }

    input {
      border-color: var(--secondary-normal);
      background-color: transparent;
    }

    input::placeholder {
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .info-part1 {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .info-part2 {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
    }

    .address {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      h2 {
        margin-top: 1rem;
      }

      .address2 {
        display: flex;
        justify-content: space-between;
        gap: 0.5rem;
      }
    }

    .foot {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }

    .links {
      width: 150px;
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
      color: var(--primary-light);
    }

    button {
      width: 120px;
      height: 3rem;
      margin-bottom: 1rem;
      border-radius: 0.5rem;
      font-size: 1.2rem;
      font-weight: 400;
    }
  }

  @media (min-width: 1000px) {
    display: flex;
    align-items: center;
    .box {
      .body {
        display: flex;
        flex-direction: row;
        gap: 1rem;
      }

      .box-info {
        .info {
          flex-direction: row;
        }
      }
      .address {
        h2 {
          margin-top: 0rem;
        }
      }
      .links {
        justify-content: space-around;
      }
    }
  }
`;
