import React, { FC } from 'react'

import Column from '@/ui/grid/Column'
import Row from '@/ui/grid/Row'

const HomeInformation: FC = () => {
	return (
		<Row isBorder={false}>
			<Column size={3} className='flex-col border-t-2  border-black '>
				<div className='font-normal text-2xl text-white'>100K</div>
				<div className='text-white/60 text-sm'>Customers</div>
			</Column>
			<Column
				size={6}
				className='flex-col border-t-2  border-black '
				isBorder={false}
			>
				<div className='py-10'>
					<div className='font-normal  text-white'>New collections</div>
					<div className='text-white/60 text-sm'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
						necessitatibus in nobis fuga. Sunt, impedit ullam? Explicabo enim
						vero neque laboriosam
					</div>
				</div>
			</Column>
		</Row>
	)
}

export default HomeInformation
