
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
const { response } = require('express');
app.use(express.static('abc'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
//whether you want nested objects support  or not
var result;

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'exam',
	port:3306
});
app.get("/blurevent",(req,res)=>
{
	let input=req.query.bookid;
	let output={status:false,Bookdetails:{bookid:0,bookname:'',price:0}}
	conn.query('select bookid,bookname,price from book where bookid=?',[input],(err,rows)=>{
      if(err)
	  {
		console.log(err);
	
	  }
	  else{
		if(rows.length>0)
		{
			Bookdetails.status=true;
			Bookdetails.book=rows[0];
		}
	  }
     res.send(Bookdetails);


	}
	 )
})

app.get('/updatedetails',(req,res)=>
{
	let bookid=req.query.bookid;
	let price=req.query.price;
	let updatedetails={status:false,msg:"cant update" };
	conn.query('update book set price=? where bookid=?',[price,bookid],
	(err,res1)=>
	{
		if(err)
		{
			console.log(err);
		}
		else{
			updatedetails.status=true;
			updatedetails.msg="update sucessful";
		}
		res.send(updatedetails);
	}
	)
	
})
app.listen(901);