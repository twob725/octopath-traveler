const express = require('express');
const url = require('url');
const fs = require('fs');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const session = require('express-session');
const multer = require('multer')
const moment = require('moment-timezone');
const mysql = require('mysql');
const bluebird = require('bluebird');


//DB set//
const db = mysql.createConnection({
    host: 'localhost',
    user: 'twob',
    password: 'root',
    database: 'octopath'
});
db.connect();

////


const upload = multer({dest:'tmp_uploads/'});
//載入express//
const app = express();
////

//DB table:members//

////
// app.get('/pnform/mblist', (req, res) => {
//     var sql = "SELECT * FROM `members`";
//     db.query(sql, (error, results, fields) => {
//         if (error) throw error;
//         console.log(results, fields);

//         res.render('mblist', {
//             members: results
//         });
//     });
// });


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/../public'));


//set session//
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: '0000',
    cookie: {
        maxAge: 1200000,
    }
}));
////


app.use('/', (req, res, next) => {

    console.log('111:',req.url);

    if (req.session.loginUser) {
        res.locals.isLogined = !! req.session.loginUser;
        res.locals.loginUser = req.session.loginUser;
        
    }
    next();
});


//根目錄//
app.get('/', (req, res) => {
    res.render('home', { name: 'Eric' });
});

//session//
app.get('/try-session', (req, res) => {
    req.session.views = req.session.views || 0;
    req.session.views++;
    res.contentType('text/plain');
    res.write('拜訪次數:' + req.session.views + '/n');
    res.end(JSON.stringify(req.session));
});


app.get('/try-post-form', (req, res) => {
    res.render('try-post-form');
});
app.post('/try-post-form', urlencodedParser, (req, res) => {
    res.render('try-post-form', res.body);
});

app.get('/pnform', (req, res) => {
    res.render('pnform');
});
////


// app.get('/login', (req, res) => {
//     res.render('login');
// });
// app.post('/login',urlencodedParser, (req, res) => {    
//     res.render('login');
// });


app.get('/pnform/mblist', (req, res) => {
    var sql = "SELECT * FROM `members`";
    db.query(sql, (error, results, fields) => {
        var listInfo = '';
        if(req.session.listInfo){
            listInfo = req.session.listInfo;
        }
        res.render('mblist', {
           rows: results,
           title:'資料列表',
           listInfo: listInfo,
        });
    });
});






//登入//
app.get('/login', (req, res) => {
    const data = {};
    if (req.session.flashMsg) {
        data.flashMsg = req.session.flashMsg;
        delete req.session.flashMsg;
    }
    // data.isLogined = !!req.session.loginUser;
    // data.loginUser = req.session.loginUser;
    data.oriUser = req.session.oriUser || "";
    data.oriPass = req.session.oriPass || "";
    res.locals.hello = "Hello World";
    res.render('login', data);
});

app.post('/login', (req, res) => {
    // req.body.user
    // req.body.password
    let sql = "SELECT * FROM `members` WHERE `email`=? AND `password`=?";
    db.query(sql, [
        req.body.user,
        req.body.password
    ], (error, results) => {

        console.log('201:',results);

        if(results.length===1){
            req.session.loginUser = req.body.user;
            
        } else {
            req.session.flashMsg = '帳號或密碼錯誤';
            req.session.oriUser = req.body.user;
            req.session.oriPass = req.body.password;
        }
         res.redirect('/login');
    });    
});
// app.post('/login', (req, res) => {
//     if (req.body.user === 'twob' && req.body.password === '1234') {
//         req.session.loginUser = 'twob';
//     } else {
//         req.session.flashMsg = '帳號或密碼錯誤';
//     }
//     res.redirect('/login');
// });
////
//登出//
app.get('/logout', (req, res) => {
    delete req.session.loginUser;
    res.redirect('/login');
});
////



//add//
app.get('/pnform', (req, res) => {
    res.render('pnform')
});
app.post('/pnform', (req, res) => {
    var data = {
        success: false,
        info: '',
        body: req.body,//把回應的資料在回應回去 echo
    };

    //測試key in data
    // console.log(req.body)

    // var sql = 'INSERT INTO `members` (`first_name`,`last_name`) VALUES (?,?)';
    // db.query(sql,
    //     [req.body.first_name, req.body.last_name],
    //     function (error, results) {
    //         if (error) {
    //             res.json(error);
    //             data.info = '新增資料發生錯誤';
    //         } else {
    //             if (results.affectedRows === 1) {
    //                 data.success = true;
    //                 data.info = '新增資料成功';
    //             }
    //         }
    //         res.render('pnform', data);
    //     });
    var sql = 'INSERT INTO `members` (`first_name`,`last_name`,`gender`,`yearlist1`,`monthlist1`,`daylist1` ,`psnid`,`city`,`country`,`detaladdr`,`email`,`mobilenum`,`password`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)';
    db.query(sql,
        [req.body.first_name, req.body.last_name, req.body.gender, req.body.yearlist1, req.body.monthlist1, req.body.daylist1, req.body.psnid, req.body.city, req.body.country, req.body.detaladdr, req.body.email, req.body.mobilenum,req.body.password],
        function (error, results) {
            if (error) {
                // res.json(error);
                data.info = '新增資料發生錯誤';
            } else {
                if (results.affectedRows === 1) {
                    data.success = true;
                    data.info = '新增資料成功';
                }
            }
            res.render('pnform', data);
        });
});
////


//delete//
app.get('/pnform/mblist/remove/:id', (req, res) => {
    var id = parseInt(req.params.id);
    if (isNaN(id)) {
        //...
    } else {
        let sql = "DELETE FROM `members` WHERE `id`=? ";
        db.query(sql, [id], (error, results) => {
            if (results.affectedRows === 1) {
                req.session.listInfo = {
                    type: 'success',
                    text: `成功刪除編號 ${id} 的資料`,
                };
            } else {
                req.session.listInfo = {
                    type: 'danger',
                    text: `編號 ${id} 資料沒有刪除`,
                };
            }


            res.redirect('/pnform/mblist');
            //res.json(results);
            //affectedRows
        });
    }
});

app.get('/pnform/mblist/remove/:id', (req, res) => {
    res.send(req.params.id);
});
////







//404//
app.use((req, res) => {
    res.type('text/html');
    res.status(404);
    res.send('<h2> 404-Not Found <h2>');
});

app.listen(3010, () => {
    console.log('Hello Everyone~');
});