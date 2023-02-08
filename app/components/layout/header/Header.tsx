import { FC } from 'react'

import styles from './Header.module.scss'
import HeaderButtons from './buttons/HeaderButtons'
import HeaderLogo from './logo/HeaderLogo'
import HeaderMenu from './menu/HeaderMenu'
import HeaderProfile from './profile/HeaderProfile'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<HeaderLogo />
			<HeaderMenu />
			<HeaderButtons />
			<HeaderProfile />
		</header>
	)
}

export default Header
