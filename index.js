const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');


const client = new Client({ puppeteer : { executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe' } } );

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!!!');
});

client.on('message', message => {

    if(message.body === 'Pingo') {
		message.reply('Pong ');
	}
    console.log(message);
  
    message.reply(message.body);

});
 

client.initialize();
 