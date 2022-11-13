import express from 'express';
import bodyParser from 'body-parser';
import { router as fileRoute} from './routes/file-api.js';

const app = express();


const myLogger = (req: any, res: any, next: any) => {
    console.log('LOGGED: ', req);
    next()
};
  
app.use(myLogger);
app.use(bodyParser.json());
app.use("/api/file", fileRoute);

const port = process.env.PORT || 3100;

app.listen( port, function(){
    console.log(`Listening on port ${port}`);
});

export default app;