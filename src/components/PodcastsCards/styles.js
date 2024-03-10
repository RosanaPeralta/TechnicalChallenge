import styled from "styled-components";
import { Card, Typography, CardActions } from "@mui/material";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1%;
`;

export const StyledTypography = styled(Typography)`
  font-size: 20px;
`;

export const StyledCard = styled(Card)`
  height: auto !important;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px !important;
  border: solid 1px #CDA8F;
`;

export const StyledCardActions = styled(CardActions)`
  display: flex;
  justify-content: flex-end;
`;
