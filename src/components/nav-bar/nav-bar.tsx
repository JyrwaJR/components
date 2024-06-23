import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { SearchBar } from "./search-input";

interface NavType {
  title: string;
  url: string;
  disabled?: boolean;
}

interface Props {
  navItems: NavType[];
  onClick?: () => void;
}

export const Navbar = ({ onClick, navItems }: Props) => {
  return (
    <nav className="fixed z-50 top-0  w-full h-16">
      {/* Add your navigation content here */}
      <Card className="flex p-1 w-full rounded-sm items-center h-full justify-between ">
        <div className="flex space-x-2">
          {onClick && (
            <Button
              className="flex md:hidden"
              size={"icon"}
              variant="default"
              onClick={onClick}
            >
              <HamburgerMenuIcon />
            </Button>
          )}
          <SearchBar />
        </div>
        <div className="md:flex items-center hidden ">
          {navItems.map((item) => (
            <Button key={item.title} variant="link" disabled={item.disabled}>
              {item.title}
            </Button>
          ))}
        </div>
      </Card>
    </nav>
  );
};
