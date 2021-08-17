-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 08, 2021 at 10:39 PM
-- Server version: 5.6.51-cll-lve
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `topikoapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `banners`
--

CREATE TABLE `banners` (
  `id` int(11) NOT NULL,
  `business_id` int(11) NOT NULL,
  `banner_image` text NOT NULL,
  `banner_position` varchar(100) NOT NULL,
  `created_date` varchar(100) NOT NULL,
  `expiry_date` varchar(100) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `banners`
--

INSERT INTO `banners` (`id`, `business_id`, `banner_image`, `banner_position`, `created_date`, `expiry_date`, `status`) VALUES
(1, 1, 'https://i.ytimg.com/vi/yQahhVFsbYI/maxresdefault.jpg', '0', '', '', 1),
(2, 1, 'https://i.ytimg.com/vi/FK2m3NkheDc/maxresdefault.jpg', '0', '', '', 1),
(3, 1, 'https://i.ytimg.com/vi/oHfxPhrP1Zs/maxresdefault.jpg', '0', '', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `banner_position`
--

CREATE TABLE `banner_position` (
  `id` int(11) NOT NULL,
  `bid` int(11) NOT NULL,
  `position_id` int(11) NOT NULL,
  `image` longtext NOT NULL,
  `start` date NOT NULL,
  `end` date NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `createdDtm` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `banner_position`
--

INSERT INTO `banner_position` (`id`, `bid`, `position_id`, `image`, `start`, `end`, `status`, `createdDtm`) VALUES
(1, 1, 1, 'https://cdn5.singleinterface.com/files/outlet/outlet_facebook_images/outlet_cover_photo/98910/banner_jpg.jpg', '2021-08-07', '2021-09-07', 1, '2021-08-07 11:07:49'),
(2, 1, 2, 'https://gos3.ibcdn.com/goibibo-offers-1471858246.jpg', '2021-08-07', '2021-09-25', 1, '2021-08-07 11:13:49'),
(3, 1, 2, 'https://www.couponmaal.com/wp-content/uploads/2019/10/redbus-coupons-and-promo-codes.jpg', '2021-08-07', '2021-09-25', 1, '2021-08-07 11:14:03'),
(4, 1, 2, 'https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.ssl.cf3.rackcdn.com/MAX-Friday/Sale-Womenfest21-266Feb2021-a-2.jpg', '2021-08-07', '2021-09-25', 1, '2021-08-07 11:14:28'),
(5, 1, 2, 'https://d18lkz4dllo6v2.cloudfront.net/cumulus_uploads/entry/2019-04-23/oyo.jpg?w=660', '2021-08-07', '2021-09-25', 1, '2021-08-07 11:14:51'),
(6, 1, 3, 'https://roofandfloor.thehindu.com/specials/wp-content/uploads/sites/25/2019/03/Trending-Properties-Banner-1200x400.jpg', '2021-08-07', '2021-09-22', 1, '2021-08-07 11:15:27'),
(7, 1, 4, 'https://images.squarespace-cdn.com/content/v1/5a5dbe4632601eb31977f947/1554171716519-YAB0B56H4QFSMJS93SQ5/ke17ZwdGBToddI8pDm48kPJXHKy2-mnvrsdpGQjlhod7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmihaE5rlzFBImxTetd_yW5btdZx37rH5fuWDtePBPDaHF5LxdCVHkNEqSYPsUQCdT/%23morethananairline.jpg', '2021-08-07', '2021-09-15', 1, '2021-08-07 11:15:58'),
(8, 1, 4, 'https://static.vecteezy.com/system/resources/previews/001/254/905/original/two-colors-restaurant-food-banner-for-social-media-post-vector.jpg', '2021-08-07', '2021-09-15', 1, '2021-08-07 11:16:35'),
(9, 1, 4, 'https://www.manilaonsale.com/wp-content/uploads/2021/01/mcdo-50-off-foodpanda-promo-800x800.jpg', '2021-08-07', '2021-09-15', 1, '2021-08-07 11:17:04'),
(10, 1, 4, 'https://i.pinimg.com/originals/ba/15/73/ba1573e112c26303d8468df1770efeb3.jpg', '2021-08-07', '2021-09-15', 1, '2021-08-07 11:17:25'),
(11, 1, 5, 'https://cdn0.weddingwire.in/emp/fotos/3/7/4/2/r10_2x_31172191-1677889742293839-1339518257157111808-n_15_83742.jpg', '2021-08-07', '2021-09-15', 1, '2021-08-07 11:17:49'),
(12, 1, 5, 'https://i.ytimg.com/vi/N8zp_u4l-4U/maxresdefault.jpg', '2021-08-07', '2021-09-15', 1, '2021-08-07 11:18:16'),
(13, 1, 5, 'https://i.ytimg.com/vi/yQahhVFsbYI/maxresdefault.jpg', '2021-08-07', '2021-09-15', 1, '2021-08-07 11:18:41');

-- --------------------------------------------------------

--
-- Table structure for table `business`
--

CREATE TABLE `business` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `pin` int(10) NOT NULL,
  `business_id` int(10) NOT NULL,
  `business_name` varchar(100) NOT NULL,
  `business_type` varchar(100) NOT NULL,
  `ownership_model` varchar(100) NOT NULL,
  `primary_contact` varchar(100) NOT NULL,
  `owner_name` varchar(100) NOT NULL,
  `business_address` text NOT NULL,
  `tags` text NOT NULL,
  `country` varchar(100) NOT NULL,
  `state` varchar(100) NOT NULL,
  `city` varchar(250) DEFAULT NULL,
  `area` varchar(250) DEFAULT NULL,
  `pincode` varchar(100) NOT NULL,
  `longitude` varchar(100) NOT NULL,
  `latitude` varchar(100) NOT NULL,
  `view` text,
  `busienss_story` text,
  `logo` longtext NOT NULL,
  `created_date` varchar(100) NOT NULL,
  `modified_date` varchar(100) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `business`
--

INSERT INTO `business` (`id`, `user_id`, `pin`, `business_id`, `business_name`, `business_type`, `ownership_model`, `primary_contact`, `owner_name`, `business_address`, `tags`, `country`, `state`, `city`, `area`, `pincode`, `longitude`, `latitude`, `view`, `busienss_story`, `logo`, `created_date`, `modified_date`, `status`) VALUES
(1, 14, 1228, 173001, 'Kalyan Textiles', 'lbusiness', 'eco', '8886677801', 'Kalyan Yadav', 'H.no : 5-288', '', 'ind', 'telangana', 'Khammam', 'khammam', 'pin1', '80.1621441', '17.2502044', 'Textiles', 'Textiles business Started in 2008', 'https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/21406/optimized_large_thumb_stage.jpg', '2021-08-06', '', 1),
(2, 14, 4545, 78456, 'Wipro Informatics ', '', '', '', 'Kiran Kumar', '', '', '', '', 'Khammam', NULL, '', '', '', NULL, NULL, 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/260px-Wipro_Primary_Logo_Color_RGB.svg.png', '2021-08-06', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `business_branches`
--

CREATE TABLE `business_branches` (
  `id` int(11) NOT NULL,
  `busienss_id` varchar(100) NOT NULL,
  `branch_title` varchar(100) NOT NULL,
  `branch_address` text NOT NULL,
  `branch_head` varchar(100) NOT NULL,
  `contact_number` varchar(100) NOT NULL,
  `contact_email` varchar(100) NOT NULL,
  `alternate_number` varchar(100) NOT NULL,
  `status` int(11) NOT NULL,
  `created-date` int(11) NOT NULL,
  `branch_area` text NOT NULL,
  `branch_pincode` varchar(250) NOT NULL,
  `branch_city` varchar(100) NOT NULL,
  `branch_state` varchar(100) NOT NULL,
  `branch_country` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `business_categories`
--

CREATE TABLE `business_categories` (
  `id` int(11) NOT NULL,
  `business_id` varchar(20) NOT NULL,
  `category_id` varchar(20) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `created_date` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `business_categories`
--

INSERT INTO `business_categories` (`id`, `business_id`, `category_id`, `status`, `created_date`) VALUES
(1, '1', '1', 1, 1),
(2, '2', '1', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `business_closing_hours`
--

CREATE TABLE `business_closing_hours` (
  `id` int(11) NOT NULL,
  `business_id` int(11) NOT NULL,
  `sunday` varchar(100) NOT NULL,
  `monday` varchar(100) NOT NULL,
  `tuesday` varchar(100) NOT NULL,
  `wednessday` varchar(100) NOT NULL,
  `thursday` varchar(100) NOT NULL,
  `friday` varchar(100) NOT NULL,
  `saturday` varchar(100) NOT NULL,
  `created_date` varchar(250) NOT NULL,
  `modified_date` varchar(100) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `business_images`
--

CREATE TABLE `business_images` (
  `id` int(11) NOT NULL,
  `bid` int(11) NOT NULL,
  `position` varchar(255) NOT NULL,
  `image` longtext NOT NULL,
  `start` date NOT NULL,
  `end` date NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `business_opening_hours`
--

CREATE TABLE `business_opening_hours` (
  `id` int(11) NOT NULL,
  `business_id` int(11) NOT NULL,
  `sunday` varchar(100) NOT NULL,
  `monday` varchar(100) NOT NULL,
  `tuesday` varchar(100) NOT NULL,
  `wednessday` varchar(100) NOT NULL,
  `thursday` varchar(100) NOT NULL,
  `friday` varchar(100) NOT NULL,
  `saturday` varchar(100) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `modified-date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `business_services`
