import dva from 'dva'
import RouterView from '@/router'
import { createModel } from '@/store'
import { createBrowserHistory as createHistory } from 'history'
import '@/assets/css/wrapper.css'
import '@/assets/css/user.css'

const app = dva({
	history: createHistory()
})

createModel(app)
app.router(RouterView)
app.start('#root')
