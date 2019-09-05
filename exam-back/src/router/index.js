import React from 'react'
import RouterMap from '@/router/map'
import Routes from '@/router/routes'
import { Router } from 'dva/router'

function RouterView({ history, app }) {
	return (
		<Router history={history}>
			<RouterMap routes={Routes}></RouterMap>
		</Router>
	)
}

export default RouterView
