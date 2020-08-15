# team20 - COVID-19 Volunteer Platform

## Team Member
zhan8118 - Ziyue Zhang  
zhan3009 - Yifan Zhang  
panganqi - Anqi Pang  

## Purpose 
In order to fight against COVID-19 pandemic, we are devoted to providing a platform for connecting passionate people to contribute together. This web application, COVID-19 Volunteer Platform, is for volunteers who are looking for social volunteering opportunities to help people affected by COVID-19 and organizations that are looking for responsible volunteers. Our web application helps to transfer information between volunteers and organizations. People who want to serve the society as volunteers during this difficult time could browse our website to learn about current volunteering opportunities. Organizations that are hunting for volunteers could post their recruitment information. Our website supports to display information from responsible organizations and prospective volunteers in order to unite people more efficiently in this difficult time.

## How to Use
### Download&Install
Please download the ZIP and unzip it.
Open the folder "team20-master" in terminal and run **npm install**.
Run the app using the command **npm start**.
### Login:
#### Volunteer: 
email: user@user.com  
password: user  

#### Organization:
email: user2@user.com  
password: user2  

#### Administrator: 
email: admin@admin.com  
password: admin  

### For Volunteers:
#### Recommended Opportunities:
After a volunteer user login, he will be directed to his userpage. He can see the opportunities recommended by the platfform based on the profile of him. If he wants to see all the opportunities, he can click on the SEE ALL button below the recommended opportunities and see all the opportunities on the platform. So far, the recommend functionality is just implemented by hard coding and it will be implemented in the later after back end is established.

#### Apply For New Jobs:
A user can see the details of a post after clicking on the post and there are two buttons which are ORGANIZATION PROFILE and APPLY NOW in the bottom of the detail page. If he click on the ORGANIZATION PROFILE button, he can see all the information of the organization. For a logged in volunteer user, he can apply a new job by clicking on the APPLY NOW button. If a user applys for a new job, he will be directed to his My Application Page which diplays all the applications he has and the new job will be added in the list. If that job has beed applied by that user, the apply button will be grey and show applied status which can not be clicked by that user.

#### Personal Applications
A volunteer user can see the applications they already do when they click on the My Application button on the Navbar and they will be directed to My Application Page which diplays all the applications he has. A application will have three status, accepted(he has been hired by the organization), rejected(he has been rejected by the organization) and pending(application is being processed).

#### Manage Profile:
If Volunteer users click on the My Profile button, they will see their profile page which is fixed and can also be viewed by organization which volunteer users have applied and administrator. If they want to update the profile, they could click on the Update Profile button on the Navbar, then they can edit everyting in their profile except their name and email. 

#### Search By keyword
A volunteer user can see a search bar in their userpage. They can enter the keyword of the job to search for related jobs in our platform. After the user has entered the key word and click on the GO button, the search result page will display the related results.The functionality of the search bar is just implemented by search for the post contains the string which the user has entered. The search functionality will be more complex and complete after back end is established.
Notes: Since the key word is obtained from user and this variable will be passed from userpage to the result page, we can not refresh the result page. An error will occur if you refresh that page because of that property. That issue will be handled nicely after back end is established.

### For Organizations:
#### Manage Profile:
Organization users can edit their introduction and website of the profile in the *Profile* page, which can be viewed by all volunteers and administrator.
#### Post New Jobs:
In the *Post a New Job* page, user can submit a new job information form to the administrator. The job will be posted after administrator's review. The administrator will ensure the reliability of the job before approving it, especially during the pandemic. 
#### Manage Posts:
Users can always edit and delete their own posts in the *Profile* page. To edit a post, click *DETAIL* to see the details of your post, and click *EDIT* below the post information to edit those details. Edited posts will be reviewed by administrator again and will be invisible to volunteers before approval. The status of your posts will be shown as *Approved* or *Under review*.
#### Fit Degree:
The fit degree of applicants is calculated based on the job location, related area, and requirements that both applicants and organizations provide and is only for reference. It will be shown as A/B/C with each applicant's information.  
A: The applicant is highly compatible with your position  
B: The fit between the applicant and your position is average  
C: The applicant does not fit your position well
#### Hire Volunteers:
Volunteers who applied to user's jobs are shown in the *All Applicants* page and under every post's detail page respectively as well. In the *Profile* page, users can also click *APPLICANTS* button  to toggle them on/off. Users can check applicants' detailed profiles and accept or reject each applicant. Decisions are permanent. When an applicant is either *Rejected* or *Accepted*, which can be seen with each applicant's information, it can't be changed afterwards in the app.
### For Administrator:
#### Login Credentials: 
Email: admin@admin.com	
Password: admin