--

CREATE TABLE `business_services` (
  `id` int(11) NOT NULL,
  `business_id` int(11) NOT NULL,
  `services_id` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `crated_date` varchar(100) NOT NULL,
  `modifird-date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `business_services`
--

INSERT INTO `business_services` (`id`, `business_id`, `services_id`, `status`, `crated_date`, `modifird-date`) VALUES
(1, 1, 1, 1, '2021-08-06', '0000-00-00 00:00:00'),
(2, 2, 1, 1, '2021-08-06', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `business_tags`
--

CREATE TABLE `business_tags` (
  `id` int(11) NOT NULL,
  `business_id` int(11) NOT NULL,
  `tag` varchar(100) NOT NULL,
  `created_date` int(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `call_history`
--

CREATE TABLE `call_history` (
  `id` int(11) NOT NULL,
  `caller_mobile` varchar(100) NOT NULL,
  `calee_mobile` varchar(100) NOT NULL,
  `start_time` varchar(100) NOT NULL,
  `end_time` varchar(100) DEFAULT NULL,
  `status` int(11) NOT NULL,
  `ans_status` int(11) NOT NULL DEFAULT '0',
  `file_path` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `call_history`
--

INSERT INTO `call_history` (`id`, `caller_mobile`, `calee_mobile`, `start_time`, `end_time`, `status`, `ans_status`, `file_path`) VALUES
(15, '8861656026', '8886677800', '2021-08-08 13:46:21', NULL, 1, 0, ''),
(16, '8861656026', '8886677802', '2021-08-08 13:46:33', NULL, 1, 0, ''),
(14, '8861656026', '8886677802', '2021-08-08 13:46:10', NULL, 1, 0, ''),
(13, '8861656026', '9380468459', '2021-08-08 13:45:56', NULL, 1, 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `category` varchar(250) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `image` varchar(250) NOT NULL,
  `display_order` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category`, `created_date`, `image`, `display_order`, `status`) VALUES
