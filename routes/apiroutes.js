const path = require('path');
 const fs= require('fs')
  let notesData=[];
 fs.readFile('./db/db.json',(err,data)=>{
    if (err) throw err;
    notesData = JSON.parse(data);
    console.log(notesData);

 });
    
 

// ROUTING

module.exports =  (app)=> {
  // => HTML GET Requests
 // Below code handles when users "visit" a page.
    
 app.get('/api/notes', (req, res) => res.json(notesData));


 app.post('/api/notes',(req,res) =>{

      notesData.push(req.body)
      let data = JSON.stringify(notesData)

    fs.writeFile('./db/db.json',data,(err) =>{
        if (err) throw err;
        console.log("Note added successfuly")
        
      })
      res.json(notesData)
 })


}