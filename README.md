# Note Taker

# Table of Content
*[General information](#general-information)

*[Specifications](#specifications)

*[Screenshots](#screenshots)

*[Deployment](#deployment)


## General information

This application is built to help user to take notes and stores them  in the way the user can access them anytime.
User can create a new note by specifying a Title , type the content.The save icon will be automaticaly displayed on the top right coner and then user can Save the note.
All saved notes titles appear at the left side 

User can display content any existing notes on the left side ,by clicking on it then the content and title are loaded in the editing area where after user can see all details of the notes.

user has also option to delete an existing note by click on the delete icon shown in front of each notes.





## Specifications

The front end of this application was built using the following tools:
-   Html
-   Boostrap
-   Css

The data storage and logic of this application was built on the server side using the following technlogies and Tools:

-   Expess
-   Javascript
-   Json
-   Crypto

All data related to notes are saved in a Json file as Object,and each notes is associated to an ID using the crypto library which helps to manipulate them especially when deleting a specific note 





This application was built using 

I have organized my folders as below:
-   Folder "routes" which contains all routes created to communicates between our Server and the fron End
-   Folder "public" which contains all our front End files
-   Folder "db"  contains the json file that holds all created notes.
-   Root  Folder which contains configurations files and  the server.js where the application starts when executed 

## Screenshots

-Home Page:

![image](https://user-images.githubusercontent.com/77184762/117396502-1b524200-aec8-11eb-8ec7-332a6d41f019.png)


-Notes Page

![image](https://user-images.githubusercontent.com/77184762/117397307-d4fde280-aec9-11eb-815f-c30b24bdb39f.png)

-notes api Page 

![image](https://user-images.githubusercontent.com/77184762/117397408-11c9d980-aeca-11eb-85bb-85a04c1ac75a.png)



## Deployment

This application was deployed on Heroku , Below is the link to access it:

https://note-taker-app-nodejs.herokuapp.com/