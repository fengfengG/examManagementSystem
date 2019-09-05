import React from 'react'
import { Route, Redirect, Switch } from 'dva/router'
const MapRoute = ({ routes }) => {
	return (
		<Switch>
			{routes.map(Item =>
				Item.path ? (
					Item.children ? (
						<Route
							key={Item.path}
							path={Item.path}
							component={props => (
								<Item.component {...props}>
									<MapRoute routes={Item.children} />
								</Item.component>
							)}
						/>
					) : (
						<Route
							key={Item.path}
							path={Item.path}
							component={props => <Item.component {...props} />}
						/>
					)
				) : (
					<Redirect key={Item.from} {...Item} />
				)
			)}
		</Switch>
	)
}

export default MapRoute
