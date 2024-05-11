## Description

The Flight Microservices is a powerful and efficient system designed specifically for flight booking. It offers a wide range of functionalities that cater to the needs of both users and administrators. With its seamless integration of various technologies, including Next.js, Node.js, TypeScript, MongoDB, and RabbitMQ, this microservice ensures a smooth and reliable flight booking experience.

One of the key features of this microservice is its ability to fetch all flights booked by a user. After the user has successfully authorized their account using Google OAuth2, they can access their booking history effortlessly. This ensures that users can easily keep track of their flight reservations and make any necessary changes or cancellations.

The Flight Microservices also excels in providing real-time communication between different services. Upon a successful flight booking, it seamlessly communicates with the user service through RabbitMQ, a reliable and efficient message broker. This communication enables the microservice to send email notifications to users, keeping them informed about their booking details, updates, and any other relevant information.

Built with Next.js, Node.js, TypeScript, MongoDB, and RabbitMQ, the Flight Microservices is a robust and scalable solution. Next.js, a popular React framework, ensures efficient server-side rendering and client-side navigation, resulting in a smooth and responsive user interface. Node.js, a powerful JavaScript runtime, enables the microservice to handle a large number of concurrent requests effectively.

The microservice's integration with TypeScript, a typed superset of JavaScript, enhances code maintainability and developer productivity, ensuring a more reliable and bug-free application. MongoDB, a flexible and scalable NoSQL database, provides efficient data storage for flight information, user details, and booking history.

Furthermore, the integration of RabbitMQ as a message broker enables seamless communication between different services, ensuring reliable and efficient message delivery. This allows for the immediate and accurate sending of email notifications to users, keeping them informed and engaged throughout their flight booking journey.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
