import { Box, Typography, Link as MuiLink } from "@mui/material";
import { useEffect, useState } from "react";
import { useBoxSize } from "@/hooks/useBoxSize/useBoxSize";
import Image from "next/image";

type Credit = {
  photographerName?: string;
  profileLink?: string;
  photoLink?: string;
  unsplashLink?: string;
};
type ApiResp = { ok: boolean; url?: string; alt?: string; credit?: Credit };

export default function RightPanel() {
  const { ref, width, height } = useBoxSize();
  const [img, setImg] = useState<ApiResp | null>(null);

  useEffect(() => {
    if (!width || !height) return;
    const params = new URLSearchParams({
      w: String(width),
      h: String(height),
      q: "technology,network,computer",
    });
    fetch(`/api/random-image?${params.toString()}`, { cache: "no-store" })
      .then((r) => r.json())
      .then((d: ApiResp) => setImg(d))
      .catch(() => setImg({ ok: false }));
  }, [width, height]);

  return (
    <Box ref={ref} sx={{ flex: 1, position: "relative", display: { xs: "none", md: "block" } }}>
      {img?.url && (
        <>
          <Image
            src={img.url}
            alt={img.alt || "Background image"}
            fill
            priority
            style={{ objectFit: "cover" }}
            sizes="100vw"
          />

          {img.credit?.photographerName && (
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
                  href={img.credit.profileLink || "#"}
                  target="_blank"
                  rel="noreferrer"
                  color="inherit"
                  underline="hover"
                >
                  {img.credit.photographerName}
                </MuiLink>{" "}
                on{" "}
                <MuiLink
                  href={img.credit.unsplashLink || "https://unsplash.com"}
                  target="_blank"
                  rel="noreferrer"
                  color="inherit"
                  underline="hover"
                >
                  Unsplash
                </MuiLink>
              </Typography>
            </Box>
          )}
        </>
      )}
    </Box>
  );
}
