import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/container";
import NavBarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <nav className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-2 flex 2xl:ml-0 gap-x-2 ">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavBarActions />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
