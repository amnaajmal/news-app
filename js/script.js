

function getData(category) {
	var globalData = null;
	$.ajax({
		async:false,
		url: `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=784f4f6a24994a21a3fc1842f5c67820`,

		success: function(data){
			globalData  = data;
			console.log(data);
			for(let i = 0; i < data.articles.length; i++){
				console.log()

			}
			
		}
	});
	return globalData;
}
