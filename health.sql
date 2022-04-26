-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 25, 2022 at 08:12 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `health`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `id` varchar(255) NOT NULL,
  `patient_id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `room` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `appointment`
--

INSERT INTO `appointment` (`id`, `patient_id`, `name`, `room`, `date`, `time`) VALUES
('91916ad8-c38d-4930-89d9-651b8fdfe25e', '12312amnsd123', 'a', '101', '12/3/21', '12:00 - 4:00'),
('a696d1c7-792e-4e0c-999c-8309fc892ee4', '01032bec-8af4-4963-b747-f4e3c277aa8c', 'doc3', '101', '', ''),
('d062a777-6217-4d33-bdbc-c19b42083f8b', 'kasjndkjasdkjasdkjaskdasjjkasdkjaskdjas', 'doc2', '', '', ''),
('e39f7d0f-6e7b-414d-9396-a88944e8fd56', '01032bec-8af4-4963-b747-f4e3c277aa8c', 'x', '111', '1/1/21', '1:00');

-- --------------------------------------------------------

--
-- Table structure for table `prescription`
--

CREATE TABLE `prescription` (
  `id` varchar(255) NOT NULL,
  `patient_id` varchar(255) NOT NULL,
  `medicine` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `doctor` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `prescription`
--

INSERT INTO `prescription` (`id`, `patient_id`, `medicine`, `date`, `doctor`) VALUES
('223d4aac-3bea-4792-9d20-dd8180a31304', 'asdasd', '', '', 'doc2'),
('31d5de74-496c-4825-9ede-93c6f40a24ce', '01032bec-8af4-4963-b747-f4e3c277aa8c', 'aha', '1', '22'),
('45d4b91e-c5c3-4e25-815b-1f9dff6f6010', '01032bec-8af4-4963-b747-f4e3c277aa8c', 'napa', '21/1/22', 'doc3'),
('b0354def-862f-438c-adab-a6b184fe0dd1', 'a', 'b', '1:00', 'maruf');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `age` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `password`, `email`, `age`, `gender`, `address`, `type`) VALUES
('01032bec-8af4-4963-b747-f4e3c277aa8c', 'pat', 'pat', '', '', 'male', '', 'patient'),
('47a6e619-0daa-4e63-bbd8-971de408cd95', 'doc2', 'doc', '', '', 'male', '', 'doctor'),
('6a03a16c-eb1b-4ff6-b1d4-39767bdc1941', 'new Doctor', '', '', '', '', '', 'doctor'),
('84f3dc43-94d7-401f-90ad-88e6a7596c68', 'admin', 'admin', '', '', 'male', '', 'admin'),
('88a3d8db-a203-42a2-b422-7699ae2f9e60', 'new Doctor 2', '', '', '', '', '', 'doctor'),
('a6c3a5c9-8b2f-4efe-89d2-ad3306ccf645', 'doc3', 'doc', '', '', 'male', '', 'doctor');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prescription`
--
ALTER TABLE `prescription`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
