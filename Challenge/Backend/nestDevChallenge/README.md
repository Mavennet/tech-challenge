# Back-end Tech Challenge

## routes:

- /login to Authenticate a user @Post
- /users to fetch all users (unauthenticated) @Get
- /albums to fetch all albums associated with the user (authenticated) @Get
- /photos to fetch all photos associated with the user (authenticated) @Get
- /albums/:id to return a specific album (authenticated) @Get
- /photos/:id to return a specific photo (authenticated) @Get

In order to use restericted routes you need to login as a user from the local DB useing /login route with a post request and add the user's credentials in the request body. That will authenticate the user and add a cockie with a 1 Hour TTL to the client to be able to acces the restricted routes.

For the user creds you need to pass a username and password as a JSON object in request Body, username beeing the user's username from the local DB and the password is the users phone number from the local DB.

### Sample user: 
{
"username":"Bret",
"password":"1-770-736-8031 x56442"
}


