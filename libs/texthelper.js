module.exports = {
	testJSON : {"search":[{"tweetText":"@ycjobse Helaas zijn onze treintickets geen garantie voor een zitplaats. " +
	"Wij verkopen vervoersbewijzen, geen zitplaatsen. ^MO","retweeted":false,"userReply":"938694032",
		"createdAt":"Sun Nov 15 17:04:52 +0000 2015"},{"tweetText":"@RotterdamZoo Wat een goed nieuws! Dank je wel voor het melden. Fijne avond allemaal! ^MO",
		"retweeted":false,"userReply":"44094207","createdAt":"Sun Nov 15 17:03:09 +0000 2015"},
		{"tweetText":"HSL Rotterdam-Breda: IC direct treinen kunnen weer gaan rijden. http://bit.ly/NSinfo  #hslrtdbd",
			"retweeted":false,"userReply":"None","createdAt":"Sun Nov 15 16:58:53 +0000 2015"}]
	},

	fixDate : function (){
		//This should convert to date obj, remove the seconds
		var tempDate = this.testJSON.search[0].createdAt;
		return tempDate;
	},

	sliceLocation: function(){
		//put in separate Location module
		var locSlicer = require('./locationhelper.js');
		return locSlicer.getLocatioSnippit(this.testJSON.search[2])
	}




}