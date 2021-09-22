

# Agora-client

An online web application for discussions on a forum based on topics and decriptions. Each forum has their own posts which is fully functional.

## Description of Agora-client
When you first login in there are credentials for the user. There is also a sign in page for the user, So you must login. There is a homepage which all the forum is displayed. Each forum is clickable to land you on the post page where you can create and edit posts. There is also a add forum page where you can create a forum with a topic and description of the discussion.

 #### This project was deployed to netlify, heres the link: https://agoraforum.netlify.app/
 
 <img width="812" alt="Screen Shot 2021-07-20 at 9 33 25 AM" src="https://user-images.githubusercontent.com/72947727/126333231-ecaa801e-7599-4787-8e7f-a91a04b1a3d5.png">
<img width="744" alt="Screen Shot 2021-07-20 at 9 33 41 AM" src="https://user-images.githubusercontent.com/72947727/126333249-0e23ccab-4bd1-4c49-a865-cf49e87167ef.png">
<img width="554" alt="Screen Shot 2021-07-20 at 9 33 48 AM" src="https://user-images.githubusercontent.com/72947727/126333260-f7e85535-4079-48eb-bf0f-fe1d85b00d49.png">
<img width="520" alt="Screen Shot 2021-07-20 at 9 33 56 AM" src="https://user-images.githubusercontent.com/72947727/126333296-a9a28e72-323c-46ff-82ad-3626d74e0611.png">
 <img width="715" alt="Screen Shot 2021-07-20 at 9 34 11 AM" src="https://user-images.githubusercontent.com/72947727/126333161-fcfcbdd9-687f-4485-ad14-f4ccc305651b.png">

### Inspiration  for the project
Our team decided creating a forum would be a great start for something we can build on along the way with each other. We wanted to be able to implement the backend ourselves and be able to extract data of our own. We thought it would be a great way to understand the backend and the front end and have them work asynchronously.

## Wireframing of the components 

<img width="740" alt="Screen Shot 2021-07-19 at 5 28 10 PM" src="https://user-images.githubusercontent.com/72947727/126230722-9f2793dc-63af-45ce-a35b-18da689a42c2.png">
<img width="790" alt="Screen Shot 2021-07-19 at 5 28 03 PM" src="https://user-images.githubusercontent.com/72947727/126230728-cfb19e93-f6d1-456b-8510-1c1a322ab6ed.png">
<img width="757" alt="Screen Shot 2021-07-19 at 5 28 21 PM" src="https://user-images.githubusercontent.com/72947727/126230707-a58d0e0a-d550-4f76-bd64-b4491598a2af.png">

## MVP Goals
-As a user I want to be able to see which forums pages i can visit
-As a user I want to be able to create a new forum page
-As a user I want to be able to post forums pages
-As a user I want to be able to like a post
-As a user I want to be able to edit my posts
-As a user I want to be able to delete my posts

## Stretch Goals

-As a user I want to be able to search for forum pages
-As a user I want to be able comment on someone elses post
-As a user I want to be able to log in
-As a user I want to be able to go to my profile to see all my posts
-As a user I want to be able to see my liked/favorite posts

### Complications during the project
We had encountered some difficulties with the page not updating the newly created forum, post or the edited version. Ultimately, we had to useHistory to go back to the page and also use the original function to have the useEffect rerendered with the new updated information. We also had encountered some bugs with the post data, we were not able to directly use a get route to display all posts since the post information is a subdocument of the forum, so we had to use a show route to display the version of the post we would to edit.


## Technologies Used.
1. Javascript
2. React
3. CSS- grid
4. React-router-dom


## Getting started.
1.Fork 
2. Clone down the repo.
3. Once it’s in your remote repository, cd into the file (make sure you're in the react file). Install dependencies.
4. Yarn add react-router-dom.
5. Once you have the dependencies on the forked and clone version in your remote repository, run Yarn start. 
 -If you notice, your package.json file should have all the dependencies and their versions listed under the dependencies.
 -Another thing you can notice is that  your file should have a yarn.lock, and  the node modules. 
 -You should be set to go after these.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


