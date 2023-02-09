import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'

interface IRow {
	isBorder?: boolean
	className?: string
}

const Row: FC<PropsWithChildren<IRow>> = ({
	children,
	className,
	isBorder
}) => {
	return (
		<div
			className={cn(
				'grid w-full grid-cols-9 border-b-2 ',
				{
					'border-black border-solid': isBorder
				},
				className
			)}
		>
			{children}
		</div>
	)
}

export default Row
