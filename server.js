let express=require('express');
let app=express();
let port=process.env.PORT || 3000;
app.use('/assets', express.static(__dirname+'/public'));
app.use('/',function (req, res, next){console.log('Request URL:' + req.url),next()});
app.set('view engine', 'ejs');
app.listen(port);

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/api', function (req, res) {
    res.json({firstname: 'John', lastname: 'Doe'});
});

app.get('/person/:id', function (req, res) {
    res.render('person', {ID:req.params.id, Message: req.query.message, Times: req.query.times});
}); 
