'use strict'

const fs = require('fs')
const input = require('prompt-sync')()
const fileReader = require('./fileReader.js')
const checkUser = require('./checkUser.js')
const noteMaker = require('./noteMaker.js')


// for register
const register = ()=>{
	const user_deatils  = {
		name:input('enter your name: '),
		username:input('enter your username: '),
		email_id:input('enter your email_id: '),
		password:input('enter your password: ')
	}	
	const allusers = fileReader.getFile()
	// calling is isValidDetails function form module checkUser
	if ( checkUser.isValidDetails(user_deatils.username, user_deatils.email_id) === true ){
		allusers.push(user_deatils)
		fileReader.writeFileJSON(allusers)
		console.log('\nregistration done...')
	}else{
		console.log('\nSorry! username or email_id already exists')
	}
}


// for login
const login = ()=>{
	const userId = input('enter your username or email_id: ')
	const password = input('enter your password: ')
	
	if ( checkUser.isUserExists(userId,password) ===true ){
		noteMaker.makeNotes(userId)
	}else{
		console.log('\ninvalid! username or password')
	}
}


// asking user for login or register...
const askUser = ()=>{
	console.log('1. login\n2. register\n')
	const user_input=input('enter your choice: ')
	console.log()

	if (user_input == 1){
		login()	
	}else if (user_input == 2){
		register()
	}else if (user_input === 'exit' || user_input === 'quit') {
		console.log('bye')	
	}else{
		console.log('invalid! input.\n')
		return askUser()
	}
	
}


askUser()
