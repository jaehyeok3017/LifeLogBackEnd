const mongoose = require('mongoose');

main().catch(err => console.log(err));

const PASSWORD = process.env.PASSWORD;
const uri = `mongodb+srv://jaehyeok3017:${PASSWORD}@cluster0.elwjtto.mongodb.net/?retryWrites=true&w=majority`
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(uri, (req, res) => {
    if(req){
      console.log(req);
      return;
    } else{
      app.listen(8080);
    }  


    app.post('/add', (req, res) => {
      res.send('전송완료');

      db.collection('counter').findOne({name : '게시물갯수'}, (error, result) => {
          console.log(result.totalPost);
          let total = result.totalPost;
      
          db.collection('post').insertOne( { _id : total + 1 , title : req.body.title, date : req.body.date, content : req.body.content, user : req.body.user } , (error, result) => {
              console.log('저장완료');

              db.collection('counter').updateOne({name : '게시물갯수'}, { $inc : {totalPost : 1} }, (error, result) => {
                  if(error) return console.log(error);
              });
          });
      });
  });
});

app.use(express.urlencoded({extended: true})); 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
	