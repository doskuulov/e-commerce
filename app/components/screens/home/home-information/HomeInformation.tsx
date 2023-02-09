import React, { FC } from 'react'

import Column from '@/ui/grid/Column'
import Row from '@/ui/grid/Row'

const HomeInformation: FC = () => {
	return (
		<Row isBorder={false}>
			<Column size={4} className='flex-col border-t-2  border-black py-10'>
				<div className='font-normal text-4xl text-white'>100K</div>
				<div className='text-white/60 text-sm'>Customers</div>
			</Column>
			<Column size={5} className='flex-col border-t-2  border-black '>
				<div className='font-normal  text-white'>New collections</div>
				<div className='text-white/60 text-sm'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
					necessitatibus in nobis fuga. Sunt, impedit ullam? Explicabo enim vero
					neque laboriosam consequatur possimus similique totam cum accusamus,
					accusantium rem expedita.
				</div>
			</Column>
		</Row>
	)
}

export default HomeInformation
