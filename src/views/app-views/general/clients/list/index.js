import React, { Component } from 'react';
import axios from 'axios';
import { Card, Table, Tag, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import EditProfile from './EditProfile';
import botImg from '../../../../../assets/img/bot.png';
import Loading from 'components/shared-components/Loading';
import AvatarStatus from 'components/shared-components/AvatarStatus';


export class UserList extends Component {

	state = {
		users: [],
		userProfileVisible: false,
		selectedUser: null,
		loading: true,
	};

	componentDidMount() {
		this.getClientList();
	}

	deleteUser = userId => {
		this.setState({
			users: this.state.users.filter(item => item.id !== userId),
		});
		message.success({ content: `Deleted user ${userId}`, duration: 2 });
	};

	showUserProfile = userInfo => {
		this.setState({
			userProfileVisible: true,
			selectedUser: userInfo
		});
	};

	closeUserProfile = () => {
		this.setState({
			userProfileVisible: false,
			selectedUser: null
		});
	};

	getClientList = async () => {
		this.setState({ loading: true });
		try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/users');
			const usersData = response.data;
			const updatedUsers = await Promise.all(usersData.map(async user => {
				const country = await this.getCountryFromCoords(user.address.geo.lat, user.address.geo.lng);
				return { ...user, country };
			}));
			this.setState({ users: updatedUsers });
		} catch (error) {
			console.error(error);
		}
		this.setState({ loading: false });
	};



	getCountryFromCoords = async (lat, lng) => {
		let country;
		try {
			const response = await axios.get(
				`https://api.mapbox.com/geocoding/v5/mapbox.places/${lat},${lng}.json?access_token=${process.env.REACT_APP_MAPBOX_PUBLIC_TOKEN}`
			);
			const features = response.data.features;
			if (features.length > 1) {
				country = response.data.features[1].place_name;
				return country;
			}
		} catch (error) {
			console.error('Error:', error);
		}
		country = 'Unknown';
		return country;
	};


	render() {
		const { users, userProfileVisible, selectedUser, loading } = this.state;

		const tableColumns = [
			{
				title: 'User',
				dataIndex: 'name',
				render: (_, record) => (
					<div className="d-flex">
						<AvatarStatus src={botImg} name={record.name} subTitle={record.email} />
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.name.toLowerCase();
						b = b.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: 'Phone',
				dataIndex: 'phone',
				sorter: {
					compare: (a, b) => a.phone.length - b.phone.length,
				},
			},
			{
				title: 'Country',
				dataIndex: 'country',
				sorter: (a, b) => a.country.localeCompare(b.country)
			},
			{
				title: 'Work on:',
				dataIndex: 'company',
				render: company => (
					<Tag className="text-capitalize" color={company.name ? 'cyan' : 'red'}>
						{company.name ? company.name : 'unemployed'}
					</Tag>
				),
				sorter: {
					compare: (a, b) => a.company.name.length - b.company.name.length,
				},
			},
			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right">
						<Tooltip title="View">
							<Button type="primary" className="mr-2" icon={<EyeOutlined />}
								onClick={() => { this.showUserProfile(elm); }} size="small" />
						</Tooltip>
						<Tooltip title="Delete">
							<Button danger icon={<DeleteOutlined />}
								onClick={() => { this.deleteUser(elm.id); }} size="small" />
						</Tooltip>
					</div>
				)
			}
		];

		if (loading) {
			return <Loading cover="content" />;
		}

		return (
			<Card bodyStyle={{ 'padding': '0px' }}>
				{userProfileVisible && <EditProfile selectedUser={selectedUser} onClose={this.closeUserProfile} />}
				{!userProfileVisible && <Table columns={tableColumns} dataSource={users} rowKey="id" />}
			</Card>
		);
	}
}

export default UserList;

