const { execProc } = require('../DatabaseHelpers/databaseHelper.js')
const ejs = require('ejs')
const { sendEmail } = require('../Helper/email')

const welcomeEmailService = async () => {
    const usersToMail = await (await execProc('usp_GetUsersToEmail')).recordset

    for (let user of users) {
        ejs.renderFile('templates/welcome.ejs', { name: user.username }, async (error, data) => {
            const messageOptions = {
                from: process.env.EMAIL,
                to: user.email,
                subject: 'Welcome to SanMart Shopping Platform',
                html: data
            }

            try {
                await sendEmail(messageOptions)
                await execProc('usp_UpdateMailedUsers', { id: user.id })
                console.log('Success! Email sent');
            } catch (error) {
                console.log(error);
            }
        })
    }
}

module.exports = {welcomeEmailService}