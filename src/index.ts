import express from 'express';
import cors from 'cors';
import adminRouter from './infra/http/routes/admin-router';
import sessionsRouter from './infra/http/routes/sessions-router';
import docsApi from './infra/http/routes/documentation-router';
import jwtAuthenticationMiddleware from './infra/middlewares/jwt-authentication.middleware';
import errorHandler from './infra/middlewares/error-handler.middleware';
import premiereRouter from './infra/http/routes/premiere-router';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(docsApi);
app.get('/status', (req, res) => {
    res.send('ok');
});
app.use(sessionsRouter);
app.use(jwtAuthenticationMiddleware);
app.use(adminRouter);
app.use(premiereRouter);
app.use(errorHandler);

app.listen(3001, () => {
    console.log('http://localhost:3001');
});