After login as admin, the user will be redirected to the Administration Entry page and there are buttons: Organizations, Volunteers and Posts. You can enter the corresponding management page by clicking each button. 

At the navigation bar, there is a Home button which can redirect you back to this Administration Entry Page. The Log Out button will log you out and direct to website home page.  

#### Volunteers Management: 
Click the VOLUNTEERS button at the administration page and you will enter the volunteers management page. There is a list of volunteer users shown below. 

##### Manage Volunteer Profile:
Clicking the View/Edit button at each row allows the admin user to view or modify a volunteer’s profile. Please note that admin can only modify part of the volunteer’s profile information, including location, links, and description. After editing, please click the Update Profile button at the bottom of the page, a success message will pop up and the user profile is updated.

##### Delete Volunteer User:
If you click the Delete button at the last column. A confirming window will  pop up and the selected user will be deleted if you choose “Yes”.
Organizations Management:
Please click the Home button at the navigation bar to go back to the Administration page. Click the second button “ORGANIZATIONS”. There is a list of organizations. 

#### Organizations Management:
Please click the Home button at the navigation bar to go back to the Administration page. Click the second button “ORGANIZATIONS”. There is a list of organizations. 

##### View/Edit Organization Profile: 
Similar to volunteer management, the admin can also edit the organization profile information except email.

##### Delete Organization User: 
You can delete an organization user by clicking the Delete button.

#### Posts Management:
Go back to the Administration Entry page and click the third entry “POSTS”. You will enter the post management page which displays a list of posts. For each post, there are three buttons “Approved/Approve”, View and Delete.

##### Approve Post: 
The “Approved/Approve” button shows the post status. When its color is blue, it displays “Approved”; when it’s red, the post status is under review. You can click the red “Approve” button to make the post become approved to be accessible to the public.

##### Create New Post: 
There is a button at the right top of the navigation bar which redirects you to the publishing post page. After filling in the post form and submit, the new post will appear at the post list.

##### View/Delete Post: 
The View button redirects to the post detail page where admin can review the post detail to decide whether to approve it. Otherwise admin can delete unapproved posts.

## Overview of the routes 

### Volunteer resource routes
#### a GET for getting vol profile from a particulat volunteer
Get: '/volunteer/profile/:id'<br/>
Url: https://frozen-journey-02316.herokuapp.com/volunteer/profile/5f38420164f1290017d32285 <br/>
What they are used: to get volunteer profile from a particulat volunteer <br/>
What data they expect to be sent: nothing <br/>
What they would return: a Volunteer Object <br/>
{
    "type": "volunteer",
    "_id": "5f38420164f1290017d32285",
    "firstName": "Ziyue",
    "lastName": "Zhang",
    "email": "user@user.com",
    "password": "$2a$10$etqAkLL06ufWQdKzQ3XBkOQxaRF4wGJkqAKRJXV/fi9K6zba6FZjS",
    "__v": 0,
    "availability": {
        "option1": true,
        "option2": false,
        "option3": false,
        "option4": false,
        "option5": false,
        "_id": "5f38424564f1290017d32287"
    },
    "desc": "I am a student.",
    "links": "user@user.com",
    "location": "",
    "skills": {
        "analytics": false,
        "biology": false,
        "biotech": false,
        "community": true,
        "content": false,
        "data": false,
        "finance": false,
        "helpdesk": false,
        "manufacturing": false,
        "marketing": false,
        "mechanics": false,
        "IT": true,
        "anything": false,
        "_id": "5f38424564f1290017d32286"
    }
}

