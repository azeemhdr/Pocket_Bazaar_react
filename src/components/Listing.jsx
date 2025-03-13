import React from "react";
import productImg from "../assets/images/Apples.jpg";
import blueberries from "../assets/images/blueberries.jpg";

export default function Listing() {
  return (
    <>
      <div className="flex ">
        <aside className="product-filter h-full lg:sticky lg:top-22 xl:w-72">
          <div className="px-5">
            <ul className="text-xs xl:py-8 px-5">
				<li className="rounded-md py-1">
					<button className="flex w-full items-center py-2 font-semibold text-sm">
						<span className="h-5 w-5 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20.347" height="24.101" viewBox="0 0 20.347 24.101" fill="currentColor" className="max-h-full max-w-full"><g id="Grocery" transform="translate(-39.481 0.052)"><path id="Path_17386" data-name="Path 17386" d="M349.261,399.988a.469.469,0,1,1,.461-.385A.473.473,0,0,1,349.261,399.988Z" transform="translate(-294.289 -380.346)" fill="currentColor" stroke="currentColor" stroke-width="0.1"></path><path id="Path_17387" data-name="Path 17387" d="M58.743,8.638A6.2,6.2,0,0,0,55.4,6.3a6.662,6.662,0,0,0-3.058.055h0l-.034.008-.091.02c-.074.017-.188.045-.31.076-.16.041-.323.078-.485.108q0-.182-.014-.374a6.162,6.162,0,0,1,1.87-3.956A6.643,6.643,0,0,1,55.212.9.469.469,0,0,0,54.87.032a7.448,7.448,0,0,0-2.223,1.509,7.229,7.229,0,0,0-1.659,2.437,4.837,4.837,0,0,0-1.119-1.837C47.744.019,43.762.68,43.527.721h0a.457.457,0,0,0-.367.314.6.6,0,0,0-.017.066c-.027.151-.573,3.346.8,5.557a7.353,7.353,0,0,0-3.914,6.923,11.6,11.6,0,0,0,1.142,4.581,14.2,14.2,0,0,0,2.744,4.091A5.044,5.044,0,0,0,47.309,24a6.6,6.6,0,0,0,1.88-.276A3.331,3.331,0,0,1,51,23.691l.006,0,.11.031A6.6,6.6,0,0,0,53,24a4.912,4.912,0,0,0,3.25-1.608,13.985,13.985,0,0,0,4.029-8.812A8.163,8.163,0,0,0,58.743,8.638ZM49.206,2.8a5.247,5.247,0,0,1,1.256,3.409c-.017.211-.025,1.132-.025,1.132L46.881,3.794a.469.469,0,0,0-.663.663L49.8,8.033c-1.224.066-3.343-.027-4.572-1.255C43.75,5.3,43.912,2.552,44.02,1.6c.953-.108,3.709-.27,5.185,1.2ZM55.6,21.716A4.033,4.033,0,0,1,53,23.062a5.728,5.728,0,0,1-1.609-.236l-.141-.04h0a4.269,4.269,0,0,0-2.329.04,5.728,5.728,0,0,1-1.609.236A4.172,4.172,0,0,1,44.58,21.59a13.058,13.058,0,0,1-3.612-8.009c0-3.445,1.878-5.444,3.571-6.163l.024.024a6.632,6.632,0,0,0,4.665,1.547A9.91,9.91,0,0,0,50.9,8.863c.374-.082.365-.256.388-.364V8.482a9.219,9.219,0,0,0,.107-.965.475.475,0,0,0,.083-.007c.22-.038.441-.085.658-.142.084-.022.165-.042.232-.058,1.934.674,3.846,2.849,3.846,6.269a9.857,9.857,0,0,1-.747,3.455.469.469,0,1,0,.874.339,10.789,10.789,0,0,0,.811-3.795,7.594,7.594,0,0,0-3.162-6.493,4.317,4.317,0,0,1,1.17.122c2.013.521,4.18,2.737,4.18,6.371A13.138,13.138,0,0,1,55.6,21.716Z" transform="translate(-0.5)" fill="currentColor" stroke="currentColor" stroke-width="0.1"></path></g></svg>

						</span>
						<span className="text-start">Fruits & Vegetables</span>
						<span className="me-4 ms-auto">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-3 w-3"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
						</span>
					</button>
				</li>
				<li className="rounded-md py-1">
					<button className="flex w-full items-center py-2 font-semibold text-sm">
						<span className="h-5 w-5 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24.003" height="24" viewBox="0 0 24.003 24" fill="currentColor" className="h-full w-full"><g id="Meat_Fish" data-name="Meat &amp; Fish" transform="translate(-100.274 -126.786)"><path id="Path_17433" data-name="Path 17433" d="M152.165,147.238c-.186,0-.366-.005-.542-.016a.465.465,0,0,1-.27-.108c-.525-.442-1.049-.911-1.546-1.38-.508-.508-.952-1.036-1.383-1.546a.545.545,0,0,1-.124-.289c-.234-3.811,2.129-10.143,4.769-12.784a9.528,9.528,0,0,1,1.8-1.453.463.463,0,1,1,.5.781,8.639,8.639,0,0,0-1.629,1.318c-2.42,2.42-4.661,8.375-4.515,11.929.4.474.8.944,1.236,1.378.439.414.907.835,1.379,1.236,3.5.153,9.508-2.1,11.919-4.506a8.691,8.691,0,0,0,1.328-1.638.463.463,0,1,1,.781.5,9.625,9.625,0,0,1-1.462,1.8C161.888,144.973,156.01,147.238,152.165,147.238Z" transform="translate(-42.009 -2.453)" fill="currentColor"></path><path id="Path_17434" data-name="Path 17434" d="M105.065,249.978a2.457,2.457,0,0,1-1.745-.729,2.547,2.547,0,0,1-.707-1.61,2.454,2.454,0,0,1-2.338-2.483,2.479,2.479,0,0,1,3.513-2.21l2.637-2.663a.464.464,0,0,1,.659.653l-2.889,2.916a.465.465,0,0,1-.592.055,1.547,1.547,0,0,0-2.4,1.257,1.544,1.544,0,0,0,.457,1.114,1.572,1.572,0,0,0,1.365.416.463.463,0,0,1,.535.536,1.592,1.592,0,0,0,.425,1.374,1.54,1.54,0,0,0,2.355-1.963.464.464,0,0,1,.062-.583l2.916-2.888a.463.463,0,1,1,.652.658l-2.668,2.644a2.487,2.487,0,0,1-.491,2.778A2.454,2.454,0,0,1,105.065,249.978Z" transform="translate(0 -99.192)" fill="currentColor"></path><path id="Path_17435" data-name="Path 17435" d="M206.374,138.769a5.236,5.236,0,0,1-2-.475A14.609,14.609,0,0,1,200,135.177c-2.193-2.193-3.6-4.707-3.593-6.4a1.862,1.862,0,0,1,1.989-1.987h.018c1.7,0,4.2,1.408,6.385,3.593l0,0c2.629,2.655,4.592,6.308,3.05,7.848A2.011,2.011,0,0,1,206.374,138.769Zm-7.96-11.056H198.4a.948.948,0,0,0-1.067,1.066c-.008,1.439,1.327,3.747,3.322,5.743a13.669,13.669,0,0,0,4.084,2.92c1.138.483,2.054.532,2.455.133.814-.814-.239-3.7-3.054-6.541C202.153,129.045,199.854,127.713,198.414,127.713Z" transform="translate(-84.117 0)" fill="currentColor"></path><path id="Path_17436" data-name="Path 17436" d="M216.843,148.223h0c-1.039,0-2.9-1.214-4.749-3.084-1.538-1.518-3.09-3.585-3.079-4.77a.963.963,0,0,1,.283-.715.95.95,0,0,1,.7-.266H210c1.187,0,3.243,1.544,4.76,3.081,1.868,1.845,3.079,3.707,3.082,4.746a.944.944,0,0,1-1,1.008Zm-6.811-7.916a.268.268,0,0,0-.1.017c-.133.33.7,2.069,2.815,4.161,2.27,2.3,3.912,2.933,4.181,2.8.115-.253-.521-1.895-2.816-4.159l0,0C212.174,141.163,210.54,140.306,210.032,140.306Z" transform="translate(-95.146 -11.027)" fill="currentColor"></path><path id="Path_17437" data-name="Path 17437" d="M181.251,168.174l-.83-.41a5.223,5.223,0,0,1,.391-.689.464.464,0,0,1,.755.539A4.148,4.148,0,0,0,181.251,168.174Z" transform="translate(-70.129 -35.084)" fill="currentColor"></path><path id="Path_17438" data-name="Path 17438" d="M164.789,189.173a.478.478,0,0,1-.095-.01.463.463,0,0,1-.359-.548,18.285,18.285,0,0,1,1.23-3.8.464.464,0,0,1,.845.381,17.358,17.358,0,0,0-1.168,3.611A.463.463,0,0,1,164.789,189.173Z" transform="translate(-56.046 -50.535)" fill="currentColor"></path><path id="Path_17439" data-name="Path 17439" d="M239.96,170.8a.463.463,0,0,1-.328-.136l-.382-.382a.463.463,0,0,1,.655-.655l.382.382a.464.464,0,0,1-.328.791Z" transform="translate(-121.487 -37.372)" fill="currentColor"></path></g></svg>

						</span>
						<span className="text-start">Meat & Fish</span>
						<span className="me-4 ms-auto">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-3 w-3"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
						</span>
					</button>
				</li>
				<li className="rounded-md py-1">
					<button className="flex w-full items-center py-2 font-semibold text-sm">
						<span className="h-5 w-5 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25.143" height="22" viewBox="0 0 25.143 22" fill="currentColor" className="h-full w-full"><g id="Snacks" transform="translate(0 -32.001)"><g id="Group_5714" data-name="Group 5714" transform="translate(3.142 40.381)"><g id="Group_5713" data-name="Group 5713" transform="translate(0 0)"><path id="Path_17398" data-name="Path 17398" d="M80.227,202.654H65.559a1.573,1.573,0,0,0-1.571,1.571v1.048a9.928,9.928,0,0,0,5.388,8.847.524.524,0,1,0,.481-.931,8.883,8.883,0,0,1-4.821-7.916v-1.048a.524.524,0,0,1,.524-.524H80.227a.524.524,0,0,1,.524.524v1.048a8.879,8.879,0,0,1-4.822,7.915.524.524,0,0,0,.241.99.517.517,0,0,0,.24-.059,9.923,9.923,0,0,0,5.389-8.846v-1.048A1.573,1.573,0,0,0,80.227,202.654Z" transform="translate(-63.988 -202.654)" fill="currentColor"></path></g></g><g id="Group_5716" data-name="Group 5716" transform="translate(0 50.857)"><g id="Group_5715" data-name="Group 5715" transform="translate(0 0)"><path id="Path_17399" data-name="Path 17399" d="M24.056,416.29a.525.525,0,0,0-.484-.324H.524a.524.524,0,0,0-.371.895l1.174,1.175a3.645,3.645,0,0,0,2.593,1.074H20.174a3.651,3.651,0,0,0,2.6-1.074l1.174-1.175A.523.523,0,0,0,24.056,416.29ZM22.027,417.3a2.6,2.6,0,0,1-1.852.767H3.921a2.6,2.6,0,0,1-1.852-.767l-.281-.281h20.52Z" transform="translate(0 -415.966)" fill="currentColor"></path></g></g><g id="Group_5718" data-name="Group 5718" transform="translate(17.438 42.474)"><g id="Group_5717" data-name="Group 5717"><path id="Path_17400" data-name="Path 17400" d="M361.785,245.653c-1.411-.907-3.666.078-3.918.192a.524.524,0,0,0,.435.954c.505-.229,2.125-.773,2.917-.263a1.488,1.488,0,0,1,.532,1.358c0,2.1-4.23,3.365-5.864,3.677l-.371.073a.523.523,0,0,0,.1,1.037.486.486,0,0,0,.1-.01l.368-.072c.274-.052,6.712-1.315,6.712-4.705A2.471,2.471,0,0,0,361.785,245.653Z" transform="translate(-355.093 -245.272)" fill="currentColor"></path></g></g><g id="Group_5720" data-name="Group 5720" transform="translate(14.667 32.001)"><g id="Group_5719" data-name="Group 5719" transform="translate(0 0)"><path id="Path_17401" data-name="Path 17401" d="M300.125,35.994a3.139,3.139,0,0,0,0-3.8.524.524,0,1,0-.818.655,2.113,2.113,0,0,1,0,2.488,3.135,3.135,0,0,0,0,3.8.524.524,0,1,0,.818-.655A2.11,2.11,0,0,1,300.125,35.994Z" transform="translate(-298.666 -32.001)" fill="currentColor"></path></g></g><g id="Group_5722" data-name="Group 5722" transform="translate(11.52 32.001)"><g id="Group_5721" data-name="Group 5721" transform="translate(0 0)"><path id="Path_17402" data-name="Path 17402" d="M236.055,36a3.135,3.135,0,0,0,0-3.8.524.524,0,1,0-.818.655,2.11,2.11,0,0,1,0,2.488,3.139,3.139,0,0,0,0,3.8.524.524,0,1,0,.818-.655A2.113,2.113,0,0,1,236.055,36Z" transform="translate(-234.597 -32.009)" fill="currentColor"></path></g></g><g id="Group_5724" data-name="Group 5724" transform="translate(8.381 32.002)"><g id="Group_5723" data-name="Group 5723" transform="translate(0 0)"><path id="Path_17403" data-name="Path 17403" d="M172.125,36.015a3.139,3.139,0,0,0,0-3.8.524.524,0,0,0-.818.654,2.113,2.113,0,0,1,0,2.488,3.135,3.135,0,0,0,0,3.8.524.524,0,1,0,.818-.654A2.11,2.11,0,0,1,172.125,36.015Z" transform="translate(-170.666 -32.022)" fill="currentColor"></path></g></g></g></svg>

						</span>
						<span className="text-start">Snacks</span>
						<span className="me-4 ms-auto">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-3 w-3"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
						</span>
					</button>
				</li>
				<li className="rounded-md py-1">
					<button className="flex w-full items-center py-2 font-semibold text-sm">
						<span className="h-5 w-5 flex items-center justify-center mr-4">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="60" height="60" fill="currentColor" className="h-full w-full"><g id="Outline"><path d="M83.242,192.5,76.758,177.87c-18.5,8.2-28.133,17.987-28.7,29.087L16.142,374.5a8,8,0,0,0,3.812,8.4C47.161,398.85,82.72,411.28,125.642,419.845,165.487,427.8,210.564,432,256,432s90.513-4.2,130.358-12.155c42.922-8.565,78.481-21,105.688-36.943a8,8,0,0,0,3.812-8.4l-10.667-56L469.475,321.5l3.263,17.136-10.656,5.557a270.53,270.53,0,0,1-48.076,19.552C369.917,376.806,313.8,384,256,384c-59.3,0-116.534-7.531-161.151-21.206l-4.69,15.3C136.255,392.219,195.151,400,256,400c59.3,0,117.028-7.428,162.551-20.917a286.6,286.6,0,0,0,50.929-20.706l6.385-3.329,3.2,16.819c-107.232,58.747-338.9,58.747-446.137,0L60.214,228.632q11.793,9.07,34.867,16.276C134.037,257.041,192.689,264,256,264s121.963-6.959,160.92-19.092q23.056-7.182,34.867-16.276L466.428,305.5l15.717-2.994-18.187-95.477c-.88-18.8-27.229-33.514-78.388-43.754l-3.14,15.688C434.3,189.342,448,202.5,448,208c0,4.68-8.951,12.184-28.716,19.253a48.237,48.237,0,0,0-35.856-26.672,48.122,48.122,0,0,0-40-40.008,48.147,48.147,0,0,0-13.489-26.511,47.646,47.646,0,0,0-26.5-13.493,48.015,48.015,0,0,0-94.864,0,47.647,47.647,0,0,0-26.506,13.494,48.167,48.167,0,0,0-12.7,22.608c-29.7,3.39-55.8,8.518-75.8,14.905l4.87,15.241a316.9,316.9,0,0,1,40.8-9.67,47.54,47.54,0,0,0-10.67,23.422,47.647,47.647,0,0,0-26.506,13.494,48.175,48.175,0,0,0-9.33,13.2C72.955,220.188,64,212.681,64,208,64,204.629,69.055,198.787,83.242,192.5Zm30.134,32.88A31.791,31.791,0,0,1,136,216a8,8,0,0,0,8-8,32.013,32.013,0,0,1,32-32,8,8,0,0,0,8-8c0-1.055.055-2.15.16-3.228A32.023,32.023,0,0,1,216,136a8,8,0,0,0,8-8,32,32,0,0,1,64,0,8,8,0,0,0,8,8,32.024,32.024,0,0,1,31.838,28.747c.107,1.1.162,2.2.162,3.253a8,8,0,0,0,8,8,32.036,32.036,0,0,1,32,32,8,8,0,0,0,8,8,32.12,32.12,0,0,1,27.754,16.073C366.446,242.232,313.315,248,256,248s-110.44-5.768-147.748-15.925A32.2,32.2,0,0,1,113.376,225.377ZM248,176v16a24.027,24.027,0,0,0-24,24H208A40.045,40.045,0,0,1,248,176Zm24-24H256V136h16Zm32,64H288V200h16ZM168,200h16v16H168ZM74.3,294.646l15.726,2.948L79.437,354.081,63.71,351.134Zm18.294-11.175-15.742-2.862,3.28-18.04,15.742,2.862Z" fill="currentColor"></path></g></svg>

						</span>
						<span className="text-start">Pet Care</span>
						<span className="me-4 ms-auto">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-3 w-3"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
						</span>
					</button>
				</li>
				<li className="rounded-md py-1">
					<button className="flex w-full items-center py-2 font-semibold text-sm">
						<span className="h-5 w-5 flex items-center justify-center mr-4">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20.59" height="25.05" viewBox="0 0 20.59 25.05" fill="currentColor" className="h-full w-full"><g id="home_cleaner" data-name="home cleaner" transform="translate(-2142.193 -787.635)"><path id="Path_17440" data-name="Path 17440" d="M2188.815,831.346a2.538,2.538,0,0,1,2.6-1.81v-1.584a27.676,27.676,0,0,0-3.734-.111,3.962,3.962,0,0,0-3.169,2.034c-.33.684,2.49-.339,2.716,1.471" transform="translate(-39.669 -37.554)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.9"></path><path id="Path_17441" data-name="Path 17441" d="M2289.466,862.334a10.742,10.742,0,0,0,1.89,3.765c.082.119-.025.28-.137.207a6.8,6.8,0,0,1-2.94-3.5" transform="translate(-138.167 -70.32)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.9"></path><path id="Path_17442" data-name="Path 17442" d="M2226.052,898.788a2.93,2.93,0,0,0,1.4.214,3.341,3.341,0,0,0,1.319-.214v-1.436a.17.17,0,0,0-.169-.17h-2.377a.17.17,0,0,0-.169.17Z" transform="translate(-79.113 -103.39)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.9"></path><path id="Path_17443" data-name="Path 17443" d="M2156.93,1189.207" transform="translate(-13.516 -380.522)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.9"></path><path id="Path_17444" data-name="Path 17444" d="M2320.353,830.622h1.328v1.584h-1.328" transform="translate(-168.605 -40.225)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.9"></path><path id="Path_17445" data-name="Path 17445" d="M2153.421,936.6a15.113,15.113,0,0,1-1.134,4.707.744.744,0,0,1-.68.515h-7.4a.751.751,0,0,1-.688-.544,12.078,12.078,0,0,1,2.065-12.242,3.527,3.527,0,0,0,.679-3.055,1.052,1.052,0,0,1,.675-1.195" transform="translate(0 -129.588)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.9"></path><path id="Path_17446" data-name="Path 17446" d="M2278.913,926.025c1.471.905-.25,1.974.006,2.2.847.757-.006,1.8-.006,1.8a1.4,1.4,0,0,1,.369,1.741,8.765,8.765,0,0,1,2.391,2.01" transform="translate(-129.259 -130.762)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.9"></path><line id="Line_15" data-name="Line 15" y1="1.511" x2="3.16" transform="translate(2154.628 788.235)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.9"></line><line id="Line_16" data-name="Line 16" x2="3.16" y2="1.511" transform="translate(2154.628 792.632)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.9"></line><line id="Line_17" data-name="Line 17" x2="4.259" transform="translate(2154.628 791.189)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.9"></line><circle id="Ellipse_9" data-name="Ellipse 9" cx="2.047" cy="2.047" r="2.047" transform="translate(2158.239 799.709)" stroke-width="0.9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="none"></circle><path id="Path_17447" data-name="Path 17447" d="M2383.738,957.387a1.489,1.489,0,0,0,2.978,0,1.489,1.489,0,0,0-2.978,0Z" transform="translate(-228.757 -159.112)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.9"></path><circle id="Ellipse_10" data-name="Ellipse 10" cx="2.764" cy="2.764" r="2.764" transform="translate(2152.212 802.109)" stroke-width="0.9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="none"></circle></g></svg>

						</span>
						<span className="text-start">Home & Cleaning</span>
						<span className="me-4 ms-auto">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-3 w-3"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
						</span>
					</button>
				</li>				
			</ul>
          </div>
        </aside>
        <div className="product-listing xl:p-8 px-4 w-full bg-[#f3f4f6]">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3">
            <article className="product-card h-full bg-white shadow border rounded border-gray-300">
              <div className="relative">
                <span className="sr-only">Product Image</span>
                <img src={productImg} alt="apple" loading="lazy" className="" />
              </div>
              <header className="p-3 md:px-5 md:py-6">
                <h3 className="mb-2 text-sm font-semibold truncate text-heading">
                  Apples
                </h3>
                <p className="text-xs text-gray-500">1lb</p>
                <div className=" mt-7 md:mt-8 flex items-center justify-between min-h-6">
                  <div className="">
                    <del className="block text-xs text-gray-500 italic text-opactiy-75">
                      &#8377; 200
                    </del>
                    <span className="text-sm font-semibold text-[#009f7f] md:text-base">
                      &#8377; 160
                    </span>
                  </div>
                  <div className="text-[#009f7f] ">
                    <button className="flex items-center rounded-full px-5 py-2 justify-center border border-gray-300 cursor-pointer hover:bg-[#009f7f] hover:text-[#fafafa] transition duration-300 ease-in-out">
                      <svg
                        className="h-4 w-4 ltr:mr-2.5 rtl:ml-2.5"
                        viewBox="0 0 14.4 12"
                      >
                        <g transform="translate(-288 -413.89)">
                          <path
                            fill="currentColor"
                            d="M298.7,418.289l-2.906-4.148a.835.835,0,0,0-.528-.251.607.607,0,0,0-.529.251l-2.905,4.148h-3.17a.609.609,0,0,0-.661.625v.191l1.651,5.84a1.336,1.336,0,0,0,1.255.945h8.588a1.261,1.261,0,0,0,1.254-.945l1.651-5.84v-.191a.609.609,0,0,0-.661-.625Zm-5.419,0,1.984-2.767,1.98,2.767Zm1.984,5.024a1.258,1.258,0,1,1,1.319-1.258,1.3,1.3,0,0,1-1.319,1.258Zm0,0"
                          ></path>
                        </g>
                      </svg>
                      <span>Cart</span>
                    </button>
                  </div>
                </div>
              </header>
            </article>
            <article className="product-card h-full bg-white shadow border rounded border-gray-300">
              <div className="relative">
                <span className="sr-only">Product Image</span>
                <img
                  src={blueberries}
                  alt="blueberries"
                  loading="lazy"
                  className=""
                />
              </div>
              <header className="p-3 md:px-5 md:py-6">
                <h3 className="mb-2 text-sm font-semibold truncate text-heading">
                  Bluebarries
                </h3>
                <p className="text-xs text-gray-500">1lb</p>
                <div className=" mt-7 md:mt-8 flex items-center justify-between min-h-6">
                  <div className="">
                    <del className="block text-xs text-gray-500 italic text-opactiy-75">
                      &#8377; 400
                    </del>
                    <span className="text-sm font-semibold text-[#009f7f] md:text-base">
                      &#8377; 360
                    </span>
                  </div>
                  <div className="text-[#009f7f] ">
                    <button className="flex items-center rounded-full px-5 py-2 justify-center border border-gray-300 cursor-pointer hover:bg-[#009f7f] hover:text-[#fafafa] transition duration-300 ease-in-out">
                      <svg
                        className="h-4 w-4 ltr:mr-2.5 rtl:ml-2.5"
                        viewBox="0 0 14.4 12"
                      >
                        <g transform="translate(-288 -413.89)">
                          <path
                            fill="currentColor"
                            d="M298.7,418.289l-2.906-4.148a.835.835,0,0,0-.528-.251.607.607,0,0,0-.529.251l-2.905,4.148h-3.17a.609.609,0,0,0-.661.625v.191l1.651,5.84a1.336,1.336,0,0,0,1.255.945h8.588a1.261,1.261,0,0,0,1.254-.945l1.651-5.84v-.191a.609.609,0,0,0-.661-.625Zm-5.419,0,1.984-2.767,1.98,2.767Zm1.984,5.024a1.258,1.258,0,1,1,1.319-1.258,1.3,1.3,0,0,1-1.319,1.258Zm0,0"
                          ></path>
                        </g>
                      </svg>
                      <span>Cart</span>
                    </button>
                  </div>
                </div>
              </header>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
