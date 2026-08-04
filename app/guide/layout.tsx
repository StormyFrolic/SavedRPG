import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "How TO?",
  description: "Modern take on a a text-based RPG game. Classic turn based mechanics and fun content to explore",
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
