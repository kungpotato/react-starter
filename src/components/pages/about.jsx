import React, { Component } from 'react'
import style from './style.less'
import style2 from './style.less'
import Img from '../../assets/Imgsrc.js'

class About extends Component {
	render(){
		return(
			<div>
				<img src={Img.noey2} className="wd" />
			</div>
		)
	}
}

export default About
