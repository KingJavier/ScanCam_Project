//* importaciones
const {IncomingWebhook} = require("@slack/webhook")

//? Conección con Slack 
const webHook = new IncomingWebhook( process.env.SLACK_WEBHOOK)

//? Define lo que se va mostrar el la app de slack
const loggerStream = {
    write: message => {
        webHook.send({
            text: message
        })
    },
};

module.exports = loggerStream