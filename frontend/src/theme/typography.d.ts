import "@mui/material/styles";
import "@mui/material/Typography";
import type * as React from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    logo: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    logo?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    logo: true;
  }
}
