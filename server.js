var express = require('express');
var path = require('path');
var multer=require('multer')
var fs = require('fs')
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');
var User = require('./models/user');
var category = require('./models/category')
var word = require('./models/word')
var marking = require('./models/marks')
var upload=multer({dest: 'images/'});
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//																				Schema and DB 
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// mongoose.connect('mongodb://localhost/AwaazApp');

mongoURI = 'mongodb://localhost/AwaazApp';
mongoose.connect(process.env.MONGOLAB_URI || mongoURI);

///////////////////////////////////////////////////////////////////////////////////////////////////
//																Application Pre-Req
//////////////////////////////////////////////////////////////////////////////////////////////////
var app = express();


// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                API
//////////////////////////////////////////////////////////////////////////////////////////////////////////
app.post('/user/create', function(req,res) {
  /* Takes in the request body which has form data 
     and create user object on using the data and 
     call Model function of createUser
  */
  console.log(req.body)
  var userobj = new User ({
    firstName: req.body.first_name,
    lastName: req.body.last_name,
    email : req.body.email,
    password : req.body.password,
    passwordConfirmation : req.body.password2
  })

  User.createUser(userobj, function(err, user) {
    if (err) throw err;
    console.log('This is user being created' + user)
    res.send(user)
  })
})

app.post('/user/update', function(req,res) {
  /* Takes in the request body which has form data 
     and edit user using the data and 
     call Model function of updateUser
  */
  console.log(req.body)
  var userobj = ({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email : req.body.email,
    password : req.body.password,
    passwordConfirmation : req.body.passwordConfirmation
  })

  User.updateUser(userobj, function(err, user) {
    if (err) throw err;
    console.log('This is user changed' + user)
    res.send(user)
  })
})

app.post('/user/show', function(req, res) {
  User.findUserById(req.body.id, function(err, user){
		if (err)
			throw err;
    console.log('This is user ' + user)
    res.send(user);
  })
})


// 
app.post('/user/signin', function(req, res) {
  /*
    Takes in the user email and password to 
    check if should be signed in or not
  */
  console.log('This is request object' + req.body)
  User.findUserByEmail(req.body.email, function(err, user){
		if (err)
			throw err;
    console.log('This is user that we found ' + user)
		if (!user)
      res.send({message: 'Sorry ! Email or Password Incorrect'})
    if (user && user.password == req.body.password) {
      res.send({message: 'Successfully Logged In',user: user})
    } else {
      res.send({message: 'Password is Incorrect'})
    }
  })
})

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                Categories CRUD
///////////////////////////////////////////////////////////////////////////////////////////////////
app.post('/addCategory', upload.single('file1'), (req, res) => {
	console.log('Add Category Called  ' + req)
	var word = req.body.title
	var temppath = req.file.path
  var owner_id = req.body.owner_id
	var actualpath = 'public/uploads/' + req.file.originalname
	var src = fs.createReadStream(temppath)
	var dest = fs.createWriteStream(actualpath)
	src.pipe(dest)
	src.on('end', () => {
		console.log('uploaded to server') 
	})
	src.on('error', err => {
		// res.write('error')
    throw err; 
	})

	fs.readFile(req.file.path, (err, data) => {
		if(err){
			throw err;
		}
		else{
      // var ext = path.extname(req.file.originalname)
      // console.log('This is extension ' + ext);
      console.log('in the else with ' + req.body.title + '   ' + req.file.filename)
			category.create({title: req.body.title, image: req.file.originalname, owner_id: owner_id}, function(err, category){
				if (err)
					throw(err)
				console.log('Create')
				res.send({message: 'Category Created', category: category}) 
			})
		}
	})
})

app.post('/userCategories', function(req, res){
  console.log('This is requested body ' + req.body.id)
  category.findUserCategories(req.body.id, function(err, categories) {
    if (err) throw err;
    console.log('These are categories ' + categories)
    res.send(categories)
  })
})

