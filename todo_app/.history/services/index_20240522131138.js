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
        const filesContents = [];
        const files  = this.readDirectory();
        files.forEach(function(file) {
            const filePath = path.join(baseDir, file);
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            filesContents.push(JSON.parse(fileContent))
        });
        console.log(filesContents)
        return filesContents
    }

    getOneTodo (_filename) {
        const files = this.readDirectory();
        console.log(files, "files")
        const found = files.find((filename) => filename === _filename);
        if(!found) {
            return 'File Does not exists'
        }
    }
};


const todo = new TodoService()
module.exports = todo