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

This is a project using Node.js, Express.js, Sequelize, and Handlebars to build a tech blog website. When the user first visits the tech blog website, they will see any existing blog posts. They may click on them to read the content and see any comments. They must be logged in to leave comments. If there are no existing blog posts, a message will display stating there are no blog posts. If the user clicks any navigation link besides Home, they will be prompted to login or sign up. If the user does not have an account, they will need to create one by clicking Signup, then inputing their username, email, and a password. User passwords are encrypted on the database using bcrypt. 

Once signed up, the page will auto-navigate to the dashboard. If the user already has an account and signs in, once signed in the page will auto-navigate to the dashboard.  On the dashboard, the user will see a "Create New Entry" button, post history, and an "Edit" button. 

Clicking the "Create New Entry" button will take the user to the create post page where they can enter the title and content of their blog post, then click "Create!" to add it to the posts. Once the post is created, the page auto-navigates to the dashboard where they will see their new post. The user can click on the title of any post to view the content of the post, its comments, and have the ability to add their own comments.

Also on the dashboard is an "Edit" button below each post. Clicking edit will take the user to a page where they can update their post. The "Edit Your Entry" page also contains a "Delete" button that will allow the user to delete their post. After a post is deleted, the page auto-nagivates back to the dashboard.

If the user goes inactive for 10 minutes, they will be automatically logged out of the site. They will be prompted to sign back in upon clicking any link besides Home.

### Please follow [this link](https://intense-bayou-51128.herokuapp.com/) to view the live application.
<br>

## Technology
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

## Demonstrations
<br>

### Signup Demo
![](gifs\signup-gif.gif)

<br>

### Login Demo
![](gifs\login-gif.gif)

<br>

### Update/Delete Demo
![](gifs\update-del-gif.gif)

<br>

### Comment Demo
![](gifs\comment-gif.gif)

<br>

### Authentication Demo
![](gifs\auth-demo-gif.gif)