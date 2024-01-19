const Navbar = () => {
 return (
  <div className="navbar fixed z-30 bg-yellow-400 text-[#5e2807ce] px-12 drop-shadow-2xl">
   <div className="navbar-start">
    <div className="dropdown">
     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      <svg
       xmlns="http://www.w3.org/2000/svg"
       className="h-5 w-5"
       fill="none"
       viewBox="0 0 24 24"
       stroke="currentColor"
      >
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h8m-8 6h16"
       />
      </svg>
     </div>
     <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-yellow-300 text-neutral-700 rounded-box w-52"
     >
      <li>
       <a>Home</a>
      </li>
      <li>
       <a>Product</a>
      </li>
      <li>
       <a>Contact</a>
      </li>
     </ul>
    </div>
    <a className="btn btn-ghost text-2xl font-bold">Pisang Krenyes</a>
   </div>
   <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal text-lg font-semibold px-1">
     <li>
      <a>Home</a>
     </li>
     <li>
      <a href="">Product</a>
     </li>
     <li>
      <a>Contact</a>
     </li>
    </ul>
   </div>
   <div className="navbar-end">
    <a className="hidden btn btn-outline border-gray-800 hover:bg-yellow-500 text-gray-800">
     Button
    </a>
   </div>
  </div>
 );
};

export default Navbar;
