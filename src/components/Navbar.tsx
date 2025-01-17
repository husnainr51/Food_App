import Image from "next/image";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20">
      <div className="hidden md:flex gap-4 flex-1">
        <Link href={"/"}>HomePage</Link>
        <Link href={"/menu"}>Menu</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
      <div className="text-xl md:font-bold flex-1 md:text-center">
        {/* LOGO */}
        <Link href="/">Massimo</Link>
      </div>
      <div className="md:hidden">
        {/* MENU */}
        <Menu />
      </div>
      <div className="hidden md:flex gap-4 items-center flex-1 justify-end">
        {/* RIGHT LINKS */}
        <div className="md:absolute top-3 right-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src={"/phone.png"} alt="" width={20} height={20} />
          <span>123 456 78</span>
        </div>
        {!user ? (
          <Link href={"/login"}>Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
