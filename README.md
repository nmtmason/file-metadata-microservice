# [File Metadata Microservice](https://www.freecodecamp.com/challenges/file-metadata-microservice)

Part of the [freecodecamp](https://www.freecodecamp.com) curriculum.

## Objective

Build a full stack JavaScript app that is functionally similar to this: https://aryanj-file-size.herokuapp.com/ and deploy it to Heroku.

1. User Story: I can submit a FormData object that includes a file upload.
2. User Story: When I submit something, I will receive the file size in bytes within the JSON response

## Solution

* Implemented using the [express](http://expressjs.com/) and [multer](https://github.com/expressjs/multer) libraries.
* A static `index.html` file is served from the `static` folder using express middleware.
* The `index.html` page contains a form which uploads a file to the express server.
* A single route is added to the application to deal with the incoming file.
* The multer library is first called, which is configured to expect a single file.
* Once information about the file has been populated into the request object, the size is sent back in the response.
