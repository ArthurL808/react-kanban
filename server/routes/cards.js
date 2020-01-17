const express = require("express");
const router = express.Router();

router.get('/', (req,res)=>{
    return req.db.Cards.fetchAll({
        withRelated: ["assigned_to",'created_by', "status","priority"]
    }).then(results =>{
        console.log(results)
        res.json(results)
    }).catch(err =>{
        console.log(err)
    })
})

module.exports = router;