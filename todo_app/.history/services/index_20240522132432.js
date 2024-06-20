const path = require('path');
const fs = require('fs');
const baseDir = path.join(__dirname, '../todos')

class TodoService {

    // utlities
    readDirectory () {
        const files  = fs.readdirSync(baseDir);
        return files  
    }

    filesExits (_filename) {
        const files = this.readDirectory();
        const found = files.find((filename) => filename === _filename);
        if(!found) {
            return false
        }else {
            return true
        }
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
       const isFound = this.filesExits(_filename);
       if(isFound) {
        const filePath = path.join(baseDir, _filename);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        return fileContent
       }else {
        return "File not found"
       }
    }

    delteOneTodo (_filename) {
        const isFound = this.filesExits(_filename);
        if(isFound) {
         const filePath = path.join(baseDir, _filename);
        fs.unlink(filePath);
         return "deleted successfully"
        }else {
         return "File not found"
        }
     }
};


const todo = new TodoService()
module.exports = todo