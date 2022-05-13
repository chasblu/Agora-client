

# Agora-client

An online web application for discussions on a forum based on topics and decriptions. Each forum has their own posts which is fully functional.

## Description of Agora-client
When you first login in there are credentials for the user. There is also a sign in page for the user, So you must login. There is a homepage where all the forums are displayed. Each forum is clickable to land you on the post page where you can create and edit posts. There is also a add forum page where you can create a forum with a topic and description of the discussion.  The backend has full CRUD capability.  The forums and posts have a one-to-many relationship where there are many posts to one forum. 

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
We had encountered some difficulties with the page not updating the newly created forum, post or the edited version. Ultimately, we had to useHistory to go back to the page and also use the original function to have the useEffect rerendered with the new updated information. We also had encountered some bugs with the post data, we were not able to directly use a get route to display all posts since the post information is a sub-document of the forum, so we had to use a show route to display the version of the post we would like to edit.


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






