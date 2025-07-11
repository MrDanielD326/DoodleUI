import { Navbar as HeroUINavbar, NavbarContent, NavbarMenu, NavbarMenuToggle, NavbarBrand, NavbarItem } from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, HeartFilledIcon } from "@/components/icons";
import Sidebar from "./sidebar";
import { Divider } from "@heroui/react";

export const Navbar = () => {
  return (
    <>
      <HeroUINavbar
        maxWidth="xl"
        position="sticky"
        className="min-h-0 py-0 bg-background/80 backdrop-blur-sm border-b border-divider"
      >
        <NavbarContent className="basis-1/5 sm:basis-full items-center" justify="start">
          <NavbarBrand as="li" className="gap-1 max-w-fit">
            <NextLink className="flex justify-start items-center gap-1" href="/">
              <img src="/brandLogo.png" alt="Doodle UI Logo" className="h-4 w-auto" />
              <p className="font-bold text-inherit text-sm"> &nbsp; Doodle UI </p>
            </NextLink>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
          <NavbarItem className="hidden sm:flex gap-2">
            <Link
              isExternal
              aria-label="Github"
              href={siteConfig.links.github}
              className="p-2 rounded-lg hover:bg-default-100 transition-colors"
            >
              <GithubIcon className="text-default-500" />
            </Link>
            <ThemeSwitch />
          </NavbarItem>
          <NavbarItem className="hidden md:flex">
            <Button
              isExternal
              as={Link}
              className="text-sm font-medium text-default-600 bg-default-100 hover:bg-default-200"
              href={siteConfig.links.sponsor}
              // startContent={<HeartFilledIcon className="text-danger" />}
              variant="flat"
              size="sm"
            >
              Creator
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          <div className="flex items-center gap-2">
            <Link
              isExternal
              aria-label="Github"
              href={siteConfig.links.github}
              className="p-2 rounded-lg hover:bg-default-100 transition-colors"
            >
              <GithubIcon className="text-default-500" />
            </Link>
            <ThemeSwitch />
            <NavbarMenuToggle className="p-2 rounded-lg hover:bg-default-100 transition-colors" />
          </div>
        </NavbarContent>

        <NavbarMenu className="bg-background/95 backdrop-blur-sm">
          <Sidebar forceShow />
        </NavbarMenu>
      </HeroUINavbar>
    </>
  );
};
