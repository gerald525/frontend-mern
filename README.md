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
  - [Troubleshooting](#troubleshooting)
  - [Related links](#related-links)
- [Application information](#application-information)
  - [Purpose of application](#purpose-of-application)
    - [Problem description](#problem-description)
    - [Solution proposed](#solution-proposed)
  - [Functionality & features](#functionality--features)
  - [Tech stack](#tech-stack)
  - [Design process](#design-process)
  - [User Stories](#user-stories)
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
  - [Responses](#responses)
    - [a) What are the most important aspects of quality software?](#a-what-are-the-most-important-aspects-of-quality-software)
    - [b) What libraries are being used in the app and why?](#b-what-libraries-are-being-used-in-the-app-and-why)
      - [React](#react)
      - [Express](#express)
      - [Mocha](#mocha)
      - [Jest](#jest)
      - [Joi](#joi)
      - [Sinon?](#sinon)
      - [Supertest](#supertest)
    - [c) A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?](#c-a-team-is-about-to-engage-in-a-project-developing-a-website-for-a-small-business-what-knowledge-and-skills-would-they-need-in-order-to-develop-the-project)
      - [Knowledge](#knowledge)
      - [Skills](#skills)
    - [d) Within your own project what knowledge or skills were required to complete your project, and overcome challenges?](#d-within-your-own-project-what-knowledge-or-skills-were-required-to-complete-your-project-and-overcome-challenges)
      - [Knowledge required](#knowledge-required)
      - [Skills required](#skills-required)
    - [e) Evaluate how effective your knowledge and skills were this project, using examples, and suggest changes or improvements for future projects of a similar nature?](#e-evaluate-how-effective-your-knowledge-and-skills-were-this-project-using-examples-and-suggest-changes-or-improvements-for-future-projects-of-a-similar-nature)
      - [Evaluation of effectiveness](#evaluation-of-effectiveness)
      - [Future suggestions for improvement](#future-suggestions-for-improvement)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Overview

This README file is for a Learning Management System (LMS) app for client, MI Academy built by three Coder Academy students using MERN stack. All related files and more information are below.

## Who is behind this?
These legends 👇🏽

Gwenny Warnick (left), Josh Teperman (middle), David Bui (right)

<img src='src/images/MERN_GroupPhoto.png' alt="Photo of app creators: Josh Teperman, David Bui and Gwenny Warnick" border="1" />

## What is in this README?
This markdown file provides an overview of the planning and build details of a real-world MERN app for Coder Academy built for a final course assesment. There are also questions answered as part of the assessment task.

# Instructions

A live version of this application can be found at https://mi-academy.netlify.com/.


## Set up 
To run this application locally on your computer, complete the following steps.

### Downloading the code:
To download the code to your computer, navigate to the directory you want to use on your computer and install both repositories. You'll need to run the following code from the root of your directory: <br>
Backend: `git clone https://github.com/JoshTeperman/mern-project-backend.git` <br>
Frontend: `git clone https://github.com/JoshTeperman/mern-project-backend.git` 

You should now have a folder structure that looks like this:

Root Directory\
-mern-project-backend/\
-mern-project-frontend/

Alternatively, you can download the code directly to your hard-drive: \
https://github.com/JoshTeperman/mern-project-backend/archive/master.zip\
https://github.com/JoshTeperman/mern-project-frontend/archive/master.zip


### Back End Setup:
To run the back end server, you will need to have Node.js installed on your machine. You can install Node at one of these websites: \
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm\
https://nodejs.org/en/download/\
... or if you have Homebrew installed run `brew install node` from console. 

Once you have Node installed, navigate into your backend directory `cd mern-project-backend` and run `npm install` to install the project dependencies. 

Next, create a new file named `.env` in your root directory and add the following, replacing the brackets `{}` with your own values:

DB_URL=mongodb://localhost:27017/{database name} <br>
JWT_SECRET={secret key} <br>
seedPassword={seed password}

`DB_URL` Should be the name you want to call your database. `JWT_SECRET` and `seedPassword` can be any random string.

Next, run `mongod` in terminal to initialize the the MongoDB database. This will create a new database and run it locally on your machine. 

You can now run `npm start` to run the express server and connect to the development database. If successful, you shold see the following logs in console:

``` 
listening on PORT 5000
✅  Connected to MongoDB
```

### Front End Setup:
Follow the same steps to install the front end dependencies:

Navigate to the front end directory:

`cd mern-project-front-end`<br>

Install front end dependencies:

`npm install`

Start the front-end server:

`npm start`

You will see the server load in terminal, and if there are no errors you will be able to navigate to `http://localhost:3000/` in your web browser to view a live version of the website. 

## Configuration for local deployment

### Seeding 
To get the application working on your local machine you will need to seed data in the database. To use the seeds provided, you will need to make HTTP POST requests to the seed endpoints using your preferred HTTP client (Postman is a popular example: https://www.getpostman.com/downloads/)

Authorization is required to seed the database. To do this, add send POST requests with the key/value pair in the headers.

 `key: 'password', 'value: '{your seedPassword}'` 

On your local machine, you should be able to make a POST request to:
http://localhost:5000/admin/seed

For deployment to MongoDB Atlas and other service providers, the following POST endpoints are provided if you run into Timeout issues. These endpoints should be hit in the following order:

http://localhost:5000/admin/seed/clients
http://localhost:5000/admin/seed/programs
http://localhost:5000/admin/seed/projects
http://localhost:5000/admin/seed/resources
http://localhost:5000/admin/seed/users


## Related links

As part of the project, we used the following resources, accessible at their links. 
- Trello https://trello.com/invite/b/nv1QDYPb/f77e98d472c980ba113a05329a62b1e4/mern-app-dream-team
- Github Repository (Front end of app) https://github.com/JoshTeperman/mern-project-frontend
- Github Repository (Back end of app) https://github.com/JoshTeperman/mern-project-backend

# Application information

## Purpose of application

### Problem description

### Solution proposed

## Functionality & features

## Architecture

Our software is separated into two main sections and broadly follows separation of concerns and an MVC model. 

### Backend: Model (M) and Controller (C) 
- Node.js API / server written with the Express.js module that routes Client HTTP requests, interacts with the database, handles data & model validation, stores and manages private keys and passwords, encrypts and decrypts user passwords and user tokens, and provides routing and other business logic.
- Locally run instance of MongoDB Database for Development with a MongoDB Atlas cloud-based Database for Production. 

### Frontend: View (V)
- React.js Client UI, which provides front-end pages and routes, interacts with the backend API, retreives and stores user authentication tokens, tracks current user information and manages User Interface and display.

## Tech stack


## Design process

## User Stories

## Workflow diagrams

### Learners

At the beginning of the planning, we expected that the Learner (i.e. employee) would need to be able to do the following as depicted in the workflow digram. 

A Learner can

- log in to their personal account
- view and edit their profile
- submit a support ticket request if they need help
- mark program content as completed.

*Learner workflow diagram*

<img src='src/images/MERN_User-flow_Learner1.png' alt="Workflow diagram for employee" border="1" />
<img src='src/images/MERN_User-flow_Learner2.png' alt="Workflow diagram for Manager" border="1" />

Although Sign Up and Purchasing were functionalities that are not required with the current model MI Academy use, we considered it for future use of the app. 

### Managers

A manager sits in between the app's Admin level and Learner level. This User account is for a person supervising a number of learners, for example, a team leader or a CEO with a marketing or CX team. MI Academy has a number of clients like this. 

For a manager, the functionality is the same as for a Learner, but they can also see progress of all Learners in their team. This is the only main difference. 

*Manager workflow diagram*

<img src='src/images/MERN_User-flow_Manager.png' alt="Workflow diagram for Manager" border="1" />

### Admins

As per the workflow diagram below, Admin for the app can 
- create, edit and delete programs containing projects
- upload content for projects
- assign projects to a User's program
- assign programs to a User
- assign a manager to a team of Users.

*Admin workflow diagram*

<img src='src/images/MERN_User-flow_Admin.png' alt="Workflow diagram for Admin" border="1" />

## Wireframes

At the begininning of the project, we designed wireframes for desktop view for the User views. Screenshots of these are below. 

### Lo-fi wireframes 

We designed lo-fi wireframes to start with before meeting with the client so that we had a tool for discussions. Since we had branding and colour themes from the client already, we did the views we expected to be using with some colour when we were ahead of time. 

#### Desktop views

<img src="src/images/MERNwf_lofi_desk1.png" alt="Lofi mobile wireframes" border="1" />
<img src="src/images/MERNwf_lofi_desk2.png" alt="Lofi mobile wireframes" border="1" />

We designed lo-fi mobile views after meeting with the client and discovering they would like responsive mobile-first design for the user and manager interfaces.

#### Mobile views

*Login page design and Sign up design (latter not required for MVP)*
<img src="src/images/MERNwf_lofi_mob2.png" alt="Lofi mobile wireframes for login" border="1" />

*Payment pages (not required for MVP) and Project & Content page views*
<img src="src/images/MERNwf_lofi_mob3.png" alt="Lofi mobile wireframes for project views" border="1" />

*Hi-fi hamburger menu and analytics design—not included in later designs as not required for MVP*
<img src="src/images/MERNwf_lofi_mob4.png" alt="Lofi mobile wireframes for content views" border="1" />

*Hi-fi Landing page and Edit profile designs*
<img src="src/images/MERNwf_lofi_mob5.png" alt="Lofi mobile wireframes for manager views" border="1" />

### Hi-fi wireframes

Initially, we completed designs for desktop views. These were approved by the client. 

#### Desktop views

*Hi-fi login page designs*
<img src="src/images/MERNwf_hifi_desk3.png" alt="Lofi mobile wireframes" border="1" />

*Hi-fi Program and Edit Profile page designs*
<img src="src/images/MERNwf_hifi_desk1.png" alt="Lofi mobile wireframes" border="1" />

*Hi-fi Support request and Content page designs*
<img src="src/images/MERNwf_hifi_desk2.png" alt="Lofi mobile wireframes" border="1" />

#### Mobile views

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


## Database ERD

There are three levels of data for the LMS content in the app, which consist of
- programs (one year long containing four projects)
- projects (each containing content items)
- resources (e.g. learning activities, videos, worksheets).

Resources and projects are dependendent on Programs and users are all assigned programs. A client is a company which may consist of one user, or Learner ('employee' in the ERD), or a team, which has a Manager and one or more Learners (all 'employees' in the ERD associated with a client). 

*Entity Relationship Diagram*

<img src='src/images/MERN_ERD.png' alt="Enterprise relationship diagram of LMS app" border="1" />

## Data flow diagram
Data in the app can be categorised into four main groups, which include
- user profile data
- program info (containing goals, description, and projects)
- project info (containing goals, description and content items)
- content items (i.e. resources such as learning activities, videos, quizzes).

Admin create and edit all of these data whereas Learners and Managers can only view them in the UI, with the exception of a User profile, which all users can edit themselves. When a User updates their profile, the database will reflect this change. This process was at the request of the client, who wanted to ensure that learners could access all of their content and account information even if they left the employer they were with at the time of the account creation.

*Data flow diagram*

<img src='src/images/MERN_DFD.png' alt='Data flow diagram for MERN app' border='1'/>

## OO Design documentation

### UML—Component diagram 
As shown in the Component diagram below (created using https://online.visual-paradigm.com), the LMS is comprised of 
- database, which stores User data
- administrative functions, which are done via the UI
- the LMS or Online Portal, where users complete learning tasks
- search functionality.

These were the components required to meet the needs of the client, who requested for users to be able to
- search the LMS
- login after being assigned an account by MI Academy
- be assigned programs with content delegated by MI Academy.

Programs are created via the UI and stored in the app's database, as are user profiles. MI Academy needs to be able to search all programs to potentially re-use it. 

*Component diagram*

<img src="src/images/MERN_ComponentDiagram.png" alt="Component diagram of LMS app" border="1" />


### UML—Use case diagram

We created a Use case diagram using Creately.com. This displays at a high level the main actors in the context of the app (Admin, Manager, Learner) and the main events in the system.

*Use case diagram*

<img src="src/images/MERN_UseCase.png" alt="Use case diagram of LMS app" border="1" />

Instructions: Provide Object Oriented design diagrams (UML or alternative) that clearly identify OO class attributes, methods, relationships.

## Project plan and timeline

## Client communications

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

## Responses

### a) What are the most important aspects of quality software?

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

### b) What libraries are being used in the app and why?

A number of libraries are used in the app. Outside of any assessment requirements, reasons for their use are summarised in the table below and expanded on in the sections following. 

*Table: Summary of libraries used and reasons for use*

|   Library used:	|   React	    |  Express 	|   Mocha	| Jest |    Joi	| Sinon? | Supertest | 
|---	|---	|---	|---	|---	|--- |--- |---
|   Reasons:	|   uses virtual DOM	|   	cc |   	|   	|   |   |   |
|   	        |   component-based 	|   	|   	|   	|   |   |   |
|   	        |   |	|   	|   	|   	|   |   |   |

#### React
For Javascript-based apps, manipulating data in the browser DOM still often creates performance issues. React has attempted to resolve this by using a virtual DOM, which is a DOM stored in memory that allows an algorithm in React to compare the DOMs and calculate the most efficient way to store the changes required. This leads to the shortest possible time needed for read/write and is the primary reason for React's high performance.  

React is also component-based, allowing us to maintain a high level of consistency across the app's views and flexibility with how we choose to structure these views in terms of code file storage.

In addition to being the software choice mandated by the rubric, React was an obvious choice to pair with an Express API backend for this project, as it is fast, flexible, and allows us to easily manage the browser DOM and UI using the tools provided by the React framework, all written in the same (Javascript) software language.

#### Express
Express is a Javascript framework built on top of Node.js that allows us to build a server and/or and API.　In this case the Express server responds to HTTP requests from the React Client, retreives data or manipulates data in the MongoDB Database and serves responses to back to the Client. Express is the most popular option for projects that want to build their own server in Javascript. 


#### Mocha / Chai / Supertest
Mocha is the framework we chose to test our backend API and database. We originally wrote tests in Jest, but found that because Jest was written specifically for React, there are some potential risks associated with using Jest for other frameworks. The MongoDB docs specifically warn against using Jest and suggest Mocha / Chai instead. 

Mocha is a popular testing language for Javascript, and when paired with Chai provides comprehensive unit testing and integration testing. We used this pair to test the behaviour of our Mongoose Models and controller functions. Supertest allowed us to test the behaviour of our API, and we used it to confirm that our endpoints were returning the correct status responses to HTTP requests, and appropriate errors when requests lack the right credentials for authorization.

#### Jest / Enzyme
Jest & Enzyme, like Mocha & Chai, are popular testing frameworks used to test Javascript applications, and were built specifically for testing React applications. They provide the same functionality, with some additional functionality (like Snapshots) that allow testing for React-specific features.

#### Joi

We used Joi as opposed to a middleware like Express-validator because its built-in validation methods are easy to use. Secondly, it supports custom error messages. The schema also allows us to put the object inside our existing user model, for example, and is easy to read, clearly showing what we expect from each property. The screenshot below shows how clearly this appears.

*Screenshot of a Joi object in our app*
<img src="src/images/MERN_Joi.png" alt="screenshot of object in Joi testing of app" border="1">

### c) A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?

#### Knowledge


#### Skills

### d) Within your own project what knowledge or skills were required to complete your project, and overcome challenges?

#### Knowledge required

#### Skills required



### e) Evaluate how effective your knowledge and skills were this project, using examples, and suggest changes or improvements for future projects of a similar nature?

#### Evaluation of effectiveness 


#### Future suggestions for improvement