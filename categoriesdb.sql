-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 07, 2022 at 06:16 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `categoriesdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `CategoryID` int(11) NOT NULL,
  `Name` varchar(500) NOT NULL,
  `Description` varchar(500) NOT NULL,
  `Image` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`CategoryID`, `Name`, `Description`, `Image`) VALUES
(1, 'Hoodie', 'Kidsville Presents this printed Captain America Printed Grey Hoodie For Boys Gives you a trendy look and comfortable feel.', 'WindbreakerCoatCoffee.png'),
(2, 'Suit', 'Cotton Suit Gray Color', 'CottonSuitRed2.png'),
(3, 'T-Shirt & Shorts', 'T-Shirt & Shorts In Multiple Colors', 'ToddlerBoysTshirt&ShortsClothingSet.png'),
(5, 'Frok', 'Baby Green Frok', 'FloralPleatedPleatedSetLightGreen.png');

-- --------------------------------------------------------

--
-- Table structure for table `mycategory`
--

CREATE TABLE `mycategory` (
  `MyCategoryID` int(11) NOT NULL,
  `Name` varchar(500) NOT NULL,
  `Description` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mycategory`
--

INSERT INTO `mycategory` (`MyCategoryID`, `Name`, `Description`) VALUES
(1, 'Hoodie', 'America Printed Multi Colored Hoodie For Boys'),
(2, 'Frok', 'Baby Green');

-- --------------------------------------------------------

--
-- Table structure for table `mycategory_image`
--

CREATE TABLE `mycategory_image` (
  `MyCategoryImageID` int(11) NOT NULL,
  `MyCategoryID` int(11) NOT NULL,
  `Images` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mycategory_image`
--

INSERT INTO `mycategory_image` (`MyCategoryImageID`, `MyCategoryID`, `Images`) VALUES
(1, 1, 'WindbreakerCoatBlack.png,WindbreakerCoatCoffee.png,WindbreakerCoatNavyBlue.png,WindbreakerCoatRainbow.png,WindbreakerCoatYellow.png'),
(2, 2, 'FloralPleatedPleatedSet.png,FloralPleatedPleatedSetLightGreen.png,FloralPleatedPleatedSkirt.png,FloralPleatedPleatedTShirt.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`CategoryID`);

--
-- Indexes for table `mycategory`
--
ALTER TABLE `mycategory`
  ADD PRIMARY KEY (`MyCategoryID`);

--
-- Indexes for table `mycategory_image`
--
ALTER TABLE `mycategory_image`
  ADD PRIMARY KEY (`MyCategoryImageID`),
  ADD KEY `fk_mycategoryimage_mycategory` (`MyCategoryID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `CategoryID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `mycategory`
--
ALTER TABLE `mycategory`
  MODIFY `MyCategoryID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `mycategory_image`
--
ALTER TABLE `mycategory_image`
  MODIFY `MyCategoryImageID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `mycategory_image`
--
ALTER TABLE `mycategory_image`
  ADD CONSTRAINT `fk_mycategoryimage_mycategory` FOREIGN KEY (`MyCategoryID`) REFERENCES `mycategory` (`MyCategoryID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
