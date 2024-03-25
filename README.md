# Zendesk Clone

### [Deployed](https://zen-desk-fsd.netlify.app/)

## Intro

A (MERN) React Redux Toolkit full stack application with jwt authentication, CRUD operations, protected routes, and NoSQL database. Support Ticket Services application is a customer facing product support system to engage with technicians and solve encountered issues

## SMEAC

#### (Situation, Mission, Execute, Admin, Comm)

### Situation

Once the user encounters an issue with a product then it's the support services that will improve the users overall experience. The Support Ticket Services serves as a customer facing open line of communication and product troubleshooting. When a user needs help with product support the user submit's a ticket to Support Ticket Services. A users product experience will help increase revenue and improve company reputation and business relationships.

### Mission

Support Ticket Services role is to solve and report issues within 24 hours, when a product issue is encountered by a user. STS will assist in solving any reported issue hours. Once a ticket is submitted by a user, a staff member will attempt to solve it through product documentation and troubleshooting steps. A staff member and user can create a note on the ticket and close it if solved.

### Execution

The user must register and log into Support Ticket Services application and submit a ticket. The user will need to select product item from the dropdown box and write a detailed description of the issue. After a ticket is submitted, a user can post additional notes.

The format includes:

- Problem Statement
- Device and Version
- Browser and Version
- Reproduction Steps
- Expected Outcome
- Actual Outcome
- Notes
- Screenshot

A staff member will see the list of tickets as a "new" and address the issue and create a note on the ticket as they are working through the debugging process. The steps for the staff member to solve the issue are included in this order:

- Utilize Product Documentation
- Reproduce The Issue
- If all resources are exhausted then escalate to jira for dev work

## TECHNOLOGIES

### Frontend

- HTML: ReactDOM.Render will pass the Single Page Application through the root element
- CSS: Styling HTML
- JavaScript/JSX: Functional Programming Language across the whole application
- React: UI Library
- Redux ToolKit: Robust State Management
- React Dev Tools

<img src="https://raw.githubusercontent.com/GregPetropoulos/SupportDesk/main/client/src/assets/MERN-stack-1.webp"/>

### Backend

- Nodejs: Runtime
- Express: Backend Framework, handles endpoints
- MongoDB: Database stores collections
- Mongoose: ODM Object Data Mapper through Express
- Postman: Ground truthing routes and request/response objects

Version Control

- Git
- Github Repo for the remote repository
  IDE
- VSCODE with several extensions

## LAUNCH

[Deployed](https://supportdesk-8110.onrender.com/)

Support Ticket Services launched on Heroku on 4-29-2022

## ILLUSTRATIONS

### Original Before

Home page
![ogHome](./client/src/assets/ogHome.png)

Login Page
![ogLogin](./client/src/assets/ogLogin.png)
Register Page
![ogRegister](./client/src/assets/ogRegister.png)
New Ticket Page
![ogNewTicket](./client/src/assets/ogNewTicket.png)
View All Of Users Tickets Page
![ogViewTickets](./client/src/assets/ogViewTickets.png)
View One Ticket Page
![ogTicket](./client/src/assets/ogTicket.png)
Add A Note
![ogNote](./client/src/assets/ogNote.png)


## SCOPE OF FUNCTIONALITIES

## Features

- Authentication
- ...

### Authentication

- Login
- JSON Web Token

### A users functions include:

- Create a ticket
- View a ticket
- 
### An admin user will have future enhancements implemented see [Roadmap](#roadmap)

## EXAMPLE OF USE

## PROJECT STATUS

Currently live and [Deployed](https://zen-desk-fsd.netlify.app/) to Netlify, fully functional.

## ROADMAP

This project will undergo several enhancements to include

- Added UI/UX for Admin/Users
- Added format placeholders to create a ticket form
- Adjusted layout
- Email submission on status change
- Admin Dashboard
- Admin role to include:
  - Open Ticket
  - Assigned Ticket
  - Closed Ticket
- User role add ons:
  - User can reset password
  - User can delete account
  - User history snapshot 45 days
- Support screenshots
- TBD

## SOURCES

- [MDN]()
- [JSON Web Token](https://jwt.io/)
- [HTML]()
- [CSS]()
- [JavaScript]()
- [React]()
- [Redux ToolKit]()
- [Redux]()
- [Nodejs]()
- [Express]()
- [MongoDB](https://www.mongodb.com/)
- [Mongoose]()
- [Postman]()
- [Git]()
- [Github]()

## OTHER INFORMATION
