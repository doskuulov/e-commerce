import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Column from '@/ui/grid/Column'

const HeaderLogo: FC = () => {
	return (
		<Column size={2}>
			<Link href='/' className='flex items-center mx-auto '>
				<Image
					src='/images/logo.svg'
					width={100}
					height={100}
					alt='Xmas shop'
					className='-mr-3'
				/>
				<span className=''>
					<span className='text-white block font-light tracking-[0.13em]'>
						LORIAN
					</span>
					<span className=' text-dark-gray tracking-[0.4em] block font-extralight'>
						STORE
					</span>
				</span>
			</Link>
		</Column>
	)
}

export default HeaderLogo
