-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 24, 2022 at 02:57 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ucscinternhub`
--

-- --------------------------------------------------------

--
-- Table structure for table `advertisement`
--

CREATE TABLE `advertisement` (
  `advertisement_id` int(20) NOT NULL,
  `title` varchar(255) NOT NULL,
  `job_role` int(5) NOT NULL,
  `job_description` varchar(2000) DEFAULT NULL,
  `requested_interns` int(5) DEFAULT NULL,
  `advertisement_picture` varchar(1000) DEFAULT NULL,
  `advertisement_video` varchar(1000) DEFAULT NULL,
  `advertisement_ref_no` varchar(100) DEFAULT NULL,
  `company_id` int(10) NOT NULL,
  `program_id` int(10) NOT NULL,
  `status` int(5) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `advertisement`
--

INSERT INTO `advertisement` (`advertisement_id`, `title`, `job_role`, `job_description`, `requested_interns`, `advertisement_picture`, `advertisement_video`, `advertisement_ref_no`, `company_id`, `program_id`, `status`) VALUES
(14, 'First  add', 1, 'Descriptio 1', 1, NULL, '', NULL, 39, 1, 1),
(15, 'Second Add', 22, 'Description 2', 2, NULL, '', NULL, 39, 1, 1),
(16, 'Third Add', 16, 'Machine le', 1, NULL, '', NULL, 39, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `advertisement_status`
--

CREATE TABLE `advertisement_status` (
  `id` int(11) NOT NULL,
  `type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `advertisement_status`
--

INSERT INTO `advertisement_status` (`id`, `type`) VALUES
(1, 'Pending to publish'),
(2, 'Published');

-- --------------------------------------------------------

--
-- Table structure for table `advertisement_technologies`
--

