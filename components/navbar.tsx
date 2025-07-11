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
      <HeroUINavbar maxWidth="xl" position="sticky" className="min-h-10 py-0">
        <NavbarContent className="basis-1/5 sm:basis-full items-center py-0" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit items-center py-0">
            <NextLink className="flex justify-start items-center gap-1" href="/">
              <img src="/brandLogo.png" alt="Doodle UI Logo" className="h-5 w-auto" />
              <p className="font-bold text-inherit"> &nbsp;Doodle UI </p>
            </NextLink>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
          <NavbarItem className="hidden sm:flex gap-2">
            <Link isExternal aria-label="Github" href={siteConfig.links.github}>
              <GithubIcon className="text-default-500" />
            </Link>
            <ThemeSwitch />
          </NavbarItem>
          <NavbarItem className="hidden md:flex">
            <Button
              isExternal
              as={Link}
              className="text-sm font-normal text-default-600 bg-default-100"
              href={siteConfig.links.sponsor}
              startContent={<HeartFilledIcon className="text-danger" />}
              variant="flat"
              size="sm"
            >
              Creator
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu> <Sidebar forceShow /> </NavbarMenu>
      </HeroUINavbar>
      <Divider />
    </>
  );
};
