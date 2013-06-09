function showVideo(response) {
	if(response.data && response.data.items) {
		var items = response.data.items;
		if(items.length>0) {
			var item = items[0];
			var videoid = "https://www.youtube.com/embed/"+item.id;
			var video = "<iframe width='420' height='315' src='"+videoid+"' frameborder='0' allowfullscreen></iframe>"; 
			var title = item.title;
			var description = item.description;
			console.log("Latest ID: '"+videoid+"'");
			console.log("Title: '"+title+"'");
			console.log("Description: '"+description+"'");
			$('#static_video').html(video);
			$('.title').html(title);
			$('.desc').html(description);
		}
	}
}