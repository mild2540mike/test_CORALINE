-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 31, 2020 at 01:15 AM
-- Server version: 8.0.17
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `revel-market_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_news`
--

CREATE TABLE `tb_news` (
  `news_code` varchar(13) NOT NULL,
  `news_title` text NOT NULL,
  `news_date` varchar(50) NOT NULL,
  `news_description` text NOT NULL,
  `news_detail` text NOT NULL,
  `news_show` int(1) NOT NULL,
  `news_image_name` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_news`
--

INSERT INTO `tb_news` (`news_code`, `news_title`, `news_date`, `news_description`, `news_detail`, `news_show`, `news_image_name`) VALUES
('N0001', 'OG ทุบ Liquid ป้องแชมป์ DOTA ศึก TI – แข่ง 2 ปี ฟันเงินทะลุ 800 ล้าน', '2019-12-16 16:35:02', 'การแข่งขันอีสปอร์ต เกม DOTA 2 รายการ The Internation 2019 ที่เมืองเซี่ยงไฮ้ ประเทศจีน เมื่อวันที่ 25 ส.ค. เป็นการแข่งขันรอบชิงชนะเลิศ ระหว่าง OG แชมป์เก่าจากครั้งที่แล้ว พบกับ TEAM Liquid ดีกรีแชมป์ เมื่อปี 2017 ที่ไต่ขึ้นมาจากสายล่าง โดยแข่งขันกันในระบบ 3 ใน 5 เกม', 'สำหรับการแข่งขันรายการ TI9 ถือเป็นการแข่งขันอีสปอร์ตที่มีเงินรางวัลรวมสูงที่สุดถึง 34.29 ล้านเหรียญสหรัฐ หรือ ประมาณ 1,055 ล้านบาท\n\nซึ่งผลการแข่งขันในคู่นี้เกมแรกLiquid เปิดฉากได้สวยกว่า ออกนำไปก่อน 1-0 เกม แต่หลังจากนั้นกลายเป็นทีมแชมป์เก่าOG ที่งัดฟอร์มเก่งของตัวเองกลับมาและเอาชนะ 3 เกมรวด ทำให้พวกเขาสอยแชมป์ไปครองด้วยสกอร์ 3-1 เกม\n\nส่งผลให้OG ได้รับเงินรางวัลในตำแหน่งแชมป์ไปถึง 15.6 ล้านเหรียญสหรัฐ หรือราว 480 ล้านบาท และหากนับรวมเงินรางวัลจากแชมป์สมัยที่ อีก 11.2 ล้านเหรีญ จะทำให้พวกเขากวาดเงินก้อนโตจากการแข่งขันแค่ 2 ปี ถึงราว 825 ล้านบาทเลยทีเดียว\n\nทางด้านทีมLiquid รองแชมป์หนนี้รับได้ 4.458 ล้านเหรียญ หรือราว 137 ล้านบาท\n\nขณะที่การแข่งขันในปีหน้า หรือ The International 2020 จะไปแข่งกันที่ประเทศสวีเดน', 0, 'news/f857a736-4cf3-4f3c-9acf-0671a790ef7f.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tb_shop`
--

CREATE TABLE `tb_shop` (
  `shop_code` varchar(13) NOT NULL,
  `shop_name` text NOT NULL,
  `shop_description` text NOT NULL,
  `shop_address` text,
  `shop_tel` varchar(50) DEFAULT NULL,
  `shop_detail` text,
  `shop_latitude` varchar(50) NOT NULL,
  `shop_longitude` varchar(50) NOT NULL,
  `shop_image_name` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_shop`
--

INSERT INTO `tb_shop` (`shop_code`, `shop_name`, `shop_description`, `shop_address`, `shop_tel`, `shop_detail`, `shop_latitude`, `shop_longitude`, `shop_image_name`) VALUES
('S0001', '7-ELEVEN เพื่อนที่รู้ใจ... ใกล้ๆ คุณ', '            บริษัท ซีพี ออลล์ จำกัด (มหาชน) ตระหนักถึงความสำคัญของประเด็นการคุ้มครองข้อมูลส่วนบุคคล ในเครือข่ายอินเทอร์เน็ต บริษัทเชื่อว่าเป็นสิ่งสำคัญต่อท่านที่จะทราบว่า บริษัทจัดการข้อมูลส่วนบุคคลที่ได้รับจากท่านอย่างไร\n', 'ตำบลในเมือง อำเภอเมืองนครราชสีมา นครราชสีมา 30000', '027777777', 'พบสินค้าและโปรโมชั่นจากเซเว่น อีเลฟเว่น พร้อมข่าวสารและกิจกรรมมากมาย อัพเดตก่อนใครทุกเดือน! www.7eleven.co.th.', '14.994983675357448', '102.08315245356425', 'shop/2a3890cf-a136-4308-b1ac-01bb0816d435.jpg'),
('S0002', 'S231', 'S231', 'S231', 'S231', 'S231', 'undefined', 'undefined', 'undefined');

-- --------------------------------------------------------

--
-- Table structure for table `tb_user`
--

CREATE TABLE `tb_user` (
  `user_code` varchar(13) NOT NULL,
  `user_username` varchar(50) NOT NULL,
  `user_password` varchar(200) NOT NULL,
  `user_name` varchar(200) NOT NULL,
  `user_lastname` varchar(200) NOT NULL,
  `user_address` text,
  `user_tel` varchar(50) DEFAULT NULL,
  `user_email` varchar(200) DEFAULT NULL,
  `user_image` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_user`
--

INSERT INTO `tb_user` (`user_code`, `user_username`, `user_password`, `user_name`, `user_lastname`, `user_address`, `user_tel`, `user_email`, `user_image`) VALUES
('U0002', 'admin', 'P@$$W0RD', 'Yanaranop', 'Naulrahaeng', '162/4.', '0925396670', 'yanaranop250mike@gmail.com', 'user/2fc40e87-7973-479f-aef0-a0387880d8b2.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_news`
--
ALTER TABLE `tb_news`
  ADD PRIMARY KEY (`news_code`);

--
-- Indexes for table `tb_shop`
--
ALTER TABLE `tb_shop`
  ADD PRIMARY KEY (`shop_code`);

--
-- Indexes for table `tb_user`
--
ALTER TABLE `tb_user`
  ADD PRIMARY KEY (`user_code`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
