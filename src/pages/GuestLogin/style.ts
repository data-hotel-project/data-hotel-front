import { styled } from "styled-components";

export const StyledBody = styled.div`
  display: flex;
  align-items: center;

  .name{
    text-align: center;
    margin-bottom: 2rem;
  }

  .box{

    border-radius: 1rem;
    background-color: var(--primary-normal);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h2{
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        color: var(--primary-light);
    }

    input{
        border-color: var(--secondary-normal);
        background-color: transparent;
        
    }

    input::placeholder{
        
    }

    .links{
        display: flex;
        justify-content: space-between;
        margin-top: 0.5rem;
        color: var(--primary-light);
    }

    button{
        width: 100%;
        height: 3rem;
        margin-top: 0.5rem;
        border-radius: 0.5rem;
        font-size: 1.2rem;
        font-weight: 400;
    }
  }
`;