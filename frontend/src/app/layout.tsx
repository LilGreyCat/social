import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social-Network",
  description: "Zone01 Social-Network project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
