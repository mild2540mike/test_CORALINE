-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 12, 2019 at 06:45 AM
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
  `news_deciption` text NOT NULL,
  `news_detail` text NOT NULL,
  `news_show` int(1) NOT NULL,
  `news_image_name` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
  `shop_address` text,
  `shop_tel` varchar(50) DEFAULT NULL,
  `shop_detail` text,
  `shop_latitude` varchar(50) NOT NULL,
  `shop_longitude` varchar(50) NOT NULL,
  `shop_image_name` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
