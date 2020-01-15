const express = require("express");
const router = express.Router();

router.get('/cards', (req,res)=>{
    return req.db.Cards.fetchAll().then(results =>{
        let allCards = results.toJSON()
        console.log('this is server all cards',allCards)
        res.send(allCards)
    })
})

module.exports = router;