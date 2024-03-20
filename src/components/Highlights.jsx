import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import VideoCarousel from './VideoCarousel'

const Highlights = () => {
	useGSAP(() => {
		gsap.to('#title', { opacity: 1, y: 0 })
		gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 })
	})
	return (
		<section
			className='w-screen overflow-hidden h-full common-padding bg-zinc'
			id='highlights'
		>
			<div className=''>
				<div className=''>
					<h1 className=''></h1>

					<div className=''>
						<p className='link'>
							<img src='' alt='' />
						</p>
					</div>
				</div>

				<VideoCarousel />
			</div>
		</section>
	)
}

export default Highlights