//////////////////////////////////////////////////////////////////////////////////////////////////
// 															WORD CRUD
/////////////////////////////////////////////////////////////////////////////////////////////////
app.post('/addWord', upload.fields([{name: 'file1', maxCount: 1}, {name: 'file2', maxCount: 1 }]), (req, resp) => {
  console.log(req.body);
  var file1read = false; var file2read = false; var owner_id = req.body.owner_id;
	var temppath=req.files['file1'][0].path
        var actualpath = 'public/uploads/' + req.files.file1[0].originalname

        var src = fs.createReadStream(temppath)
        var dest = fs.createWriteStream(actualpath)
        src.pipe(dest)
        src.on('end', () => {
          console.log('Done with first')
        })
        src.on('error', err => {
                throw err;
        })

        fs.readFile(req.files.file1[0].path, (err, data) => {
                if(err){
                	throw err;
                }
               	else{
                  console.log('File1 is read')
                  file1read = true;
              }
       	})

	var temppath2=req.files['file2'][0].path
        var actualpath2 = 'public/uploads/' + req.files.file2[0].originalname

        var src2 = fs.createReadStream(temppath2)
        var dest2 = fs.createWriteStream(actualpath2)
        src2.pipe(dest2)
        src2.on('end', () => {
          console.log('Done with second')
                // resp.write('\n File uploaded to server')
        })
        src2.on('error', err => {
                throw err;
        })

        fs.readFile(req.files.file2[0].path, (err, data) => {
                if(err){
                  throw err;  
              } else{
                console.log('File2 is read')
                file2read = true;
                }
        })

        if (true) {
          // console.log('Inside IF condition '+ req.files.file1[0].originalname + ' ' + req.files.file2[0].originalname )
          word.create({text: req.body.title, imgSrc: 'uploads/' + req.files.file1[0].originalname, audioSrc: 'uploads/'+req.files.file2[0].originalname, owner_id: owner_id}, function(err, word){
            if (err)
              throw(err)
            console.log('Create')
            resp.send({message: 'Word Created', word: word}) 
          })
        }
})

app.post('/getWords', function(req, res){
  console.log('This is requested body ' + req.body.id)
  word.findWords(req.body.id, function(err, words) {
    if (err) throw err;
    console.log('These are words ' + words)
    res.send({word: words})
  })
})

/////////////////////////////////////////////////////////////////////////////////////////////////////
//                                Marking API
///////////////////////////////////////////////////////////////////////////////////////////////////

app.post('/addMarks', function(req, res){
  console.log('This is for marks  ' + req.body)
  var createNew = true;
  var markingObj = new marking ({
    marks: req.body.marks,
    owner_id: req.body.owner_id,
    category_id : req.body.category_id,
    total : req.body.total
  })

  marking.findOne({category_id : req.body.category_id, owner_id : req.body.owner_id}, function(err, result){
    if (err) throw err;
    if (result != null) {
      createNew = false;
    }
  })

  if (createNew) {
    marking.createMarking(markingObj, function(err, marking){
      if (err) throw err;
      res.send({message:'Marking Created', marking: marking});
    })
  } else {
    marking.findOneAndUpdate({category_id : req.body.category_id, owner_id : req.body.owner_id},
    {total: req.body.total, marks : req.body.marks,category_id : req.body.category_id, owner_id : req.body.owner_id},
    function(err, marking) {
      if (err) throw err;
      res.send({message:'Marking Updated', marking: marking});
    })
  }
})

app.post('/category/add',function(req, res) {
  console.log(req.body.title)
  res.send('Received')
})

app.post('/user/stats', function(req, res) {
  marking.getStats(req.body.id, function(err, stats) {
    if (err) throw err;
    console.log('these are stats '+ stats)
    res.send(stats);
  })
})

// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
	console.log('Server started on port '+app.get('port'));
});