import React, { FC } from 'react'

import Layout from '@/layout/Layout'

import { IProductsPage } from '@/../pages'

const Shop: FC<IProductsPage> = ({ products }) => {
	return (
		<Layout title='Shop' description='Catalog clothing and accessories'>
			<Row className='bg-dark-primary'>
				<Column size={4} isPadding={false}>
					<Image src='/images/main-4x.png' alt='' width={799} height={728} />
				</Column>
				<Column
					size={5}
					isPadding={false}
					isCenter={false}
					className='flex-col'
				>
					<HotSale />
					<HomeInformation />
				</Column>
			</Row>
		</Layout>
	)
}

export default Shop
