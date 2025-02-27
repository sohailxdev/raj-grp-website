import { MobileSidebar } from "./MobileSidebar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-3 shadow-md dark:bg-secondary">
      <div className="flex items-center gap-4">
        <MobileSidebar />
        <img src="/logo.png" className="h-[50px] py-1" alt="Logo" />
      </div>
      <div className="hidden sm:flex">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink href="/home" className="px-4 py-2">Home</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/leadership-team" className="px-4 py-2">Leadership Team</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/industries" className="px-4 py-2">Industries</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/brands" className="px-4 py-2">Brands</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/life-at-raj" className="px-4 py-2">Life@ Raj</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Navbar;
