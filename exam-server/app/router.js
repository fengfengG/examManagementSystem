'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  const oauth = middleware.oauth()

  router.get('/', controller.home.index);
  router.post('/user/login', controller.login.userLogin);//登录注册

  router.get('/exam/examType', controller.examType.examType); // 获取所有的考试类型
  router.get('/exam/questionsType', controller.questions.questions); //获取试题分类接口
  // router.get('/exam/addTest',controller.addTest.addTest);//获取添加试题接口

  router.post('/user/addUser', controller.user.addUser); // 添加用户
  router.get('/user/getUserNameId', controller.user.getUserNameId); // 获取当前用户信息
  router.post('/user/updateUser', controller.user.updateUser); // 更新用户
  router.get('/user/getTypeList', controller.user.getTypeList); // 获取用户身份列表
  router.get('/user/getApiAuthority', controller.user.getApiAuthority); // 获取api接口权限
  router.get('/user/getViewAuthority', controller.user.getViewAuthority); // 获取视图接口权限

  router.get('/class/classManage', oauth, controller.class.classManage); // 班级数据
  router.post('/class/addClass', controller.class.addClass); // 添加班级
  router.get('/class/getCourse', oauth, controller.class.getCourse); // 获取课程数据
  router.get('/class/getClassSize', oauth, controller.class.getClassSize); // 获取教室号数据
  router.post('/class/deleClass', controller.class.deleClass); // 删除班级
  router.post('/class/addRoom', controller.class.addRoom); // 添加教室
  router.get('/class/roomlist', oauth, controller.class.roomlist); // 获取数据
  router.post('/class/deleRoom', controller.class.deleRoom); // 删除教室

};
