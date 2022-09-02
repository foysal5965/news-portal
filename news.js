const loadAllnews =()=>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res =>res.json())
    .then(data =>displayAllnews(data))
}
const displayAllnews =(news)=>{
    
    const{data}=news;
    // console.log(data)
    const categoryNews= data.news_category;
    const namvbar = document.getElementById('nav-bar');
    for(const news of categoryNews){
        const ul = document.createElement('ul');
        ul.innerHTML=`
        <div class="container-fluid">
        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">${news.category_name}</a>
      </li>`;
      namvbar.appendChild(ul)
    }
        
    
    
}
loadAllnews()