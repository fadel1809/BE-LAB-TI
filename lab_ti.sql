-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 12, 2024 at 10:44 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lab_ti`
--
-- --------------------------------------------------------

--
-- Table structure for table `detail_pemeriksaan_hardware_ftti1`
--

CREATE TABLE `detail_pemeriksaan_hardware_ftti1` (
  `id` int(11) NOT NULL,
  `id_pemeriksaan_hardware` varchar(50) NOT NULL,
  `id_user` varchar(50) NOT NULL,
  `no_pc` varchar(100) NOT NULL,
  `no_aset` varchar(100) NOT NULL,
  `monitor` varchar(100) NOT NULL,
  `keyboard` varchar(100) NOT NULL,
  `mouse` varchar(100) NOT NULL,
  `cpu` varchar(100) NOT NULL,
  `ram` varchar(100) NOT NULL,
  `motherboard` varchar(100) NOT NULL,
  `vga` varchar(100) NOT NULL,
  `hdd` varchar(100) NOT NULL,
  `ssd` varchar(100) NOT NULL,
  `keterangan` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `detail_pemeriksaan_software_ftti1`
--

CREATE TABLE `detail_pemeriksaan_software_ftti1` (
  `id` int(11) NOT NULL,
  `id_pemeriksaan_software` varchar(50) NOT NULL,
  `id_user` varchar(50) NOT NULL,
  `no_pc` varchar(100) NOT NULL,
  `OS` varchar(100) NOT NULL,
  `jaringan` varchar(100) NOT NULL,
  `chrome` varchar(100) NOT NULL,
  `devc++` varchar(100) NOT NULL,
  `xampp` varchar(100) NOT NULL,
  `netbeans` varchar(100) NOT NULL,
  `office` varchar(100) NOT NULL,
  `matlab` varchar(100) NOT NULL,
  `adobe_reader` varchar(100) NOT NULL,
  `python` varchar(100) NOT NULL,
  `visual_studio` varchar(50) NOT NULL,
  `sublime` varchar(50) NOT NULL,
  `pycharm` varchar(50) NOT NULL,
  `cpu_simulator` varchar(100) NOT NULL,
  `veyon` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `inventaris_pemeriksaan_hardware_ftti1`
--

CREATE TABLE `inventaris_pemeriksaan_hardware_ftti1` (
  `no_pc` varchar(100) NOT NULL,
  `no_aset` varchar(100) NOT NULL,
  `monitor` varchar(100) NOT NULL,
  `keyboard` varchar(100) NOT NULL,
  `mouse` varchar(100) NOT NULL,
  `cpu` varchar(100) NOT NULL,
  `ram` varchar(100) NOT NULL,
  `motherboard` varchar(100) NOT NULL,
  `vga` varchar(100) NOT NULL,
  `hdd` varchar(100) NOT NULL,
  `ssd` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `inventaris_pemeriksaan_hardware_ftti1`
--

INSERT INTO `inventaris_pemeriksaan_hardware_ftti1` (`no_pc`, `no_aset`, `monitor`, `keyboard`, `mouse`, `cpu`, `ram`, `motherboard`, `vga`, `hdd`, `ssd`) VALUES
('1', 'F.A.215.060101.040.1.2022', 'SAMSUNG C24F390FHE', 'Logitech K100', 'Logitech B100', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('2', 'F.A.215.060101.039.1.2022', 'SAMSUNG C24F390FHE', 'Logitech K100', 'Logitech B100', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 4GB', 'SSD VGEN RESCUE 240GB'),
('3', 'F.A.215.060101.038.1.2022', 'SAMSUNG C24F390FHE', 'Logitech K100', 'Logitech B100', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('4', 'F.A.215.060101.037.1.2022', 'SAMSUNG C24F390FHE', 'Logitech K100', 'Logitech B100', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('5', 'F.A.215.060101.036.1.2022', 'SAMSUNG C24F390FHE', 'Logitech K100', 'Logitech B100', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('6', 'F.A.215.060101.035.1.2022', 'SAMSUNG C24F390FHE', 'Logitech K100', 'Logitech B100', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('7', 'F.A.215.060101.034.1.2022', 'SAMSUNG C24F390FHE', 'Logitech K100', 'Logitech B100', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('8', 'F.A.215.060101.033.1.2022', 'SAMSUNG C24F390FHE', 'Logitech K100', 'Logitech B100', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('9', 'F.A.215.060101.032.1.2022', 'SAMSUNG C24F390FHE', 'Logitech K100', 'Logitech B100', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('10', 'F.A.215.060101.031.1.2022', 'SAMSUNG C24F390FHE', 'Logitech K100', 'Logitech B100', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('11', 'F.A.215.060101.021.1.2022', 'SAMSUNG C24F390FHE', 'Logitech K100', 'Logitech B100', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('12', 'F.A.215.060101.022.1.2022', 'SAMSUNG C24F390FHE', 'Logitech K100', 'Logitech B100', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('13', 'F.A.215.060101.023.1.2022', 'SAMSUNG C24F390FHE', 'Logitech K100', 'Logitech B100', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('14', 'F.A.215.060101.024.1.2022', 'SAMSUNG C24F390FHE', 'Logitech K100', 'Logitech B100', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('15', 'F.A.215.060101.025.1.2022', 'SAMSUNG C24F390FHE', 'Logitech K100', 'Logitech M- U0026', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('16', 'F.A.215.060101.026.1.2022', 'SAMSUNG C24F390FHE', 'Logitech K100', 'Logitech B100', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('17', 'F.A.215.060101.027.1.2022', 'SAMSUNG C24F390FHE', 'Logitech K100', 'Logitech B100', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('18', 'F.A.215.060101.028.1.2022', 'SAMSUNG C24F390FHE', 'Logitech Y- U0036', 'Logitech B100', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('19', 'F.A.215.060101.029.1.2022', 'SAMSUNG C24F390FHE', 'Logitech K100', 'Logitech B100', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('20', 'F.A.215.060101.030.1.2022', 'SAMSUNG C24F390FHE', 'Logitech K100', 'Logitech B100', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('21', 'F.A.215.060101.020.1.2022', 'SAMSUNG C24F390FHE', 'Logitech K100', 'Logitech B100', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('22', 'F.A.215.060101.019.1.2022', 'SAMSUNG C24F390FHE', 'Logitech K100', 'Logitech B100', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('23', 'F.A.215.060101.018.1.2022', 'SAMSUNG C24F390FHE', 'Logitech K100', 'Logitech B100', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('24', 'F.A.215.060101.017.1.2022', 'SAMSUNG C24F390FHE', 'Logitech K100', 'Logitech B100', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('25', 'F.A.215.060101.016.1.2022', 'SAMSUNG C24F390FHE', 'Logitech K100', 'Logitech M- U0026', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('26', 'F.A.215.060101.015.1.2022', 'SAMSUNG C24F390FHE', 'Logitech K100', 'Logitech B100', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('27', 'F.A.215.060101.014.1.2022', 'SAMSUNG C24F390FHE', 'Logitech K100', 'Logitech B100', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('28', 'F.A.215.060101.013.1.2022', 'SAMSUNG C24F390FHE', 'Logitech K100', 'Logitech B100', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('29', 'F.A.215.060101.012.1.2022', 'SAMSUNG C24F390FHE', 'Logitech K100', 'Logitech B100', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('30', 'F.A.215.060101.011.1.2022', 'SAMSUNG C24F390FHE', 'Logitech K100', 'Logitech B100', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('31', 'F.A.215.040302.002.1.2019', 'SAMSUNG C24F390FHE', 'Logitech K100', 'Logitech B100', 'i5-3330', '4GB DDR3', 'Gigabyte Tech H61M- DS2 4.0', 'Intel HD Graphics', 'WDC 500GB', 'SSD KINGSTON SA400S37 240GB'),
('32', 'F.A.215.060101.009.1.2022', 'SAMSUNG C24F390FHE', 'KOMIC SR- K8850M', 'Logitech B100', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('33', 'F.A.215.060101.010.1.2022', 'SAMSUNG C24F390FHE', 'Komic KMP-505', 'Logitech B100', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('34', 'F.A.215.060101.001.1.2022', 'SAMSUNG C24F390FHE', 'Komic SR-K303', 'Logitech B100', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('35', 'F.A.215.060101.002.1.2022', 'SAMSUNG C24F390FHE', 'Logitech K100', 'Logitech M- U0026', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('36', 'F.A.215.060101.003.1.2022', 'SAMSUNG C24F390FHE', 'Logitech K100', 'Logitech B100', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('37', 'F.A.215.060101.004.1.2022', 'SAMSUNG C24F390FHE', 'Logitech K100', 'Logitech B100', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('38', 'F.A.215.060101.005.1.2022', 'SAMSUNG C24F390FHE', 'Logitech K100', 'Logitech B100', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('39', 'F.A.215.060101.006.1.2022', 'SAMSUNG C24F390FHE', 'Logitech K100', 'Logitech B100', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('40', 'F.A.215.060101.007.1.2022', 'SAMSUNG C24F390FHE', 'Logitech K100', 'Logitech B100', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB'),
('PC-Dosen', 'F.A.215.060101.008.1.2022', 'SAMSUNG C24F390FHE', 'Logitech Y-U0009', 'Logitech M-U0026', 'i7-11700F', '16GB DDR4', 'ASUS PRIME H510M- E', 'GeForce RTX 3050 8GB', 'SEAGATE 500GB', 'SSD VGEN RESCUE 240GB');

-- --------------------------------------------------------

--
-- Table structure for table `inventaris_pemeriksaan_software_ftti1`
--

CREATE TABLE `inventaris_pemeriksaan_software_ftti1` (
  `no_pc` varchar(100) NOT NULL,
  `OS` varchar(100) NOT NULL,
  `jaringan` varchar(100) NOT NULL,
  `chrome` varchar(100) NOT NULL,
  `devc++` varchar(100) NOT NULL,
  `xampp` varchar(100) NOT NULL,
  `netbeans` varchar(100) NOT NULL,
  `office` varchar(100) NOT NULL,
  `matlab` varchar(100) NOT NULL,
  `adobe_reader` varchar(100) NOT NULL,
  `python` varchar(100) NOT NULL,
  `visual_studio` varchar(100) NOT NULL,
  `sublime` varchar(100) NOT NULL,
  `pycharm` varchar(100) NOT NULL,
  `cpu_simulator` varchar(100) NOT NULL,
  `veyon` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `inventaris_pemeriksaan_software_ftti1`
--

INSERT INTO `inventaris_pemeriksaan_software_ftti1` (`no_pc`, `OS`, `jaringan`, `chrome`, `devc++`, `xampp`, `netbeans`, `office`, `matlab`, `adobe_reader`, `python`, `visual_studio`, `sublime`, `pycharm`, `cpu_simulator`, `veyon`) VALUES
('1', 'WIN 10 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('2', 'WIN 11 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('3', 'WIN 10 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('4', 'WIN 10 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('5', 'WIN 10 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('6', 'WIN 10 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('7', 'WIN 10 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('8', 'WIN 11 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('9', 'WIN 10 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('10', 'WIN 10 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('11', 'WIN 10 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('12', 'WIN 11 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('13', 'WIN 10 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('14', 'WIN 10 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('15', 'WIN 10 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('16', 'WIN 10 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('17', 'WIN 11 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('18', 'WIN 10 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('19', 'WIN 11 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('20', 'WIN 10 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('21', 'WIN 10 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('22', 'WIN 10 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('23', 'WIN 10 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('24', 'WIN 10 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('25', 'WIN 11 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('26', 'WIN 10 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('27', 'WIN 11 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('28', 'WIN 11 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('29', 'WIN 10 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('30', 'WIN 11 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('31', 'WIN 10 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('32', 'WIN 10 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('33', 'WIN 10 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('34', 'WIN 10 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('35', 'WIN 10 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('36', 'WIN 10 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('37', 'WIN 10 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('38', 'WIN 11 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('39', 'WIN 10 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('40', 'WIN 10 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'),
('PC-DOSEN', 'WIN 10 64-bit', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available');

-- --------------------------------------------------------

--
-- Table structure for table `pemeriksaan_hardware`
--

CREATE TABLE `pemeriksaan_hardware` (
  `id` int(11) NOT NULL,
  `periode` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `tanggal` varchar(50) NOT NULL,
  `asisten_lab` varchar(50) NOT NULL,
  `laboratorium` enum('FTTI1','FTTI2','FTTI3','FTTI4') NOT NULL,
  `status_pemeriksaan` enum('pengecekan','validasi','revisi','diterima') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `pemeriksaan_software`
--

CREATE TABLE `pemeriksaan_software` (
  `id` int(11) NOT NULL,
  `periode` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `tanggal` varchar(50) NOT NULL,
  `asisten_lab` varchar(50) NOT NULL,
  `laboratorium` enum('FTTI1','FTTI2','FTTI3','FTTI4') NOT NULL,
  `status_pemeriksaan` enum('pengecekan','validasi','revisi','diterima') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `role` enum('kalab','aslab','laboran') NOT NULL DEFAULT 'aslab'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `role`) VALUES
(1, 'fadel', 'fadel', 'aslab');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `detail_pemeriksaan_hardware_ftti1`
--
ALTER TABLE `detail_pemeriksaan_hardware_ftti1`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `detail_pemeriksaan_software_ftti1`
--
ALTER TABLE `detail_pemeriksaan_software_ftti1`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pemeriksaan_hardware`
--
ALTER TABLE `pemeriksaan_hardware`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pemeriksaan_software`
--
ALTER TABLE `pemeriksaan_software`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `detail_pemeriksaan_hardware_ftti1`
--
ALTER TABLE `detail_pemeriksaan_hardware_ftti1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `detail_pemeriksaan_software_ftti1`
--
ALTER TABLE `detail_pemeriksaan_software_ftti1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pemeriksaan_hardware`
--
ALTER TABLE `pemeriksaan_hardware`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pemeriksaan_software`
--
ALTER TABLE `pemeriksaan_software`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
