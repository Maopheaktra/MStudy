-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 08, 2024 at 08:51 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `school_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `name`, `age`, `email`) VALUES
(1, 'Rivi', 47, 'rpinches0@php.net'),
(2, 'Kordula', 15, 'khawker1@chron.com'),
(3, 'Donnamarie', 37, 'dbattin2@yellowpages.com'),
(4, 'Dorelle', 3, 'dshute3@walmart.com'),
(5, 'Ynez', 67, 'yspikings4@mapquest.com'),
(6, 'Tomasina', 6, 'tamy5@buzzfeed.com'),
(7, 'Birk', 30, 'bdanielsson6@51.la'),
(8, 'Fredrika', 17, 'fwagg7@gizmodo.com'),
(9, 'Royall', 77, 'rcastanaga8@mit.edu'),
(10, 'Rogers', 36, 'rtidbald9@live.com'),
(11, 'Randa', 82, 'rmadrea@nytimes.com'),
(12, 'Lek', 40, 'lgraemeb@utexas.edu'),
(13, 'Maurine', 56, 'mperrellic@hao123.com'),
(14, 'Lianne', 96, 'lmaccagued@uiuc.edu'),
(15, 'Bessie', 26, 'bglassupe@gravatar.com'),
(16, 'Robinet', 54, 'rdoweyf@examiner.com'),
(17, 'Marcy', 100, 'mcobellig@g.co'),
(18, 'Brigida', 97, 'bsollemeh@cbslocal.com'),
(19, 'Dinah', 49, 'dgrimsdykei@google.fr'),
(20, 'Costanza', 75, 'ckayej@hexun.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
