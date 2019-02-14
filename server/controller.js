


module.exports ={
    getThings: (req,res)=>{
        const db = req.app.get('db')
        db.getAllUsers().then((response)=>{
            res.send(response)
        })
    },
    getSingle: (req,res)=>{
        const db = req.app.get('db')
        const {id} = req.params
        db.getSingleUser(id).then((response)=>{
            if(response[0]){
            res.status(200).send(response[0])
            } else{
                res.sendStatus(404)
            }
        })
    },
    createUser: (req,res)=>{
        const db = req.app.get('db')
        const {name, email} = req.body
        db.createUser(name, email).then((response)=>{
            res.status(201).send(response)
        })
    },
    deleteUser: (req,res)=>{
        const db = req.app.get('db')
        const {id} = req.params
        db.deleteUser(id).then((response)=>{
            res.status(200).send("Delete Successful")
        }).catch((err)=>{console.log(err)})
    },
    updateUser: (req,res)=>{
        const db = req.app.get('db')
        const {id} = req.params
        const {name, email} = req.body
        db.updateUser(id, name, email).then((response)=>{
            res.status(200).send(`Updated User ${id}`)
        }).catch((err)=>console.log(err))
    }
}