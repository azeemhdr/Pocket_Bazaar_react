import React from "react";

export default function Header() {
  return (
    <>
      <header className="py-2 bg-[#f2f2f2] shadow">
        <nav className="md:flex md:items-center md:justify-between px-8">
          <div className="logo md:flex md:items-center md:justify-between gap-12">
            <a href="#" className="py-3">
              <img src="" alt="LOGO" />
            </a>

            <div className="header-menu-filter border border-gray-300 rounded px-4 py-2">
              <button
                className="header-menu-button cursor-pointer md:flex md:items-center"
                type="button"
              >
                <span className=""></span>
                <span className="">Grocery</span>
                <span className=" ps-2">
                  <svg width="10" height="6" viewBox="0 0 10 6">
                    <path
                      d="M128,192l5,5,5-5Z"
                      transform="translate(-128 -192)"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
		  <div className="flex items-center">
		  <ul className="md:flex align-center gap-8">
			<li><a href="#" className="text-gray-600">Shops</a></li>
			<li><a href="#" className="text-gray-600">Offers</a></li>
			<li><a href="#" className="text-gray-600">Contact</a></li>
			<li><a href="#" className="text-gray-600">Pages</a></li>
		  </ul>
		  <div className="ms-10">
			<a href="#" className="bg-[#009f7f] px-3 py-2 rounded font-semibold text-white">Join</a>
			<a href="#" className="bg-[#009f7f] px-3 py-2 rounded font-semibold ms-4 text-white">Become a Seller</a>
		  </div>
		  </div>
        </nav>
      </header>
    </>
  );
}
