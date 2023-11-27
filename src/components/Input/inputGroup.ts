import styled from "styled-components";
interface iInputGroup {
  className: String;
  inputvalue: string;
}
const InputGroup = styled.div<iInputGroup>`
  position: relative;
  width: 100%;

  input {
    width: 100%;
    border: 1px solid
      ${(props) =>
        props.className === "error"
          ? "#E2142D"
          : props.className === "sucess"
          ? "#4BAD31"
          : props.className === "done"
          ? "#1DA1F2"
          : "#14171A"};
    border-radius: 8px;
    background: none;
    color: ${(props) =>
      props.className === "sucess"
        ? "#FFF"
        : props.className === "done"
        ? "#1DA1F2"
        : "#14171A"};
    padding: 16.5px 14px;
    font-size: 16px;
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  label {
    position: absolute;
    left: 16px;
    top: 0px;
    pointer-events: none;
    color: ${(props) =>
      props.className === "error"
        ? "#E2142D"
        : props.className === "sucess"
        ? "#4BAD31"
        : props.className === "done"
        ? "#1DA1F2"
        : "#dcdcdc"};
    transform: ${(props) =>
      props.inputvalue === ""
        ? "translateY(1rem)"
        : " translateY(-50%) scale(0.8)"};
    background-color: ${(props) =>
      props.inputvalue !== "" ? "#fff" : "transparent"};
    padding: ${(props) => (props.inputvalue !== "" ? "0 0.2em" : 0)};
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  input:focus {
    outline: none;
  }
  input:focus ~ label {
    transform: translateY(-50%) scale(0.8);
    background-color: rgba(223, 99, 71, 0.3);
    padding: 0 0.2em;
  }

  .showPass {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 14px;
    transition: all 0.2s;
    border-radius: 100%;
    padding: 5px;
    display: flex;
    align-items: center;

    :hover {
      background-color: rgba(101, 119, 134, 0.1);
      transition: all 0.2s;
    }

    :active {
      background-color: rgba(101, 119, 134, 0.3);
      transition: all 0.2s;
    }
  }
`;
export default InputGroup;
