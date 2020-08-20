'use strict'

const input = require('prompt-sync')()
const fileReader = require('./fileReader.js')

const writeNotes = (userId)=>{
	const allusers = fileReader.getFile()
	const writeNotes = input('enter you note: ')

	for (const user of allusers ){
		if (user.username === userId || user.email_id === userId){
			try {
				const nextNoteIndex = Object.keys(user.notes).pop()
				if ( nextNoteIndex !=undefined ){
					user.notes[parseInt(nextNoteIndex)+1] = writeNotes

				}else{
					user.notes[1] = writeNotes
				}
			} catch{
				user.notes ={
					1:writeNotes
				}
			}
		}
	}
	fileReader.writeFileJSON(allusers)	
	return '\ndone...'
}

const readNotes = (userId)=>{
	const allusers = fileReader.getFile()

	for ( const user of allusers){
		if (user.username === userId || user.email_id === userId){
			if (user.notes === undefined || user.notes =={}){
				return '\nSorry! no notes available...'
			}else{
				return user.notes
			}
		}
	}
}

const makeNotes = (userId)=>{
	console.log('\n-----------Welcome to Notepad---------\n')
	const userChoice = input('Do you want to write or read notes W/r: ').toLowerCase()
	console.log()

	if ( userChoice ==='w' ){
		console.log(writeNotes(userId))
	}else if (userChoice ==='r'){
		console.log(readNotes(userId))
	}else if (userChoice === 'exit') {
		console.log('bye')	
	}
	else{
		console.log('invalid! input')
		return makeNotes(userId)
	}
}

module.exports = {makeNotes}
