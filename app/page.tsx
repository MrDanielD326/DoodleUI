"use client";

import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 py-12 md:py-20 min-h-[calc(100vh-6rem)]">
      <div className="inline-block max-w-2xl text-center justify-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className={title()}>A&nbsp;</span>
            <span className={title({ color: "violet" })}>copy-paste&nbsp;</span>
            <br />
            <span className={title()}>
              ready design components for modern web development.
            </span>
          </h1>
          <p className={subtitle({ class: "text-lg md:text-xl text-default-600 max-w-xl mx-auto" })}>
            Beautiful, fast and modern React UI library built with HeroUI and Next.js.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
            size: "lg"
          })}
          href={siteConfig.links.docs}
        >
          Get Started
        </Link>
        <Link
          isExternal
          className={buttonStyles({
            variant: "bordered",
            radius: "full",
            size: "lg"
          })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-default-500">
          Built with ❤️ using Next.js, HeroUI, and Tailwind CSS
        </p>
      </div>
    </section>
  );
}
