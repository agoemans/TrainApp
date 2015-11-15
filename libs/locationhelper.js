module.exports = {
	//geoInfo is temp: to delete
	geoInfo : "None",
	getLocatioSnippit: function(data){
		//var tempText = data.search[2];

		if (data.retweeted == false && data.userReply == "None"){
			var re = /[^:]*/i;
			var str = data.tweetText;
			var myArray = str.match(re);
			console.log(myArray);
			//return tempText.tweetText;
			return this.splitTwoLocations(myArray);
		}
	},

	splitTwoLocations: function(locs){
		console.log(locs);
		var locList = locs[0].split("-");
		this.geoCoder(locList[1]);
		return locList;
	},

	geoCoder: function(loc){
		var url = "https://maps.googleapis.com/maps/api/geocode/json?address=";
		url = url + loc;
	},

	geoCallback: function(data){
			
	}

}
