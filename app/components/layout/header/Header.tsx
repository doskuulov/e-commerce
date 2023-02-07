import { FC } from 'react'

import styles from './Header.module.scss'
import Cart from './cart/Cart'
import Menu from './menu/Menu'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Menu />
			<Cart />
		</header>
	)
}

export default Header
