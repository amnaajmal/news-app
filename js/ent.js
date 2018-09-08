
function initiaize(){
		var data = JSON.parse(localStorage.getItem('entertainment'));
        // object me convert kra hy

   for(let i = 0; i < data.articles.length; i++){
                if(data.articles[i].urlToImage!=null){
                    document.querySelector(".entertainment-group").innerHTML += `<div class="card col-md-3" style="margin: 1% !important">
    
                <div class="card-body">
                    <h5 class="card-title">
                    <a href="${data.articles[i].url}" target="_blank">
                    <img class="card-img-top" src="${data.articles[i].urlToImage}" alt="entertainment image">
                    ${data.articles[i].title}
                    </a></h5>
                    <p class="card-text">${data.articles[i].description}</p>
                    <p class="card-text">Author: ${data.articles[i].author}</p>
                </div>
            </div>`;
                }
               
            }
}