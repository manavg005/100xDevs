const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
    .name('counter')
    .description('CLI to do file based tasks')
    .version('0.8.0');

program.command('count')
    .description('Count the number of lines in a file')
    .argument('<file>', 'file to count')
    .action((file) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                const lines = data.split(/\s+/).length;
                console.log(`There are ${lines} words in ${file}`);
            }
        });
    });

program.command("test")
    .description("This is testing command")
    .argument('<string>', "string to test")
    .action((words) => {
        const length = words.split(" ").length;
        console.log(`Length:${length}`);
    });


program.parse();