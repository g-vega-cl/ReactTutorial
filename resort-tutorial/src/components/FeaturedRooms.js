import React from 'react'
import {RoomContext} from '../context';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';

export default class FeaturedRooms extends React.Component {
	static contextType = RoomContext;
	render() {
		const {featuredRooms : rooms} = this.context
		console.log(rooms);
		return (
			<div>
				from featured rooms
				<Room/>
				<Loading/>
			</div>
		)
	}
}