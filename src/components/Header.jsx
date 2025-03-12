import React from "react";

export default function Header() {
  return (
    <>
      <header className="py-2 bg-[#f2f2f2] shadow relative z-99">
        <nav className="md:flex md:items-center md:justify-between px-8">
          <div className="logo md:flex md:items-center md:justify-between gap-12">
            <a href="#" className="py-3">
              <img src="" alt="LOGO" />
            </a>

            <div className="header-menu-filter text-[#009f7f]">
              <button
                className="header-menu-button cursor-pointer md:flex md:items-center h-11 px-4 text-sm xl:min-w-[150px] xl:border border-gray-300 bg-white rounded"
                type="button"
              >
                <span className="flex items-center h-5 w-5 justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20.347" height="24.101" viewBox="0 0 20.347 24.101" fill="currentColor" className="max-h-full max-w-full"><g id="Grocery" transform="translate(-39.481 0.052)"><path id="Path_17386" data-name="Path 17386" d="M349.261,399.988a.469.469,0,1,1,.461-.385A.473.473,0,0,1,349.261,399.988Z" transform="translate(-294.289 -380.346)" fill="currentColor" stroke="currentColor" stroke-width="0.1"></path><path id="Path_17387" data-name="Path 17387" d="M58.743,8.638A6.2,6.2,0,0,0,55.4,6.3a6.662,6.662,0,0,0-3.058.055h0l-.034.008-.091.02c-.074.017-.188.045-.31.076-.16.041-.323.078-.485.108q0-.182-.014-.374a6.162,6.162,0,0,1,1.87-3.956A6.643,6.643,0,0,1,55.212.9.469.469,0,0,0,54.87.032a7.448,7.448,0,0,0-2.223,1.509,7.229,7.229,0,0,0-1.659,2.437,4.837,4.837,0,0,0-1.119-1.837C47.744.019,43.762.68,43.527.721h0a.457.457,0,0,0-.367.314.6.6,0,0,0-.017.066c-.027.151-.573,3.346.8,5.557a7.353,7.353,0,0,0-3.914,6.923,11.6,11.6,0,0,0,1.142,4.581,14.2,14.2,0,0,0,2.744,4.091A5.044,5.044,0,0,0,47.309,24a6.6,6.6,0,0,0,1.88-.276A3.331,3.331,0,0,1,51,23.691l.006,0,.11.031A6.6,6.6,0,0,0,53,24a4.912,4.912,0,0,0,3.25-1.608,13.985,13.985,0,0,0,4.029-8.812A8.163,8.163,0,0,0,58.743,8.638ZM49.206,2.8a5.247,5.247,0,0,1,1.256,3.409c-.017.211-.025,1.132-.025,1.132L46.881,3.794a.469.469,0,0,0-.663.663L49.8,8.033c-1.224.066-3.343-.027-4.572-1.255C43.75,5.3,43.912,2.552,44.02,1.6c.953-.108,3.709-.27,5.185,1.2ZM55.6,21.716A4.033,4.033,0,0,1,53,23.062a5.728,5.728,0,0,1-1.609-.236l-.141-.04h0a4.269,4.269,0,0,0-2.329.04,5.728,5.728,0,0,1-1.609.236A4.172,4.172,0,0,1,44.58,21.59a13.058,13.058,0,0,1-3.612-8.009c0-3.445,1.878-5.444,3.571-6.163l.024.024a6.632,6.632,0,0,0,4.665,1.547A9.91,9.91,0,0,0,50.9,8.863c.374-.082.365-.256.388-.364V8.482a9.219,9.219,0,0,0,.107-.965.475.475,0,0,0,.083-.007c.22-.038.441-.085.658-.142.084-.022.165-.042.232-.058,1.934.674,3.846,2.849,3.846,6.269a9.857,9.857,0,0,1-.747,3.455.469.469,0,1,0,.874.339,10.789,10.789,0,0,0,.811-3.795,7.594,7.594,0,0,0-3.162-6.493,4.317,4.317,0,0,1,1.17.122c2.013.521,4.18,2.737,4.18,6.371A13.138,13.138,0,0,1,55.6,21.716Z" transform="translate(-0.5)" fill="currentColor" stroke="currentColor" stroke-width="0.1"></path></g></svg>
                </span>
                <span className="text-[#009f7f] font-semibold">Grocery</span>
                <span className=" ps-2.5 pt-1 ms-auto flex ">
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
