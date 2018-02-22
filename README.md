# users_task

Steps to Run this App:

1- install node.js
2- go to project folder and run "npm install"
3- run "npm start"

# Testing API's

Users CRUD:

- Get All Users

Request Type: Get
Url: http://localhost:3000/users/get_all_users
return: array of users

- Get User by id

Request Type: Get
Url: http://localhost:3000/users/get_by_id/:id
return: array of users

- Add User

Request Type: Post
Url: http://localhost:3000/users/add_user
Parameters: {
    firstName: string(required),
    lastName: string(required),
    email: string(required),
    bio: string(optional)
}
return: successfull message

- Edit User

Request Type: Post
Url: http://localhost:3000/users/edit_user/:id
Parameters: {
    firstName: string,
    lastName: string,
    email: string,
    bio: string
}
return: successfull message

- Delete User

Request Type: Delete
Url: http://localhost:3000/users/delete_user/:id
return: successfull message


Picture CRUD:

- Get All Pictures

Request Type: Get
Url: http://localhost:3000/pictures/get_all_pictures
return: array of pictures

- Get Picture by id

Request Type: Get
Url: http://localhost:3000/pictures/get_by_id/:id
return: array of pictures

- Add Picture

Request Type: Post
Url: http://localhost:3000/users/add_picture
Parameters: {
    name: string(required),
    type: string(required),
    url: string(required),
    userId: string(required)
}
return: successfull message

- Edit Picture

Request Type: Post
Url: http://localhost:3000/pictures/edit_picture/:id
Parameters: {
    name: string,
    type: string,
    url: string
}
return: successfull message

- Delete Picture

Request Type: Delete
Url: http://localhost:3000/pictures/delete_picture/:id
return: successfull message

- Get Pictures By User Id

Request Type: Get
Url: http://localhost:3000/pictures/get_user_pictures/:id(user id)
return: array of pictures