(1, 'Agriculture', '2021-02-27 05:45:29', 'Agriculture.png', 0, 1),
(2, 'Automobiles', '2021-02-27 05:45:42', 'Automobiles.png', 0, 1),
(3, 'Baby', '2021-02-27 05:45:54', 'Baby.png', 0, 1),
(4, 'Barber', '2021-02-27 05:46:00', 'Barber.png', 0, 1),
(5, 'spa', '2021-03-31 13:11:41', 'Beauty & Spa.png', 0, 1),
(6, 'Books', '2021-02-27 05:55:13', 'Books.png', 0, 1),
(7, 'Coffee', '2021-02-27 05:56:01', 'Coffee.png', 0, 1),
(8, 'Courier', '2021-02-27 05:56:09', 'Courier.png', 0, 1),
(9, 'Eyewear', '2021-02-27 05:56:17', 'Eyewear.png', 0, 1),
(10, 'Filling Station', '2021-02-27 05:56:27', 'Filling Station.png', 0, 1),
(11, 'Fruits', '2021-02-27 05:56:35', 'Fruits.png', 0, 1),
(12, 'Furniture', '2021-02-27 05:56:49', 'Furniture.png', 0, 1),
(13, 'Gifts & Greetings', '2021-02-27 05:56:59', 'Gifts & Greetings.png', 0, 1),
(14, 'Grocery', '2021-02-27 05:57:08', 'Grocery.png', 0, 1),
(15, 'Gym', '2021-02-27 05:57:41', 'Gym.png', 0, 1),
(16, 'Hospitals & Clinics', '2021-02-27 05:57:54', 'Hospitals & Clinics.png', 0, 1),
(17, 'Hotel', '2021-02-27 05:58:03', 'Hotel.png', 0, 1),
(18, 'Ice Cream', '2021-02-27 05:58:11', 'Ice Cream.png', 0, 1),
(19, 'Jewellery', '2021-02-27 05:58:33', 'Jewellery.png', 0, 1),
(20, 'Mechanic', '2021-02-27 05:58:48', 'Mechanic.png', 0, 1),
(21, 'Medical', '2021-02-27 05:58:59', 'Medical.png', 0, 1),
(22, 'Mobiles & Electronics', '2021-02-27 05:59:10', 'Mobiles & Electronics.png', 0, 1),
(23, 'Music', '2021-02-27 05:59:18', 'Music.png', 0, 1),
(24, 'Real Estate', '2021-02-27 05:59:44', 'Real Estate.png', 0, 1),
(25, 'Restaurant', '2021-02-27 05:59:52', 'Restaurant.png', 0, 1),
(26, 'Sports', '2021-02-27 12:23:49', 'Sports.png', 0, 1),
(27, 'Sweet Shop', '2021-02-27 12:23:44', 'Sweet Shop.png', 0, 1),
(28, 'Tailors', '2021-02-27 12:23:39', 'Tailors.png', 0, 1),
(29, 'Tours & Travels', '2021-02-27 12:23:33', 'Tours & Travels.png', 0, 1),
(30, 'Watches', '2021-02-27 12:23:27', 'Watches.png', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `cc_languages`
--

CREATE TABLE `cc_languages` (
  `id` int(11) NOT NULL,
  `cc_id` int(11) NOT NULL,
  `language` varchar(100) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `chatrooms`
--

CREATE TABLE `chatrooms` (
  `id` int(11) NOT NULL,
  `chatroom` varchar(100) NOT NULL,
  `business_id` int(11) NOT NULL,
  `branchi_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `creted_date` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE `city` (
  `id` int(11) NOT NULL,
  `state_id` int(10) NOT NULL,
  `city_id` int(10) NOT NULL,
  `city_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `city`
--

INSERT INTO `city` (`id`, `state_id`, `city_id`, `city_name`) VALUES
(1, 1, 1, 'Chennai'),
(2, 2, 2, 'Hyderabad');

-- --------------------------------------------------------

--
-- Table structure for table `cms_pages`
--

CREATE TABLE `cms_pages` (
  `id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `country`
--

CREATE TABLE `country` (
  `id` int(11) NOT NULL,
  `country_id` int(10) NOT NULL,
  `country_name` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `country`
--

INSERT INTO `country` (`id`, `country_id`, `country_name`, `status`) VALUES
(1, 91, 'INDIA', 1);

-- --------------------------------------------------------

--
-- Table structure for table `coupon_usage`
--

CREATE TABLE `coupon_usage` (
  `id` int(11) NOT NULL,
  `coupon_id` varchar(100) NOT NULL,
  `user_id` varchar(100) NOT NULL,
  `used_dae` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `customer_care`
--

CREATE TABLE `customer_care` (
  `id` int(11) NOT NULL,
  `business_id` int(11) NOT NULL,
  `branch_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `crated_date` varchar(100) NOT NULL,
  `modified_date` varchar(100) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `digitalcard`
--

CREATE TABLE `digitalcard` (
  `id` int(11) NOT NULL,
  `user_id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `mobile` varchar(10) NOT NULL,
  `country` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `pincode` varchar(255) NOT NULL,
  `address` text NOT NULL,
  `location` text NOT NULL,
  `profession` varchar(255) NOT NULL,
  `workingin` varchar(255) NOT NULL,
  `designation` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `about` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `tags` text NOT NULL,
  `whatsapp` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `linkedin` varchar(255) DEFAULT NULL,
  `twitter` varchar(255) DEFAULT NULL,
  `web` varchar(255) DEFAULT NULL,
  `youtube` varchar(255) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `digitalcard`
--

INSERT INTO `digitalcard` (`id`, `user_id`, `name`, `mobile`, `country`, `state`, `city`, `pincode`, `address`, `location`, `profession`, `workingin`, `designation`, `mail`, `about`, `tags`, `whatsapp`, `facebook`, `linkedin`, `twitter`, `web`, `youtube`, `created`, `updated`) VALUES
(1, 1, 'kalyan', '2147483647', 'INDIA', 'Telangana', 'Hyderabad', '500045', '8-3-68NizampetKhammam', '', 'Proffesional', 'TOPIKO', 'Ui Developer', 'dkalynayadav@gmail.com', 'Ui Developer', 'iam ui developer', NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 7, 'kalyan', '555555555', 'INDIA', 'Telangana', 'Hyderabad', '50045', 'h.no 8-3-68nizampetKhammam', '', 'Proffesional', 'TOPIKO', 'UI DEVELOPER', 'kalyan@topiko.in', 'Iam Ui Developer', 'Ui Developer', NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 8, 'yadav', '2147483647', 'INDIA', 'Telangana', 'Hyderabad', '50045', 'H.no:8-3-68NizampetKhammam', '', 'Proffesional', 'TOPIKO', 'UI Developer', 'kalyan@topiko.in', 'UI Developer', 'UI Developer', NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 9, 'murali', '1234567891', 'INDIA', 'Telangana', 'Chennai', '560078', 'Main Road', '', '', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 9, 'murali', '1234567891', 'INDIA', 'Telangana', 'Chennai', '560078', 'Main Road', '', 'Proffesional', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 8, 'Name', '2147483647', 'INDIA', 'Tamilnadu', 'Hyderabad', '533105', '54 street some city', '', 'Proffesional', 'Workinh', 'work', 'some@gmail.com', 'aefsaed rfgws', 'sedgukjtum  dethd', NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 14, 'yadav', '2147483647', 'INDIA', 'Tamilnadu', 'Chennai', '507001', 'H.no:8-3-68NizampetKhammam', '', 'Proffesional', 'TOPIKO', 'Developer', 'dkalyanyadav@gmail.com', 'iam Developer at Topiko', 'Developer', NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `id` int(11) NOT NULL,
  `image` longtext NOT NULL,
  `name` varchar(255) NOT NULL,
  `mobile` varchar(100) NOT NULL,
  `bid` int(11) NOT NULL,
  `createDTM` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `modified_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `status` int(11) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `employee_previlleges`
--

CREATE TABLE `employee_previlleges` (
  `id` int(11) NOT NULL,
  `emp_id` int(11) NOT NULL DEFAULT '0',
  `chat` int(11) NOT NULL DEFAULT '0',
  `video` int(11) NOT NULL DEFAULT '0',
  `call_permission` int(11) NOT NULL DEFAULT '0',
  `delivery` int(11) NOT NULL DEFAULT '0',
  `recordAcess` int(11) NOT NULL DEFAULT '0',
  `invoice` int(11) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `favourites`
--

CREATE TABLE `favourites` (
  `id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `featured`
--

CREATE TABLE `featured` (
  `id` int(10) NOT NULL,
  `bid` int(10) NOT NULL,
  `start` date NOT NULL,
  `end` date NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `createdDTM` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `featured`
--

INSERT INTO `featured` (`id`, `bid`, `start`, `end`, `status`, `createdDTM`) VALUES
(1, 1, '2021-08-07', '2021-08-08', 1, '2021-08-07 07:14:11');

-- --------------------------------------------------------

--
-- Table structure for table `languages`
--

CREATE TABLE `languages` (
  `id` int(11) NOT NULL,
  `language` varchar(100) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `languages`
--

INSERT INTO `languages` (`id`, `language`, `created_date`) VALUES
(1, 'English', '2021-02-24 05:21:41'),
(2, 'Hindi', '2021-02-24 05:21:41'),
(3, 'Kannada', '2021-02-24 05:21:41'),
(4, 'Malayalam', '2021-02-24 05:21:41'),
(5, 'Tamil', '2021-02-24 05:21:41'),
(6, 'Telugu', '2021-02-24 05:21:41');

-- --------------------------------------------------------

--
-- Table structure for table `logs_table`
--

CREATE TABLE `logs_table` (
  `id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `missed_calls`
--

CREATE TABLE `missed_calls` (
  `id` int(11) NOT NULL,
  `caller_mobile` varchar(100) NOT NULL,
  `calee_mobile` varchar(100) NOT NULL,
  `call_time` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `missed_calls`
--

INSERT INTO `missed_calls` (`id`, `caller_mobile`, `calee_mobile`, `call_time`) VALUES
(1, '8861656026', '8886677801', '2021-03-06 18:34:27'),
(2, '8861656026', '8886677801', '2021-03-07 02:04:44'),
(3, '8861656026', '8886677801', '2021-03-07 03:02:11'),
(4, '8861656026', '8008009911', '2021-03-10 08:00:23'),
(5, '8861656026', '8008009911', '2021-03-10 08:00:28'),
(6, '8861656026', '8008009911', '2021-03-12 07:31:18');

-- --------------------------------------------------------

--
-- Table structure for table `offers`
--

CREATE TABLE `offers` (
  `id` int(11) NOT NULL,
  `business_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `services_id` int(11) NOT NULL,
  `offer` text NOT NULL,
  `image` longtext NOT NULL,
  `start` date NOT NULL,
  `end` date NOT NULL,
  `createdDtm` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `offers`
--

INSERT INTO `offers` (`id`, `business_id`, `category_id`, `services_id`, `offer`, `image`, `start`, `end`, `createdDtm`) VALUES
(1, 1, 1, 1, 'Get Flat 50% off', 'https://myfaayda.com/wp-content/uploads/2017/08/Get-Flat-50-off-on-Shopper-Stop.jpg', '2021-08-07', '2021-08-28', '2021-08-07 08:37:36'),
(2, 2, 1, 1, 'Flat 20% Off on all products\r\n', 'https://whatsonsale.com.pk/sites/default/files/styles/medium/public/deal_images/Limelight%20sale%2023%20april%202020.jpg?itok=-sDU_sAM', '2021-08-07', '2021-08-19', '2021-08-07 08:37:14');

-- --------------------------------------------------------

--
-- Table structure for table `otp`
--

CREATE TABLE `otp` (
  `id` int(11) NOT NULL,
  `mobile` varchar(100) NOT NULL,
  `otp` varchar(100) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `otp`
--

INSERT INTO `otp` (`id`, `mobile`, `otp`, `status`) VALUES
(1, '', '1111', 0),
(2, '', '1111', 0),
(3, '', '1111', 0),
(4, '', '1111', 0),
(5, '7845795621', '1111', 0),
(6, '123456321', '1111', 0),
(7, '5454878751', '1111', 0),
(8, '7878789564', '1111', 0),
(9, '', '1111', 0),
(10, '8861656026', '1111', 1),
(11, '9380468459', '1111', 1),
(12, '9090909090', '1111', 1),
(13, '8080808080', '1111', 1),
(14, '7070707070', '1111', 1),
(15, '1234567890', '1111', 1),
(16, '1231231234', '1111', 1),
(17, '1234512345', '1111', 1),
(18, '1234561234', '1111', 1),
(19, '1111122222', '1111', 1),
(20, '8861656026', '1111', 1),
(21, '9380468459', '1111', 1),
(22, '8861656026', '1111', 1),
(23, '9059856217', '1111', 1),
(24, '8861656026', '1111', 1),
(25, '1234567890', '1111', 1),
(26, '1453145312', '1111', 1),
(27, '9999999999', '1111', 1),
(28, '7777777777', '1111', 1),
(29, '6666666666', '1111', 1),
(30, '8861656026', '1111', 1),
(31, '9380468459', '1111', 1),
(32, '1111111111', '1111', 1),
(33, '54878787548', '1111', 1),
(34, '8886677801', '1111', 1),
(35, '7893813971', '1111', 0),
(36, '8886677802', '1111', 1),
(37, '8886677803', '1111', 0),
(38, '8787854587', '1111', 0),
(39, '8789458768', '1111', 0),
(40, '8784586254', '1111', 1),
(41, '8886677801', '1111', 1),
(42, '8861656026', '1111', 1),
(43, '9380468459', '1111', 1),
(44, '1010101010', '1111', 1),
(45, '1231231234', '1111', 1),
(46, '1231231235', '1111', 1),
(47, '1212121212', '1111', 1),
(48, '1234123412', '1111', 1),
(49, '9898989898', '1111', 1),
(50, '2222233333', '1111', 1),
(51, '4444445555', '1111', 1),
(52, '8886677802', '1111', 1),
(53, '8886677805', '1111', 1),
(54, '8886677800', '1111', 1),
(55, '8888888888', '1111', 1),
(56, '1212121213', '1111', 1),
(57, '8861656026', '1111', 1),
(58, '9380468459', '1111', 1),
(59, '8861656026', '1111', 1),
(60, '1231231256', '1111', 1),
(61, '8861656029', '1111', 1);

-- --------------------------------------------------------

--
-- Table structure for table `personalised_offers`
--

CREATE TABLE `personalised_offers` (
  `id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `business_id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `uom` int(11) NOT NULL,
  `description` text NOT NULL,
  `mrp` varchar(100) NOT NULL,
  `discount` varchar(100) NOT NULL,
  `product_image` text NOT NULL,
  `created_date` varchar(100) NOT NULL,
  `modified_date` varchar(100) NOT NULL,
  `status` int(11) DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product_images`
--

CREATE TABLE `product_images` (
  `id` int(11) NOT NULL,
  `image_type` varchar(255) NOT NULL,
  `image` longtext NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `creatDTM` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product_tags`
--

CREATE TABLE `product_tags` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `tag` varchar(100) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `rewards`
--

CREATE TABLE `rewards` (
  `id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `service` varchar(250) NOT NULL,
  `image` varchar(250) NOT NULL,
  `display_order` int(11) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `service`, `image`, `display_order`, `created_date`) VALUES
(1, 'Electrician', 'Electrician.png', 0, '2021-02-27 06:02:21'),
(2, 'Plumber', 'Plumber.png', 0, '2021-02-27 06:02:29'),
(3, 'Painter', 'Painter.png', 0, '2021-02-27 06:02:38'),
(4, 'Tutions', 'Tutions.png', 0, '2021-02-27 06:02:47'),
(5, 'AC Repair', 'AC Repair.png', 0, '2021-02-27 06:02:54'),
(6, 'Appliance Repair', 'Appliance Repair.png', 0, '2021-02-27 06:03:03'),
(7, 'Cleaning & Disinfection', 'Cleaning & Disinfection.png', 0, '2021-02-27 06:03:11'),
(8, 'Pest Control', 'Pest Control.png', 0, '2021-02-27 06:03:18'),
(9, 'Carpenter', 'Carpenter.png', 0, '2021-02-27 06:03:25'),
(10, 'Pest Control', 'Pest Control.png', 0, '2021-02-27 06:03:34'),
(11, 'Milk Man', 'Milk Man.png', 0, '2021-02-27 06:03:41'),
(12, 'Paper Boy', 'Paper Boy.png', 0, '2021-02-27 06:03:49'),
(13, 'Mechanic', 'Mechanic.png', 0, '2021-02-27 06:03:56');

-- --------------------------------------------------------

--
-- Table structure for table `state`
--

CREATE TABLE `state` (
  `id` int(11) NOT NULL,
  `country_id` int(10) NOT NULL,
  `state_id` int(10) NOT NULL,
  `state_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `state`
--

INSERT INTO `state` (`id`, `country_id`, `state_id`, `state_name`) VALUES
(1, 1, 1, 'Tamilnadu'),
(2, 1, 1, 'Telangana');

-- --------------------------------------------------------

--
-- Table structure for table `store`
--

CREATE TABLE `store` (
  `id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `subscription`
--

CREATE TABLE `subscription` (
  `id` int(11) NOT NULL,
  `country_id` int(11) NOT NULL,
  `plan_name` varchar(100) NOT NULL,
  `currency` varchar(100) NOT NULL,
  `price` varchar(100) NOT NULL,
  `duration` varchar(100) NOT NULL,
  `created_date` varchar(100) NOT NULL,
  `modified_date` varchar(100) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `templates`
--

CREATE TABLE `templates` (
  `id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `transaction_history`
--

CREATE TABLE `transaction_history` (
  `id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(250) DEFAULT NULL,
  `mobile` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `longitude` varchar(100) NOT NULL,
  `latitude` varchar(100) NOT NULL,
  `pincode` varchar(100) NOT NULL,
  `area` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `state` varchar(100) NOT NULL,
  `country` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `address` text,
  `OS` varchar(100) DEFAULT NULL,
  `notification_id` varchar(100) DEFAULT NULL,
  `notification_status` int(11) DEFAULT '1',
  `ip_address` varchar(100) NOT NULL,
  `referral_code` varchar(100) NOT NULL,
  `sponser` varchar(100) NOT NULL,
  `is_into_business` int(11) NOT NULL DEFAULT '0',
  `created_date` varchar(100) NOT NULL,
  `call_state` int(11) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `mobile`, `email`, `longitude`, `latitude`, `pincode`, `area`, `city`, `state`, `country`, `password`, `address`, `OS`, `notification_id`, `notification_status`, `ip_address`, `referral_code`, `sponser`, `is_into_business`, `created_date`, `call_state`) VALUES
(1, 'Kalyan', '8886677801', NULL, '80.1578709', '17.2497205', '507002', 'Kaviraj Nagar', 'Khammam', 'Telangana', 'India', '5787', NULL, '', '1234', 1, '45.127.56.232', '', '', 0, '2021-08-05 12:40:10', 0),
(21, 'android8', '8861656029', NULL, '78.4192667', '17.4715838', 'Telangana', 'Anjaneya Nagar', 'Moosapet', 'Hyderabad', 'Ranga Reddy', '1234', NULL, '', '1234', 1, '49.37.158.154', '', '', 0, '2021-08-08 14:00:36', 0),
(20, 'testcrash', '1231231256', NULL, '78.4192556', '17.4716013', 'Telangana', 'Anjaneya Nagar', 'Moosapet', 'Hyderabad', 'Ranga Reddy', '1234', NULL, '', '1234', 1, '49.37.158.154', '', '', 0, '2021-08-08 13:53:02', 0),
(12, 'Yadav', '8886677802', NULL, '80.1769634', '17.2409342', '', 'Khammam', 'Telangana', 'India', '507002', '1234', NULL, '', '1234', 1, '45.127.56.232', '', '', 0, '2021-08-06 06:15:33', 0),
(13, 'Yadav', '8886677805', NULL, '80.1621441', '17.2502044', '507002', 'Kaviraj Nagar', 'Khammam', 'Telangana', 'India', '7777', NULL, '', '1234', 1, '45.127.56.232', '', '', 0, '2021-08-06 06:46:53', 0),
(14, 'yadav', '8886677800', NULL, '80.1621441', '17.2502044', '507002', 'Kaviraj Nagar', 'Khammam', 'Telangana', 'India', '5787', NULL, '', '1234', 1, '45.127.56.232', '', '', 0, '2021-08-06 07:00:45', 0),
(15, 'Yadav', '8888888888', NULL, '80.1578491', '17.2500619', '507002', 'Kaviraj Nagar', 'Khammam', 'Telangana', 'India', '5787', NULL, '', '1234', 1, '45.127.56.232', '', '', 0, '2021-08-07 07:09:45', 0),
(18, 'pooja', '9380468459', NULL, '78.4192569', '17.4715553', 'Telangana', 'Anjaneya Nagar', 'Moosapet', 'Hyderabad', 'Ranga Reddy', '1234', NULL, '', '1234', 1, '49.37.158.154', '', '', 0, '2021-08-08 13:33:51', 0),
(19, 'kiran', '8861656026', NULL, '78.4192556', '17.4716013', 'Telangana', 'Anjaneya Nagar', 'Moosapet', 'Hyderabad', 'Ranga Reddy', '1234', NULL, '', '1234', 1, '49.37.158.154', '', '', 0, '2021-08-08 13:45:35', 0);

-- --------------------------------------------------------

--
-- Table structure for table `user_interests`
--

CREATE TABLE `user_interests` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `category_id` varchar(100) NOT NULL,
  `service_id` varchar(100) DEFAULT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_qr_code`
--

CREATE TABLE `vehicle_qr_code` (
  `id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `wallet`
--

CREATE TABLE `wallet` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `amount` float NOT NULL,
  `business_id` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `createdDtm` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `web_cms`
--

CREATE TABLE `web_cms` (
  `id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `banners`
--
ALTER TABLE `banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `banner_position`
--
ALTER TABLE `banner_position`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `business`
--
ALTER TABLE `business`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `business_branches`
--
ALTER TABLE `business_branches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `business_categories`
--
ALTER TABLE `business_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `business_closing_hours`
--
ALTER TABLE `business_closing_hours`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `business_images`
--
ALTER TABLE `business_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `business_opening_hours`
--
ALTER TABLE `business_opening_hours`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `business_services`
--
ALTER TABLE `business_services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `business_tags`
--
ALTER TABLE `business_tags`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `call_history`
--
ALTER TABLE `call_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cc_languages`
--
ALTER TABLE `cc_languages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chatrooms`
--
ALTER TABLE `chatrooms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cms_pages`
--
ALTER TABLE `cms_pages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coupon_usage`
--
ALTER TABLE `coupon_usage`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer_care`
--
ALTER TABLE `customer_care`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `digitalcard`
--
ALTER TABLE `digitalcard`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employee_previlleges`
--
ALTER TABLE `employee_previlleges`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `favourites`
--
ALTER TABLE `favourites`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `featured`
--
ALTER TABLE `featured`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `logs_table`
--
ALTER TABLE `logs_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `missed_calls`
--
ALTER TABLE `missed_calls`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `offers`
--
ALTER TABLE `offers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `otp`
--
ALTER TABLE `otp`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personalised_offers`
--
ALTER TABLE `personalised_offers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_images`
--
ALTER TABLE `product_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_tags`
--
ALTER TABLE `product_tags`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rewards`
--
ALTER TABLE `rewards`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `state`
--
ALTER TABLE `state`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `store`
--
ALTER TABLE `store`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscription`
--
ALTER TABLE `subscription`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `templates`
--
ALTER TABLE `templates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transaction_history`
--
ALTER TABLE `transaction_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_interests`
--
ALTER TABLE `user_interests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vehicle_qr_code`
--
ALTER TABLE `vehicle_qr_code`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wallet`
--
ALTER TABLE `wallet`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `web_cms`
--
ALTER TABLE `web_cms`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `banners`
--
ALTER TABLE `banners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `banner_position`
--
ALTER TABLE `banner_position`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `business`
--
ALTER TABLE `business`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `business_branches`
--
ALTER TABLE `business_branches`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `business_categories`
--
ALTER TABLE `business_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `business_closing_hours`
--
ALTER TABLE `business_closing_hours`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `business_images`
--
ALTER TABLE `business_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `business_opening_hours`
--
ALTER TABLE `business_opening_hours`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `business_services`
--
ALTER TABLE `business_services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `business_tags`
--
ALTER TABLE `business_tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `call_history`
--
ALTER TABLE `call_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `cc_languages`
--
ALTER TABLE `cc_languages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `chatrooms`
--
ALTER TABLE `chatrooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `city`
--
ALTER TABLE `city`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `cms_pages`
--
ALTER TABLE `cms_pages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `country`
--
ALTER TABLE `country`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `coupon_usage`
--
ALTER TABLE `coupon_usage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `customer_care`
--
ALTER TABLE `customer_care`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `digitalcard`
--
ALTER TABLE `digitalcard`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `employee_previlleges`
--
ALTER TABLE `employee_previlleges`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `favourites`
--
ALTER TABLE `favourites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `featured`
--
ALTER TABLE `featured`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `languages`
--
ALTER TABLE `languages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `logs_table`
--
ALTER TABLE `logs_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `missed_calls`
--
ALTER TABLE `missed_calls`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `offers`
--
ALTER TABLE `offers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `otp`
--
ALTER TABLE `otp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `personalised_offers`
--
ALTER TABLE `personalised_offers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_images`
--
ALTER TABLE `product_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_tags`
--
ALTER TABLE `product_tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rewards`
--
ALTER TABLE `rewards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `state`
--
ALTER TABLE `state`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `store`
--
ALTER TABLE `store`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subscription`
--
ALTER TABLE `subscription`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `templates`
--
ALTER TABLE `templates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `transaction_history`
--
ALTER TABLE `transaction_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `user_interests`
--
ALTER TABLE `user_interests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vehicle_qr_code`
--
ALTER TABLE `vehicle_qr_code`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `wallet`
--
ALTER TABLE `wallet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `web_cms`
--
ALTER TABLE `web_cms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
