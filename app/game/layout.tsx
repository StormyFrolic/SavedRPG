import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "PLAYING",
  description: "This world is entirely your own to save. But first you need saving too...",
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
