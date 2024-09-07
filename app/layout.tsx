import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
// import { NavbarNext} from "@/components/navbarNext";
import Navbar from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { GoogleAnalytics } from "@next/third-parties/google";
import Hotjar from "@hotjar/browser";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/public/images/cloutcraft.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const siteId = 5122355;
  const hotjarVersion = 6;

  Hotjar.init(siteId, hotjarVersion);

  return (
    <html suppressHydrationWarning lang="en">
      <head />

      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased overflow-x-hidden",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen bg-gray-100 dark:bg-black">
            <Navbar user={user} />
            <main className="mx-0 pt-16 px-auto flex-grow max-w-screen-2xl ">
              {children}
              <GoogleAnalytics gaId="G-RDD5K23M5X" />
              <Analytics />
            </main>
            <footer className="w-full flex items-center justify-center py-3 bg-gray-100 dark:bg-black">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                title="nextui.org homepage"
              >
                <span className="text-default-600">Made by the</span>
                <Link href="/about"><p className="text-primary">CloutCraft Team</p></Link>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
