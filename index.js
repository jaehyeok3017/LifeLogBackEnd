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
});

app.use(express.urlencoded({extended: true})); 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
	