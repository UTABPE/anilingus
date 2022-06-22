import { Button as ButtonAntd } from "antd";
import styled from "@emotion/styled";
export const Button = styled(ButtonAntd)`
  color: inherit !important;
  border-radius: 10px;
  border-color: transparent;
  box-shadow: 0 0 !important;
  :hover {
    border-color: transparent;
    color: inherit !important;
  }
  :focus {
    border-color: transparent;
    /* color: inherit !important; */
  }
`;
