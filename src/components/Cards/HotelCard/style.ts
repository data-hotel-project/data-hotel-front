import styled from "styled-components";

export const StyledHotelCard = styled.li`
  cursor: pointer;

  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  figure {
    img {
      width: 100%;
    }
  }
  h3 {
    text-align: center;
    font-size: 1.3rem;
  }
  h4 {
    text-align: center;
  }
`;
