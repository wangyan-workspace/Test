/*
 Navicat Premium Data Transfer

 Source Server         : aaa
 Source Server Type    : MySQL
 Source Server Version : 100121
 Source Host           : localhost:3306
 Source Schema         : myblog

 Target Server Type    : MySQL
 Target Server Version : 100121
 File Encoding         : 65001

 Date: 01/02/2021 12:21:45
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for t_blog
-- ----------------------------
DROP TABLE IF EXISTS `t_blog`;
CREATE TABLE `t_blog` (
  `blog_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_bin NOT NULL,
  `content` text COLLATE utf8_bin,
  `post_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`blog_id`),
  KEY `fk_user_blog_user_id` (`user_id`),
  CONSTRAINT `fk_user_blog_user_id` FOREIGN KEY (`user_id`) REFERENCES `t_user` (`user_id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of t_blog
-- ----------------------------
BEGIN;
INSERT INTO `t_blog` VALUES (2, 'ccc', 'ddd', '2020-10-23 20:08:45', 2);
INSERT INTO `t_blog` VALUES (4, 'aaa', 'bbb', '2020-10-23 20:11:04', 5);
INSERT INTO `t_blog` VALUES (6, 'eee', 'fff', '2021-01-18 10:10:26', 2);
INSERT INTO `t_blog` VALUES (7, 'ggg', 'kkkk', '2021-01-18 10:14:08', 5);
INSERT INTO `t_blog` VALUES (8, 'hahaha', 'O(∩_∩)O哈哈~', '2021-01-30 20:42:43', 5);
INSERT INTO `t_blog` VALUES (9, 'haiyang', '(๑′ᴗ‵๑)Ｉ Lᵒᵛᵉᵧₒᵤ❤ ', '2021-01-31 10:11:43', 5);
INSERT INTO `t_blog` VALUES (10, '好难呀', '勤动手练习', '2021-01-31 17:01:45', 5);
INSERT INTO `t_blog` VALUES (11, '加油????，我是最棒的', 'ヾ(◍°∇°◍)ﾉﾞ奥利给', '2021-01-31 17:31:53', 75);
INSERT INTO `t_blog` VALUES (12, '完事啦，(*^▽^*)', '差不多了吧', '2021-01-31 18:27:03', 2);
COMMIT;

-- ----------------------------
-- Table structure for t_comment
-- ----------------------------
DROP TABLE IF EXISTS `t_comment`;
CREATE TABLE `t_comment` (
  `comm_id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `post_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `blog_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`comm_id`),
  KEY `fk_blog_comment_blog_id` (`blog_id`),
  KEY `fk_user_comment_user_id` (`user_id`),
  CONSTRAINT `fk_blog_comment_blog_id` FOREIGN KEY (`blog_id`) REFERENCES `t_blog` (`blog_id`),
  CONSTRAINT `fk_user_comment_user_id` FOREIGN KEY (`user_id`) REFERENCES `t_user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of t_comment
-- ----------------------------
BEGIN;
INSERT INTO `t_comment` VALUES (1, 'haha', '2021-01-19 13:06:03', 2, 2);
INSERT INTO `t_comment` VALUES (2, 'hehe', '2021-01-19 13:06:58', 4, 5);
INSERT INTO `t_comment` VALUES (3, 'hoho', '2021-01-19 13:09:57', 2, 21);
INSERT INTO `t_comment` VALUES (4, '真不错', '2021-01-31 19:07:06', 12, 29);
INSERT INTO `t_comment` VALUES (5, '好样的', '2021-01-31 19:08:01', 12, 46);
INSERT INTO `t_comment` VALUES (6, '坚持住，挺挺就过去了', '2021-01-31 19:08:43', 10, 28);
INSERT INTO `t_comment` VALUES (7, '你可以的', '2021-01-31 19:09:01', 10, 47);
INSERT INTO `t_comment` VALUES (10, 'ε＝ε＝ε＝(#>д<)ﾉ', '2021-02-01 11:53:22', 12, 80);
INSERT INTO `t_comment` VALUES (11, '坚持住ヾ(◍°∇°◍)ﾉﾞ', '2021-02-01 11:58:10', 10, 5);
INSERT INTO `t_comment` VALUES (12, '快了快了，挺住', '2021-02-01 11:59:27', 12, 2);
INSERT INTO `t_comment` VALUES (13, '没错，相信你的直觉', '2021-02-01 12:03:39', 11, 81);
INSERT INTO `t_comment` VALUES (14, 'ლ(′◉❥◉｀ლ) ', '2021-02-01 12:04:15', 9, 81);
INSERT INTO `t_comment` VALUES (15, '啥那么开心', '2021-02-01 12:04:50', 8, 81);
INSERT INTO `t_comment` VALUES (16, 'yes, you can', '2021-02-01 12:10:02', 11, 83);
INSERT INTO `t_comment` VALUES (17, '<{=．．．．(嘎~嘎~嘎~)', '2021-02-01 12:12:01', 2, 83);
COMMIT;

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) COLLATE utf8_bin NOT NULL COMMENT '用户名',
  `nickname` varchar(20) COLLATE utf8_bin DEFAULT NULL COMMENT '昵称',
  `password` varchar(20) COLLATE utf8_bin NOT NULL COMMENT '密码',
  `create_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='用户名';

-- ----------------------------
-- Records of t_user
-- ----------------------------
BEGIN;
INSERT INTO `t_user` VALUES (2, 'wangwu', '王五', '123456', '2020-10-23 19:53:47');
INSERT INTO `t_user` VALUES (5, 'lisi', '李四', '123456', '2020-10-23 20:23:59');
INSERT INTO `t_user` VALUES (6, 'zhaoliu', '赵六', '123456', '2020-10-23 20:24:09');
INSERT INTO `t_user` VALUES (21, '111', '3333', '2222', '2021-01-18 16:25:37');
INSERT INTO `t_user` VALUES (22, 'aaa', 'cccc', 'bbb', '2021-01-18 16:32:55');
INSERT INTO `t_user` VALUES (23, 'aaa333', '3333', '333', '2021-01-18 16:38:51');
INSERT INTO `t_user` VALUES (24, 'aaa333666', '3333444', '4444', '2021-01-18 16:39:53');
INSERT INTO `t_user` VALUES (25, '89888', '777', '888', '2021-01-19 09:44:58');
INSERT INTO `t_user` VALUES (26, '9999', '999', '999', '2021-01-19 10:54:27');
INSERT INTO `t_user` VALUES (27, '5454545', '4545', '4545', '2021-01-19 11:15:04');
INSERT INTO `t_user` VALUES (28, 'linhaiyang', '林海洋', '990619', '2021-01-25 11:00:06');
INSERT INTO `t_user` VALUES (29, 'xiaowangyan', '王岩', '123456', '2021-01-25 11:32:17');
INSERT INTO `t_user` VALUES (31, 'choujuju', '臭居居', '568790', '2021-01-25 11:37:50');
INSERT INTO `t_user` VALUES (41, 'gaga', 'xiaoyazi', '680798', '2021-01-25 11:55:49');
INSERT INTO `t_user` VALUES (42, 'shagua', 'heng', '475487089', '2021-01-25 14:17:43');
INSERT INTO `t_user` VALUES (45, 'xiaomao', 'cat', '43535', '2021-01-25 16:17:00');
INSERT INTO `t_user` VALUES (46, 'xiaoshagua', 'gagaga', '324sfrg', '2021-01-25 20:58:02');
INSERT INTO `t_user` VALUES (47, 'mendan', 'gouadn', '23454', '2021-01-26 10:15:41');
INSERT INTO `t_user` VALUES (50, 'ggg', 'gggo', '2346', '2021-01-26 11:19:16');
INSERT INTO `t_user` VALUES (53, 'llama', 'imimi', '435sfsdfv', '2021-01-26 17:04:20');
INSERT INTO `t_user` VALUES (55, 'xiaogou', 'dog', '2324354', '2021-01-26 21:29:53');
INSERT INTO `t_user` VALUES (58, 'guaiguai', 'guai', '34354', '2021-01-27 10:28:24');
INSERT INTO `t_user` VALUES (64, 'faf', 'ededed', '4453', '2021-01-31 11:17:58');
INSERT INTO `t_user` VALUES (66, 'mimi', 'wangwang', '123498', '2021-01-31 11:47:30');
INSERT INTO `t_user` VALUES (67, 'monkey', 'gfgfgf', '46fdhy', '2021-01-31 11:48:37');
INSERT INTO `t_user` VALUES (68, '肉肉', '任何人人太少', 'w\'r\'w\'r\'t\'y', '2021-01-31 11:55:46');
INSERT INTO `t_user` VALUES (69, 'tiana', '天啊', '74568ijgl;fdg', '2021-01-31 11:56:45');
INSERT INTO `t_user` VALUES (70, 'iqsilw', 'qisile', 'qisile', '2021-01-31 11:59:41');
INSERT INTO `t_user` VALUES (71, 'fansile', 'fansile', 'gkjdhhb', '2021-01-31 12:05:07');
INSERT INTO `t_user` VALUES (72, 'weishenme', 'weishenme', 'kuyoekjo', '2021-01-31 12:08:56');
INSERT INTO `t_user` VALUES (73, 'hbhb', 'cghgjh', 'rtu0i-9', '2021-01-31 12:45:26');
INSERT INTO `t_user` VALUES (74, 'ghj', 'lkj', 'lkjdgf', '2021-01-31 12:45:39');
INSERT INTO `t_user` VALUES (75, 'jiji', 'chick', 'lalaasdsfdg', '2021-01-31 17:30:17');
INSERT INTO `t_user` VALUES (76, 'xiaoguaiguai', 'baby', '990907', '2021-01-31 18:47:56');
INSERT INTO `t_user` VALUES (78, 'zhuzhu', 'lala', 'lalerwr', '2021-01-31 18:57:55');
INSERT INTO `t_user` VALUES (79, 'coco', 'mimi', 'lkj.lkj', '2021-01-31 19:04:43');
INSERT INTO `t_user` VALUES (80, 'goudan', 'yaya', '123456', '2021-02-01 11:43:00');
INSERT INTO `t_user` VALUES (81, 'xiaoguaiguia', 'huaihuai', '123456', '2021-02-01 12:00:42');
INSERT INTO `t_user` VALUES (83, 'mengyou', 'ooo', '567890', '2021-02-01 12:08:54');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
