const express = require('express');
const bodyParser = require('body-parser')

const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc')
const router = require("./src/routes");

const PORT = 5000;

const app = express();

app.use(bodyParser.json({ type: 'application/json' }));

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Tanvir Streame Express API with Swagger",
			version: "0.1.0",
			description:
				"This is a simple CRUD API application made with Express and documented with Swagger",
		},
		servers: [
			{
				url: "http://localhost:5000",
			},
		],
	},
	apis: ["./src/routes/customer.route.js"],
};

const swaggerDocs = swaggerJsDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, options));
app.use(router);

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
