import { FC } from 'react'

import { COLORS } from '@/config/color.config'

import Spiner from './Spinner-1s-200px.svg'

const Loader: FC = () => {
	return <img src={Spiner.src} alt='loader' width={200} height={200} />
}

export default Loader
