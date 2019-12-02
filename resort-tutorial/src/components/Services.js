import React from 'react';
import {FaCocktail, FaHiking, FaShuttleVan,FaBeer} from 'react-icons/fa'
import Title from './Title';

export default class Services extends React.Component {
	state = {
		services:[
			{
				icon: <FaCocktail/>,
				title:"free cocktails",
				info:"Free cocktails every day from 4pm to 10pm."
			},
			{
				icon: <FaHiking/>,
				title:"hiking",
				info:"Follow our guide into the beautiful hills of the region"
			},
			{
				icon: <FaShuttleVan/>,
				title:"free shuttle van",
				info:"Parts every 30 minutes to the airport"
			},
			{
				icon: <FaBeer/>,
				title:"Artisanal beer",
				info:"Artisanal beer to cater the highest tastes"
			}
		]
	};
	render() {
		return (
			<section className="services">
				<Title title = "services"/>		
				<div className = "services-center">
					{this.state.services.map((item,index) => {
						return( 
							<article key={index} className="service">
								<span>{item.icon}</span>
								<h6>{item.title}</h6>
								<p>{item.info}</p>
							</article>
							);
					})}
				</div>	
			</section>
		)
	}
}