import React from 'react'
import Counter from '../counter/Counter'
const ProgressOne = ({ item, bgcolor, progress, height, time }) => {
	const Parentdiv = {
		height: height,
		width: '100%',
		backgroundColor: 'whitesmoke',
		borderRadius: 40,
	}
	
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: bgcolor,
		borderRadius: 40,
		textAlign: 'right'
	}
	
	const progresstext = {
		textAlign: 'right',
		color: 'black',
		fontWeight: 900
	}	
	return (
		<>
			<span style={progresstext} className='flex  justify-between'>
				<span>{item}</span>
				<span className='flex'>
					<Counter goal={progress} time={time} />%
				</span>
			</span>
			<div style={Parentdiv}>
				<div className='transition-all ease-in-out duration-700' style={Childdiv}></div>
			</div>
		</>
	)
}

export default ProgressOne;
