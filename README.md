<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Overview](#overview)
  - [Who is behind this?](#who-is-behind-this)
  - [What is in this README?](#what-is-in-this-readme)
- [Instructions](#instructions)
  - [Set up](#set-up)
  - [Configuration](#configuration)
  - [Deployment](#deployment)
    - [Frontend Client](#frontend-client)
    - [Backend Server](#backend-server)
  - [Troubleshooting](#troubleshooting)
  - [Related links](#related-links)
- [Application information](#application-information)
  - [Purpose of application](#purpose-of-application)
    - [Problem description](#problem-description)
      - [Problem 1](#problem-1)
      - [Problem 2](#problem-2)
      - [Problem 3](#problem-3)
    - [Solution proposed](#solution-proposed)
  - [Functionality & features](#functionality--features)
  - [Tech stack](#tech-stack)
    - [Front-end](#front-end)
    - [Back-end](#back-end)
    - [Database](#database)
    - [Deployment](#deployment-1)
    - [Architecture](#architecture)
    - [Code style](#code-style)
- [Design process](#design-process)
  - [Source control process](#source-control-process)
  - [Project management](#project-management)
    - [Trello](#trello)
    - [Estimating timings](#estimating-timings)
    - [Agile Epics](#agile-epics)
  - [Testing](#testing)
    - [Unit testing](#unit-testing)
    - [Integration testing](#integration-testing)
    - [E2E testing](#e2e-testing)
    - [Usability testing](#usability-testing)
- [User Stories](#user-stories)
  - [Revision of Learner User stories](#revision-of-learner-user-stories)
    - [Login and Sign up](#login-and-sign-up)
    - [Search functionality](#search-functionality)
    - [Emoticon use in buttons](#emoticon-use-in-buttons)
  - [Revision of Manager User stories](#revision-of-manager-user-stories)
    - [Analytics page](#analytics-page)
    - [Other revisions](#other-revisions)
  - [Revision of Admin User stories](#revision-of-admin-user-stories)
    - [Hamburger menu](#hamburger-menu)
    - [Other revisions](#other-revisions-1)
- [Workflow diagrams](#workflow-diagrams)
  - [Learners](#learners)
  - [Managers](#managers)
  - [Admins](#admins)
- [Wireframes](#wireframes)
  - [Lo-fi wireframes](#lo-fi-wireframes)
    - [Desktop views](#desktop-views)
    - [Mobile views](#mobile-views)
  - [Hi-fi wireframes](#hi-fi-wireframes)
    - [Desktop views](#desktop-views-1)
    - [Mobile views](#mobile-views-1)
- [Database ERD](#database-erd)
- [Data flow diagram](#data-flow-diagram)
- [OO Design documentation](#oo-design-documentation)
  - [UML—Component diagram](#umlcomponent-diagram)
  - [UML—Use case diagram](#umluse-case-diagram)
- [Project plan and timeline](#project-plan-and-timeline)
- [Client communications](#client-communications)
- [Short Answer Questions](#short-answer-questions)
  - [a) What are the most important aspects of quality software?](#a-what-are-the-most-important-aspects-of-quality-software)
  - [b) What libraries are being used in the app and why?](#b-what-libraries-are-being-used-in-the-app-and-why)
    - [React](#react)
    - [Joi](#joi)
    - [Express](#express)
    - [Mocha](#mocha)
    - [Jest](#jest)
    - [Sinon?](#sinon)
    - [Supertest](#supertest)
  - [c) A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?](#c-a-team-is-about-to-engage-in-a-project-developing-a-website-for-a-small-business-what-knowledge-and-skills-would-they-need-in-order-to-develop-the-project)
    - [User requirements](#user-requirements)
    - [Future plans for website](#future-plans-for-website)
    - [User experience (UX)](#user-experience-ux)
  - [d) Within your own project what knowledge or skills were required to complete your project, and overcome challenges?](#d-within-your-own-project-what-knowledge-or-skills-were-required-to-complete-your-project-and-overcome-challenges)
    - [Technical skills](#technical-skills)
    - [Domain knowledge](#domain-knowledge)
    - [Interpersonal skills](#interpersonal-skills)
  - [e) Evaluate how effective your knowledge and skills were this project, using examples, and suggest changes or improvements for future projects of a similar nature?](#e-evaluate-how-effective-your-knowledge-and-skills-were-this-project-using-examples-and-suggest-changes-or-improvements-for-future-projects-of-a-similar-nature)
    - [Evaluation of effectiveness](#evaluation-of-effectiveness)
    - [Future suggestions for improvement](#future-suggestions-for-improvement)
  - [Presentation](#presentation)
    - [Slide deck](#slide-deck)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Overview

This README file is for a Learning Management System (LMS) app for client, MI Academy, built by three Coder Academy students using MERN stack. All related files and more information are below.

## Who is behind this?
These legends 👇🏽

Gwenny Warnick (left), Josh Teperman (middle), David Bui (right)

<img src='src/images/MERN_GroupPhoto.png' alt="Photo of app creators: Josh Teperman, David Bui and Gwenny Warnick" border="1" />

## What is in this README?
There is an overview of the planning and build details of a real-world MERN app for Coder Academy built for a final course assesment. There are also questions answered as part of the assessment task.

# Instructions

To run this app, complete the following steps.

## Set up
Your computer will require the following programs installed.
- x
- x
- x

## Configuration

Within your computer terminal, navigate to the directory where you want to install the application files and create a folder for the app. Navigate into the folder and run the following command to clone the files for the front-end of the app:
>git clone git@github.com:JoshTeperman/mern-project-frontend.git

Next, navigate out of the front-end that was installed to your created folder for the app and run the following command to install the files for the back-end of the app:

>git clone git@github.com:JoshTeperman/mern-project-backend.git

In each of the folders (front-end and back-end), do the following:

- Run 'npm install' (or 'yarn install') to install the dependencies.
- Run npm start to start the server.

In your browser, navigate to 'http://localhost:3000/' to view the website.

Login using the default Guest Account:
> Username: 

> Password:

## Deployment

To deploy, we used the following distributed set up for the front and back end of the app. 

### Frontend Client

>Netlify

Netlify allows for free, continuous deployment integrated with Github, so we used it for the client side of the app. Their content delivery network allows for fast deployment as well. 

### Backend Server

>Now

For server-side of the application, we deployed using now.sh, which allows us to control environmental variables in a now.json file. Being designed with Developer Experience (DX) in mind, we also felt it was a good choice since a developer would likely be doing further work on the site in future after handover. 

## Troubleshooting

For troubleshooting, we

## Related links

As part of the project, we used the following resources, accessible at their links. 
> Trello https://trello.com/invite/b/nv1QDYPb/f77e98d472c980ba113a05329a62b1e4/mern-app-dream-team

>Github Repository (Front end of app) https://github.com/JoshTeperman/mern-project-frontend

>Github Repository (Back end of app) https://github.com/JoshTeperman/mern-project-backend

# Application information
The client, MI Academy, is an award-winning Melbourne start-up specialising in customised training solutions on marketing, CX, UX and innovation. 

*MI Academy website*
<img src="src/images/MI_1.png" alt="Screenshot of MI Academy website" border="1"/>

*Examples of MI Academy training programs*
<img src="src/images/MI_2.png" alt="Screenshot of MI Academy website" border="1"/>

*Areas that MI Academy specialise in*
<img src="src/images/MI_3.png" alt="Screenshot of MI Academy website" border="1"/>

We liaised predominantly with the managing director of MI Academy, Alita Harvey-Rodriguez, a respected thought leader and speaker in her field. 

<img src="src/images/Alita.png" alt="Image of Alita Harvey-Rodriguez" border="1"/>

## Purpose of application
MI Academy wanted a learning portal, or Learning Management System (LMS) for their clients. The main purpose of the app is to provide MI Academy clients with one place they can go to access
- year-long MI Academy Program information
- quarterly MI Academy Project information
- content items that form each project.

The design of the LMS was to be in line with the MI Academy brand and tone of voice, as per the branding guide and tone of voice guide shown below. 

*MI Academy Brand guide—screenshot*
<img src="src/images/BrandGuide.png" />

We kept all project materials aligned to the brand and kept in mind the MI Academy vision to be world-class in terms of UX. 

*MI Academy vision*
<img src="src/images/MI_5.png" alt="Extract from MI Academy tone of voice documents" border="1" />

We also designed with consideration of the MI Academy personality—to be clear, concise and fun. The extracts below show the relevant parts from the MI Academy Tone of Voice documentation.

*MI Academy Tone of voice extracts—personality and approach to language*
<img src="src/images/MI_4.png" alt="Extract from MI Academy tone of voice documents" border="1" />

<img src="src/images/MI_6.png" alt="Extract from MI Academy tone of voice documents" border="1" />

### Problem description
MI Academy do face-to-face training with their clients over the course of one year. This is referred to as a Program and is aligned with each client's specific business goals. In a program, there are typically four quarterly projects that aim to help clients progress further towards their business goals. 

#### Problem 1
MI Academy has a problem with clients staying on track with the content they cover in face-to-face training after each workshop. Workshops usually happen once during the three-month period of a project, and during the rest of the time, clients may
- lose resources like handouts or links 
- forget the business goals they're working towards
- lose track of the activities they should be doing.

#### Problem 2
There is also a problem with clients not having their content in one place. For example, programs include a combination of videos, handouts, links, recordings and spreadsheets.

#### Problem 3
Finally, MI Academy would like to be best practice in terms of training. This would require them to have learning activities and assessment of some kind to
- help clients stay focussed on their quarterly project goals
 - provide evidence of clients having learned the content successfully.


### Solution proposed

We proposed an LMS as a solution that could deal with all of these problems. An LMS will allow MI Academy to 
- keep content in one place for clients
- facilitate clients revising content they learn in workshops
- measure and report on their clients' progress in terms of content covered.


## Functionality & features

The Minimum Viable Product (MVP) for the project was clarified early on in the project as per the slides below. MVP included three logins for
- admin
- manager
- learner.

*Screenshot of slide used to clarify MVP during client meeeting*
<img src="src/images/MERN_MVP.png" alt="Screenshot of meeting notes" border="1" />

The app's core functionalities were for users to be able to 
- log in
- click a 'Forgot password' link
- edit profile
- view programs, projects and content
- mark course content as complete.

*Screenshot of core functionality in user flow as presented to client*
<img src="src/images/MERN_UserFlow.png" alt="Screenshot of app user flow and functionality" border="1" />

'Nice-to-haves' were the ability for
- all users to submit a support ticket request
- managers to see 
  - their team members (a group of learners)
  - each team member's progress in terms of completed content
  - the collective progress of the team e.g. 78% complete for a project.

## Tech stack

The app was built using MERN stack. 

### Front-end 
React

### Back-end
Express server running on Node.js

### Database
MongoDB

### Deployment 
- netlify.com
- now.sh

### Architecture

### Code style

Check rubric: Utilises highly sophisticated functions, demonstrating an exceptional level of understanding; Advanced functional programming concepts including Immediately-Invoked Function Expression (IIFE), etc

# Design process

## Source control process

Github 

Note: mention how we used multiple feature branches or didn't need them with commits from all team members
screenshots

## Project management

We used Agile methodology throughout, following the Kanban approach.

### Trello 
A trello board was set up at the beginning of the project with the following columns for project management according to Kanban
- Ready to do (backlog)
- Doing
- Done.

As we developed Epics, User stories and estimated Story points, we recorded details on the Trello board. We revised before lunch and at the end of the day, making more cards if needed to move tasks from one day to the next if not all were completed. 

### Estimating timings

We estimated times in terms of days (e.g. half a day or 2 days' work). Then we added deadlines to cards, as shown below. 

*Trello board, Day 1*

*Trello board, end of Week 1*

*Trello borad, end of Week 2*



We also kept documents we would need to refer to again here, including
- MI Academy documents (e.g. branding guide, logos)
- Rubric for Coder Academy assessment
- README requirements.

### Agile Epics

We fleshed out Epic value statements for each of our user types. This helped with planning and estimating story points when we went to individual user stories and their related functionality. 

*Epic value statements*
<img src="src/images/Epics.png" alt="Epic value statements for the app" border="1" />

We added non-functional requirements under learners as well at this stage. We thought this non-functional requirement was enough to note, as it would ensure the design of the app supported all users being able to access their information conveniently. 

Note: refer to Excellent use of task delegation with Kanban board of tickets assigned to team members labelled with *difficulty level* and corresponding Git commits

## Testing 

Note: Tie to user stories 
Rubric: Flawless code flow control: documented test coverage/successful results for all user stories, including corner cases

### Unit testing
We did unit tests for functions and components in the Learner and Manager user stories, which were the user stories that made up MVP.



### Integration testing

<img src=>

### E2E testing

### Usability testing

Due to the time frame, we user tested primarily using each other's devices. Below are screenshots of the login page on three different devices—iPhone 6, Android, MacBook Pro. Using our devices allowed us to test out the usability as well as notice gaps in code, for example the submit button missing in the iPhone view below. 

*iPhone 6 view*

<img src="src/images/Mob1.png" alt="screenshot of login page on iPhone" border="1" />

*Android view*

<img src="src/images/Mob2.jpg" alt="screenshot of login page on iPhone" height=450 border="1" />

*Macbook Pro view*

<img src="src/images/Testing1.png" alt="screenshot of login page on iPhone" border="1" />

# User Stories

We wrote user stories to help us plan and prioritise the development of the app's features. As is standard for Agile user stories, we formulated stories with the structure 'As a user I want to do x so I can y.'

> As a learner I want to...
1. login & register an account using my own email address so that my experience is personalised
2. view a dashboard that contains all of my training program information so that I can review what I have learned and what to study next
3. filter & sort courses in the dashboard, so that I can view the most relevant. Details include:
    - unfinished courses
    - completed courses
    - course progress (percentage, num modules)
    - course start date / due date / completed date
    - recent courses
4. view my Profile page and personalize my profile information so that I can have fun
5. view my Account information, which may include payment history and invoices if I have the relevant authorization and if MI Academy is enrolling students for paid courses in future
6. click on a course tile and view a course page, where I can watch videos, read materials, and navigate between modules of the course.

## Revision of Learner User stories

### Login and Sign up
For the first user story, we ended up only including 'Login' and not Sign up (see wireframe below). This was because after talking to the client about how their programs work, we understood that the register functionality is not required with the way their programs are currently set up. This also meant we removed payment information from our workflow. 

*Early wireframe design with Login and Sign up*

<img src="src/images/WF_earlyMob.png" alt="Wireframe of Login screen, early design" border="1" />

*Login screen, after revision*

<img src="src/images/WF_Login.png" alt="Wireframe of login" height=300 border="1" />

### Search functionality
Search was designed but the functionality was clearly outside our MVP after two weeks. Therefore, we revised this user story and removed it from scope in the MVP. It will be in future iterations. 

*Search design for mobile device*

<img src="src/images/WF_Search.png" alt="Wireframe of search function" height=300 border="1" />

### Emoticon use in buttons

One of the ideas we played with in wireframes was using emoticons as arrows on buttons. We thought this reflected the 'fun' part of the brand personality that MI Academy have and it was in line with the resources they already have designed, such as workshop slide decks. 

*Extracts from MI Academy slide deck*
<img src="src/images/MI_slide1.png" alt="screenshot of slide deck" border="1" />
<img src="src/images/MI_slide2.png" alt="screenshot of slide deck" border="1" />

*Experimenting with emoticons on buttons*
<img src="src/images/WF_Emoticons.png" alt="screenshot of slide deck" height=300  border="1" />

MI Academy loved this feature and requested that it be continued throughout the app design where possible. They liked the pointing finger emoticon best, so we used this on buttons throughout the app's navigation. 

The rest of the User stories for Learners were implemented in the first iteration of the app as described.

>As a manager / supervisor I want to...

1. view an analytics page with overall progress for training programs so that I can support my team better, including completion statistics, progress, grades
2. print and export data so that I can use it as a performance management tool
3. manage / view subscription & payment details so that I can be aware of my course history.

## Revision of Manager User stories

### Analytics page

The analytics page from the first User story was designed in the early stages of the project. The client wanted it gamified, and we knew this would require a longer time period, so it was removed from MVP, but the user story evolved during the project planning stages from progress or analytics to the landing page for a manager showing team progress (collective progress of all team members) then a 'Your team' screen which would have individual analytics. The images below show this evolution. 

*Early design of how team progress might look on manager landing page*

<img src="src/images/WF_Manager1.png" alt="Screenshot of early design for manager landing page" height=300  border="1" />

*Later design showing progress bar and 'Your team' for Manager analytics*

<img src="src/images/WF_Manager2.png" alt="Screenshot of manager landing page wireframe showing progress and team members page" height=300  border="1" />

### Other revisions

The second User story was outside of scope for the first iteration of the app. The payment User story was removed from the planning since it was not required by the client. 

>As an MI employee (admin) I want to...

1. publish & manage training programs through the administrator dashboard, so that I can flexibly manage and update course options, prices, and content
2. view an overhead view of all ongoing programs and their details so that I can track learner progress
3. view reporting & analytics for any program.

## Revision of Admin User stories

### Hamburger menu

We initally designed for a hamburger menu for Admin, thinking we might need more pages to be able to design for the Admin User stories. During consultation with the client, we agreed that the Admin would be primarily desktop and the hamburger menu wasn't necessary for our app's functionality. 

*Hamburger menu design for Admin*

<img src="src/images/WF_Admin2.png" alt="Wireframe of Admin search page" height=300 border="1" />

### Other revisions 
For Admin, payment was removed from the User story as with the other two user types. The second and third User stories relating to learner progress was considered outside of scope of the MVP. There was a search functionality added, as the client wanted there to be the possibility to search programs and potentially reuse them. 

We designed for this User story (see image below) but it was also outside of scope. 

*Design for Admin search view*
<img src="src/images/WF_Admin1.png" alt="Wireframe of Admin search page" border="1" />

# Workflow diagrams

We created workflow diagrams for the three types of users.
## Learners

At the beginning of the planning, we expected that the Learner (i.e. employee) would need to be able to do the following as depicted in the workflow digram pictured. 

A Learner can

- log in to their personal account
- view and edit their profile
- submit a support ticket request if they need help
- mark program content as completed.

*Learner workflow diagram*

<img src='src/images/MERN_User-flow_Learner1.png' alt="Workflow diagram for employee" border="1" />
<img src='src/images/MERN_User-flow_Learner2.png' alt="Workflow diagram for Manager" border="1" />

Although Sign Up and Purchasing were functionalities that are not required with the current model MI Academy use, we considered it for future use of the app. 

## Managers

A manager sits in between the app's Admin level and Learner level. This User account is for a person supervising a number of learners, for example, a team leader or a CEO with a marketing or CX team. MI Academy has a number of clients like this. 

For a manager, the functionality is the same as for a Learner, but they can also see progress of all Learners in their team. This is the only main difference. 

*Manager workflow diagram*

<img src='src/images/MERN_User-flow_Manager.png' alt="Workflow diagram for Manager" border="1" />

## Admins

As per the workflow diagram below, Admin for the app can 
- create, edit and delete programs containing projects
- upload content for projects
- assign projects to a User's program
- assign programs to a User
- assign a manager to a team of Users.

*Admin workflow diagram*

<img src='src/images/MERN_User-flow_Admin.png' alt="Workflow diagram for Admin" border="1" />

# Wireframes

At the begininning of the project, we designed wireframes for desktop view for the User views. Screenshots of these are below. 

## Lo-fi wireframes 

We designed lo-fi wireframes to start with before meeting with the client so that we had a tool for discussions. Since we had branding and colour themes from the client already, we did the views we expected to be using with some colour when we were ahead of time. 

### Desktop views

<img src="src/images/MERNwf_lofi_desk1.png" alt="Lofi mobile wireframes" border="1" />
<img src="src/images/MERNwf_lofi_desk2.png" alt="Lofi mobile wireframes" border="1" />

We designed lo-fi mobile views after meeting with the client and discovering they would like responsive mobile-first design for the user and manager interfaces.

### Mobile views

*Login page design and Sign up design (latter not required for MVP)*
<img src="src/images/MERNwf_lofi_mob2.png" alt="Lofi mobile wireframes for login" border="1" />

*Payment pages (not required for MVP) and Project & Content page views*
<img src="src/images/MERNwf_lofi_mob3.png" alt="Lofi mobile wireframes for project views" border="1" />

*Hi-fi hamburger menu and analytics design—not included in later designs as not required for MVP*
<img src="src/images/MERNwf_lofi_mob4.png" alt="Lofi mobile wireframes for content views" border="1" />

*Hi-fi Landing page and Edit profile designs*
<img src="src/images/MERNwf_lofi_mob5.png" alt="Lofi mobile wireframes for manager views" border="1" />

## Hi-fi wireframes

Initially, we completed designs for desktop views. These were approved by the client. 

### Desktop views

*Hi-fi login page designs*
<img src="src/images/MERNwf_hifi_desk3.png" alt="Lofi mobile wireframes" border="1" />

*Hi-fi Program and Edit Profile page designs*
<img src="src/images/MERNwf_hifi_desk1.png" alt="Lofi mobile wireframes" border="1" />

*Hi-fi Support request and Content page designs*
<img src="src/images/MERNwf_hifi_desk2.png" alt="Lofi mobile wireframes" border="1" />

### Mobile views

After meeting with our client, MI Academy wanted the responsive design to be mobile-first to suit the needs of their clients. 

We obtained the Google analytics data for their website (see screenshot below), and more people accessing the site were on desktop; however, for the purpose of the LMS, the client expected people to need to access the content on their mobiles, for example while commuting.

*Screenshot of Google Analytics data on device type*

<img src='src/images/MERN_GAstats.png' alt='Google Analytics screenshot for MI Academy website users' border="1" />

We completed hi-fi designs in Figma with a working prototype user flow. 

*Mobile user flow*

<img src="src/images/MERNwf_hifi_mob2.png" alt="Hi-fi mobile wireframes with final user flow" border="1" />

For managers, two extra views were required (shown below)
- team progress overview
- your team (showing the learners in that manager's team).

*Hi-fi manager views*
<img src="src/images/MERNwf_hifi_mob1.png" alt="Hi-fi mobile wireframes with final user flow" border="1" />


# Database ERD

There are three levels of data for the LMS content in the app, which consist of
- programs (one year long containing four projects)
- projects (each containing content items)
- resources (e.g. learning activities, videos, worksheets).

Resources and projects are dependendent on Programs and users are all assigned programs. A client is a company which may consist of one user, or Learner ('employee' in the ERD), or a team, which has a Manager and one or more Learners (all 'employees' in the ERD associated with a client). 

*Entity Relationship Diagram*

<img src='src/images/MERN_ERD.png' alt="Enterprise relationship diagram of LMS app" border="1" />

# Data flow diagram
Data in the app can be categorised into four main groups, which include
- user profile data
- program info (containing goals, description, and projects)
- project info (containing goals, description and content items)
- content items (i.e. resources such as learning activities, videos, quizzes).

Admin create and edit all of these data whereas Learners and Managers can only view them in the UI, with the exception of a User profile, which all users can edit themselves. When a User updates their profile, the database will reflect this change. This process was at the request of the client, who wanted to ensure that learners could access all of their content and account information even if they left the employer they were with at the time of the account creation.

The data flow diagram below offers an overview of the main data flow processes used in the app. 

*Data flow diagram*

<img src='src/images/MERN_DFD.png' alt='Data flow diagram for MERN app' border='1'/>

# OO Design documentation

## UML—Component diagram 
As shown in the Component diagram below (created using https://online.visual-paradigm.com), the LMS is comprised of 
- database, which stores User data
- administrative functions, which are done via the UI
- the LMS or Online Portal, where users complete learning tasks
- search functionality.

These were the components required to meet the needs of the client, who requested for users to be able to
- search the LMS
- login after being assigned an account by MI Academy
- be assigned programs with content delegated by MI Academy.

Programs are created via the UI and stored in the app's database, as are user profiles. MI Academy needs to be able to search all programs to potentially re-use it. Although this was outside of MVP, we included it in our planning stage. 

*Component diagram*

<img src="src/images/MERN_ComponentDiagram.png" alt="Component diagram of LMS app" border="1" />


## UML—Use case diagram

We created a Use case diagram using Creately.com. This displays at a high level the main actors in the context of the app (Admin, Manager, Learner) and the main events in the system.

*Use case diagram*

<img src="src/images/MERN_UseCase.png" alt="Use case diagram of LMS app" border="1" />

Instructions from CA: Provide Object Oriented design diagrams (UML or alternative) that clearly identify OO class attributes, methods, relationships.

# Project plan and timeline


# Client communications

At the beginning of the project, we communicated with the client via text message and phone call. We also shared a slide deck for our first two meetings for clearer communication (shown below). The slides acted as our meeting notes record for decisions and next steps. In the first meeting, we gave an overview of our planning steps and began to clarify the MVP. In the second meeting, we clarified the MVP completely and went over User Persoas.

*Slide deck for meeting 1 with MI Academy*
<img src="src/images/MERN_Slides1.png" alt="screenshot of first slide deck" border="1" />

*Slide deck for meeting 2 with MI Academy*
<img src="src/images/MERN_Slides2.png" alt="screenshot of second slide deck" border="1" />

The client was happy with the communication and the quality of the slide deck, as per the text below. 

*Screenshot of text message from client*
<img src='src/images/MERN_Text.PNG' alt='screenshot of text message' border='1'/>

The client was also happy to communicate on Microsoft Teams, which allowed us to easily send files or screenshots for approval. The screenshot underneath the slides below shows evidence of this from when User Personas were sent.

*Screenshot from Microsoft Teams client communication*
<img src='src/images/MERN_Teams1.png' alt='screenshot of client communication in Teams' border='1'/>

# Short Answer Questions

As part of the assessment instructions, we are required to answer five short answer questions about software and app design. Our responses to each are listed below the relevant question. 

## a) What are the most important aspects of quality software?

Software Quality Assurance (SQA) is a field in its own right now, incorporating all processes that occur during software development from the beginning until production stages. Its main purpose is to ensure quality. 

According to Software Testing Help, quality can be defined as 'meeting the requirement, expectation, and needs of the customer ... free from the defects, lacks and substantial variants'. In our context, the requirements, expectations and needs come from our client and quality can be measured against these and also against standards from external bodies, such as the international set of standards, ISO/IEC/IEEE 29119 Software Testing.

*Software Quality Assurance Plan graphic* 
<img src="src/images/SQA.jpg" alt="Software Quality Assurance Plan" border="1" />
Source: https://www.softwaretestinghelp.com/software-quality-assurance/

While there are numerous criteria listed for the quality of software, we know that today, successful software is developed with a customer-centric focus where human-centred design reigns supreme. Hence, we feel that these following four criteria are the most important.

- User stories committed to and delivered
    - Software must be designed with its users at the centre. While software design in the past might have been disconnected from its users, today good user experience is vital when the market is competitive and fast-moving. The first part of providing enjoyable user experience can be found in the design thinking Double Diamond—'Design the right thing', as shown below. This starts with User stories. 

    *Double Diamond V2 from Dan Nessler https://uxdesign.cc/how-to-fuck-up-the-design-thinking-process-and-make-it-right-dc2cb7a00dca*
    <img src="src/images/DoubleDiamond.png" alt="Double diamond" border="1" />
- User sentiment
    - The second sentiment from the double diamond, 'Design things right', relies on user feedback. As a result, we believe this is also a key criteria when evaluating the quality of software. After all, what's the point of well-designed software if nobody will use it? 

- Continuous improvement
    - Unless it is able to be used over a reasonable life cycle, software may not be worth the cost in time and energy to develop it. Accordingly, we believe continuous improvement is important because it allows software to remain best practice in terms of design and efficiency and allows design teams to respond to changes in the field as required. 

- Production incidents over time
    - Software might deliver on User stories but be too buggy for people to feel comfortable using. Therefore, production incidents over time, particularly if they recur, are an important metric that seem to be often overlooked. 

    ADD TWO

## b) What libraries are being used in the app and why?

A number of libraries are used in the app. Outside of any assessment requirements, reasons for their use are summarised in the table below and expanded on in the sections following. 

*Table: Summary of libraries used and reasons for use*

|   Library used:	|   React	    |  Express 	|   Mocha	| Jest |    Joi	| Sinon? | Supertest | 
|---	|---	|---	|---	|---	|--- |--- |---
|   Reasons:	|   uses virtual DOM	|   	cc |   	|   	|   |   |   |
|   	        |   component-based 	|   	|   	|   	|   |   |   |
|   	        |   |	|   	|   	|   	|   |   |   |

### React
For Javascript-based apps, manipulating data in the browser DOM still often creates performance issues. React has attempted to resolve this by using a virtual DOM, which is a DOM stored in memory that allows an algorithm in React to compare the DOMs and calculate the most efficient way to store the changes required. This leads to the shortest possible time needed for read/write and is the primary reason for React's high performance.  

React is also component-based, allowing us to maintain a high level of consistency across the app's views and flexibility with how we choose to structure these views in terms of code file storage.

### Joi

We used Joi as opposed to a middleware like Express-validator because its built-in validation methods are easy to use. Secondly, it supports custom error messages. The schema also allows us to put the object inside our existing user model, for example, and is easy to read, clearly showing what we expect from each property. The screenshot below shows how clearly this appears.

*Screenshot of a Joi object in our app*
<img src="src/images/MERN_Joi.png" alt="screenshot of object in Joi testing of app" height=200 border="1">

### Express

### Mocha

### Jest

### Sinon?

### Supertest

## c) A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?

To develop a website for a small business, a team would need to take into account four main areas: user requirements, future plans for the site, and user experience. 

### User requirements

It's important to understand the wider context that the business is operating in and what is affecting their operations and their customers. ADD IN SPEED/QUALITY/BUDGET TRIANGLE HERE Otherwise, there is a risk that the website would be not fit for purpose. Properly understanding the needs of the website users would mean finding out what pain points the business and/or its customers currently have and identifying which of those issues are 
- the most urgent 
- able to be solved with a website.

### Future plans for website 

Small businesses are often stretched in terms of time and resources, which could affect how the website is maintained or updated in the long term. Whether or not a business has a developer on staff or in their budget impacts the design choices of the website build. For example, where the website is hosted and the programming languages used might look very different for a business owner who understands programming compared with someone with little technical understanding who needs a simple user interface to operate or update their website. Thus, clarifying the long term plan for the website and how it is to be maintained or further developed is important to consider before beginning the development.

### User experience (UX)

UX has become more influential in recent times. 88% of users in one study report they wouldn't return to a site after a bad user experience. 79% of shoppers are less likely to buy from a site with poor user experience. Perhaps most significantly, 75% of users evaluate a company's credibiiity based on its website design. As a result, it's no longer acceptable to design a functioning website without creating a postiive user experience. Three important related areas to consider as part of UX are responsive design, accessibility, and usability. Considering these areas ensures that all users on any devices can easily interact with the website. 

Source of data: https://www.urbanemu.com/the-impact-of-user-experience-today-and-tomorrow/

## d) Within your own project what knowledge or skills were required to complete your project, and overcome challenges?

Within our own project, we needed a combination of technical skills, domain knowledge and soft skills. 

### Technical skills
- Programming using MERN stack
- Testing
  - Unit
  - Integration
  - E2E
- How to architect separation of concerns
- How to design a database and data structures
- How to make database calls
- Debugging
- Reading documentation

### Domain knowledge

We required knowledge of the following areas to effectively develop the web app
- project management 
- Agile methodology (Scrum and Kanban)
- Object-oriented programming concepts
- coding conventions
- file organisation
- UX.

### Interpersonal skills

Communication played a huge role throughout the project. As a team, we communicated throughout the day every day and re-prioritised tasks as required. This allowed us to develop quickly by leveraging each other's strengths and to catch misunderstandings early. 

Other interpersonal skills that were important were problem solving, decision making, negotation, active listening and dependability. 

## e) Evaluate how effective your knowledge and skills were this project, using examples, and suggest changes or improvements for future projects of a similar nature?

### Evaluation of effectiveness 

Our knowledge and skills were effective enough to complete the project to a good standard. We had a mix of skills between the three group members so we were able to share work evenly. 

For example, we communicated our preferences earlier on and pair programmed part of the back end when two of us were interested in developing this skill. However, later in the project we divided work between the three of us according to where we were individually faster or more effective, with one person doing the backend, another doing front end and a third completing README tasks to make sure work was completed in time. 

Another example is the way that the group worked hard to understand all parts of the code, but were more familiar with the parts we personally worked on and spent time focusing deeply on those sections only. The level of attention to detail we each had was different, so at one stage, we had different naming conventions to what was agreed earlier during planning. Because of this, we needed to regroup and restructure the front end, which was time-consuming and frustrating. However, we became even better at communicating and clarifying everyone's understanding after this. 

### Future suggestions for improvement



## Presentation

As part of our assessment, we prepared a presentation covering
- our design and decision-making process
- a review of the app development process
- a live demo of the app and its features.

### Slide deck
https://docs.google.com/presentation/d/1gBbQHLwReQomkoAs8Bms1swxf_7q8jQ7G-fR7pJU8gg/edit?usp=sharing

*Screenshot of slide deck*
<img src="src/images/MERN_Slides.png" alt="Screenshot of slide deck for group presentation" border="1">