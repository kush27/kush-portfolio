
import type { Profile, Experience, Education, Skill, Project } from '@/lib/types';
import {
  Github,
  TestTube,
  Code,
  FileText,
  RefreshCw,
  Rocket,
} from 'lucide-react';
import {
  SiCucumber,
  SiPostman,
  SiJenkins,
  SiJira,
  SiSelenium,
} from 'react-icons/si';
import { GrTest } from 'react-icons/gr';
import { FaJava } from 'react-icons/fa';

export const profileData: Profile = {
  name: 'Kush Kumar',
  avatar: '1',
  title: 'Senior Test Analyst',
  bio: 'I’m an Automation Test Engineer with 8 years of experience specializing in PEGA UI and Decisioning testing, with strong hands-on expertise in Java and Selenium. I focus on validating complex decision strategies, business rules and end-to-end user journeys to ensure reliable and data-driven outcomes. Over the years, I’ve worked on enterprise-scale applications, building and enhancing automation frameworks, improving test coverage and supporting Agile delivery teams. I’m passionate about quality engineering, clean test design and delivering stable releases by catching issues early and ensuring PEGA applications behave exactly as intended.',
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
    description:
      '• Designed and implemented scalable Pega Decisioning automation frameworks using Java, Selenium WebDriver and Cucumber (BDD) to validate banking transaction workflows, ensuring accuracy and reliability.\n• Integrated automated regression test suites into TeamCity CI/CD pipelines, enabling continuous testing and faster feedback cycles.\n• Led functional and end-to-end (E2E) testing for the InvestPlus banking application, identifying defects early in the SDLC and improving release stability.\n• Collaborated with cross-functional Agile teams to define acceptance criteria, support sprint execution and manage defect lifecycle through closure using Jira.\n• Enhanced quality visibility and release readiness by automating test execution reports, dashboards and QA metrics.\n• Utilized GitHub Copilot to accelerate automation framework development, reduce repetitive coding effort and improve code maintainability.',
  },
  {
    title: 'Senior Test Engineer',
    company: 'Coforge Ltd.',
    domain: 'Insurance',
    startDate: 'Nov 2020',
    endDate: 'June 2023',
    description:
      '• Contributed to UI automation using Java, Selenium WebDriver and Cucumber (BDD), stabilizing existing automation frameworks through utility enhancements and optimized synchronization strategies.\n• Designed and developed Pega UI automation scripts for an insurance policy management system.\n• Implemented BDD-based automation frameworks using Cucumber, aligning test scenarios with business requirements.\n• Executed Regression Testing and System Integration Testing (SIT) for online premium payment modules.\n• Managed automation assets using GitHub and integrated automated test execution within CI/CD pipelines.\n• Mentored junior engineers on automation best practices, test design patterns and defect lifecycle management.',
  },
  {
    title: 'Test Engineer',
    company: 'TechnoSapphire',
    domain: 'Manufacturing | Customer Relationship Management',
    startDate: 'Jan 2018',
    endDate: 'Nov 2020',
    description:
      '• Prepared test plans, test scenarios and detailed test cases to ensure comprehensive requirements coverage.\n• Performed end-to-end manual testing for CRM modules, including functional, regression and integration testing.\n• Logged, tracked and managed defects in Jira.\n• Designed and implemented a Page Object Model (POM) automation framework using Java and Selenium WebDriver for the Periculos CRM application.\n• Prepared Daily and Weekly Status Reports (DSR/WSR) to communicate project progress, testing status and risks.',
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
  { name: 'Playwright', icon: Rocket, color: '#2EAD33' },
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
];

