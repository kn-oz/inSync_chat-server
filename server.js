import { StreamChat } from 'stream-chat';
import express from 'express';

const app = express()

app.use(express.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, POST, DELETE, OPTIONS");
    req.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  });

  const appKEY = "g4rgwgxebtqf";
  const secret = "2kxgzutpke327u3n6bgtz6vagwhzjp5gm7rem7eybrcnbq3d2zwup54eg46fmqzb";

  const chatClient = new StreamChat(appKEY, secret);

  app.post('/api/get-token', async (req, res) => {
    const { user_id } = req.body;
    console.log("request arrived");
    try {
      const token = await chatClient.createToken(user_id.toString());
      console.log(token)
      res.status(200).json({
        payload: token,
      });
    } catch (error) {
      console.log(error);
      res.sendStatus(400);
    }
  });


  app.listen(5500, () => {
    console.log('server started at 5500')
})


  