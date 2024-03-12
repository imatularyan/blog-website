# Blog Website Project

## Introduction

This Blog Website is a full-stack web application that allows users to read, write, edit, and delete blog posts. It's built using Node.js, Express, MongoDB, and Bootstrap for styling. The website features a simple yet elegant interface for seamless user interaction with blog posts.

## Features

- **Create Article:** Users can write new blog posts.
- **Edit Article:** Users can modify existing blog posts.
- **Delete Article:** Users can remove blog posts.
- **Responsive Design:** Using Bootstrap for a mobile-friendly user experience.

## Technologies

- **Front-end:** HTML, CSS, Bootstrap CDN
- **Back-end:** Node.js, Express
- **Database:** MongoDB
- **Dependencies:** dompurify, dotenv, ejs, express, jsdom, marked, method-override, mongoose, slugify
- **Dev Dependencies:** nodemon

## Project Structure

```
/blog-website
├── models/
│   └── article.js
├── node_modules/
├── routes/
│   └── articles.js
├── views/
│   └── articles/
│       ├── edit.ejs
│       ├── form_field.ejs
│       ├── index.ejs
│       ├── new.ejs
│       └── show.ejs
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── server.js
```

## Installation

1. **Clone the repository**

```sh
git clone https://github.com/imatularyan/blog-website.git
cd blog-website
```

2. **Install dependencies**

```sh
npm install
```

3. **Environment Variables**
   Create a `.env` file in the project root directory and add your MongoDB credentials and the desired port number.

```
MONGODB_USERNAME=yourMongoDBUsername
MONGODB_PASSWORD=yourMongoDBPassword
DATABASE_NAME=blogDB
PORT=3000
```

4. **Start the server**

```sh
npm start
```

Alternatively, if you have nodemon installed, you can use it for development purposes.

```sh
nodemon server.js
```

## Usage

After starting the server, open `http://localhost:3000` in your browser to view the blog website. From there, you can navigate the site to create, edit, and delete articles, as well as read posts written by others.

## Contributing

Contributions to the blog website project are welcome. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.
