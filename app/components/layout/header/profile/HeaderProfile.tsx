import { FC } from 'react'
import { FiUser } from 'react-icons/fi'

import Column from '@/ui/grid/Column'
import SquareButton from '@/ui/square-button/SquareButton'

const HeaderProfile: FC = () => {
	return (
		<Column size={2} className='flex items-center'>
			<SquareButton Icon={FiUser} />
			<div className='ml-3'>
				<div
					className='text-gray
				 text-sm'
				>
					Doskulov Ernis
				</div>
				<span
					className='text-gray text-xs
				 '
				>
					Balance: $1500.00
				</span>
			</div>
		</Column>
	)
}

export default HeaderProfile
