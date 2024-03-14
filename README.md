# Social-Network-API <!-- omit from toc -->
by Sheila Hanson ![Github license](https://img.shields.io/badge/license-MIT-blue.svg)  
![alt text](assets/img/Logo.png)  
## Description <!-- omit from toc -->


## Table of Contents <!-- omit from toc -->
  
- [Installation](#installation)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
- [Usage](#usage)
  - [Database Model Diagram](#database-model-diagram)
- [API Endpoints](#api-endpoints)
  - [User Routes](#user-routes)
  - [Post Routes](#post-routes)
  - [Comment Routes](#comment-routes)
  - [Like Routes](#like-routes)
  - [Testing](#testing)
- [Features](#features)
- [Challenges](#challenges)
- [Contributing](#contributing)
- [Questions](#questions)
- [License](#license)
- [Badges of Technologies Used](#badges-of-technologies-used)
    

## Installation
- Clone the repository to get your starter code  
- Install dependencies
  - npm init  
    - npm install Sequelize  
    - npm install dotenv package  
    -  npm install MySQL  
    -  npm install MySQL2  
    -  npm install Node.js  
 - Insomnia
   - Used for testing
  
  ### User Story  
*  As A social media startup  
    I WANT an API for my social network that uses a NoSQL database  
    SO THAT my website can handle large amounts of unstructured data      
  ### Acceptance Criteria
*  GIVEN a social network API  
*  
    WHEN I enter the command to invoke the application  
    THEN my server is started and the Mongoose models are synced to the MongoDB database  

    WHEN I open API GET routes in Insomnia for users and thoughts  
    THEN the data for each of these routes is displayed in a formatted JSON  

    WHEN I test API POST, PUT, and DELETE routes in Insomnia  
    THEN I am able to successfully create, update, and delete users and thoughts in my database  

    WHEN I test API POST and DELETE routes in Insomnia  
    THEN I am able to successfully create and delete reactions to thoughts and add and delete friends to a user’s friend list  

      
## Usage 
- Run schema
  -  Develop folder - db folder - right click schema.sql 
      -  Then open in an integrated terminal and type the following commands in  
           -  mysql -u root -p  
           -  password - [enter your password]  
           -  source db/schema.sql  
           -  quit (this is going to end the sql shell = Bye)  
   ![alt text](assets/img/mysqlstartup.png)
- Run seeds
  - JS server.js - right click server.js
      - Then open in an integrated terminal and type the follow commands in  
          - npm i (run to make sure all the dependencies are installed before you begin)
          - npm run seed  
      - Starting the server - type the following below in the command line
          - npm run watch  
           - response on last line = App listening on port 3001!  
  ![alt text](assets/img/npmi.png)  
![alt text](assets/img/npmrunwatch.png)

 ### Database Model Diagram  
![alt text](<assets/img/EER Diagram.png>) 

## API Endpoints  
  ### User Routes  
  - POST /api/user/register: Register a new user account   
  - POST /api/user/login: Log in as a user  
  - POST /api/user/upload-avatar: Upload user avatar  
  ### Post Routes  
  - POST /api/posts: Create a new post  
  - POST /api/posts/upload-image: Upload post image.  
  - GET /api/posts: Retrieve all posts  
  - GET /api/posts/:id: Retrieve a specific post by ID  
  - PUT /api/posts/:id: Update a specific post by ID  
  - DELETE /api/posts/:id: Delete a specific post by ID  
  ### Comment Routes  
  - POST /api/comments: Create a new comment  
  - GET /api/comments: Retrieve all comments for a specific post  
  - PUT /api/comments/:id: Update a specific comment by ID  
  - DELETE /api/comments/:id: Delete a specific comment by ID  
  ### Like Routes  
  - POST /api/likes: Add a like to a post  
  - DELETE /api/likes/:id: Delete a like from a post  
  - GET /api/likes/:postId: Retrieve all likes for a specific post  
  
### Testing 
Insomnia - testing will be done using Insomnia
  - run npm run start
  - make sure your mongoDB has the DB from the server.js and vice versa connected up
  - in insomnia, you will do get, post, delete routes for users, thoughts, friends and reactions
  - an example of a post user route: URL: [http://localhost:3001/api/users](http://localhost:3001/api/users) - then the json body: {"username": "test4", "email":  "test@test.com"}

 
  
  DEMO: https://app.screencast.com/fCNdl169gDF9t

## Features
- MySQL workbench database model EER diagram  
- Logo  
- Database Model Diagram  

## Challenges  
 


## Contributing
[NPM](https://www.npmjs.com/package/inquirer/v/8.2.4?activeTab=readme#installation)  
[Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4)  
[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web)  
[Node.js](https://nodejs.org/docs/latest/api/)  
[Stack Overflow](https://stackoverflow.com/?newreg=67d94556b887449fa2885dadf54a5439)  
[JS Cheatsheet](https://htmlcheatsheet.com/js/)  
[W3school](https://www.w3schools.com/)  
[DEV](https://dev.to/envoy_/150-badges-for-github-pnk#contact)  
[Shields](https://shields.io/)  
[Sequelize](https://sequelize.org/docs/v6/getting-started/)  
[YouTube](https://youtube.com)  
[Insomnia](https://insomnia.rest)

## Questions
![Ask me anything](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)
If you have any questions, or additional feedback, please feel free to email me and I will respond as soon as possible.
    
* Github -
[Social-Network-API](https://github.com/Sheila-Ha/Social-Network-API.git)

* Email -
slhanson11@live.com

## License 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



## Badges of Technologies Used
![MDN Web Docs](https://img.shields.io/badge/MDN_Web_Docs-black?style=for-the-badge&logo=mdnwebdocs&logoColor=white)  ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Insomnia](https://img.shields.io/badge/Insomnia-black?logo=insomnia&logoColor=5849BE)    
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)  ![.ENV Badge](https://img.shields.io/badge/.ENV-ECD53F?logo=dotenv&logoColor=000&style=flat-square) 
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)   
![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)  ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?logo=mongodb&logoColor=white)  ![W3schools](https://img.shields.io/badge/W3Schools-04AA6D?style=for-the-badge&logo=W3Schools&logoColor=white) ![JSON](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=red)  
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E) ![Zoom](https://img.shields.io/badge/Zoom-2D8CFF?style=for-the-badge&logo=zoom&logoColor=white) ![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)  ![Google Chrome](https://img.shields.io/badge/Google_chrome-4285F4?style=for-the-badge&logo=Google-chrome&logoColor=white)  
![Stack Overflow](https://img.shields.io/badge/Stack_Overflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white)  ![Lenovo](https://img.shields.io/badge/lenovo%20laptop-E2231A?style=for-the-badge&logo=lenovo&logoColor=white)  ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB)

