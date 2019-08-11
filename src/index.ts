import express from 'express';
import process from 'process';

// Configure a basic Express application
const app = express();
const port = process.env.PORT ? process.env.PORT : 8080;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})