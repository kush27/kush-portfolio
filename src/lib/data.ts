import type { Profile, Experience, Education, Skill, Project } from '@/lib/types';
import { Github, GitMerge, TestTube, Code, Network, RefreshCw, FileText, Briefcase, GraduationCap, Mail, Phone, Database, Cog, BrainCircuit, Rocket } from 'lucide-react';
import { SiSpringboot, SiGatling, SiCucumber, SiPostman, SiJenkins, SiDocker, SiTypescript, SiJavascript, SiJira, SiSelenium, SiGnubash, SiGradle, SiApachemaven, SiGithubactions } from 'react-icons/si';
import { GrTest } from "react-icons/gr";
import { FaJava } from "react-icons/fa";

export const profileData: Profile = {
  name: 'Kush Kumar',
  avatar: '1',
  title: 'Senior Test Analyst',
  bio: 'I’m an Automation Test Engineer with 8 years of experience specializing in PEGA UI and Decisioning testing, with strong hands-on expertise in Java and Selenium. I focus on validating complex decision strategies, business rules and end-to-end user journeys to ensure reliable & data-driven outcomes.Over the years, I’ve worked on enterprise-scale applications, building and enhancing automation frameworks, improving test coverage and supporting Agile delivery teams. I’m passionate about quality engineering, clean test design and delivering stable releases by catching issues early and ensuring PEGA applications behave exactly as intended.',
  email: 'kushdoc018@gmail.com',
  phone: '8340788412',
  social: {
    linkedin: 'https://www.linkedin.com/in/kushkumar18/',
    github: 'https://github.com/kush27',
  },
};

export const workExperienceData: Experience[] = [
  {
    title: 'Senior Test Analyst',
    company: 'Commonwealth Bank of Australia (CBA)',
    domain: 'Banking - Financial Services',
    startDate: 'June 2023',
    endDate: 'Present',
    description: '• Designed and implemented scalable Pega Decisioning automation frameworks using Java, Selenium WebDriver and Cucumber(BDD) to validate high-volume banking transaction workflows, ensuring accuracy, reliability and compliance.\n• Integrated automated regression test suites into TeamCity CI/CD pipelines, enabling continuous testing, faster feedback cycles and reduced release timelines.\n• Led functional and end-to-end (E2E) testing for the InvestPlus banking application, identifying critical defects early in the SDLC and improving overall release stability.\n• Collaborated with cross-functional Agile teams to define acceptance criteria, support sprint execution and manage defect lifecycle through closure using Jira.\n• Enhanced quality visibility and release readiness by automating test execution reports, dashboards and QA metrics, providing real-time insights to stakeholders.\n• Utilized GitHub Copilot to accelerate automation framework development, reduce repetitive coding effort, improve code consistency and maintainability across the test suite.',
  },
  {
    title: 'Senior Test Engineer',
    company: 'Coforge Ltd.',
    domain: 'Insurance',
    startDate: 'Nov 2020',
    endDate: 'June 2023',
    description: '• Contributed extensively to UI automation using Java, Selenium WebDriver and Cucumber (BDD) by stabilizing existing automation frameworks through utility enhancements, optimized synchronization strategies and reduction of flaky tests.\n• Designed and developed scalable Pega UI automation scripts for a complex insurance policy management system, increasing automation coverage and significantly reducing manual testing effort.\n• Implemented BDD-based automation frameworks using Cucumber, aligning test scenarios with business requirements and improving collaboration between QA, development and business stakeholders.\n• Executed comprehensive Regression Testing and System Integration Testing (SIT) to validate the stability, accuracy and reliability of online premium payment modules.\n• Managed version control of automation assets using GitHub and integrated automated test execution within CI/CD pipelines, enabling consistent, repeatable and scalable test runs.\n• Mentored junior engineers on automation best practices, test design patterns and defect lifecycle management, contributing to improved team productivity and quality maturity.',
  },
  {
    title: 'Test Engineer',
    company: 'TechnoSapphire',
    domain: 'Manufacturing | Customer Relationship Management',
    startDate: 'Jan 2018',
    endDate: 'Nov 2020',
    description: '• Prepared test plans, test scenarios and detailed test cases to ensure comprehensive requirements coverage and traceability.\n• Performed end-to-end manual testing for CRM modules, including functional testing, regression testing and integration testing, to validate business workflows.\n• Logged, tracked and managed defects in Jira, improving defect closure rates and minimizing defect leakage across releases.\n• Designed and implemented a Page Object Model (POM) automation framework using Java and Selenium WebDriver for the Periculos CRM application, improving script reusability and maintainability.\n• Prepared and distributed Daily and Weekly Status Reports (DSR/WSR) to communicate project progress, testing status, risks and deliverables, ensuring transparency and stakeholder alignment.',
  },
];

