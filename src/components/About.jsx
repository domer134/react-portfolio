import React from 'react'
import { BiArrowToBottom } from 'react-icons/bi'

function About() {
	return (
		<div className='w-full h-screen bg-[#0a192f]'>
			<div
				name='about'
				className='max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-300'
			>
				<div className='text-left'>
					<h4 className='text-5xl  inline border-b-4 font-bold border-pink-600 md:text-6xl'>
						About me
					</h4>
					<p className='py-4'>// My introduction</p>
				</div>
				<div className='grid gap-4 lg:grid-flow-col lg:auto-cols-[1fr]'>
					<p className='pt-10 leading-6 text-center flex mx-auto max-w-xl lg:text-left'>
						Freelancer providing services for programming and design content
						needs. Join me down below and let's get cracking!Freelancer
						providing services for programming.
					</p>
					<div className=''>
						<div className='my-10 flex justify-center text-center'>
							<div className='px-5 '>
								<span className='text-pink-600 text-3xl'>08+</span>
								<span className='  '>Years experience</span>
							</div>
							<div className='px-5 '>
								<span className='text-pink-600 text-3xl'>05+</span>
								<span className=''>Completed projects</span>
							</div>
							<div className='px-5'>
								<span className='text-pink-600 text-3xl'>02+</span>
								<span className=''>Companies worked</span>
							</div>
						</div>
						<div className='flex justify-left pl-5 '>
							<button
								className='text-white mx-auto border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-white'
								href=''
								download=''
							>
								Download <BiArrowToBottom className='ml-3 ' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
