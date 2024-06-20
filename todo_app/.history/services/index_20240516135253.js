const path = require('path');
const fs = require('fs');
const baseDir = path.join(__dirname, '../todos')

class TodoService {
    createTodo (name, data) {
        let res;
        const filepath = path.join(baseDir, name);
        fs.appendFile(filepath, data, function (err,res) {
            if(err) {
                throw err
            }else {
                res = 'todo created successfully'
            }
        })

        return res
    }
};

const todo = new TodoService()
module.exports = todo