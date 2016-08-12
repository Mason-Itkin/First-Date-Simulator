var processUtterance = require('./processUtterance')

module.exports = {
	"ResetStateIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "reset skill" )
	},
	"RestoreStateIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "resume skill" )
	},
	"RepeatOptionsIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "repeat options" )
	},
	"RepeatSceneIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "repeat scene" )
	},
	"GoBackIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "go back" )
	},
	"AMAZON.HelpIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "help" )
	},
	"AMAZON.StopIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "exit skill" )
	},
	"AMAZON.CancelIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "exit skill" )
	},
	"BeginIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "begin" )
	},
	"DinaIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "dina" )
	},
	"PunBasedComedyIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "pun based comedy" )
	},
	"HeartfeltResponseIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "heartfelt response" )
	},
	"PlayItSafeIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "play it safe" )
	},
	"SendIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "send" )
	},
	"GiveUpIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "give up" )
	},
	"ReplyIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "reply" )
	},
	"KeepAtItIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "keep at it" )
	},
	"ApologizeIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "apologize" )
	},
}