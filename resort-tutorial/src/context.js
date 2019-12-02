import React from 'react'

const RoomContext = React.createContext();


export default class RoomProvider extends React.Component {
	state = {
		greeting: 'hello',
		name: 'john'
	};
	render() {
		return (
			<RoomContext.Provider value = {{...this.state}}>
				{this.props.children}
			</RoomContext.Provider>
		)
	}
}


const RoomConsumer = RoomContext.Consumer;

export{RoomProvider, RoomConsumer, RoomContext};