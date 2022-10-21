import React from 'react'
import {
	AiFillTwitterCircle,
	AiFillLinkedin,
	AiFillYoutube,
} from 'react-icons/ai'
import deved from '../assets/dev-ed-wave.png'
import { HiArrowNarrowRight } from 'react-icons/hi'

function Home() {
	return (
		<div name='home' className='w-full h-screen py-10 bg-[#0a192f]'>
			<div className='max-w-[1000px] mx-auto px-8  flex flex-col justify-center h-full'>
				<div className='grid gap-4 lg:grid-flow-col lg:auto-cols-[1fr]'>
					<div>
						<div className='text-center p-10 pt-2 pb-5'>
							<h2 className='text-5xl py-2 text-gray-300  font-medium md:text-6xl'>
								Orest Diduh
							</h2>
							<h3 className='text-2xl py-2 text-[#ccd6f6] md:text-3xl'>
								Developer and designer
							</h3>
							<p className='text-md py-2 leading-8 text-[#ccd6f6]  max-w-xl mx-auto md:text-xl'>
								Freelancer providing services for programming and design content
								needs. Join me down below and let's get cracking!
							</p>
						</div>
						<div className='flex justify-center'>
							<button className='text-white group border-2 px-6 py-3 my-5 flex items-center hover:bg-pink-600 hover:border-white'>
								View Work
								<span className='group-hover:rotate-90 duration-300'>
									<HiArrowNarrowRight className='ml-3 ' />
								</span>
							</button>
						</div>
						<div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
							<AiFillLinkedin />
							<AiFillTwitterCircle />
							<AiFillYoutube />
						</div>
					</div>
					<div className='mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80  overflow-hidden  md:h-96 md:w-96'>
						<img src={deved} layout='fill' objectFit='cover' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
