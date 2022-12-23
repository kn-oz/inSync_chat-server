import { StreamChat } from 'stream-chat';
import express from 'express';

const app = express()

app.use(express.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  });

  const appKEY = "8fy6kehyvp26";
  const secret = "eprtst9dj2ddq9adgkpqc6u4v62h4qey7vnyks5j7t94n24nnb4vjs6bz34st777";

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


  