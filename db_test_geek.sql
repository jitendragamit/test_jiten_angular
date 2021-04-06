-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 06, 2021 at 03:05 PM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_test_geek`
--

-- --------------------------------------------------------

--
-- Table structure for table `gamedetails`
--

CREATE TABLE `gamedetails` (
  `Id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `score` int(11) NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gamedetails`
--

INSERT INTO `gamedetails` (`Id`, `user_id`, `score`, `start_time`, `end_time`) VALUES
(1, 14, 2, '09:36:46', '09:36:56'),
(2, 16, 3, '13:32:02', '13:32:07'),
(3, 17, 3, '14:20:17', '14:24:34');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `Id` int(11) NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `nickname` varchar(100) DEFAULT NULL,
  `user_type` varchar(100) NOT NULL DEFAULT 'learner'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`Id`, `username`, `password`, `nickname`, `user_type`) VALUES
(3, 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin', 'admin'),
(14, 'jiten', '02ef428c4cade90c0abe7a614e4163d3', 'alpha', 'learner'),
(17, 'john', '527bd5b5d689e2c32ae974c6229ff785', 'johnnick', 'learner'),
(18, 'test', '098f6bcd4621d373cade4e832627b4f6', 'testn', 'learner');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `gamedetails`
--
ALTER TABLE `gamedetails`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `gamedetails`
--
ALTER TABLE `gamedetails`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
