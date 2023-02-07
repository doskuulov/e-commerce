import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay
} from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { FC, useRef, useState } from 'react'

import { useCart } from '@/hooks/useCart'

import { formatToCurrency } from '@/utils/format-to-currency'

import styles from './Cart.module.scss'
import CartItem from './cart-item/CartItem'
import { PaymentService } from '@/services/PaymentService'

const Cart: FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const btnRef = useRef<HTMLButtonElement>(null)

	const { cart, total } = useCart()

	const { push } = useRouter()

	const { mutate } = useMutation(
		['create payment'],
		() => PaymentService.createPayment(total),
		{
			onSuccess(data) {
				push(data.confirmation.confirmation_url)
			}
		}
	)

	return (
		<div className={styles['wrapper-cart']}>
			<button
				className={styles.heading}
				onClick={() => setIsOpen(!isOpen)}
				ref={btnRef}
			>
				<span className={styles.badge}>{cart.length}</span>
				<span className={styles.text}>MY BASKET</span>
			</button>

			<Drawer
				isOpen={isOpen}
				placement='right'
				onClose={() => setIsOpen(false)}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>My basket</DrawerHeader>

					<DrawerBody>
						<div className={styles.cart}>
							{cart.length ? (
								cart.map(item => <CartItem item={item} key={item.id} />)
							) : (
								<div>Basket is empty!</div>
							)}
						</div>
					</DrawerBody>

					<DrawerFooter
						justifyContent='space-between'
						borderTopColor={'#F7F4F0'}
						borderTopWidth={1}
					>
						<div className={styles.footer}>
							<div>Total:</div>
							<div>{formatToCurrency(total)}</div>
						</div>
						<Button colorScheme='green' onClick={() => mutate()}>
							Payment
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	)
}

export default Cart
