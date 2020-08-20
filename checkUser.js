'use  strict'

const fileReader = require('./fileReader.js')


//  check username or emailid already exists or not
const isValidDetails = (username,email)=>{
	const allusers = fileReader.getFile()
	const [all_username,all_email_id]= [[],[]]

	for (const user of allusers){
		all_username.push(user.username)
		all_email_id.push(user.email_id)
	}
	if ( (all_username.includes(username)) || (all_email_id.includes(email)) ){
		return false
	}else{
		return true
	}
}


// check user is exists or not 
const isUserExists = (userId,password)=>{
	const allusers = fileReader.getFile()
	const [all_username,all_email_id,all_password] = [[],[],[]]

	for (const user of allusers){
		all_username.push(user.username)
		all_email_id.push(user.email_id)
		all_password.push(user.password)
	}
	// console.log(all_username,all_email_id,all_password)
	// return all_email_id

	if ( all_username.includes(userId) || all_email_id.includes(userId) ){
		if ( all_password[all_username.indexOf(userId)] === password || all_password[all_email_id.indexOf(userId)] === password ){
			return true
		}else{
			return false
		}
	}else{
		return false
	}
}

module.exports = {isValidDetails,isUserExists}
