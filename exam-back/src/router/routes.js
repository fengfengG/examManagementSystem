import Home from '@/containers/home'
import Questions from '@/containers/home/questions'
import InsertQuestionsType from '@/containers/home/insertQuestionsType'
import ShowQuestions from '@/containers/home/showQuestions'
import User from '@/containers/user'
import AddUser from '@/containers/user/adduser'
import ShowUser from '@/containers/user/showUser'
import Manage from '@/containers/manage'
import AddExam from '@/containers/manage/addExam'
import PaperList from '@/containers/manage/paperList'
import ClassRoom from '@/containers/classRoom'
import ClassManage from '@/containers/classRoom/classManage'
import RoomManage from '@/containers/classRoom/roomManage'
import StudentManage from '@/containers/classRoom/studentManage'
import Wait from '@/containers/wait'
import ClassAwit from '@/containers/wait/classAwit'
import Login from '@/containers/login'
import HomePage from '@/containers/homePage'

export default [
	{
		path: '/login',
		component: Login
	},
	{
		path: '/',
		component: HomePage,
		children: [
			{
				path: '/home',
				component: Home,
				children: [
					{
						path: '/home/questions',
						component: Questions
					},
					{
						path: '/home/insertQuestionsType',
						component: InsertQuestionsType
					},
					{
						path: '/home/showQuestions',
						component: ShowQuestions
					}
				]
			},
			{
				path: '/user',
				component: User,
				children: [
					{
						path: '/user/addUser',
						component: AddUser
					},
					{
						path: '/user/showUser',
						component: ShowUser
					}
				]
			},
			{
				path: '/manage',
				component: Manage,
				children: [
					{
						path: '/manage/addExam',
						component: AddExam
					},
					{
						path: '/manage/paperList',
						component: PaperList
					}
				]
			},
			{
				path: '/class',
				component: ClassRoom,
				children: [
					{
						path: '/class/classManage',
						component: ClassManage
					},
					{
						path: '/class/roomManage',
						component: RoomManage
					},
					{
						path: '/class/studentManage',
						component: StudentManage
					}
				]
			},
			{
				path: '/wait',
				component: Wait,
				children: [
					{
						path: '/wait/classAwit',
						component: ClassAwit
					}
				]
			}
		]
	}
]
