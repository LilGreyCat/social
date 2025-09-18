import { Box, Typography, Link as MuiLink } from "@mui/material";
import type { Credit } from "@/server/unsplash/types";

type Props = { credit?: Credit };

export default function RightPanelCredit({ credit }: Props) {
  if (!credit?.photographerName) return null;

  return (
    <Box
      sx={{
        position: "absolute",
        right: 12,
        bottom: 8,
        px: 1,
        py: 0.5,
        borderRadius: 1,
        bgcolor: "rgba(0,0,0,0.45)",
      }}
    >
      <Typography variant="caption" sx={{ color: "common.white" }}>
        Photo by{" "}
        <MuiLink
          href={credit.profileLink || "#"}
          target="_blank"
          rel="noreferrer"
          color="inherit"
          underline="hover"
        >
          {credit.photographerName}
        </MuiLink>{" "}
        on{" "}
        <MuiLink
          href={credit.unsplashLink || "https://unsplash.com"}
          target="_blank"
          rel="noreferrer"
          color="inherit"
          underline="hover"
        >
          Unsplash
        </MuiLink>
      </Typography>
    </Box>
  );
}
