const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348149736304";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_02_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjAsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2LFxuICAgICAgICA0MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU2LFxuICAgICAgICA5NixcbiAgICAgICAgMjQ0LFxuICAgICAgICA1MixcbiAgICAgICAgMjEzLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIxLFxuICAgICAgICA4MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDg2LFxuICAgICAgICA2OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDk2LFxuICAgICAgICAxMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDU5LFxuICAgICAgICA0MixcbiAgICAgICAgMTgxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjExLFxuICAgICAgICA5LFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA3MixcbiAgICAgICAgMjUsXG4gICAgICAgIDIxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAzLFxuICAgICAgICA2MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMCxcbiAgICAgICAgODYsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE5LFxuICAgICAgICA0MSxcbiAgICAgICAgODQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDg5LFxuICAgICAgICAyMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNixcbiAgICAgICAgODIsXG4gICAgICAgIDMxLFxuICAgICAgICA5MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgxLFxuICAgICAgICA5NixcbiAgICAgICAgMjgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTkwLFxuICAgICAgICAyLFxuICAgICAgICAwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjA4LFxuICAgICAgICA4MixcbiAgICAgICAgMTE4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTMyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1NixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDMsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjEyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTczLFxuICAgICAgICA0MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTkxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIndiMUxHbEFNWFR2RmRCVFBSaXZwcmZkM2RNV3k1RTh5MVlYaWlYS0dNMGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE0OTczNjMwNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNEJBRjEyNUYzRDc1NTU1Q0JDRDE3QjI2ODUxOUM2OTdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTQxMzQzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImdVVG5CTFhlUThLY2RQQlFBQ2lvUndcIixcbiAgXCJwaG9uZUlkXCI6IFwiODYzMzY3MGEtYWM2NS00MjAxLThjYWUtNzQ2N2E0ZjE2Yjk5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMyxcbiAgICAgIDEyMCxcbiAgICAgIDIxNSxcbiAgICAgIDEyLFxuICAgICAgNTYsXG4gICAgICAyMjEsXG4gICAgICA1MyxcbiAgICAgIDExMixcbiAgICAgIDQyLFxuICAgICAgMjAxLFxuICAgICAgMjAyLFxuICAgICAgMSxcbiAgICAgIDg3LFxuICAgICAgMTYwLFxuICAgICAgMTI3LFxuICAgICAgMjM0LFxuICAgICAgMjAyLFxuICAgICAgMTU2LFxuICAgICAgNDQsXG4gICAgICA1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA3LFxuICAgICAgMTIsXG4gICAgICA4NixcbiAgICAgIDIzNixcbiAgICAgIDE5NSxcbiAgICAgIDY1LFxuICAgICAgMTIwLFxuICAgICAgMjI3LFxuICAgICAgMTY0LFxuICAgICAgMTg3LFxuICAgICAgMTE2LFxuICAgICAgMTU0LFxuICAgICAgNzYsXG4gICAgICAxMDcsXG4gICAgICAyMTcsXG4gICAgICA0MCxcbiAgICAgIDEwMixcbiAgICAgIDIxNCxcbiAgICAgIDI1NSxcbiAgICAgIDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLR2cwbmNRbUl5ZHRBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk5obkRIREJZMys1ZFRSTnFudjVEUUUrenVQZnNLeFdxeDFxNWFIVUJkVmM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRUlwUGZTQUkyYzR5REZaRXVzUHE3eitUV0Y4bEQwRHl0c2RtL3FHVVdIdjJPNHR0N1VSek15UlBWWFdiMENpRk1DUGZRZ1NUaXRlV2RxZEF4a1JFQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNExKSWh3UEJZSjhDWTMxYXNSNnNkamtDSVFva3ZBVVdzYzFGNXhqK0tBV1J5R25pdERReXJCVk1Tay9Wd1hMR1BMRnlYWE8vZjJtSzkxWmEra2VoaXc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQ5NzM2MzA0OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJUcmFkZSBXaXRoIFNleWlcIixcbiAgICBcImxpZFwiOiBcIjE4NDk4MDEzMTA2MjAwODozQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE0OTczNjMwNDozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDE0MTMzOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU50bFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTnRsLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRjZvcVdFZ2IxbGpxVVU4S0RBTUVpNkx5TDJJRjdiZjdBVWhrZ21mZ2Zsaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNTA5MDg3MDQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU50bS5qc29uIjogIntcImtleURhdGFcIjpcImx4VVdpb2FONUoyTUVWSEJ5eTRMU2xGMlRER1Fqc0tJSDJDR1U3MWVlZU09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjUwOTA4NzA0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIwMTM3MTY5MjYyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
