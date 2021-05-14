# Tech-Blog ![badge](https://img.shields.io/badge/license-MIT-blue)

## Table of Contents
* [Description](#description)
* [Technology Used](#technology)
* [Resources](#resources)
* [Licensing Information](#licensing)
* [GIF Demonstration](#demonstrations)
<br>
<br>

## Description

This is a project using Node.js, Express.js, Sequelize, and Handlebars to build a tech blog website. This is mainly just the backend http routes and models for a server and database. Though users can fork or clone the repo to test the routes in the Insomnia program if they desire. A prerequisite to use this is having Node.js installed on the user's computer. The user can go [here](https://nodejs.org/en/) if they need to install node.js.  The user will also need to have MySQL and MySQL Workbench installed as well. They can go [here](https://dev.mysql.com/doc/mysql-getting-started/en/) to download MySQL and [here](https://dev.mysql.com/downloads/workbench/) for MySQL Workbench.  The user then navigates to the folder containing server.js within their terminal, then user can run the command *npm install inquirer* to install all the dependencies. The user will then need to navigate to the schema file to copy the Workbench commands to build the database, and paste them into MySQL Workbench. The user can then run *npm run seed* in their terminal to seed the database. Once seeded, the user can run *npm start* to start the server then test the GET, POST, PUT, and DELETE routes in Insomnia for /api/products, /api/products/:id, /api/categories, /api/categories/:id, /api/tags, and /api/:id.

### Please follow [this link](https://intense-bayou-51128.herokuapp.com/) to view the live application.
<br>

## Technology Used
* JavaScript
* Node.js
* MySql Workbench
* Sequelize
* Express.js
* Handlebars.js
<br>
<br>

## Resources
* [Sequelize Documentation](https://sequelize.org/master/index.html)
* [Handlebars Documentation](https://handlebarsjs.com/)
* [Cookie-Session Documentation](http://expressjs.com/en/resources/middleware/cookie-session.html)
<br>
<br>

## Licensing Information
This project is covered under the MIT license.