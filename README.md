# Portfolio Server

The portfolio server is an application that allows for the listing of projects, the storage of messages sent in the database, and the sending of response emails to message senders.

## Technologies Used

- TypeScript
- Express
- Prisma
- PostgreSQL
- Nodemailer

## Endpoints

- GET /projects: This endpoint allows for the listing of the portfolio projects.

- POST /senders: This endpoint is used to receive and store sent messages. The data is saved in the database. Additionally, the server sends a confirmation email to the sender.
