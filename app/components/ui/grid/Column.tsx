import { FC, PropsWithChildren } from 'react'

const Column: FC<PropsWithChildren<{ size: number }>> = ({
	size,
	children
}) => {
	return <div className={`col-span-${size}`}>{children}</div>
}

export default Column