export const educationData: Education[] = [
  {
    institution: 'Anna University, Chennai',
    degree: 'Bachelor Of Engineering, Electrical & Electronics Engineering',
    startDate: '2012',
    endDate: '2016',
    description: 'Graduated with a CGPA of 7.23.',
  },
];

export const skillsData: Skill[] = [
    { name: 'Java', icon: FaJava, color: '#f89820' },
    { name: 'Selenium', icon: SiSelenium, color: '#43B02A' },
    { name: 'Playwright', icon: Rocket, color: '#2EAD33'},
    { name: 'Cucumber (BDD)', icon: SiCucumber, color: '#23BE23' },
    { name: 'TestNG', icon: GrTest, color: '#FFC107' },
    { name: 'Eclipse', icon: Code, color: '#2C2255' },
    { name: 'IntelliJ IDEA', icon: Code, color: '#1572B6' },
    { name: 'DevTest', icon: TestTube, color: '#0066CC' },
    { name: 'Jira', icon: SiJira, color: '#0052CC' },
    { name: 'Commando', icon: TestTube, color: '#FF6B35' },
    { name: 'Confluence', icon: FileText, color: '#025BE8' },
    { name: 'TeamCity', icon: RefreshCw, color: '#000000' },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    { name: 'Bruno', icon: Rocket, color: '#564945' },
    { name: 'Git', icon: Code, color: '#f05033' },
    { name: 'GitHub', icon: Github, color: '#ffffff' },
    { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
//    { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
//    { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
//    { name: 'RestAssured', icon: Rocket, color: '#E53935' },
//    { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
//    { name: 'Microservices Testing', icon: Network, color: '#6c5ce7' },
//    { name: 'CI/CD', icon: GitMerge, color: '#f05033' },
//    { name: 'Gatling', icon: SiGatling, color: '#FF9E2A' },
//    { name: 'JUnit', icon: GrTest, color: '#25A162' },
//    { name: 'Azure DevOps', icon: Cog, color: '#0078D7' },
//    { name: 'Postgres', icon: Database, color: '#336791' },
//    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
];

export const projectsData = [
  {
    id: 'project-1',
    title: 'Manufacturing Operations Management System – Test Automation',
    description: 'Worked on a web-based Manufacturing Operations Management system designed to support core manufacturing processes such as production planning, inventory tracking, and quality control.Developed an automation testing framework using Java, Selenium, and Cucumber to validate critical manufacturing workflows and ensure system stability across frequent releases.',
  },
  {
    id: 'project-2',
    title: 'Automation Testing Framework Development (Java, Selenium, Cucumber)',
    description: 'Designed and implemented a custom automation testing framework using Java, Selenium WebDriver, and Cucumber (BDD) to automate functional testing for a web-based application.The framework was built with a modular, reusable architecture to support scalable test development, easy maintenance, and clear collaboration between technical and non-technical stakeholders using Gherkin feature files.',
  },
  {
    id: 'project-3',
    title: 'Enterprise Insurance Claims Management Platform – Test Automation',
    description: 'Worked as an Automation Test Engineer on a unified Pega Case Management insurance platform designed to process claims across multiple insurance lines of business using a single reusable case framework with LoB-specific variations.Responsible for test automation strategy, framework design, and execution to validate complex Pega workflows, decision rules, SLAs, and integrations across all LoBs.',
  },
  {
    id: 'project-4',
    title: 'Next Best Conversation Decisioning Platform for Banking',
    description: 'Worked on an enterprise banking decisioning platform built using Pega Next Best Conversation (NBC) to deliver context-aware, personalized customer conversations across digital and assisted channels.The platform dynamically determined what to say, when to say it, and through which channel, based on customer profile, interaction history, eligibility rules, risk policies, and regulatory constraints.My responsibility was to automate testing and validation of NBC decision logic, ensuring accurate, compliant, and consistent customer conversations.',
  },
];
