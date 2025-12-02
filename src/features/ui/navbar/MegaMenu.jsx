// src/features/ui/navbar/MegaMenu.jsx
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu';

export default function MegaMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="px-2 py-1 hover:text-primary transition">
            Shop
          </NavigationMenuTrigger>
          <NavigationMenuContent className="w-48 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col gap-3">
              <Link
                to="/shop?category=clothing"
                className="hover:text-primary font-medium"
              >
                Clothing
              </Link>
              <Link
                to="/shop?category=electronics"
                className="hover:text-primary font-medium"
              >
                Electronics
              </Link>
              <Link
                to="/shop?category=beauty"
                className="hover:text-primary font-medium"
              >
                Beauty
              </Link>
              <Link
                to="/shop?category=home"
                className="hover:text-primary font-medium"
              >
                Home & Living
              </Link>
              <Link
                to="/shop?category=accessories"
                className="hover:text-primary font-medium"
              >
                Accessories
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
