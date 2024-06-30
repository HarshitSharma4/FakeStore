import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="flex justify-between items-center relative border-b-4 border-gray-400  my-6">
      <Link to={'/'} className="w-full px-9 text-4xl font-extrabold text-zinc-900 ">
        Fake Shop
      </Link>

      <Link to="/AddToCard" className="mr-12">
        <MdShoppingCart className="text-5xl text-blue-950" />
      </Link>
    </div>
  );
};

export default NavBar;
