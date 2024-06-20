const path = require('path');
const baseDir = path.join(__dirname, '../todos')

class TodoService {
    createTodo (name, data) {
        const filepath = path.join(baseDir, name)
    }
}