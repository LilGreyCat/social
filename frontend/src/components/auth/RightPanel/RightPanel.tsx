import { Box } from "@mui/material";
import Image from "next/image";
import { useBoxSize } from "@/hooks/useBoxSize/useBoxSize";
import { useRandomImage } from "@/hooks/useRandomImage/useRandomImage";
import RightPanelCredit from "./RightPanelCredit";

export default function RightPanel() {
  const { ref, width, height } = useBoxSize();
  const { img } = useRandomImage({ width, height });

  return (
    <Box
      ref={ref}
      sx={{
        flex: 1,
        position: "relative",
        display: { xs: "none", md: "block" },
      }}
    >
      {img?.url && (
        <>
          <Image
            src={img.url}
            alt={img.alt || "Background image"}
            fill
            priority
            style={{ objectFit: "cover" }}
            sizes="(max-width: 900px) 0px, (max-width: 1200px) 50vw, calc(100vw - 750px)"
          />
          <RightPanelCredit credit={img.credit} />
        </>
      )}
    </Box>
  );
}
