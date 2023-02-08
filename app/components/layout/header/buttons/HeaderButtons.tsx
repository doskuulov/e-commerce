import { FC } from 'react'
import { FiSearch } from 'react-icons/fi'
import { FiBell } from 'react-icons/fi'
import { FiShoppingCart } from 'react-icons/fi'

import Column from '@/ui/grid/Column'
import SquareButton from '@/ui/square-button/SquareButton'

const HeaderButtons: FC = () => {
	return (
		<Column size={2} className='gap-4'>
			<SquareButton Icon={FiSearch} onClick={() => {}} />
			<SquareButton Icon={FiBell} onClick={() => {}} />
			<SquareButton Icon={FiShoppingCart} onClick={() => {}} number={5} />
		</Column>
	)
}

export default HeaderButtons
