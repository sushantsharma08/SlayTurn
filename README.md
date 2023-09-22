## Note :

The back-end live server of the project| [`Click here`](https://slayturn-api.onrender.com) | 

## SlayTurn
This is an E-commerce platform made by Sourabh Kothari. This web application is made using HTML5, CSS3, JavaScript, React.js, Ajax, Bootstrap, Redux, Styled- components as front-end and Node.js, Express.js as backend and MongoDB as database .For checkout I have used Stripe payment Intgeration.

A deployed version can be checked here :  https://slayturn.vercel.app/

## Front-end:
Login using JWT authentication, different product categories, you can view various products, filter
them, can select quantity, color, and size, and add them to the cart. From the cart page, you can place an
order and make a payment through Stripe checkout. 

## Back-end:
Different APIs for user Signup, Login, payment, get user info through User ID, get all users, get all products, update product info, add products,
delete products, add items into the cart, get the cart through User ID, get all carts, delete cart. (Authentication
using JWT)

## Tech Stack Used: 
1. Frontend - HTML5, CSS3, JavaScript, React.js ,Ajax and Bootstrap, Redux, Styled- components.
2. Backend - Node.js, Express.js (Node.js framework)
3. Database – MongoDB.
4. For Payment - Stripe.


## Deployment:
For Deployment, we have used `vercel` and `render` as a platform. 

| Live Project |[`Click here`](https://slayturn.vercel.app/)| 

## CI/CD setup
1. Create a GitHub repository. You may initialize it with a README, license, .gitignore
2. Install git via terminal 

   (On Ubuntu you can do `sudo apt-get install git`)
3. Then do a git clone of this repository, or simply download the zip file of this repository from GitHub and extract it.
4. Copy the project in the new folder created after cloning (its name will be same to that of the repository you cloned).
5. Add all the changes you want.
6. Then execute these commands:
   
   ````
   git add . 

   git commit -m "[mandatory commit message]" 
   
   git push [url to your repository] master/main 
7. Now your commit will be successfully pushed to the main branch of your GitHub repository.

## Project Setup: 

**Requirements:** Pre-installed `VS code` with `Node js`.

Steps to setup and run our project locally on your machine
1. Install git on your machine if not installed already
2. Clone the repository 
`git clone https://github.com/golemvincible/SlayTurn.git`

3. Go inside the cloned directory on the terminal.
4. Install the required packages by command 
`npm install`

5. Start local-server by command 
`npm start`

6. Enter the following link in browser, and it will should open the Front-end Page.
   http://localhost:3000
7. Backend Page - http://localhost:8000
