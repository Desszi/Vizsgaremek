const chokidar = require('chokidar');
const { exec } = require('child_process');

let run =  false;
chokidar.watch('./src').on('all', (event, path) =>{
    if(run) {
        exec(`Docker restart frontend_vizsgaremek`, (e,s)=>{
            if(e) {
                return console.error(e)
            }

            console.log(`Watcher:`, s)
        })
    }
})

setTimeout(() => {
    run =true;
}, 10000)