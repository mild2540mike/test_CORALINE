-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 17, 2019 at 02:28 AM
-- Server version: 5.7.17-log
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
-- Table structure for table `tb_news_image`
--

CREATE TABLE `tb_news_image` (
  `news_image_code` varchar(13) NOT NULL,
  `news_code` varchar(13) NOT NULL,
  `news_image_name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
('S0001', '7-ELEVEN เพื่อนที่รู้ใจ... ใกล้ๆ คุณ', '            บริษัท ซีพี ออลล์ จำกัด (มหาชน) ตระหนักถึงความสำคัญของประเด็นการคุ้มครองข้อมูลส่วนบุคคล ในเครือข่ายอินเทอร์เน็ต บริษัทเชื่อว่าเป็นสิ่งสำคัญต่อท่านที่จะทราบว่า บริษัทจัดการข้อมูลส่วนบุคคลที่ได้รับจากท่านอย่างไร\n', 'ตำบลในเมือง อำเภอเมืองนครราชสีมา นครราชสีมา 30000', '027777777', 'พบสินค้าและโปรโมชั่นจากเซเว่น อีเลฟเว่น พร้อมข่าวสารและกิจกรรมมากมาย อัพเดตก่อนใครทุกเดือน! www.7eleven.co.th.', '14.994983675357448', '102.08315245356425', 'shop/2a3890cf-a136-4308-b1ac-01bb0816d435.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tb_shop_image`
--

CREATE TABLE `tb_shop_image` (
  `shop_image_code` varchar(13) NOT NULL,
  `shop_code` varchar(13) NOT NULL,
  `shop_image_name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
('U0001', 'maxky', '0897199541', 'Max', 'Krainok', NULL, '-', '-', ''),
('U0002', 'admin', '123456', 'maxky', '77', '9', '0897199541', 's@asds.com', 'user/3c0cbaaf-55cb-4e9e-8e2b-d2533385400c.png'),
('U0003', '7', '0897199541', '7', '7', '7', '0872428454', '7@7.x', 'user/2d0f1890-e9ca-4bb7-aa48-d307e51c8be8.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_news`
--
ALTER TABLE `tb_news`
  ADD PRIMARY KEY (`news_code`);

--
-- Indexes for table `tb_news_image`
--
ALTER TABLE `tb_news_image`
  ADD PRIMARY KEY (`news_image_code`);

--
-- Indexes for table `tb_shop`
--
ALTER TABLE `tb_shop`
  ADD PRIMARY KEY (`shop_code`);

--
-- Indexes for table `tb_shop_image`
--
ALTER TABLE `tb_shop_image`
  ADD PRIMARY KEY (`shop_image_code`);

--
-- Indexes for table `tb_user`
--
ALTER TABLE `tb_user`
  ADD PRIMARY KEY (`user_code`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
