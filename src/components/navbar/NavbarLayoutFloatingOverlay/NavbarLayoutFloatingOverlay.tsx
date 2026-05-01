"use client";

import ExpandingMenu from "../expandingMenu/ExpandingMenu";
import Button from "../../button/Button";
import ButtonTextUnderline from "../../button/ButtonTextUnderline";
import Logo from "../Logo";
import { useScrollDetection } from "./useScrollDetection";
import { useMenuAnimation } from "./useMenuAnimation";
import type { NavItem } from "@/types/navigation";
import { cls } from "@/lib/utils";
import { getButtonProps } from "@/lib/buttonUtils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { ButtonConfig } from "@/types/button";

interface NavbarLayoutFloatingOverlayProps {
  navItems: NavItem[];
  logoSrc?: string;
  logoAlt?: string;
  className?: string;
  brandName?: string;
  button?: ButtonConfig;
  logoClassName?: string;
  logoImageClassName?: string;
  buttonClassName?: string;
  buttonTextClassName?: string;
}

const NavbarLayoutFloatingOverlay = ({
  navItems,
  logoSrc,
  logoAlt = "",
  className = "",
  brandName = "Webild",
  button,
  logoClassName = "",
  logoImageClassName = "",
  buttonClassName = "",
  buttonTextClassName = "",
}: NavbarLayoutFloatingOverlayProps) => {
  const theme = useTheme();
  const isScrolled = useScrollDetection(50);
  const { menuOpen, buttonZIndex, handleMenuToggle } = useMenuAnimation();

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="fixed z-[100] top-6 w-full transition-all duration-500 ease-in-out"
    >
      <div
        className={cls(
          "w-content-width-expanded mx-auto",
          "flex items-center justify-between",
          "card rounded-theme backdrop-blur-xs",
          "px-6",
          className
        )}
        style={{
          height: "calc(var(--vw-0_75) + var(--vw-0_75) + var(--height-10))",
        }}
      >
        {/* Logo */}
        <Logo
          brandName={brandName}
          logoSrc={logoSrc}
          logoAlt={logoAlt}
          className={logoClassName}
          imageClassName={logoImageClassName}
          href="/"
        />

        {/* Desktop nav links — centered, hidden on mobile */}
        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {navItems.map((item) => (
            <ButtonTextUnderline
              key={item.id}
              text={item.name}
              href={item.href ?? item.id}
              className="!text-base font-medium tracking-wide"
            />
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Desktop CTA button — hidden on mobile */}
          {button && (
            <div className="hidden lg:flex">
              <Button
                {...getButtonProps(
                  button,
                  0,
                  theme.defaultButtonVariant,
                  cls(buttonZIndex, buttonClassName),
                  buttonTextClassName
                )}
              />
            </div>
          )}

          {/* Mobile hamburger — hidden on desktop */}
          <div
            className="lg:hidden relative"
            style={{ paddingRight: "calc(var(--height-9) + var(--vw-0_75))" }}
          >
            <ExpandingMenu
              isOpen={menuOpen}
              onToggle={handleMenuToggle}
              navItems={navItems}
              isScrolled={isScrolled}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLayoutFloatingOverlay;
