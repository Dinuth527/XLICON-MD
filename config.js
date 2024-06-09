const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94781306128"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'gamingbest882@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '94781306128' 
global.devs = '94781306128';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0dIQzFENDNFNWdvQzViUEhJMSt1Uk14cDZBTDduanhIYjBqcittZVpGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL1pUV3VUNTN1TUV2ZXkycmxuUFZPcG43a25kc2UyVC9HbTZPYXdSTG5Gaz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwT1RKNU1FTEFpMjFFWG83L1dRcTJVcTF5Zng2L2dxRkpPMTdEWnZaVFZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1QjNtRGo5Q1MvOWJqcUtNOUJWT0hCenJpN05OZVk0WUg0dTM4VWJ1S0JZPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNLSnFvNDlXWFYzZVVKS2MrNG43Z1JvM1h2aEtpTE1aV21BeU45WUR0V0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJsTGlQeEh5ZU1TZWZ2MkM3RUtOYUpPcGZlMnlRaVlDVzkzMWlja3A3aTA9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRNXBaUi95TnRVaHVlNW9ncUdtMDFHTGJDQWl1R1VJaFpPVFRNSStMem9oN3hGUm1NdFRETU9QZnI5Z05qeGlkR0xTK0pYT1RUNVlEZVNnRmo1NUdDdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjIxNywiYWR2U2VjcmV0S2V5IjoiQzNiV0lVd3oweEFFdW5XL0IzRUZ2TVhMMjhBMlhuQmVpa3BjQ1VMTEwvdz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiTWp5YTdZbGVTVnV2MDljaDU5cEstQSIsInBob25lSWQiOiJlNzY1MWMyNy00MzE1LTQzNzYtOTM2My0xMzFlYTlkZmQwYTYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZnp4U1R2aWRudExaWVpXR1RxSkN0TTVURjFrPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4QWZLcUZKRitvKzhWZFBUWU1wNUFsOU5yRm89In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNLbVkrT0VHRU1iT2xiTUdHQTBnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJXSGVDSkJhTDVuS0hLNnNUbzhudHRtakt6V0NaTlIwWWZnRFlTbjl1MEEwPSIsImFjY291bnRTaWduYXR1cmUiOiJqQmZETFVkWHpYYVRPdEEwZjlpbDgzbWRqUVBKazJDcmx4QmJPam9ZTURhYllQTHNTOTNsVkszQzMxZ1RJZzFybHhyU1Y3TlBzS1ZISFF0czIreE9CZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRS9NbCtWQWUzT1BDZFg1bTFOWjAxWVo0VnhTWlVWRkdXSHJDZDVyRkRMT0tjWUtPdlJYT25kS2Z2TXBiVkpGOEcwNml4d2w5bnkrU0JUYzc0bmRBRGc9PSJ9LCJtZSI6eyJpZCI6Ijk0NzgxMzA2MTI4OjI0QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzgxMzA2MTI4OjI0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZoM2dpUVdpK1p5aHl1ckU2UEo3YlpveXMxZ21UVWRHSDRBMkVwL2J0QU4ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTc5MjE2MTB9",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'DINUVA OFC',
  packname:  process.env.PACK_NAME || 'DINUVA OFC',
   
  botname:   process.env.BOT_NAME === undefined ? "BUNNY-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'DINUVA ODC' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'ι αм σηℓιηє нσω ¢αη ι нєℓρ уσυ 
ι αм ᴍυℓтι ԃєνιᴄє ωнαтѕαρρ вσт ' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
