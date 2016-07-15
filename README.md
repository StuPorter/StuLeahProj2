 // WDI Project 2
 // Due July 15th, 2016
 // Created by Stu Porter and Leah Nelson
 
 ////////////////////////////////////////
 
 LAWYERUP
 
 ////////////////////////////////////////
 
 Purpose:
 
 LawyerUp is a multi-purpose website that's goal is to connect people in need of legal assistance with lawyers in their area. Not only can you search by location, but also by area of expertise. For example if John Doe was in a automobile accident in Lincoln Park he would be able to search Chicago through the filter of "Car Accidents" which would lead him to all lawyers in the Chicago area who specialize in automobile related accidents. 
 
 LawyerUp also helps lawyers trying to get their name out, through the lawyer profile feature. By Registering for LawyerUP you will now have access to our database and have the ability to search based on location and area of expertise in regards to your legal needs. We hope you find this website helpful in terms of any legal assistance you may need!
 
 //////////////////////////////////////////
 
 Functionality
 
 ///////////////////////////////////////////
 
 The database Leah and Stu set up contained two documents in a collection "lawyer" and "user." The user registration form can be redirected by HREF links on the home page, where you will be redirected to to USER REG. On USER REG a form will be shown where potential clientees can post their information. Through the POST function the users information is stored in the user database and the page will be redirected to the Search Page.
 
 For the search page to work, the POST function would also have to be enabled through the LAWYER REG form where lawyer profiles are created. On the LAWYER REG FORM information is entered and once the REGISTER button is hit the page will serve info to the database and render the page to read "Lawyer Profile Made!" 
 
 At this point there should be objects created on the User and Lawyer documents. On the search page which is rendered after either login or a new registration a user will be able to search by location, and category. 

 Through the GET function the search page is rendered and once in the information is entered through POST the page is told to "find" any matches based on city and category. If there is a match a page will render with the lawyers profile, that containts a 'learn more' button. This learn more button will render the entire Lawyer Profile.
 
 ///////////////////////////////////////////////
 
 Controllers
 
 +The controllers which translate incoming requests into outgoing responses that were included consist of. Home.js, lawyerreg.js, profmade.js, search.js, and usersReg.js. Each controller had a specific responsibility of recieving requests that had to do with their specific features. For examole the lawyersreg.js controller dealt with GETing and POSTING information that deals with Lawyers creating profiles.
 
 ///////////////////////////////////////////////
 
 Issues
 
 One of the issues we had BUT were able to fix was being able to display that a search was run, but not matches were found. After playing around with the functions for a while we were able to figue out that the (else if) statement needed to be (1 < lawyer.length) for the function to run. Options previously tried that did not work were (!lawyer) and (lawyer = {})
 
 
 ////////////////////////////////////////////////