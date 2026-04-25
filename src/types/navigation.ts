export interface NavItem {
    name: string;
    id: string;
    href?: string;
}

export interface NavbarProps {
    navItems: NavItem[];
    // logoSrc?: string;
    // logoAlt?: string;
    brandName?: string;
}