const path = require('path');
const fs = require('fs');
const baseDir = path.join(__dirname, '../todos')

class TodoService {
    createTodo (name, data) {
        const filepath = path.join(baseDir, name);
        fs.appendFile(filepath, data, function (err,res) {
            if(err) {
                throw err
            }else {
                return 'todo created successfully'
            }
        })
    }
};

const todo = new TodoService()
module.exports = {todo}