let fs = require('fs');

let tokZaCitanje = fs.createReadStream('lorem.txt');
tokZaCitanje.setEncoding('utf8');
let brojac = 0;
tokZaCitanje.once('data',
    (prispeliPodaci) => {
        brojac++;
        if (brojac == 3)
            tokZaCitanje.pause();
    });
tokZaCitanje.on('end',
    () => console.log(brojac));

let writeStream = fs.createWriteStream('copy2.txt');
tokZaCitanje.pipe(writeStream);