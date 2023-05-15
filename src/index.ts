import express from 'express';
import cors from 'cors';
import adminRouter from './infra/http/routes/admin-router';
import sessionsRouter from './infra/http/routes/sessions-router';
import jwtAuthenticationMiddleware from './app/middlewares/jwt-authentication.middleware';
import errorHandler from './app/middlewares/error-handler.middleware';

import swaggerUi from 'swagger-ui-express'
import swaggerDocs from './swagger.json'


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/status', (req, res) => {
    res.send('ok');
});


app.use(sessionsRouter);
app.use(jwtAuthenticationMiddleware);
app.use(adminRouter);
app.use(errorHandler);

app.listen(3001, () => {
    console.log('http://localhost:3001');
});