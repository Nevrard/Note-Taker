const path = require('path');
 const fs= require('fs')
 const crypto = require('crypto')


  let notesData=[];
 fs.readFile('./db/db.json',(err,data)=>{
    if (err) throw err;
    if(data){
        notesData = JSON.parse(data);
        console.log(notesData);
     }
    
 });
    
 

// ROUTING

module.exports =  (app)=> {
  // => HTML GET Requests
 // Below code handles when users "visit" a page.

  app.get('/api/notes', (req, res) => res.json(notesData));


  app.post('/api/notes',(req,res) =>{
                  let newNote=req.body
                  newNote.id=generateUniqueID()
                  notesData.push(req.body)
                
                  let data = JSON.stringify(notesData)

                  fs.writeFile('./db/db.json',data,(err) =>{
                  if (err) throw err;
                  console.log("Note added successfuly")
              
            })
            res.json(notesData)
         });
          function generateUniqueID ()
          {
          return crypto.randomBytes(8).toString('hex')
          }

app.delete('/api/notes/:note',(req,res) => {
         let noteID=req.params.note
          console.log(noteID)
          for (let i = 0; i < notesData.length; i++) {
            const currentNote = notesData[i];
            if (noteID === currentNote.id) {
                notesData.splice(i,1)
                }

            }
            res.json(notesData)
      })

}