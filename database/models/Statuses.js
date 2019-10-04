const bookshelf = require('../bookshelf')

class Statuses extends bookshelf.Model{
    get tableName(){
        return 'statuses'
    }
    get hasTimeStamps(){
        return true
    }
}
module.exports = bookshelf.model('Statuses',Statuses)