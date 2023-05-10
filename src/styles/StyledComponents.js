import styled from "styled-components";

const StyledInput = styled.input`
  border: ${(props) => (props?.$error ? "1px solid red" : "1px solid #455c9a")};
  outline-color: ${(props) => (props?.$error ? "red" : "#455c9a")};
  padding: 0px 15px;
  color: black;
  font-weight: 500;
  margin-top: 5px;
  margin-right: 5px;
  border-radius: 6px;
  width: 200px;
  height: 30px;
  &:hover {
    border: 1px solid #022461;
  }
`;



export {
    StyledInput
};