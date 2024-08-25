# Song Management API

## Overview

This project provides a RESTful API for managing songs in a MongoDB database. The API supports CRUD operations (Create, Read, Update, Delete) for songs, as well as retrieving statistics about the songs. The API is built using Express.js and Mongoose for MongoDB interaction.

## Features

- **Add Songs**: Create or add multiple songs to the database.
- **List Songs**: Retrieve a list of all songs or filter by genre.
- **Update Songs**: Update details of a specific song by its ID.
- **Delete Songs**: Remove a specific song by its ID.
- **Get Statistics**: Retrieve various statistics about the songs, including total counts and aggregate data.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **Mongoose**: MongoDB object modeling tool.
- **MongoDB**: NoSQL database for storing song data.
- **CORS**: Middleware for enabling Cross-Origin Resource Sharing.
- **Dockerized**: The application is fully containerized using Docker, making it easy to deploy.
- **Dockerfile**: Defines the Docker image for the Node.js application.
- **docker-compose.yml**: Defines and manages multi-container Docker applications.

## Prerequisites

Before running this application, make sure you have the following installed:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Project Structure

```
.
├── Dockerfile
├── docker-compose.yml
├── models
│   └── song.js
├── routes
│   └── songs.js
├── index.js
├── package.json
└── README.md
```

## Getting Started

Follow these steps to get the application running locally using Docker.

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/song-management-api.git
cd song-management-api
```

### 2. Build the Docker Containers

Build the Docker containers defined in the `docker-compose.yml` file:

```bash
docker-compose build
```

### 3. Start the Application

Start the application using Docker Compose:

```bash
docker-compose up
```

This command will start the MongoDB container and the Node.js application container.

### 4. Access the Application

Once the containers are up and running, the application will be accessible at:

- **API Base URL**: `http://localhost:3001/api/songs`

You can use tools like [Postman](https://www.postman.com/) or `curl` to interact with the API.

### 5. Stopping the Application

To stop the application, press `CTRL+C` in the terminal where the Docker containers are running.

If you want to stop and remove the containers, use the following command:

```bash
docker-compose down
```

This will stop the containers and remove them along with any associated networks.

### 6. Rebuilding the Containers

If you make any changes to the application code or dependencies, you may need to rebuild the Docker containers:

```bash
docker-compose build
```

### 7. Managing MongoDB Data

The MongoDB data is persisted in a Docker volume named `mongo_data`. This volume is automatically created and used by the MongoDB container.

### 8. Running in Detached Mode

If you prefer to run the containers in detached mode (in the background), use the `-d` flag:

```bash
docker-compose up -d
```

To stop the detached containers, run:

```bash
docker-compose down
```

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/song-management-api.git
   cd song-management-api
   ```

2. **Install Dependencies**

   Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed. Then run:

   ```bash
   npm install
   ```

3. **Set Up MongoDB**

   Ensure MongoDB is installed and running. You can start MongoDB with:

   ```bash
   mongod --dbpath /path/to/your/db
   ```

4. **Configure Environment Variables**

   By default, the application connects to a local MongoDB instance. You can change the connection string in `server.js` if you use a different MongoDB setup.

## API Endpoints

### Songs

#### Create or Add Multiple Songs

- **Endpoint**: `POST /api/songs`
- **Description**: Add one or more songs to the database.
- **Request Body**: 
  ```json
  [
    {
      "title": "Song Title",
      "artist": "Artist Name",
      "album": "Album Name",
      "genre": "Genre"
    }
  ]
  ```
- **Responses**:
  - `201 Created`: On successful addition of songs.
  - `400 Bad Request`: If the request body is invalid.

#### List Songs or Filter by Genre

- **Endpoint**: `GET /api/songs`
- **Description**: Retrieve all songs or filter by genre.
- **Query Parameters**:
  - `genre`: Filter songs by genre (optional).
- **Responses**:
  - `200 OK`: Returns a list of songs.

#### Update a Song

- **Endpoint**: `PUT /api/songs/:id`
- **Description**: Update details of a song by its ID.
- **Request Body**:
  ```json
  {
    "title": "Updated Title",
    "artist": "Updated Artist",
    "album": "Updated Album",
    "genre": "Updated Genre"
  }
  ```
- **Responses**:
  - `200 OK`: On successful update.
  - `400 Bad Request`: If the request body is invalid.
  - `404 Not Found`: If the song with the given ID does not exist.

#### Delete a Song

- **Endpoint**: `DELETE /api/songs/:id`
- **Description**: Delete a song by its ID.
- **Responses**:
  - `200 OK`: On successful deletion.
  - `404 Not Found`: If the song with the given ID does not exist.

#### Get Statistics

- **Endpoint**: `GET /api/songs/stats`
- **Description**: Retrieve various statistics about the songs.
- **Responses**:
  - `200 OK`: Returns statistical data including total songs, artists, albums, and genres, as well as genre and artist-specific stats.

## Running the Application

1. **Start the Server**

   ```bash
   npm start
   ```

   The server will be running on `http://localhost:3000` by default.

2. **Testing the API**

   You can use tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/) to test the API endpoints.

## Error Handling

The API returns appropriate HTTP status codes and error messages for different scenarios:
- `400 Bad Request` for invalid data or request errors.
- `404 Not Found` for missing resources.
- `500 Internal Server Error` for unexpected errors.

## Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](../../issues/).

## License

This project is [MIT](LICENSE) licensed.

## Contact

For any questions or feedback, you can reach out to:

- **Email**: emmanuelutofa@gmail.com
- **GitHub**: [uno36](https://github.com/yourusername)