CREATE TABLE `advertisement_technologies` (
  `advertisement_id` int(20) NOT NULL,
  `technologies` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `advertisement_technologies`
--

INSERT INTO `advertisement_technologies` (`advertisement_id`, `technologies`) VALUES
(14, 'C++'),
(15, '.Net'),
(16, 'ML');

-- --------------------------------------------------------

--
-- Table structure for table `announcement`
--

CREATE TABLE `announcement` (
  `announcement_id` int(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `body` varchar(3000) NOT NULL,
  `time` varchar(50) DEFAULT NULL,
  `date` varchar(50) DEFAULT NULL,
  `type` int(5) NOT NULL,
  `email_address` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `announcement`
--

INSERT INTO `announcement` (`announcement_id`, `title`, `body`, `time`, `date`, `type`, `email_address`) VALUES
(1, 'heooolow', 'ffffffffffffffffff', '13:12', '2022/095', 1, 'staff@g.com'),
(2, 'hiiii', 'ccccccccccccc', '13:12', '2022/095', 3, 'hhh@g.com'),
(3, 'ggooooo', 'ffffffffffffffffff', '13:12', '2022/095', 2, 'coordinator@g.com'),
(4, 'hiiiifffffffff', 'ccccccccccccc', '13:12', '2022/095', 1, 'jjj@g.co'),
(37, '22', 'body', '10:07:16 PM', '9/17/2022', 1, 'coordinator@g.com'),
(38, 'sddsff', 'sdds', '10:17:25 PM', '9/17/2022', 1, 'coordinator@g.com'),
(39, 'sddsff333', 'dddddd', '10:19:08 PM', '9/17/2022', 2, 'coordinator@g.com'),
(40, '44', 'ddghh', '10:21:28 PM', '9/17/2022', 2, 'coordinator@g.com'),
(41, 'SAas', 'hhhhhhhhhhhh', '10:34:18 AM', '9/18/2022', 3, 'coordinator@g.com');

-- --------------------------------------------------------

--
-- Table structure for table `announcement_types`
--

CREATE TABLE `announcement_types` (
  `id` int(5) NOT NULL,
  `type` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `announcement_types`
--

INSERT INTO `announcement_types` (`id`, `type`) VALUES
(1, 'All'),
(2, 'Student'),
(3, 'Company');

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `company_id` int(10) NOT NULL,
  `name` varchar(200) NOT NULL,
  `registration_number` varchar(100) NOT NULL,
  `date_of_establishment` varchar(50) NOT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `website` varchar(200) NOT NULL,
  `address` varchar(500) NOT NULL,
  `fax_no` int(15) DEFAULT NULL,
  `company_status` int(5) NOT NULL,
  `no_of_employees` int(10) NOT NULL,
  `no_of_project_managers` int(5) NOT NULL,
  `no_of_tech_leads` int(5) NOT NULL,
  `is_registered_other_uni` int(2) NOT NULL,
  `password` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `profile_picture` varchar(1000) DEFAULT NULL,
  `intro_video` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`company_id`, `name`, `registration_number`, `date_of_establishment`, `description`, `website`, `address`, `fax_no`, `company_status`, `no_of_employees`, `no_of_project_managers`, `no_of_tech_leads`, `is_registered_other_uni`, `password`, `username`, `profile_picture`, `intro_video`) VALUES
(39, '33etx', 'eextt', '2002/8/5', NULL, 'weeeb.link.com', 'eexaddress', NULL, 1, 300, 22, 21, 1, '$2b$10$GUfNBH379LUUIWL75YVuIuTlUpoDBp.LAjVM45bn8WzT7kjrcG6a.', 'company', NULL, NULL),
(41, '32yt', 'jjjj', '2002/8/5', NULL, 'weeeb.link.com', 'eexaddress', NULL, 2, 300, 22, 21, 1, '', 'ggg', NULL, NULL),
(42, '449jj', 'hhk', '2002/8/5', NULL, 'weeeb.link.com', 'eexaddress', NULL, 3, 300, 22, 21, 1, '', 'gkkllew', NULL, NULL),
(43, '89jff', 'jjjjffdfdf', '2002/8/5', NULL, 'weeeb.link.com', 'eexaddress', NULL, 2, 300, 22, 21, 1, '', 'll', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `company_clients`
--

CREATE TABLE `company_clients` (
  `company_id` int(10) NOT NULL,
  `client` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `company_clients`
--

INSERT INTO `company_clients` (`company_id`, `client`) VALUES
(39, 'test client');

-- --------------------------------------------------------

--
-- Table structure for table `company_contacts`
--

CREATE TABLE `company_contacts` (
  `company_id` int(10) NOT NULL,
  `telephone_no` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `company_contacts`
--

INSERT INTO `company_contacts` (`company_id`, `telephone_no`) VALUES
(39, 76558),
(41, 4444),
(42, 765585),
(43, 76558654);

-- --------------------------------------------------------

--
-- Table structure for table `company_events`
--

CREATE TABLE `company_events` (
  `event_id` int(20) NOT NULL,
  `company_id` int(10) NOT NULL,
  `topic` varchar(100) NOT NULL,
  `time` varchar(50) DEFAULT NULL,
  `event_picture` varchar(100) DEFAULT NULL,
  `event_video` varchar(100) DEFAULT NULL,
  `body` varchar(2000) NOT NULL,
  `date` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `company_hr`
--

CREATE TABLE `company_hr` (
  `company_id` int(10) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(100) NOT NULL,
  `landline_no` int(15) DEFAULT NULL,
  `mobile_no` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `company_hr`
--

INSERT INTO `company_hr` (`company_id`, `name`, `email`, `landline_no`, `mobile_no`) VALUES
(39, 'Amunugama', 'test@g.com', 918544, 7586663);

-- --------------------------------------------------------

--
-- Table structure for table `company_notification`
--

CREATE TABLE `company_notification` (
  `notification_id` int(100) NOT NULL,
  `company_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `company_partners`
--

CREATE TABLE `company_partners` (
  `company_id` int(10) NOT NULL,
  `partners` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `company_partners`
--

INSERT INTO `company_partners` (`company_id`, `partners`) VALUES
(39, 'revix');

-- --------------------------------------------------------

--
-- Table structure for table `company_status_types`
--

CREATE TABLE `company_status_types` (
  `id` int(5) NOT NULL,
  `type` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `company_status_types`
--

INSERT INTO `company_status_types` (`id`, `type`) VALUES
(1, 'Pending to accept'),
(2, 'Active'),
(3, 'Inactive');

-- --------------------------------------------------------

--
-- Table structure for table `company_visit`
--

CREATE TABLE `company_visit` (
  `company_visit_id` int(15) NOT NULL,
  `company_id` int(10) NOT NULL,
  `email_address` varchar(100) NOT NULL,
  `date` varchar(50) NOT NULL,
  `start_time` varchar(50) NOT NULL,
  `company_visit_type` int(5) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `company_visit`
--

INSERT INTO `company_visit` (`company_visit_id`, `company_id`, `email_address`, `date`, `start_time`, `company_visit_type`, `status`) VALUES
(1, 41, 'hhh@g.co', '2022/095', '12', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `company_visit_status_types`
--

CREATE TABLE `company_visit_status_types` (
  `id` int(11) NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `company_visit_status_types`
--

INSERT INTO `company_visit_status_types` (`id`, `status`) VALUES
(1, 'Not visited'),
(2, 'Visited'),
(3, 'Cancelled ');

-- --------------------------------------------------------

--
-- Table structure for table `company_visit_types`
--

CREATE TABLE `company_visit_types` (
  `id` int(5) NOT NULL,
  `type` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `company_visit_types`
--

INSERT INTO `company_visit_types` (`id`, `type`) VALUES
(1, 'Online'),
(2, 'Onsite');

-- --------------------------------------------------------

--
-- Table structure for table `internships`
--

CREATE TABLE `internships` (
  `internship_id` int(20) NOT NULL,
  `job_role` int(5) NOT NULL,
  `started_date` varchar(50) NOT NULL,
  `index_number` int(10) NOT NULL,
  `company_id` int(10) NOT NULL,
  `supervisor_id` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `internship_program`
--

CREATE TABLE `internship_program` (
  `program_id` int(10) NOT NULL,
  `batch_no` int(10) DEFAULT NULL,
  `start_date` varchar(50) NOT NULL,
  `end_date` varchar(50) DEFAULT NULL,
  `status` int(5) NOT NULL DEFAULT 1,
  `is_active` int(5) NOT NULL DEFAULT 1,
  `email_address` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `internship_program`
--

INSERT INTO `internship_program` (`program_id`, `batch_no`, `start_date`, `end_date`, `status`, `is_active`, `email_address`) VALUES
(1, NULL, '2020-1-05', NULL, 1, 1, 'coordinator@g.com');

-- --------------------------------------------------------

--
-- Table structure for table `internship_program_status`
--

CREATE TABLE `internship_program_status` (
  `id` int(11) NOT NULL,
  `type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `internship_program_status`
--

INSERT INTO `internship_program_status` (`id`, `type`) VALUES
(1, '1st Phase'),
(2, '2nd Phase'),
(3, '3rd Phase');

-- --------------------------------------------------------

--
-- Table structure for table `interview`
--

CREATE TABLE `interview` (
  `interview_id` int(100) NOT NULL,
  `company_id` int(10) NOT NULL,
  `index_number` int(10) NOT NULL,
  `date` varchar(50) NOT NULL,
  `start_time` varchar(50) NOT NULL,
  `end_time` varchar(20) DEFAULT NULL,
  `interview_type` int(5) NOT NULL,
  `interview_status` int(5) DEFAULT 1,
  `advertiesment_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `interview`
--

INSERT INTO `interview` (`interview_id`, `company_id`, `index_number`, `date`, `start_time`, `end_time`, `interview_type`, `interview_status`, `advertiesment_id`) VALUES
(11, 39, 354335, '2022-10-24', '2022-10-24T12:40:44.772Z', NULL, 2, 1, NULL),
(12, 39, 19000219, '2022-10-24', '2022-10-24T12:40:57.009Z', NULL, 2, 1, NULL),
(13, 39, 354335, '2022-10-21', '2022-10-24T12:41:51.224Z', NULL, 1, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `interview_decline_message`
--

CREATE TABLE `interview_decline_message` (
  `id` int(11) NOT NULL,
  `interview_id` int(11) NOT NULL,
  `message` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `interview_status_types`
--

CREATE TABLE `interview_status_types` (
  `id` int(5) NOT NULL,
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `interview_status_types`
--

INSERT INTO `interview_status_types` (`id`, `status`) VALUES
(1, 'Pending response'),
(2, 'Accepted'),
(3, 'Declined'),
(4, 'Canceled'),
(5, 'Done');

-- --------------------------------------------------------

--
-- Table structure for table `job_roles`
--

CREATE TABLE `job_roles` (
  `id` int(11) NOT NULL,
  `job_role` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `job_roles`
--

INSERT INTO `job_roles` (`id`, `job_role`) VALUES
(1, 'Application Engineer'),
(2, 'Automation Engineer'),
(3, 'Business Analyst'),
(4, 'Cyber Security'),
(5, 'Data Analyst'),
(6, 'Database'),
(7, 'DevOps Engineer'),
(8, 'Process Transformation and ERP Advisory Services\r\n'),
(9, 'Game Development'),
(10, 'Information System Audit / System Implementation'),
(11, 'IOT'),
(12, 'Image processing'),
(13, 'Information Security Engineer'),
(14, 'IT Operations Engineer /Cloud Operation Engineer'),
(15, 'Mobile Application Developer'),
(16, 'Machine learning'),
(17, 'Network Administrator'),
(18, 'Project Manager'),
(19, 'Quality Assurance Engineer'),
(20, 'Research & Development\r\n'),
(21, 'Software Engineer'),
(22, 'Software Engineer _ .NET'),
(23, 'Software Engineer _ C++/ C'),
(24, 'Software Engineer - Customer Success'),
(25, 'Software Engineer _Digital Transformation'),
(26, 'Software Engineer _ Full Stack'),
(27, 'Software Engineer _JAVA'),
(28, 'Support Engineer'),
(29, 'System Developer / System Engineer'),
(30, 'UI/UX Engineer / FrontEnd Development'),
(31, 'Visual Analysis'),
(32, 'Web Developer'),
(33, 'Other');

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `notification_id` int(100) NOT NULL,
  `message` varchar(1000) NOT NULL,
  `date` varchar(50) NOT NULL,
  `link` varchar(100) NOT NULL,
  `time` varchar(50) NOT NULL,
  `status` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `pdc`
--

CREATE TABLE `pdc` (
  `email_address` varchar(100) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `profile_picture` varchar(100) DEFAULT NULL,
  `role` int(5) NOT NULL,
  `is_active` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pdc`
--

INSERT INTO `pdc` (`email_address`, `first_name`, `last_name`, `password`, `profile_picture`, `role`, `is_active`) VALUES
('coordinator@g.com', 'Saman', 'Rathnapriya', '$2b$10$zXlTqFamI4RRI3HTIlM4l.AOeNy3zRPRZVcSJnKrjZKtfQs1JH/T.', NULL, 1, 0),
('fhdghd@gg.com', 'ggfdg', 'fgdf', '$2b$10$uBxkYGsYd.4U8VCh8P1KJeQVorqkEdqUtEHiKzmhQBc1n4TXfvcRa', NULL, 2, 0),
('hhh@g.co', 'fn', 'sn', '$2b$10$.Dh3/t0jay0a73frH/Z3KuSMOXxumyR3mHwY0J5GZuOZeTNSjqCce', NULL, 2, 0),
('hhh@g.com', 'fn', 'sn', '$2b$10$DTvUIkVi6v6T5PwEXQFDk.y0P2FCtjSLUHGJp60irPFbw1Wb3aKG6', NULL, 2, 0),
('jjj@g.co', 'tretr', 'vbvc', '$2b$10$F6o7pv41L7JEXuET.xX1eOGxH3ndNE1LANHuobBsp8DCv/.Yegfvy', NULL, 2, 0),
('pe@e.com', 'Prmila', 'wasana', '$2b$10$5Zmtq1yIHu1DHp5UYo2aHeVOXi3ljZU2JTH4iOeBNV6cS.JkavSjy', NULL, 2, 0),
('staff@g.com', 'Amal', 'Rathnapriya', '$2b$10$gi4.tgogNL0aBtZxJFqIEeJrPMVmgiXybm2.FthPUCbw5HnUg7rPq', NULL, 2, 0),
('support@star-clicks.com', 'nn', 'mm', '$2b$10$cZlN3sEQhAxFBSU6Si/JZugsQtuZl.nyWWX4KOSE71wgoYpzmf2bi', NULL, 2, 0);

-- --------------------------------------------------------

--
-- Table structure for table `pdc_member_is_active`
--

CREATE TABLE `pdc_member_is_active` (
  `id` int(10) NOT NULL,
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pdc_member_is_active`
--

INSERT INTO `pdc_member_is_active` (`id`, `status`) VALUES
(1, 'inactive'),
(2, 'active');

-- --------------------------------------------------------

--
-- Table structure for table `pdc_notification`
--

CREATE TABLE `pdc_notification` (
  `notification_id` int(100) NOT NULL,
  `email_address` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `pdc_role`
--

CREATE TABLE `pdc_role` (
  `id` int(5) NOT NULL,
  `role` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pdc_role`
--

INSERT INTO `pdc_role` (`id`, `role`) VALUES
(1, 'Coordinator'),
(2, 'Staff Member');

-- --------------------------------------------------------

--
-- Table structure for table `report_handle`
--

CREATE TABLE `report_handle` (
  `report_id` int(100) NOT NULL,
  `email_address` varchar(100) NOT NULL,
  `deadline_date` varchar(50) NOT NULL,
  `deadline_time` varchar(50) NOT NULL,
  `report_link` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `report_status_types`
--

CREATE TABLE `report_status_types` (
  `id` int(5) NOT NULL,
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `report_type`
--

CREATE TABLE `report_type` (
  `id` int(5) NOT NULL,
  `type` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `index_number` int(10) NOT NULL,
  `registration_number` varchar(20) NOT NULL,
  `name` varchar(100) NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  `nic` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `cv` varchar(100) DEFAULT NULL,
  `intro_video` varchar(100) DEFAULT NULL,
  `profile_picture` varchar(100) DEFAULT NULL,
  `student_status` int(5) DEFAULT 1,
  `degree` int(5) NOT NULL,
  `gpa` varchar(10) NOT NULL,
  `about_me` varchar(1000) DEFAULT NULL,
  `github` varchar(100) DEFAULT NULL,
  `linkedin` varchar(100) DEFAULT NULL,
  `facebook` varchar(100) DEFAULT NULL,
  `preferred_role` varchar(100) DEFAULT NULL,
  `program_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`index_number`, `registration_number`, `name`, `password`, `nic`, `email`, `cv`, `intro_video`, `profile_picture`, `student_status`, `degree`, `gpa`, `about_me`, `github`, `linkedin`, `facebook`, `preferred_role`, `program_id`) VALUES
(77777, '43rfewf23', 'ghgf', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, '2', NULL, NULL, NULL, NULL, NULL, 1),
(354335, '20255cc', 'R.U.B.Rube', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, '1', NULL, NULL, NULL, NULL, NULL, 1),
(789555, '2019dd699', 'pp.sin', '$2b$10$zXlTqFamI4RRI3HTIlM4l.AOeNy3zRPRZVcSJnKrjZKtfQs1JH/T.', NULL, NULL, NULL, NULL, NULL, 1, 1, '2', NULL, NULL, NULL, NULL, NULL, 1),
(19000219, '2019cs128', 'Chamath Madhushanka', '$2b$10$6FsTA00eq.56RzxuznrB5OY3/V9AKqgI583le/9BCrXKXeyaqgsEi', NULL, 'Chamath@gmail.com', NULL, NULL, NULL, 1, 1, '', 'dhfladjhfasdf', 'https://mail.google.com/mail/u/0/?ogbl#inbox', 'https://mail.google.com/mail/u/0/?ogbl#inbox', 'https://mail.google.com/mail/u/0/?ogbl#inbox', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `student_academic_qualifications`
--

CREATE TABLE `student_academic_qualifications` (
  `index_number` int(10) NOT NULL,
  `qualification` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `student_applied_internships`
--

CREATE TABLE `student_applied_internships` (
  `index_number` int(10) NOT NULL,
  `advertisement_id` int(20) NOT NULL,
  `is_wish_list` int(2) NOT NULL DEFAULT 0,
  `company_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student_applied_internships`
--

INSERT INTO `student_applied_internships` (`index_number`, `advertisement_id`, `is_wish_list`, `company_id`) VALUES
(354335, 16, 0, 39),
(789555, 15, 0, 39),
(19000219, 14, 0, 39);

-- --------------------------------------------------------

--
-- Table structure for table `student_availability`
--

CREATE TABLE `student_availability` (
  `index_number` int(10) NOT NULL,
  `date` varchar(100) NOT NULL,
  `start_time` varchar(20) NOT NULL,
  `end_time` varchar(20) NOT NULL,
  `availability_status` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `student_degree`
--

CREATE TABLE `student_degree` (
  `id` int(10) NOT NULL,
  `degree` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student_degree`
--

INSERT INTO `student_degree` (`id`, `degree`) VALUES
(1, 'CS - 3rd Year'),
(2, 'IS - 3rd Year'),
(3, 'CS - 4th Year'),
(4, 'IS - 4th Year');

-- --------------------------------------------------------

--
-- Table structure for table `student_notification`
--

CREATE TABLE `student_notification` (
  `notification_id` int(100) NOT NULL,
  `index_number` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `student_preferred_job_role`
--

CREATE TABLE `student_preferred_job_role` (
  `index_number` int(10) NOT NULL,
  `job_role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student_preferred_job_role`
--

INSERT INTO `student_preferred_job_role` (`index_number`, `job_role`) VALUES
(19000219, 21),
(19000219, 27);

-- --------------------------------------------------------

--
-- Table structure for table `student_reports`
--

CREATE TABLE `student_reports` (
  `id` int(10) NOT NULL,
  `report_id` int(100) NOT NULL,
  `report_type` int(5) NOT NULL,
  `date` varchar(50) NOT NULL,
  `time` varchar(50) NOT NULL,
  `report_link` varchar(1000) DEFAULT NULL,
  `report_status` int(5) NOT NULL,
  `feedback` varchar(300) DEFAULT NULL,
  `internship_id` int(20) NOT NULL,
  `supervisor_id` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `student_status_type`
--

CREATE TABLE `student_status_type` (
  `id` int(5) NOT NULL,
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student_status_type`
--

INSERT INTO `student_status_type` (`id`, `status`) VALUES
(1, 'Pitching Stage - Round 1'),
(2, 'Pitching Stage - Round 2'),
(3, 'Pitching Stage - Round 3'),
(4, 'Selected');

-- --------------------------------------------------------

--
-- Table structure for table `student_work_experience`
--

CREATE TABLE `student_work_experience` (
  `index_number` int(10) NOT NULL,
  `experience` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `supervisor`
--

CREATE TABLE `supervisor` (
  `supervisor_id` int(10) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `profile_picture` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `company_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `supervisor`
--

INSERT INTO `supervisor` (`supervisor_id`, `name`, `email`, `profile_picture`, `password`, `company_id`) VALUES
(12, 'Susantha Wickrama', 'sus@g.com', '$2b$10$GUfNBH379LUUIWL75YVuIuTlUpoDBp.LAjVM45bn8WzT7kjrcG6a.', '$2b$10$GUfNBH379LUUIWL75YVuIuTlUpoDBp.LAjVM45bn8WzT7kjrcG6a.', 39),
(21, 'gayantha', 'ggg@g.com', NULL, NULL, 39),
(22, 'mannn', 'g@dddd.co', NULL, NULL, 39),
(23, 'nnam', 'ffff@g.com', NULL, NULL, 39),
(24, 'hjtyyu', 'ythgf@g.com', NULL, NULL, 39),
(25, 'cbvcb', 'hghf@gg.co', NULL, NULL, 39),
(26, 'cvxcv', 'dfd@g.co', NULL, NULL, 39);

-- --------------------------------------------------------

--
-- Table structure for table `supervisor_notification`
--

CREATE TABLE `supervisor_notification` (
  `notification_id` int(100) NOT NULL,
  `supervisor_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `advertisement`
--
ALTER TABLE `advertisement`
  ADD PRIMARY KEY (`advertisement_id`),
  ADD KEY `company_id` (`company_id`),
  ADD KEY `program_id` (`program_id`),
  ADD KEY `job_role` (`job_role`),
  ADD KEY `status` (`status`);

--
-- Indexes for table `advertisement_status`
--
ALTER TABLE `advertisement_status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `advertisement_technologies`
--
ALTER TABLE `advertisement_technologies`
  ADD PRIMARY KEY (`advertisement_id`,`technologies`);

--
-- Indexes for table `announcement`
--
ALTER TABLE `announcement`
  ADD PRIMARY KEY (`announcement_id`),
  ADD KEY `email_address` (`email_address`),
  ADD KEY `type` (`type`);

--
-- Indexes for table `announcement_types`
--
ALTER TABLE `announcement_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`company_id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `registration_number` (`registration_number`),
  ADD KEY `company_status` (`company_status`);

--
-- Indexes for table `company_clients`
--
ALTER TABLE `company_clients`
  ADD PRIMARY KEY (`company_id`,`client`);

--
-- Indexes for table `company_contacts`
--
ALTER TABLE `company_contacts`
  ADD PRIMARY KEY (`company_id`,`telephone_no`);

--
-- Indexes for table `company_events`
--
ALTER TABLE `company_events`
  ADD PRIMARY KEY (`event_id`,`company_id`),
  ADD KEY `company_id` (`company_id`);

--
-- Indexes for table `company_hr`
--
ALTER TABLE `company_hr`
  ADD PRIMARY KEY (`company_id`);

--
-- Indexes for table `company_notification`
--
ALTER TABLE `company_notification`
  ADD PRIMARY KEY (`notification_id`,`company_id`),
  ADD KEY `company_id` (`company_id`);

--
-- Indexes for table `company_partners`
--
ALTER TABLE `company_partners`
  ADD PRIMARY KEY (`company_id`,`partners`);

--
-- Indexes for table `company_status_types`
--
ALTER TABLE `company_status_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `company_visit`
--
ALTER TABLE `company_visit`
  ADD PRIMARY KEY (`company_visit_id`,`company_id`,`email_address`),
  ADD KEY `company_id` (`company_id`),
  ADD KEY `email_address` (`email_address`),
  ADD KEY `company_visit_type` (`company_visit_type`),
  ADD KEY `status` (`status`);

--
-- Indexes for table `company_visit_status_types`
--
ALTER TABLE `company_visit_status_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `company_visit_types`
--
ALTER TABLE `company_visit_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `internships`
--
ALTER TABLE `internships`
  ADD PRIMARY KEY (`internship_id`),
  ADD KEY `index_number` (`index_number`),
  ADD KEY `company_id` (`company_id`),
  ADD KEY `supervisor_id` (`supervisor_id`),
  ADD KEY `job_role` (`job_role`);

--
-- Indexes for table `internship_program`
--
ALTER TABLE `internship_program`
  ADD PRIMARY KEY (`program_id`),
  ADD KEY `email_address` (`email_address`),
  ADD KEY `status` (`status`);

--
-- Indexes for table `internship_program_status`
--
ALTER TABLE `internship_program_status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `interview`
--
ALTER TABLE `interview`
  ADD PRIMARY KEY (`interview_id`,`company_id`,`index_number`),
  ADD UNIQUE KEY `interview_id` (`interview_id`),
  ADD KEY `company_id` (`company_id`),
  ADD KEY `index_number` (`index_number`),
  ADD KEY `interview_type` (`interview_type`),
  ADD KEY `interview_status` (`interview_status`),
  ADD KEY `advertiesment_id` (`advertiesment_id`);

--
-- Indexes for table `interview_decline_message`
--
ALTER TABLE `interview_decline_message`
  ADD PRIMARY KEY (`id`),
  ADD KEY `interview_id` (`interview_id`);

--
-- Indexes for table `interview_status_types`
--
ALTER TABLE `interview_status_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `job_roles`
--
ALTER TABLE `job_roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`notification_id`);

--
-- Indexes for table `pdc`
--
ALTER TABLE `pdc`
  ADD PRIMARY KEY (`email_address`),
  ADD KEY `role` (`role`);

--
-- Indexes for table `pdc_member_is_active`
--
ALTER TABLE `pdc_member_is_active`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pdc_notification`
--
ALTER TABLE `pdc_notification`
  ADD PRIMARY KEY (`notification_id`,`email_address`),
  ADD KEY `email_address` (`email_address`);

--
-- Indexes for table `pdc_role`
--
ALTER TABLE `pdc_role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `report_handle`
--
ALTER TABLE `report_handle`
  ADD PRIMARY KEY (`report_id`,`email_address`),
  ADD UNIQUE KEY `report_id` (`report_id`),
  ADD KEY `email_address` (`email_address`);

--
-- Indexes for table `report_status_types`
--
ALTER TABLE `report_status_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `report_type`
--
ALTER TABLE `report_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`index_number`),
  ADD KEY `program_id` (`program_id`),
  ADD KEY `student_status` (`student_status`),
  ADD KEY `degree` (`degree`);

--
-- Indexes for table `student_academic_qualifications`
--
ALTER TABLE `student_academic_qualifications`
  ADD PRIMARY KEY (`index_number`,`qualification`);

--
-- Indexes for table `student_applied_internships`
--
ALTER TABLE `student_applied_internships`
  ADD PRIMARY KEY (`index_number`,`advertisement_id`),
  ADD KEY `advertisement_id` (`advertisement_id`),
  ADD KEY `company_id` (`company_id`);

--
-- Indexes for table `student_availability`
--
ALTER TABLE `student_availability`
  ADD PRIMARY KEY (`index_number`);

--
-- Indexes for table `student_degree`
--
ALTER TABLE `student_degree`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student_notification`
--
ALTER TABLE `student_notification`
  ADD PRIMARY KEY (`notification_id`,`index_number`),
  ADD KEY `index_number` (`index_number`);

--
-- Indexes for table `student_preferred_job_role`
--
ALTER TABLE `student_preferred_job_role`
  ADD PRIMARY KEY (`index_number`,`job_role`),
  ADD KEY `job_role` (`job_role`);

--
-- Indexes for table `student_reports`
--
ALTER TABLE `student_reports`
  ADD PRIMARY KEY (`id`),
  ADD KEY `internship_id` (`internship_id`),
  ADD KEY `supervisor_id` (`supervisor_id`),
  ADD KEY `report_type` (`report_type`),
  ADD KEY `report_status` (`report_status`),
  ADD KEY `report_id` (`report_id`);

--
-- Indexes for table `student_status_type`
--
ALTER TABLE `student_status_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student_work_experience`
--
ALTER TABLE `student_work_experience`
  ADD PRIMARY KEY (`index_number`,`experience`);

--
-- Indexes for table `supervisor`
--
ALTER TABLE `supervisor`
  ADD PRIMARY KEY (`supervisor_id`),
  ADD KEY `company_id` (`company_id`);

--
-- Indexes for table `supervisor_notification`
--
ALTER TABLE `supervisor_notification`
  ADD PRIMARY KEY (`notification_id`,`supervisor_id`),
  ADD KEY `supervisor_id` (`supervisor_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `advertisement`
--
ALTER TABLE `advertisement`
  MODIFY `advertisement_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `advertisement_status`
--
ALTER TABLE `advertisement_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `announcement`
--
ALTER TABLE `announcement`
  MODIFY `announcement_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `announcement_types`
--
ALTER TABLE `announcement_types`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `company_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `company_events`
--
ALTER TABLE `company_events`
  MODIFY `event_id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `company_status_types`
--
ALTER TABLE `company_status_types`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `company_visit`
--
ALTER TABLE `company_visit`
  MODIFY `company_visit_id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `company_visit_status_types`
--
ALTER TABLE `company_visit_status_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `company_visit_types`
--
ALTER TABLE `company_visit_types`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `internships`
--
ALTER TABLE `internships`
  MODIFY `internship_id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `internship_program`
--
ALTER TABLE `internship_program`
  MODIFY `program_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `internship_program_status`
--
ALTER TABLE `internship_program_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `interview`
--
ALTER TABLE `interview`
  MODIFY `interview_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `interview_decline_message`
--
ALTER TABLE `interview_decline_message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `interview_status_types`
--
ALTER TABLE `interview_status_types`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `job_roles`
--
ALTER TABLE `job_roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `pdc_member_is_active`
--
ALTER TABLE `pdc_member_is_active`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `pdc_role`
--
ALTER TABLE `pdc_role`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `report_status_types`
--
ALTER TABLE `report_status_types`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `report_type`
--
ALTER TABLE `report_type`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `student_degree`
--
ALTER TABLE `student_degree`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `student_reports`
--
ALTER TABLE `student_reports`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `student_status_type`
--
ALTER TABLE `student_status_type`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `supervisor`
--
ALTER TABLE `supervisor`
  MODIFY `supervisor_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `advertisement`
--
ALTER TABLE `advertisement`
  ADD CONSTRAINT `advertisement_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `advertisement_ibfk_2` FOREIGN KEY (`program_id`) REFERENCES `internship_program` (`program_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `advertisement_ibfk_3` FOREIGN KEY (`job_role`) REFERENCES `job_roles` (`id`),
  ADD CONSTRAINT `advertisement_ibfk_4` FOREIGN KEY (`status`) REFERENCES `advertisement_status` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `advertisement_technologies`
--
ALTER TABLE `advertisement_technologies`
  ADD CONSTRAINT `advertisement_technologies_ibfk_1` FOREIGN KEY (`advertisement_id`) REFERENCES `advertisement` (`advertisement_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `announcement`
--
ALTER TABLE `announcement`
  ADD CONSTRAINT `announcement_ibfk_1` FOREIGN KEY (`email_address`) REFERENCES `pdc` (`email_address`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `announcement_ibfk_2` FOREIGN KEY (`type`) REFERENCES `announcement_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `company`
--
ALTER TABLE `company`
  ADD CONSTRAINT `company_ibfk_1` FOREIGN KEY (`company_status`) REFERENCES `company_status_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `company_clients`
--
ALTER TABLE `company_clients`
  ADD CONSTRAINT `company_clients_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `company_contacts`
--
ALTER TABLE `company_contacts`
  ADD CONSTRAINT `company_contacts_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `company_events`
--
ALTER TABLE `company_events`
  ADD CONSTRAINT `company_events_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `company_hr`
--
ALTER TABLE `company_hr`
  ADD CONSTRAINT `company_hr_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `company_notification`
--
ALTER TABLE `company_notification`
  ADD CONSTRAINT `company_notification_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `company_notification_ibfk_2` FOREIGN KEY (`notification_id`) REFERENCES `notification` (`notification_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `company_partners`
--
ALTER TABLE `company_partners`
  ADD CONSTRAINT `company_partners_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `company_visit`
--
ALTER TABLE `company_visit`
  ADD CONSTRAINT `company_visit_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `company_visit_ibfk_2` FOREIGN KEY (`email_address`) REFERENCES `pdc` (`email_address`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `company_visit_ibfk_3` FOREIGN KEY (`company_visit_type`) REFERENCES `company_visit_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `company_visit_ibfk_4` FOREIGN KEY (`status`) REFERENCES `company_visit_status_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `internships`
--
ALTER TABLE `internships`
  ADD CONSTRAINT `internships_ibfk_1` FOREIGN KEY (`index_number`) REFERENCES `student` (`index_number`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `internships_ibfk_2` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `internships_ibfk_3` FOREIGN KEY (`supervisor_id`) REFERENCES `supervisor` (`supervisor_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `internships_ibfk_4` FOREIGN KEY (`job_role`) REFERENCES `job_roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `internship_program`
--
ALTER TABLE `internship_program`
  ADD CONSTRAINT `internship_program_ibfk_1` FOREIGN KEY (`email_address`) REFERENCES `pdc` (`email_address`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `internship_program_ibfk_2` FOREIGN KEY (`status`) REFERENCES `internship_program_status` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `interview`
--
ALTER TABLE `interview`
  ADD CONSTRAINT `interview_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `interview_ibfk_2` FOREIGN KEY (`index_number`) REFERENCES `student` (`index_number`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `interview_ibfk_3` FOREIGN KEY (`interview_type`) REFERENCES `company_visit_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `interview_ibfk_4` FOREIGN KEY (`interview_status`) REFERENCES `interview_status_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `interview_ibfk_5` FOREIGN KEY (`advertiesment_id`) REFERENCES `advertisement` (`advertisement_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `interview_decline_message`
--
ALTER TABLE `interview_decline_message`
  ADD CONSTRAINT `interview_decline_message_ibfk_1` FOREIGN KEY (`interview_id`) REFERENCES `interview` (`interview_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `pdc`
--
ALTER TABLE `pdc`
  ADD CONSTRAINT `pdc_ibfk_1` FOREIGN KEY (`role`) REFERENCES `pdc_role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `pdc_notification`
--
ALTER TABLE `pdc_notification`
  ADD CONSTRAINT `pdc_notification_ibfk_1` FOREIGN KEY (`notification_id`) REFERENCES `notification` (`notification_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pdc_notification_ibfk_2` FOREIGN KEY (`email_address`) REFERENCES `pdc` (`email_address`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `report_handle`
--
ALTER TABLE `report_handle`
  ADD CONSTRAINT `report_handle_ibfk_2` FOREIGN KEY (`email_address`) REFERENCES `pdc` (`email_address`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_ibfk_1` FOREIGN KEY (`program_id`) REFERENCES `internship_program` (`program_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `student_ibfk_2` FOREIGN KEY (`student_status`) REFERENCES `student_status_type` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `student_ibfk_3` FOREIGN KEY (`student_status`) REFERENCES `student_status_type` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `student_ibfk_4` FOREIGN KEY (`degree`) REFERENCES `student_degree` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `student_academic_qualifications`
--
ALTER TABLE `student_academic_qualifications`
  ADD CONSTRAINT `student_academic_qualifications_ibfk_1` FOREIGN KEY (`index_number`) REFERENCES `student` (`index_number`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student_applied_internships`
--
ALTER TABLE `student_applied_internships`
  ADD CONSTRAINT `student_applied_internships_ibfk_1` FOREIGN KEY (`index_number`) REFERENCES `student` (`index_number`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `student_applied_internships_ibfk_2` FOREIGN KEY (`advertisement_id`) REFERENCES `advertisement` (`advertisement_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `student_applied_internships_ibfk_3` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student_availability`
--
ALTER TABLE `student_availability`
  ADD CONSTRAINT `student_availability_ibfk_1` FOREIGN KEY (`index_number`) REFERENCES `student` (`index_number`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student_notification`
--
ALTER TABLE `student_notification`
  ADD CONSTRAINT `student_notification_ibfk_1` FOREIGN KEY (`index_number`) REFERENCES `student` (`index_number`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `student_notification_ibfk_2` FOREIGN KEY (`notification_id`) REFERENCES `notification` (`notification_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student_preferred_job_role`
--
ALTER TABLE `student_preferred_job_role`
  ADD CONSTRAINT `student_preferred_job_role_ibfk_1` FOREIGN KEY (`index_number`) REFERENCES `student` (`index_number`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `student_preferred_job_role_ibfk_2` FOREIGN KEY (`job_role`) REFERENCES `job_roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student_reports`
--
ALTER TABLE `student_reports`
  ADD CONSTRAINT `student_reports_ibfk_1` FOREIGN KEY (`internship_id`) REFERENCES `internships` (`internship_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `student_reports_ibfk_2` FOREIGN KEY (`supervisor_id`) REFERENCES `supervisor` (`supervisor_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `student_reports_ibfk_4` FOREIGN KEY (`report_type`) REFERENCES `report_type` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `student_reports_ibfk_5` FOREIGN KEY (`report_status`) REFERENCES `report_status_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `student_reports_ibfk_6` FOREIGN KEY (`report_id`) REFERENCES `report_handle` (`report_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student_work_experience`
--
ALTER TABLE `student_work_experience`
  ADD CONSTRAINT `student_work_experience_ibfk_1` FOREIGN KEY (`index_number`) REFERENCES `student` (`index_number`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `supervisor`
--
ALTER TABLE `supervisor`
  ADD CONSTRAINT `supervisor_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `supervisor_notification`
--
ALTER TABLE `supervisor_notification`
  ADD CONSTRAINT `supervisor_notification_ibfk_1` FOREIGN KEY (`notification_id`) REFERENCES `notification` (`notification_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `supervisor_notification_ibfk_2` FOREIGN KEY (`supervisor_id`) REFERENCES `supervisor` (`supervisor_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
