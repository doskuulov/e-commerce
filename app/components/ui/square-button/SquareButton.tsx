import React, { FC } from 'react'
import { IconType } from 'react-icons'
import { AiFillChrome } from 'react-icons/ai'

interface ISquareButton {
	Icon: IconType
	onClick: () => void
	number?: number
}

const SquareButton: FC<ISquareButton> = ({ Icon, onClick, number }) => {
	return (
		<div className=''>
			<button
				onClick={onClick}
				className='h-10 w-10 bg-black flex items-center justify-center hover:bg-[#252525] transition-colors duration-200 relative'
			>
				{!!number && (
					<span className=' flex h-4 w-4 items-center justify-center rounded-full absolute bg-primary p-0.5 text-[0.8rem] text-white -top-1 -right-1'>
						{number}
					</span>
				)}
				<Icon color='#7d7d7d' size={21} />
			</button>
		</div>
	)
}

export default SquareButton
