import Image from 'next/image'
import React, { FC } from 'react'

import Layout from '@/layout/Layout'

import Column from '@/ui/grid/Column'
import Row from '@/ui/grid/Row'

import { IProductsPage } from '@/../pages'

const Shop: FC<IProductsPage> = ({ products }) => {
	return (
		<Layout title='Shop' description='Catalog clothing and accessories'>
			<Row
				className='bg-dark-primary'
				// style={{
				// 	backgroundBliendMode: 'multiply',
				// 	backgroundImage: 'url(/images/texture.jpg)'
				// }}
			>
				{products.map(product => (
					<Column size={2} key={product.id}>
						<div className='text-white'>
							<Image
								src={product.images[0]}
								alt={product.name[0]}
								width={220}
								height={220}
							/>
							<h3>{product.name}</h3>
							<div className=''>{product.price}</div>
							<button>Add to cart</button>
						</div>
					</Column>
				))}
			</Row>
		</Layout>
	)
}

export default Shop
