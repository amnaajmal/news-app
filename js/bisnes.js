function initiaize(){
    $.ajax({
        url:`https://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=784f4f6a24994a21a3fc1842f5c67820`,

        success: function(data){
            

            for(let i = 0; i < data.articles.length; i++){
                if(data.articles[i].urlToImage!=null){

                document.querySelector(".business-group").innerHTML += `<div class="card col-md-3" style="margin: 1% !important">
    
                <div class="card-body">
                    <h5 class="card-title">
                    <a href="${data.articles[i].url}" target="_blank">
                    <img class="card-img-top" src="${data.articles[i].urlToImage}" alt="business image">
                    ${data.articles[i].title}
                    </a></h5>
                    <p class="card-text">${data.articles[i].description}</p>
                    <p class="card-text">Author: ${data.articles[i].author}</p>
                </div>
            </div>`;
            }
        }
        },

        error: function(err){
            document.querySelector(".business-group").innerHTML += `Something Went Wrong`;            
        }
    });
}