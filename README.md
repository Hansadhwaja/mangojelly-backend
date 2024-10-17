
# Comic Book Store Backend

This is the backend for a React-based e-commerce store that allows managing comic books as inventory items. The backend is built with Node.js and Express.js, using MongoDB as the database.

## Table of Contents
- [Technologies](#technologies)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [API Documentation](#api-documentation)
  - [Comic Book Management](#comic-book-management)
  - [Comic Book List](#comic-book-list)
  - [Comic Book Details](#comic-book-details)
- [Testing](#testing)
- [Postman Collection](#postman-collection)

## Technologies
- Node.js
- Express.js
- MongoDB (via Mongoose)
- Postman (for testing API)

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/en/download/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) installed locally or a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account.

### Steps

1. Clone this repository:
    ```bash
    git clone https://github.com/Hansadhwaja/mangojelly-backend.git
    ```


2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up the `.env` file for MongoDB connection:
    ```bash
    touch .env
    ```

    Add the following environment variables to the `.env` file:
    ```env
    MONGO_URI=set your mongodb uri
    PORT=3000
    ```

5. Start the server:
    ```bash
    npm start
    ```

    The server will start on `http://localhost:3000`.

## Running the Project
To start the project, simply run:
```bash
npm start
```

This will launch the server on `http://localhost:3000` and connect to the MongoDB database.

## API Documentation

### Comic Book Management

#### Create a Comic Book

- **Endpoint**: `POST /api/comics`
- **Description**: Adds a new comic book to the inventory.
- **Request Body**:
  ```json
  {
    "bookName": "The Dark Knight Returns",
    "authorName": "Frank Miller",
    "year": 1986,
    "price": 25.99,
    "discount": 5,
    "pages": 224,
    "condition": "new",
    "description": "A revolutionary Batman story that redefined the character for a new generation."
  }
  ```

#### Edit a Comic Book

- **Endpoint**: `PUT /api/comics/:id`
- **Description**: Updates an existing comic book.
- **Request Body** (for example, updating the price):
  ```json
  {
    "bookName": "The Amazing Spider-Man",
    "authorName": "Stan Lee",
    "year": 2004,
    "price": 45.99,
    "discount": 15,
    "pages": 32,
    "condition": "used",
    "description": "A classic comic book featuring Spider-Man in his early years, with a slight discount due to condition."
  }
  ```

#### Delete a Comic Book

- **Endpoint**: `DELETE /api/comics/:id`
- **Description**: Removes a comic book from the inventory.

### Comic Book List

#### Fetch Inventory List
-**Endpoint**: `GET /api/comics`
-**Description**: Retrieves all comic books in the inventory.
-**Query Parameters (optional)**:
-***limit***: Number of results to return per page (for pagination).
-***sort***: Field by which to sort the results (e.g., price, year, bookName).
-***filter[year]***: Filter by year of publication.
-***filter[author]***: Filter by author name.
-***filter[condition]***: Filter by condition (e.g., new, used).
-***page***: Page number for pagination.
-***Example Request***: `/api/comics?limit=10&sort=price&filter[year]=2004&page=1`
-***Response Example***:
```json
{
  "totalItems": 50,
  "totalPages": 5,
  "currentPage": 1,
  "comics": [
    {
      "_id": "617c7d8f77a5b842f43bcd3c",
      "bookName": "Watchmen",
      "authorName": "Alan Moore",
      "year": 1987,
      "price": 30.99,
      "discount": 10,
      "pages": 416,
      "condition": "new",
      "description": "A graphic novel about morally complex superheroes."
    },
    {
      "_id": "617c7d8f77a5b842f43bcd3d",
      "bookName": "Spider-Man: Blue",
      "authorName": "Jeph Loeb",
      "year": 2002,
      "price": 20.99,
      "discount": 8,
      "pages": 144,
      "condition": "used",
      "description": "A romantic and melancholic look back at Spider-Man's early years."
    }
  ]
}
```

### Comic Book Details

#### Get Comic Book Details

- **Endpoint**: `GET /api/comics/:id`
- **Description**: Retrieves detailed information of a specific comic book by its ID.

#### Response Example:
```json
{
  "_id": "617c7d8f77a5b842f43bcd3c",
  "bookName": "Watchmen",
  "authorName": "Alan Moore",
  "year": 1987,
  "price": 30.99,
  "discount": 10,
  "pages": 416,
  "condition": "new",
  "description": "A graphic novel about morally complex superheroes."
}
```

## Testing

You can test the API endpoints using **Postman** or **cURL**.

### Postman
1. Import the provided Postman collection (see [Postman Collection](#postman-collection) section).
2. Test the endpoints using the pre-configured requests in the collection.

### cURL Example
To test the `/api/comics` endpoint with `cURL`, you can use:

```bash
curl -X GET http://localhost:3000/api/comics
```

## Postman Collection

A Postman Collection is available for easy API testing. You can import the collection by following these steps:

1. Download the collection file: [Download Postman Collection](./Comic%20Book.postman_collection.json)
2. Open Postman and go to the **Import** section.
3. Select the downloaded JSON file to import all the API endpoints.

---

## License

This project is licensed under the MIT License.

```

