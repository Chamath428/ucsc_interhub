-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 19, 2022 at 07:19 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ucsc_internhub`
--

-- --------------------------------------------------------

--
-- Table structure for table `advertisement`
--

CREATE TABLE `advertisement` (
  `advertisement_id` int(20) NOT NULL,
  `job_role` varchar(100) NOT NULL,
  `job_description` varchar(2000) NOT NULL,
  `requested_interns` int(10) NOT NULL,
  `allocated_interns` int(10) NOT NULL,
  `advertisement_picture` varchar(100) NOT NULL,
  `advertisement_video` varchar(100) NOT NULL,
  `advertisement_ref_no` varchar(100) NOT NULL,
  `company_id` int(10) NOT NULL,
  `program_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `advertisement_technologies`
--

CREATE TABLE `advertisement_technologies` (
  `advertisement_id` int(20) NOT NULL,
  `technologies` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `announcement`
--

CREATE TABLE `announcement` (
  `announcement_id` int(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `body` varchar(3000) NOT NULL,
  `time` varchar(50) NOT NULL,
  `date` varchar(50) NOT NULL,
  `type` int(5) NOT NULL,
  `email_address` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `company_id` int(10) NOT NULL,
  `name` varchar(200) NOT NULL,
  `registration_number` varchar(100) NOT NULL,
  `date_of_establishment` varchar(50) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `website` varchar(200) NOT NULL,
  `address` varchar(500) NOT NULL,
  `fax_no` int(15) NOT NULL,
  `company_status` int(5) NOT NULL,
  `no_of_employees` int(10) NOT NULL,
  `no_of_project_managers` int(5) NOT NULL,
  `no_of_tech_leads` int(5) NOT NULL,
  `is_registered_other_uni` int(2) NOT NULL,
  `password` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `profile_picture` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `company_announcement`
--

CREATE TABLE `company_announcement` (
  `announcement_id` int(100) NOT NULL,
  `company_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `company_clients`
--

CREATE TABLE `company_clients` (
  `company_id` int(10) NOT NULL,
  `client` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `company_contacts`
--

CREATE TABLE `company_contacts` (
  `company_id` int(10) NOT NULL,
  `telephone_no` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `company_events`
--

CREATE TABLE `company_events` (
  `event_id` int(20) NOT NULL,
  `company_id` int(10) NOT NULL,
  `topic` varchar(100) NOT NULL,
  `time` varchar(50) NOT NULL,
  `event_picture` varchar(100) NOT NULL,
  `event_video` varchar(100) NOT NULL,
  `body` varchar(2000) NOT NULL,
  `date` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `company_hr`
--

CREATE TABLE `company_hr` (
  `company_id` int(10) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `company_hr_contacts`
--

CREATE TABLE `company_hr_contacts` (
  `company_id` int(10) NOT NULL,
  `telephone_no` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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

-- --------------------------------------------------------

--
-- Table structure for table `company_visit`
--

CREATE TABLE `company_visit` (
  `company_visit_id` int(15) NOT NULL,
  `company_id` int(10) NOT NULL,
  `email_address` varchar(100) NOT NULL,
  `date` varchar(50) NOT NULL,
  `start_time` int(10) NOT NULL,
  `end_time` int(10) NOT NULL,
  `company_visit_type` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `internships`
--

CREATE TABLE `internships` (
  `internship_id` int(20) NOT NULL,
  `job_role` varchar(100) NOT NULL,
  `started_date` varchar(50) NOT NULL,
  `index_number` int(10) NOT NULL,
  `company_id` int(10) NOT NULL,
  `supervisor_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `internship_program`
--

CREATE TABLE `internship_program` (
  `program_id` int(10) NOT NULL,
  `batch_no` int(10) NOT NULL,
  `program_year` int(10) NOT NULL,
  `email_address` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `interview`
--

CREATE TABLE `interview` (
  `interview_id` int(100) NOT NULL,
  `company_id` int(10) NOT NULL,
  `index_number` int(10) NOT NULL,
  `date` varchar(30) NOT NULL,
  `start_time` varchar(20) NOT NULL,
  `end_time` varchar(20) NOT NULL,
  `interview_type` int(5) NOT NULL,
  `interview_status` int(5) NOT NULL,
  `is_wish_list` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `name` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `profile_picture` varchar(100) NOT NULL,
  `role` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
-- Table structure for table `reports`
--

CREATE TABLE `reports` (
  `report_id` int(100) NOT NULL,
  `report_type` int(5) NOT NULL,
  `date` varchar(50) NOT NULL,
  `time` varchar(50) NOT NULL,
  `report` varchar(100) NOT NULL,
  `report_status` varchar(5) NOT NULL,
  `feedback` varchar(300) NOT NULL,
  `internship_id` int(20) NOT NULL,
  `supervisor_id` int(10) NOT NULL,
  `email_address` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `report_handle`
--

CREATE TABLE `report_handle` (
  `report_id` int(100) NOT NULL,
  `email_address` varchar(100) NOT NULL,
  `deadline_date` varchar(50) NOT NULL,
  `deadline_time` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `index_number` int(10) NOT NULL,
  `registration_number` varchar(20) NOT NULL,
  `name` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `nic` varchar(20) NOT NULL,
  `email` int(100) NOT NULL,
  `cv` varchar(100) NOT NULL,
  `intro_video` varchar(100) NOT NULL,
  `profile_picture` varchar(100) NOT NULL,
  `student_status` int(5) NOT NULL,
  `degree` int(5) NOT NULL,
  `gpa` varchar(10) NOT NULL,
  `about_me` varchar(1000) NOT NULL,
  `github` varchar(100) NOT NULL,
  `linkedin` varchar(100) NOT NULL,
  `facebook` varchar(100) NOT NULL,
  `preferred_role` varchar(100) NOT NULL,
  `program_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
-- Table structure for table `student_announcement`
--

CREATE TABLE `student_announcement` (
  `announcement_id` int(100) NOT NULL,
  `index_number` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `student_applied_internships`
--

CREATE TABLE `student_applied_internships` (
  `index_number` int(10) NOT NULL,
  `advertisement_id` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
-- Table structure for table `student_notification`
--

CREATE TABLE `student_notification` (
  `notification_id` int(100) NOT NULL,
  `index_number` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `profile_picture` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `company_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  ADD KEY `program_id` (`program_id`);

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
  ADD KEY `email_address` (`email_address`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`company_id`);

--
-- Indexes for table `company_announcement`
--
ALTER TABLE `company_announcement`
  ADD PRIMARY KEY (`announcement_id`,`company_id`),
  ADD KEY `company_id` (`company_id`);

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
-- Indexes for table `company_hr_contacts`
--
ALTER TABLE `company_hr_contacts`
  ADD PRIMARY KEY (`company_id`,`telephone_no`);

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
-- Indexes for table `company_visit`
--
ALTER TABLE `company_visit`
  ADD PRIMARY KEY (`company_visit_id`,`company_id`,`email_address`),
  ADD KEY `company_id` (`company_id`),
  ADD KEY `email_address` (`email_address`);

--
-- Indexes for table `internships`
--
ALTER TABLE `internships`
  ADD PRIMARY KEY (`internship_id`),
  ADD KEY `index_number` (`index_number`),
  ADD KEY `company_id` (`company_id`),
  ADD KEY `supervisor_id` (`supervisor_id`);

--
-- Indexes for table `internship_program`
--
ALTER TABLE `internship_program`
  ADD PRIMARY KEY (`program_id`),
  ADD KEY `email_address` (`email_address`);

--
-- Indexes for table `interview`
--
ALTER TABLE `interview`
  ADD PRIMARY KEY (`interview_id`,`company_id`,`index_number`),
  ADD KEY `company_id` (`company_id`),
  ADD KEY `index_number` (`index_number`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`notification_id`);

--
-- Indexes for table `pdc`
--
ALTER TABLE `pdc`
  ADD PRIMARY KEY (`email_address`);

--
-- Indexes for table `pdc_notification`
--
ALTER TABLE `pdc_notification`
  ADD PRIMARY KEY (`notification_id`,`email_address`),
  ADD KEY `email_address` (`email_address`);

--
-- Indexes for table `reports`
--
ALTER TABLE `reports`
  ADD PRIMARY KEY (`report_id`),
  ADD KEY `internship_id` (`internship_id`),
  ADD KEY `supervisor_id` (`supervisor_id`),
  ADD KEY `email_address` (`email_address`);

--
-- Indexes for table `report_handle`
--
ALTER TABLE `report_handle`
  ADD PRIMARY KEY (`report_id`,`email_address`),
  ADD KEY `email_address` (`email_address`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`index_number`),
  ADD KEY `program_id` (`program_id`);

--
-- Indexes for table `student_academic_qualifications`
--
ALTER TABLE `student_academic_qualifications`
  ADD PRIMARY KEY (`index_number`,`qualification`);

--
-- Indexes for table `student_announcement`
--
ALTER TABLE `student_announcement`
  ADD PRIMARY KEY (`announcement_id`,`index_number`),
  ADD KEY `index_number` (`index_number`);

--
-- Indexes for table `student_applied_internships`
--
ALTER TABLE `student_applied_internships`
  ADD PRIMARY KEY (`index_number`,`advertisement_id`),
  ADD KEY `advertisement_id` (`advertisement_id`);

--
-- Indexes for table `student_availability`
--
ALTER TABLE `student_availability`
  ADD PRIMARY KEY (`index_number`);

--
-- Indexes for table `student_notification`
--
ALTER TABLE `student_notification`
  ADD PRIMARY KEY (`notification_id`,`index_number`),
  ADD KEY `index_number` (`index_number`);

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
  MODIFY `advertisement_id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `announcement`
--
ALTER TABLE `announcement`
  MODIFY `announcement_id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `company_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `company_events`
--
ALTER TABLE `company_events`
  MODIFY `event_id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `company_visit`
--
ALTER TABLE `company_visit`
  MODIFY `company_visit_id` int(15) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `internships`
--
ALTER TABLE `internships`
  MODIFY `internship_id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `internship_program`
--
ALTER TABLE `internship_program`
  MODIFY `program_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `interview`
--
ALTER TABLE `interview`
  MODIFY `interview_id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reports`
--
ALTER TABLE `reports`
  MODIFY `report_id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supervisor`
--
ALTER TABLE `supervisor`
  MODIFY `supervisor_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `advertisement`
--
ALTER TABLE `advertisement`
  ADD CONSTRAINT `advertisement_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `advertisement_ibfk_2` FOREIGN KEY (`program_id`) REFERENCES `internship_program` (`program_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `advertisement_technologies`
--
ALTER TABLE `advertisement_technologies`
  ADD CONSTRAINT `advertisement_technologies_ibfk_1` FOREIGN KEY (`advertisement_id`) REFERENCES `advertisement` (`advertisement_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `announcement`
--
ALTER TABLE `announcement`
  ADD CONSTRAINT `announcement_ibfk_1` FOREIGN KEY (`email_address`) REFERENCES `pdc` (`email_address`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `company_announcement`
--
ALTER TABLE `company_announcement`
  ADD CONSTRAINT `company_announcement_ibfk_1` FOREIGN KEY (`announcement_id`) REFERENCES `announcement` (`announcement_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `company_announcement_ibfk_2` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
-- Constraints for table `company_hr_contacts`
--
ALTER TABLE `company_hr_contacts`
  ADD CONSTRAINT `company_hr_contacts_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
  ADD CONSTRAINT `company_visit_ibfk_2` FOREIGN KEY (`email_address`) REFERENCES `pdc` (`email_address`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `internships`
--
ALTER TABLE `internships`
  ADD CONSTRAINT `internships_ibfk_1` FOREIGN KEY (`index_number`) REFERENCES `student` (`index_number`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `internships_ibfk_2` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `internships_ibfk_3` FOREIGN KEY (`supervisor_id`) REFERENCES `supervisor` (`supervisor_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `internship_program`
--
ALTER TABLE `internship_program`
  ADD CONSTRAINT `internship_program_ibfk_1` FOREIGN KEY (`email_address`) REFERENCES `pdc` (`email_address`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `interview`
--
ALTER TABLE `interview`
  ADD CONSTRAINT `interview_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `interview_ibfk_2` FOREIGN KEY (`index_number`) REFERENCES `student` (`index_number`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `pdc_notification`
--
ALTER TABLE `pdc_notification`
  ADD CONSTRAINT `pdc_notification_ibfk_1` FOREIGN KEY (`notification_id`) REFERENCES `notification` (`notification_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pdc_notification_ibfk_2` FOREIGN KEY (`email_address`) REFERENCES `pdc` (`email_address`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `reports`
--
ALTER TABLE `reports`
  ADD CONSTRAINT `reports_ibfk_1` FOREIGN KEY (`internship_id`) REFERENCES `internships` (`internship_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `reports_ibfk_2` FOREIGN KEY (`supervisor_id`) REFERENCES `supervisor` (`supervisor_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `reports_ibfk_3` FOREIGN KEY (`email_address`) REFERENCES `pdc` (`email_address`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `report_handle`
--
ALTER TABLE `report_handle`
  ADD CONSTRAINT `report_handle_ibfk_1` FOREIGN KEY (`report_id`) REFERENCES `reports` (`report_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `report_handle_ibfk_2` FOREIGN KEY (`email_address`) REFERENCES `pdc` (`email_address`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_ibfk_1` FOREIGN KEY (`program_id`) REFERENCES `internship_program` (`program_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student_academic_qualifications`
--
ALTER TABLE `student_academic_qualifications`
  ADD CONSTRAINT `student_academic_qualifications_ibfk_1` FOREIGN KEY (`index_number`) REFERENCES `student` (`index_number`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student_announcement`
--
ALTER TABLE `student_announcement`
  ADD CONSTRAINT `student_announcement_ibfk_1` FOREIGN KEY (`announcement_id`) REFERENCES `announcement` (`announcement_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `student_announcement_ibfk_2` FOREIGN KEY (`index_number`) REFERENCES `student` (`index_number`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student_applied_internships`
--
ALTER TABLE `student_applied_internships`
  ADD CONSTRAINT `student_applied_internships_ibfk_1` FOREIGN KEY (`index_number`) REFERENCES `student` (`index_number`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `student_applied_internships_ibfk_2` FOREIGN KEY (`advertisement_id`) REFERENCES `advertisement` (`advertisement_id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
