const yargs = require('yargs');
yargs.version ('1.1.0');
console.log(yargs.argv);

yargs.command({
    command: 'add',
    describe: 'yeni not ekler',
    builder:{
        title:{
            describe: 'Not basligi',
            demandOption: true,
            type: 'string'
        }
    },
    body:{
        describe: 'Not icerigi',
        demandOption: true,
        type: 'string'
    },
    handler: function(argv){
        console.log('baslik : ',argv.title);
        console.log('icerik : ',argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'secilen notu siler',
    handler: function(){
        console.log('not siliniyor');
    }
})

yargs.command({
    command: 'list',
    describe: 'mevcut notu listeler',
    handler: function(){
        console.log('notlar listeleniyor');
    }
})

yargs.command({
    command: 'read',
    describe: 'secilen notu gosterir',
    handler: function(){
        console.log('not gosteriliyor');
    }
})

yargs.parse()