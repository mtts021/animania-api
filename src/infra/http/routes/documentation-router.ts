import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerDocs from '../../../swagger.json'


const docs = express();

const docsApi = docs.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export default docsApi;