#### a POST for updating profile info to a particular volunteer
Post: "/volunteer/update/:id" <br/>
Url: https://frozen-journey-02316.herokuapp.com/volunteer/update/5f38420164f1290017d32285 <br/>
What they are used: to update profile for a particulat volunteer <br/>
What data they expect to be sent: <br/>
``` json
{
    "location": "Toronto",
    "links": "user@user.com",
    "desc": "I am a student.",
    "skills": {
        "analytics": false,
        "biology": false,
        "biotech": false,
        "community": true,
        "content": false,
        "data": false,
        "finance": false,
        "helpdesk": false,
        "manufacturing": false,
        "marketing": false,
        "mechanics": false,
        "IT": true,
        "anything": false
    },
    "availability": {
        "option1": true,
        "option2": false,
        "option3": false,
        "option4": false,
        "option5": false   
    }
}
```
What they would return:a Volunteer Object whoese info has already updated <br/>
``` json
{
    "type": "volunteer",
    "_id": "5f38420164f1290017d32285",
    "firstName": "Ziyue",
    "lastName": "Zhang",
    "email": "user@user.com",
    "password": "$2a$10$etqAkLL06ufWQdKzQ3XBkOQxaRF4wGJkqAKRJXV/fi9K6zba6FZjS",
    "__v": 0,
    "availability": {
        "option1": true,
        "option2": false,
        "option3": false,
        "option4": false,
        "option5": false,
        "_id": "5f38650b6f93f10017f7b489"
    },
    "desc": "I am a student.",
    "links": "user@user.com",
    "location": "Toronto",
    "skills": {
        "analytics": false,
        "biology": false,
        "biotech": false,
        "community": true,
        "content": false,
        "data": false,
        "finance": false,
        "helpdesk": false,
        "manufacturing": false,
        "marketing": false,
        "mechanics": false,
        "IT": true,
        "anything": false,
        "_id": "5f38650b6f93f10017f7b488"
    }
}
``` 

#### a GET request for getting application list of a particular volunteer
Get: "/volunteer/applicatoinlist/:id" <br/>
Url: https://frozen-journey-02316.herokuapp.com/volunteer/update/5f38420164f1290017d32285 <br/>
What they are used: to get the application list of a particular volunteer <br/>
What data they expect to be sent: nothing <br/>
What they would return: An array with applications inside<br/>
``` json
[
    {
        "applicant_status": "accepted",
        "_id": "5f3844d564f1290017d322ca",
        "applicant_id": "5f38420164f1290017d32285",
        "applicant_name": "Ziyue Zhang",
        "post_id": "5f38431e64f1290017d322a7",
        "post_name": "Clothing Centre Volunteer",
        "applicant_rank": "D",
        "__v": 0
    }
]
```
 
#### a GET request for getting a particular application of a particular volunteer
Get: "/volunteer/getapplication/:id/:post_id"<br/>
Url: https://frozen-journey-02316.herokuapp.com/volunteer/getapplication/5f38420164f1290017d32285/5f38431e64f1290017d322a7<br/>
What they are used: to find whether this user has applied  a particular post<br/>
What data they expect to be sent: nothing<br/>
What they would return: if a user has applied it will return with an array with an Application object inside else it will be an empty array<br/>
``` json
[
    {
        "applicant_status": "accepted",
        "_id": "5f3844d564f1290017d322ca",
        "applicant_id": "5f38420164f1290017d32285",
        "applicant_name": "Ziyue Zhang",
        "post_id": "5f38431e64f1290017d322a7",
        "post_name": "Clothing Centre Volunteer",
        "applicant_rank": "D",
        "__v": 0
    }
]
```

