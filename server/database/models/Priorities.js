const bookshelf = require('../bookshelf')

class Priorities extends bookshelf.Model{
    get tableName(){
        return 'priorities'
    }
    get hasTimeStamps(){
        return true
    }
}
module.exports = bookshelf.model('Priorities',Priorities)