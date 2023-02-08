import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'

const Column: FC<PropsWithChildren<{ size: number; isCenter?: boolean }>> = ({
	size,
	children,
	isCenter = true
}) => {
	return (
		<div
			style={{ gridColumn: `span ${size} / span ${size}` }}
			className={cn(
				'border-r-2 border-black border-solid h-full flex items-center p-3 ',
				{
					'justify-center': isCenter
				}
			)}
		>
			{children}
		</div>
	)
}

export default Column
