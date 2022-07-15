import styled from "@emotion/styled";
export const ButtonHover = styled.span`
  display: flex;
  align-items: center;
  height: 40px;
  padding-left: 25px;
  border-left: 5px solid rgb(194 65 12);
  transition: all 0.05s;
  :hover {
    border-left: 8px solid rgb(194 65 12);
  }
`;
