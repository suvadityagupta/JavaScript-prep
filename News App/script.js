const API_KEY ="71815003bdca4f38be63015841c182f4";
const url = "https://newsapi.org/v2/everything?q=";
window.addEventListner('Load' ,() => fetchNews("India") );
async function fetchNews(query){
    const res = await fetch(`${url}${query}&apiKEY=${API_KEY}`);
    const data = await res.json();
    bindData(data.articles);
}
function bindData(articles){
    const cardsContainer = document.getElementById('cards-container')
    const newsCardTemplate = document.getElementById('template-news-card')
    cardsContainer.innerHTML = "";
    articles.forEach(article => {
        if (!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);    
    });
}
function fillDataInCard(cardClone , article){
    const newsImg = cardClone.querySelectior('#news-img');
    const newsTitle = cardClone.querySelectior('#news-title');
    const newsSource = cardClone.querySelectior('#news-source');
    const newsDesc = cardClone.querySelectior('#news-desc');
}