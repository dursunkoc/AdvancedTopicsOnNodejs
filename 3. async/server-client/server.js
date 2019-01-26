const EventEmitter = require("events");

class Server extends EventEmitter {
    constructor(client) {
        super()
        this.tasks = {};
        this.taskId = 1;
        process.nextTick(() => {
            this.emit('response', 'Type a command (help to list commands)')
        });
        client.on('command', (command, args) => {
            switch (command) {
                case 'help':
                case 'ls':
                case 'add':
                case 'remove':
                    this[command](args);
                    break;
                default:
                    this.emit('response', 'Unknown command');
                    break;
            }
            //ls, add, delete, help
        });
    };

    tasksString(){
        return Object.keys(this.tasks).map(k=>`${k}:${this.tasks[k]}`).join('\n');
    }

    help() {
        this.emit('response', `Avaliable commands:
add task
ls
remove :id`);
    }
    ls() {
        this.emit('response', `Tasks:\n${this.tasksString()}`);
    }
    add(args) {
        let task = args.join(' ');
        this.tasks[this.taskId] = task;
        this.emit('response', `Added [${this.taskId}]: ${task}`);
        this.taskId++;
    }
    remove(args) {
        let deleted = delete(this.tasks[args[0]]);
        this.emit('response', `Removed [${args[0]}]: ${deleted}`);
    }
}

module.exports = (client) => new Server(client)