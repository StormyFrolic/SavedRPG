import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Play Game",
  description: "Discover the wild world of DJanaar and discover how to save this world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div>{children}</div>

  );
}
