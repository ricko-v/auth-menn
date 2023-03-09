import bodyParser from 'body-parser';
import express from 'express';
import db from './config/db';
import router from './router/index'
import cookieParser from 'cookie-parser'

const app = express()

db.connect();
app.use(bodyParser.json())
app.use(cookieParser())
app.use(router)

export default app;