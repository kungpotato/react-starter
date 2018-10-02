import React, { Component } from 'react'
import './style.less'
// import './style.css'
import { Container, Box  } from 'bloomer'
import Img from '../../assets/Imgsrc.js'

class Home extends Component {
	render(){
		return(
			<div className="head">
			  <section className="section">
			    <div className="container">
			      <h1 className="title">
			        Nong NOEY BNK48
			      </h1>
			      <p className="subtitle">
			        Nong NOEY BNK48 <strong>Nong NOEY BNKGGGHHH</strong>!
			      </p>
			    </div>
			  </section>
			  <div>
			  	<Container>
		    		<Box>
		    			<img src={Img.noey1} className="wd" />
		    		</Box>
				</Container>
			  </div>
		    </div>
		)
	}
}

export default Home
