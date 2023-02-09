import { FC } from 'react'

import { formatToCurrency } from '@/utils/format-to-currency'

const HotSale: FC = () => {
	return (
		<div className='text-white py-10 px-5'>
			<div className='text-sm'>HOT SALE</div>

			<h1 className='text-5xl font-medium'>
				A RED DRESS WILL BRIGHTEN UP YOUR EVENING
			</h1>

			<div>
				<div>
					<span>{formatToCurrency(195)}</span>
					<span className=''>{formatToCurrency(195)}</span>
				</div>
				<button className='line-through  uppercase to-white'>Buy now</button>
			</div>
		</div>
	)
}

export default HotSale