### Post resource routes
#### a Get request to get all the posts
Get: "/posts"<br/>
Url: https://frozen-journey-02316.herokuapp.com/posts <br/>
What they are used: to get all the posts in the databse<br/>
What data they expect to be sent: nothing<br/>
What they would return: an array with all the posts in the database<br/>
``` json
[
    {
        "requirements": [
            "driver's license"
        ],
        "status": "Approved",
        "applications": [
            "5f3844d564f1290017d322ca"
        ],
        "_id": "5f38431e64f1290017d322a7",
        "name": "Clothing Centre Volunteer",
        "description": "Help sort clothing, and stock items on the shelves. Make new friends and have lots of fun!",
        "title": "content",
        "location": "Toronto",
        "date": "2020-08-15T21:40:23.891Z",
        "org_id": "5f3842a464f1290017d322a6",
        "org_name": "Team20",
        "__v": 2
    },
    {
        "requirements": [
            "teaching experiance"
        ],
        "status": "Approved",
        "applications": [],
        "_id": "5f3843ac64f1290017d322a8",
        "name": "Project Mentor for Students",
        "description": "Underemployment is a growing concern for students across the globe. Entry-level jobs often require 3-5 years of experience for entry-level positions and the gap between the skills students have and what employers require continues to grow. You can help this problem by working with students on short-term projects and challenges that are embedded directly into their classrooms. They get to learn from supporting you on the problem or project from your organization is facing and apply their theoretical knowledge to a practical real-world example.",
        "title": "community",
        "location": "remote",
        "date": "2020-08-15T20:25:05.903Z",
        "org_id": "5f3842a464f1290017d322a6",
        "org_name": "Team20",
        "__v": 0
    },
    {
        "requirements": [
            "health degree"
        ],
        "status": "Approved",
        "applications": [],
        "_id": "5f38550b6f93f10017f7b463",
        "name": "Food and Essential items Packaging and Delivery",
        "description": "We are looking for volunteers to help package and deliver food and essential items to vulnerable people all over GTA. Please contact us if you are interested in helping out.",
        "title": "manufacturing",
        "location": "Toronto",
        "date": "2020-08-15T21:40:18.702Z",
        "org_id": "5f3853ca6f93f10017f7b45c",
        "org_name": "HumanWellBeingFirst",
        "__v": 0
    },
    {
        "requirements": [
            "self-motivated"
        ],
        "status": "Approved",
        "applications": [],
        "_id": "5f3856bd6f93f10017f7b466",
        "name": "Letter writer / Drawer",
        "description": "All you need to do is send in s short letter or even a drawing!",
        "title": "community",
        "location": "Ottawa",
        "date": "2020-08-15T21:42:35.776Z",
        "org_id": "5f38557f6f93f10017f7b464",
        "org_name": "Letters and Smiles",
        "__v": 0
    },
    {
        "requirements": [
            "teaching experiance"
        ],
        "status": "Under review",
        "applications": [],
        "_id": "5f3857356f93f10017f7b467",
        "name": "Peer Supporter",
        "description": "Expected applicants: University students who have a warm heart to help me.",
        "title": "content",
        "location": "Toronto",
        "date": "2020-08-15T00:00:00.000Z",
        "org_id": "5f3842a464f1290017d322a6",
        "org_name": "Team20",
        "__v": 0
    }
]
```

#### a Get request to get a particular post 
Get: "/post/:id"<br/>
Url: https://frozen-journey-02316.herokuapp.com/post/5f38431e64f1290017d322a7<br/>
What they are used: to get the information of one particular post<br/>
What data they expect to be sent: nothing<br/>
What they would return: an Post object <br/>
``` json
{
    "requirements": [
        "driver's license"
    ],
    "status": "Approved",
    "applications": [
        "5f3844d564f1290017d322ca"
    ],
    "_id": "5f38431e64f1290017d322a7",
    "name": "Clothing Centre Volunteer",
    "description": "Help sort clothing, and stock items on the shelves. Make new friends and have lots of fun!",
    "title": "content",
    "location": "Toronto",
    "date": "2020-08-15T21:40:23.891Z",
    "org_id": "5f3842a464f1290017d322a6",
    "org_name": "Team20",
    "__v": 2
}
```

#### a Post request to get the posts as search result
Post: "/search"<br/>
Url: https://frozen-journey-02316.herokuapp.com/search<br/>
What they are used: to get the post whose name and content contains the keyword <br/>
What data they expect to be sent:<br/>
``` json
{
    "keyword": "Clothing"
}
```
What they would return: an array with all the posts which contains the keyword inside <br/>
``` json
[
    {
        "requirements": [
            "driver's license"
        ],
        "status": "Approved",
        "applications": [
            "5f3844d564f1290017d322ca"
        ],
        "_id": "5f38431e64f1290017d322a7",
        "name": "Clothing Centre Volunteer",
        "description": "Help sort clothing, and stock items on the shelves. Make new friends and have lots of fun!",
        "title": "content",
        "location": "Toronto",
        "date": "2020-08-15T21:40:23.891Z",
        "org_id": "5f3842a464f1290017d322a6",
        "org_name": "Team20",
        "__v": 2
    }
]
```





























