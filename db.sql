-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: localhost    Database: octopath
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `members` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(5) NOT NULL,
  `last_name` varchar(5) NOT NULL,
  `gender` varchar(2) NOT NULL,
  `yearlist1` varchar(25) DEFAULT NULL,
  `monthlist1` varchar(25) DEFAULT NULL,
  `daylist1` varchar(25) DEFAULT NULL,
  `psnid` varchar(25) NOT NULL,
  `city` text,
  `country` text,
  `detaladdr` char(25) DEFAULT NULL,
  `email` char(55) DEFAULT NULL,
  `mobilenum` char(25) DEFAULT NULL,
  `password` char(25) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members`
--

LOCK TABLES `members` WRITE;
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
INSERT INTO `members` VALUES (2,'張','無忌','男','1990','5','13','H1233214562','臺北市','松山區105','海邊路','chang@yahoo','0988779887','1234'),(5,'小','欸啦','男','1991','3','14','E123321000','臺北市','萬華區108','中山北路','ala@yahoo','0966444555','1234'),(8,'趙','威','女','1988','4','8','A223666444','台北市','松山區','民權東路1號','aaa@yahoo','0988779486','1234'),(20,'令','狐沖','男','1978','9','25','N123861244','台北市','信義區','信義路四段9號','lin@yahoo','0933345862','1234'),(21,'王','飛虎','男','1966','2','7','K124785693','台北市','大同區','和平路8號','wang@yahoo','09125896488','1234'),(22,'韋','小寶','男','1996','11','23','W128964287','台北市','中山區','中山北路78號','wee@yahoo','09196325874','1234'),(23,'111','333','男','2001','1','1','A123456789','基隆市','仁愛區200','41444','123@789888','0922554488','1234'),(24,'Li','Vince','男','2001','1','1','A123456789','屏東縣','崁頂鄉137','大平路','bfbgb@77777','0911135548','zxc123'),(42,'王','大名','男','1990','1','1','G1234567872','新北市','林口區244','青山路11號','123@122','0923456343','1234'),(46,'王','曉華','男','1984','4','5','A123456798','臺北市','大安區106','中山北路','123@yahoo','0912288555','1234');
/*!40000 ALTER TABLE `members` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-16 16:34:53
