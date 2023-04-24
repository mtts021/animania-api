import express from 'express';
import cors from 'cors';
import adminRouter from './routes/admin-router';
import sessionsRouter from './routes/sessions-router';
import jwtAuthenticationMiddleware from './app/middlewares/jwt-authentication.middleware';
import errorHandler from './app/middlewares/error-handler.middleware';

const app = express();
app.use(cors({
    origin: 'http://localhost:3000/'
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/status', (req, res)=> {
    res.send('ok');
});
app.use(sessionsRouter);
app.use(jwtAuthenticationMiddleware);
app.use(adminRouter);
app.use(errorHandler);


app.listen(3000, () => {
    console.log('http://localhost:3001');
});