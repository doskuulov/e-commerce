import Image from 'next/image'
import { FC } from 'react'

import Layout from '@/layout/Layout'

import Column from '@/ui/grid/Column'
import Row from '@/ui/grid/Row'
import Loader from '@/ui/loader/Loader'

import HomeInformation from './home-information/Homeinformation'
import HotSale from './hot-sale/HotSale'
import { IProductsPage } from '@/../pages'

const Home: FC<IProductsPage> = ({ products }) => {
	return (
		<Layout
			title='Home'
			description='More than just great coffee. Explore the menu, sign up for Starbucks® Rewards, manage your gift card and more.'
		>
			<Row className='bg-dark-primary'>
				<Column size={5} isPadding={false}>
					<Image src='/images/main-4x.png' width={720} height={628} alt='' />
				</Column>
				<Column size={4} isPadding={false} isCenter={false}>
					<HotSale />
					<HomeInformation />
				</Column>
			</Row>
		</Layout>
	)
}

export default Home