export const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'Manufacturing Operations Management System',
    domain: 'Manufacturing',
    role: 'Test Engineer',
    description:
      'A web-based manufacturing operations platform supporting production planning, inventory tracking and quality control. Focused on validating important manufacturing workflows through functional testing and automation.',
    responsibilities: [
      'Designed and maintained automated test scenarios for critical manufacturing workflows.',
      'Validated production planning, inventory and quality-related business processes.',
      'Performed functional and regression testing across application releases.',
      'Identified defects and supported defect verification and closure.',
    ],
    testingFocus: [
      'Functional Testing',
      'Regression Testing',
      'Workflow Validation',
      'UI Automation',
      'Defect Tracking',
    ],
  },
  {
    id: 'project-2',
    title: 'Customer Relationship Management (CRM) System',
    domain: 'CRM',
    role: 'Test Engineer',
    description:
      'A web-based CRM application supporting customer information, lead tracking, contact management and sales-related business workflows. Worked on manual testing and Selenium automation using Java and TestNG.',
    responsibilities: [
      'Prepared test plans, scenarios and detailed test cases.',
      'Performed functional, integration and regression testing.',
      'Developed Selenium automation scripts using Java and TestNG.',
      'Applied Page Object Model principles for reusable automation components.',
      'Tracked defects and communicated testing progress through status reports.',
    ],
    testingFocus: [
      'Manual Testing',
      'Functional Testing',
      'Regression Testing',
      'Selenium Automation',
      'Page Object Model',
    ],
  },
  {
    id: 'project-3',
    title: 'Enterprise Insurance Claims Management Platform – Test Automation',
    domain: 'Insurance',
    role: 'Senior Test Engineer',
    description:
      'An enterprise Pega Case Management platform supporting insurance claims processing across multiple business lines. Focused on validating Pega workflows, business rules, SLAs and system integrations through UI automation and regression testing.',
    responsibilities: [
      'Developed and maintained Pega UI automation scripts using Java and Selenium.',
      'Implemented BDD-based test scenarios using Cucumber.',
      'Validated insurance case workflows and business rule execution.',
      'Performed system integration and regression testing.',
      'Improved automation stability through reusable components and synchronization strategies.',
    ],
    testingFocus: [
      'Pega UI Testing',
      'Business Rule Validation',
      'SLA Validation',
      'Integration Testing',
      'Regression Automation',
    ],
  },
  {
    id: 'project-4',
    title: 'Next Best Conversation Decisioning Platform for Banking',
    domain: 'Banking & Financial Services',
    role: 'Senior Test Analyst',
    description:
      'An enterprise banking decisioning platform built using Pega Next Best Conversation (NBC), supporting personalized customer interactions across digital and assisted channels. Focused on validating decision logic, eligibility rules and end-to-end customer journeys.',
    responsibilities: [
      'Designed automation scenarios for Pega Decisioning workflows.',
      'Validated decision strategies, business rules and customer eligibility.',
      'Tested customer journeys and channel-specific outcomes.',
      'Performed functional and end-to-end testing.',
      'Integrated automated regression execution into TeamCity CI/CD pipelines.',
      'Collaborated with Agile teams to support release quality and defect management.',
    ],
    testingFocus: [
      'Pega Decisioning',
      'Next Best Conversation',
      'Decision Strategy Validation',
      'End-to-End Testing',
      'Regression Automation',
    ],
  },
  {
    id: 'project-5',
    title: 'Automation Testing Framework Development (Java, Selenium, Cucumber)',
    domain: 'Test Automation',
    role: 'Automation Test Engineer',
    description:
      'A modular web automation framework developed using Java, Selenium WebDriver, Cucumber BDD and TestNG. Designed around Page Object Model principles to support reusable components, maintainability, execution control and reporting.',
    responsibilities: [
      'Designed a modular automation framework architecture.',
      'Integrated Selenium WebDriver with Java and Cucumber.',
      'Implemented Page Object Model for maintainable page interactions.',
      'Configured TestNG runner integration and execution management.',
      'Implemented Cucumber hooks, tags and reusable step definitions.',
      'Integrated Extent Reports and failure screenshot handling.',
      'Focused on framework stability and reusable automation utilities.',
    ],
    testingFocus: [
      'Java',
      'Selenium WebDriver',
      'Cucumber BDD',
      'TestNG',
      'Page Object Model',
      'Extent Reports',
    ],
  },
  {
    id: 'project-6',
    title: 'Kush QA — QA Learning Hub',
    domain: 'QA Education & Interview Preparation',
    role: 'Founder & Content Creator',
    description:
      'A QA learning platform created to help software testing professionals learn concepts step by step and prepare for technical interviews through structured tutorials and practical examples.',
    responsibilities: [
      'Created structured Manual Testing learning resources.',
      'Published Core Java and Selenium WebDriver tutorials.',
      'Developed learning content for API Testing using Postman and Bruno.',
      'Created SQL, Cucumber Framework and Playwright learning resources.',
      'Added AI for Testing concepts and interview preparation material.',
    ],
    testingFocus: [
      'Manual Testing',
      'Java',
      'Selenium',
      'API Testing',
      'SQL',
      'Cucumber',
      'AI for Testing',
    ],
    link: 'https://kushqa.blogspot.com/',
  },
];
