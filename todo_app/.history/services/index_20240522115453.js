const path = require('path');
const fs = require('fs');
const baseDir = path.join(__dirname, '../todos')

class TodoService {

    // utlities
    readDirectory () {
        const files  = fs.readdirSync(baseDir);
        return files  
    }

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
    };

    getAllTodos () {
        const files  = this.readDirectory()
    }
};


const todo = new TodoService()
module.exports = todo