import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      "800": "#540328",
      "700": "#651C3D",
      "750": "#6D2849",
      "600": "#710537",
      "400": "#872C56",
      "100": "#CE166B",
    },
    whiteAlpha: {
      "50": "#F9F5F7",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "brand.600",
        color: "white",
      },
    },
  },
});
