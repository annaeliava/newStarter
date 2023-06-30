import React, { useState, useEffect }  from 'react'
import { Card, Table } from 'antd';
import Loading from 'components/shared-components/Loading';
import { tableColumns } from './tableColumns';

export const UserList = () =>  {
	const [columns, setColumns] = useState(tableColumns);
	const [users, setUsers] = useState();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(result => {
			setUsers(result)
			setIsLoading(false)  
		})
		.catch((err) => {
			setIsLoading(false);
			console.log(err)
		});
	}, [])

	return (
		<>
			{
				isLoading
				?
					<Loading />
				:
					<Card bodyStyle={{'padding': '0px'}}>
						<div className="table-responsive">
							<Table dataSource={users} columns={columns} rowKey='id' />
						</div>
					</Card>
			}
		</>
	)
}

export default UserList
