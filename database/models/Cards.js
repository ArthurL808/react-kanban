const bookshelf = require('../bookshelf')

class Cards extends bookshelf.Model{
    get tableName(){
        return 'cards'
    }
    get hasTimeStamps(){
        return true
    }
}
module.exports = bookshelf.model('Cards',Cards)