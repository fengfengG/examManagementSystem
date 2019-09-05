-- --------------------------------------------------------
-- 主机:                           169.254.19.116
-- 服务器版本:                        5.5.20 - MySQL Community Server (GPL)
-- 服务器操作系统:                      Win32
-- HeidiSQL 版本:                  8.2.0.4675
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出 1701g2_exam 的数据库结构
DROP DATABASE IF EXISTS `1701g2_exam`;
CREATE DATABASE IF NOT EXISTS `1701g2_exam` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `1701g2_exam`;


-- 导出  表 1701g2_exam.api_authority 结构
DROP TABLE IF EXISTS `api_authority`;
CREATE TABLE IF NOT EXISTS `api_authority` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `api_authority_text` char(255) DEFAULT NULL,
  `api_authority_url` char(255) DEFAULT NULL,
  `api_authority_method` char(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COMMENT='api接口权限';

-- 正在导出表  1701g2_exam.api_authority 的数据：~7 rows (大约)
/*!40000 ALTER TABLE `api_authority` DISABLE KEYS */;
INSERT INTO `api_authority` (`id`, `api_authority_text`, `api_authority_url`, `api_authority_method`) VALUES
	(1, '登录接口', '/user/login', 'POST'),
	(2, '获取当前用户信息', '/user/getUserNameId', 'GET'),
	(3, '添加用户', '/user/addUser', 'POST'),
	(4, '更新用户', '/user/updateUser', 'POST'),
	(5, '获取用户身份列表', '/user/getTypeList', 'GET'),
	(6, '获取api接口权限', '/user/getApiAuthority', 'GET'),
	(7, '获取视图接口权限', '/user/getViewAuthority', 'GET');
/*!40000 ALTER TABLE `api_authority` ENABLE KEYS */;


-- 导出  表 1701g2_exam.classmanage 结构
DROP TABLE IF EXISTS `classmanage`;
CREATE TABLE IF NOT EXISTS `classmanage` (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `className` char(150) NOT NULL,
  `courseName` char(150) NOT NULL,
  `classSize` int(20) NOT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- 正在导出表  1701g2_exam.classmanage 的数据：~5 rows (大约)
/*!40000 ALTER TABLE `classmanage` DISABLE KEYS */;
INSERT INTO `classmanage` (`cid`, `className`, `courseName`, `classSize`) VALUES
	(2, '1701e', '实训二', 34403),
	(3, '1701f', '实训三', 34308),
	(4, '1701g', '实训一一', 34402),
	(15, '1703ggg', '实训二', 34403),
	(16, '1703ggg', '实训一', 34308);
/*!40000 ALTER TABLE `classmanage` ENABLE KEYS */;


-- 导出  表 1701g2_exam.examtype 结构
DROP TABLE IF EXISTS `examtype`;
CREATE TABLE IF NOT EXISTS `examtype` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `examType` char(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- 正在导出表  1701g2_exam.examtype 的数据：~4 rows (大约)
/*!40000 ALTER TABLE `examtype` DISABLE KEYS */;
INSERT INTO `examtype` (`id`, `examType`) VALUES
	(1, '周考一'),
	(2, '周考二'),
	(3, '周考三'),
	(4, '月考');
/*!40000 ALTER TABLE `examtype` ENABLE KEYS */;


-- 导出  表 1701g2_exam.identity 结构
DROP TABLE IF EXISTS `identity`;
CREATE TABLE IF NOT EXISTS `identity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` int(11) DEFAULT NULL,
  `type_text` char(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='用户身份';

-- 正在导出表  1701g2_exam.identity 的数据：~3 rows (大约)
/*!40000 ALTER TABLE `identity` DISABLE KEYS */;
INSERT INTO `identity` (`id`, `type`, `type_text`) VALUES
	(1, 0, '管理员'),
	(2, 1, '出题者'),
	(3, 2, '浏览者');
/*!40000 ALTER TABLE `identity` ENABLE KEYS */;


-- 导出  表 1701g2_exam.questions_type 结构
DROP TABLE IF EXISTS `questions_type`;
CREATE TABLE IF NOT EXISTS `questions_type` (
  `questions_type_id` char(50) NOT NULL,
  `questions_type_name` char(50) NOT NULL DEFAULT '0',
  `questions_type_sort` int(50) DEFAULT NULL,
  PRIMARY KEY (`questions_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='试题分类';

-- 正在导出表  1701g2_exam.questions_type 的数据：~2 rows (大约)
/*!40000 ALTER TABLE `questions_type` DISABLE KEYS */;
INSERT INTO `questions_type` (`questions_type_id`, `questions_type_name`, `questions_type_sort`) VALUES
	('1', '简答题', 1),
	('2', '代码阅读题', 2);
/*!40000 ALTER TABLE `questions_type` ENABLE KEYS */;


-- 导出  表 1701g2_exam.subject 结构
DROP TABLE IF EXISTS `subject`;
CREATE TABLE IF NOT EXISTS `subject` (
  `sid` int(11) NOT NULL AUTO_INCREMENT,
  `subject_text` char(200) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- 正在导出表  1701g2_exam.subject 的数据：~7 rows (大约)
/*!40000 ALTER TABLE `subject` DISABLE KEYS */;
INSERT INTO `subject` (`sid`, `subject_text`) VALUES
	(1, 'JS上'),
	(2, 'JS下'),
	(3, 'jquery'),
	(4, 'h5移动端开发'),
	(5, 'Node开发'),
	(6, 'Vue核心课程'),
	(7, 'React核心课程');
/*!40000 ALTER TABLE `subject` ENABLE KEYS */;


-- 导出  表 1701g2_exam.user 结构
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` char(255) DEFAULT NULL,
  `password` char(255) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `token` char(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- 正在导出表  1701g2_exam.user 的数据：~5 rows (大约)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `username`, `password`, `type`, `token`) VALUES
	(1, 'gf', '123321', 1, NULL),
	(2, 'yfy', '123456', 1, NULL),
	(3, 'yzr', '111111', 1, NULL),
	(4, 'smh', ' 666666', 0, NULL),
	(9, 'zss', '456654', 2, NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;


-- 导出  表 1701g2_exam.view_authority 结构
DROP TABLE IF EXISTS `view_authority`;
CREATE TABLE IF NOT EXISTS `view_authority` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `view_authority_text` char(255) DEFAULT NULL,
  `view_id` char(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='视图接口权限';

-- 正在导出表  1701g2_exam.view_authority 的数据：~3 rows (大约)
/*!40000 ALTER TABLE `view_authority` DISABLE KEYS */;
INSERT INTO `view_authority` (`id`, `view_authority_text`, `view_id`) VALUES
	(1, '登录', 'login'),
	(2, '添加用户', 'main-addUser'),
	(3, '用户展示', 'main-showUser');
/*!40000 ALTER TABLE `view_authority` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
