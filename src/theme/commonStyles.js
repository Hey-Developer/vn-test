import { Box, Typography } from "@mui/material";

export const COLORS = {};
export const FONT_SIZES = {};
export const FONT_WEIGHT = {};
export const FONT_FAMILY = {};
export const SPACING = {};

export const StyledText = styled(Typography)`
  ${({ clr }) =>
    clr &&
    css`
      color: ${clr.includes("#") ? clr : COLORS[clr]};
    `}

  ${({ fs }) =>
    fs &&
    css`
      font-size: ${fs}px;
    `}
    
    ${({ size }) =>
    size &&
    css`
      font-size: ${FONT_SIZES[size]};
    `}
`;

export const FlexBox = styled(Box)`
  display: flex;
  flex-direction: ${({ col }) => (col ? "column" : "row")};
  ${({ flexcenter }) =>
    flexcenter === "true" &&
    css`
      align-items: center;
      justify-content: center;
    `};
`;
