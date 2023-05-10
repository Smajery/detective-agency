const nodemailer = require('nodemailer');

class MailService {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        });
    }


    async sendActivationMail(to, link) {
        try {
            await this.transporter.sendMail({
                from: process.env.SMTP_USER,
                to,
                subject: 'Активація облікового запису для: ' + process.env.API_URL,
                text: '',
                html:
                    `
                    <div>
                        <h1>Для активації перейдіть за посиланням:</h1>
                        <a href="${link}">${link}</a>
                        <h3>Якщо ви не реєструвалися на цьому сайті, будь ласка, видаліть цей лист</h3>
                    </div>
                `
            });
        } catch (e) {
            console.error(e);
        }
    }
}

module.exports = new MailService();