'use strict'

const fs = require('fs')

// get or create userDetails file 
const getFile = ()=>{
	try{
		return JSON.parse(fs.readFileSync(__dirname + '/usersDetails.json'))	
	}catch{
		fs.writeFileSync(__dirname + '/usersDetails.json',JSON.stringify([]))
		return JSON.parse(fs.readFileSync(__dirname + '/usersDetails.json'))
	}
}


// write in userDetails file 
const writeFileJSON = (file)=>{
	fs.writeFileSync(__dirname + '/usersDetails.json',JSON.stringify(file,null,4))
}

module.exports = {getFile,writeFileJSON}
