

const loadNewsHeading=()=>{
  fetch(`https://openapi.programming-hero.com/api/news/categories`)
  .then(res=>res.json())
  .then(data=>displayNewsHeadings(data.data.news_category))
  .catch(error => console.log(error))
 
}
const displayNewsHeadings =(newses)=>{
  const navbar = document.getElementById('nav-bar');
newses.forEach(news => {
  // console.log(news)
  const ul = document.createElement('ul');
    ul.classList.add('list-unstyled','p-3')
    
    ul.innerHTML=`
    
          <li class="nav-item">
          <a onclick="loadNewsHeadingDetaile('${news.category_id}')" id="nav" class="nav-link active" aria-current="page" href="#">${news.category_name}</a>
        </li>`
        navbar.appendChild(ul)
        
})

}

const loadNewsHeadingDetaile=(code)=>{
  
  const url=(`https://openapi.programming-hero.com/api/news/category/${code}`)
  // console.log(url)
  fetch(url)
  .then(res=>res.json())
  .then(data=>displaySingleNews(data.data))
  .catch(error => console.log(error))
  // displayAllNews()
  toggoleSpiner(true)
}


const loadAllNews=(news_id)=>{
  const url =(`https://openapi.programming-hero.com/api/news/${news_id}`)
  fetch(url)
  .then(res=>res.json())
  .then(data =>displayAllNews(data.data))
  .catch(error=> console.log(error))
}
const displaySingleNews=newses=>{
  const card = document.getElementById('news-container');
 card.innerHTML=''
  for(const news of newses){
    
    // console.log(news)
    const newsdiv = document.createElement('div');
    newsdiv.classList.add('col');
    newsdiv.innerHTML=`
    <div  class="card">
    <img src="${news.image_url}" class="img-fluid card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${news.title}</h5>
      <p class="card-text">${news.details.slice(0,400)}...</p>
      <div' >
      <div><img class=" w-25" src="${news.author.img}" alt=""></div>
      <div>
      <p>${news.author.name}</p>
      <p>${news.author.published_date}</p></div>
      <p> view: ${news.total_view}</p>
      <button onclick="loadAllNews('${news._id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newsDetailModal">
      Show More
    </button>
    </div>
    
   
</div>
  </div>
    `;
    card.appendChild(newsdiv)
    toggoleSpiner(false)
  }
  
}
const displayAllNews = newses=>{
  const modalTitle = document.getElementById('newsDetailModalLabel');
  const newDetaile = document.getElementById('news-detaile')
 for (const news of newses){
  // console.log(news)
  modalTitle.innerText= news.author.name ? news.author.name : 'no name found';
  newDetaile.innerHTML=`
  <img class="w-25" src="${news.author.img}">
   <p>Release Date:${news.author.published_date ? news.author.published_date : 'no data found'}</p>
   <p>total View: ${news.total_view ? news.total_view : 'no data found'}</p>
   <p>Details: ${news.details? news.details : 'no detaile found'}
  `
 }
}
const toggoleSpiner= isLoading=> {
  const spinner = document.getElementById('loader')
  if(isLoading){
    spinner.classList.remove('d-none')
  }
  else{
    spinner.classList.add('d-none')
  }
 
}

loadNewsHeading()
loadNewsHeadingDetaile('01')
