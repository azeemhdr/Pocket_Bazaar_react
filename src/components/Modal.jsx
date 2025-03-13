import React, { useState,useEffect } from 'react'
import moadlImage from '../assets/images/pickbazarModal.png';

export default function Modal() {
	const [isModal,setIsModal] = useState(false);

	const openModal = ()=> {
		setIsModal(true);
	};

	const closeModal = ()=>{
		setIsModal(false);
	};

	useEffect(() => {
		const timer = setTimeout(()=> {
			openModal();
		},5000);
		// return ()=> clearTimeout(timer);
	},[]);

  return (
	<>
	{isModal && (
		<div className='fixed inset-0 bg-[#8e939a] flex items-center justify-center'>
		<div className='modal-inner bg-[#f2f2f2] rounded-xl max-w-4xl'>
			<div className='modal flex items-center relative'>
				<div className='modal-content md:p-12 w-1/2'>
					<h2 className='mb-4 text-3xl'>Get 25% Discount</h2>
					<p className='mb-10 text-lg'>Subscribe to the mailing list to receive updates on new arrivals, special offers and our promotions.</p>
					<div className='flex'>
						<form action="" className='w-full'>
							<div className='border border-gray-200 w-full flex items-center'>
								<input type="text" name='email' className='h-14 w-full outline-none text-sm border-0 bg-trasnparent py-2 ps-5 pe-3' placeholder='Write your email here'/>
								<button className='px-4 py-5 '>
								<svg xmlns="http://www.w3.org/2000/svg" width="16.045" height="16" viewBox="0 0 16.045 16" className="text-gray-500 transition-colors hover:text-[#009f7f]"><path id="send" d="M17.633,9.293,3.284,2.079a.849.849,0,0,0-1.2,1.042l2,5.371,9.138,1.523L4.086,11.538l-2,5.371a.812.812,0,0,0,1.2.962l14.349-7.214A.762.762,0,0,0,17.633,9.293Z" transform="translate(-2.009 -1.994)" fill="currentColor"></path></svg>
								</button>
							</div>
						</form>
					</div>
					<div className='mt-12 w-full'>
							<div className='flex items-center w-full'>
								<input type="checkbox" name='not_show_again' id='not_show_again' />
								<label htmlFor="not_show_again" className='text-sm text-gray-500 ms-3 cursor-pointer'>Don't show this popup again</label>
							</div>
						</div>
				</div>
				<div className='modal-img w-1/2'>
					<img src={moadlImage} alt="image" loading='lazy' className='rounded-se-xl rounded-ee-xl'/>
				</div>
				<button className='absolute top-4 z-60 right-8 bg-[#e5e7eb] p-3 rounded-full cursor-pointer' onClick={closeModal}>
					<span className='sr-only'>close</span>
				<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
				</button>
			</div>
		</div>
	</div>
	)}
		
	</>
  )
}
