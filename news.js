// const loadNews =async()=>{
//   const url =`https://openapi.programming-hero.com/api/news/categories`;
//   const response = await fetch(url);
//   const data = await response.json()
//   displayNews(data.data.news_category)
// }

// const displayNews =newses=>{
//   const navbar = document.getElementById('nav-bar');
//   newses.forEach(news =>{
//     const ul = document.createElement('ul');
//     ul.classList.add('list-unstyled','p-3')
    
//     ul.innerHTML=`
    
//           <li class="nav-item">
//           <a onclick="loadNewsDynamic()" id="nav" class="nav-link active" aria-current="page" href="#">${news.category_name}</a>
//         </li>`
//         navbar.appendChild(ul)
//   })
// }
// const loadNewsDynamic=category_name=>{
//   const url = `https://openapi.programming-hero.com/api/news/${category_name}`;
//   fetch(url)
//   .then(res=>res.json())
//   .then(data=>console.log(data))
// }
// const loadSinglenews = async(news_id)=>{
//   const url= `https://openapi.programming-hero.com/api/news/category/${news_id}`;
//   const response = await fetch(url);
//   const data = await response.json();
//   displaySingleNews(data.data)
// }
// const displaySingleNews =(singles)=>{
//   const card = document.getElementById('news-container');
//   // console.log(singles)
//   console.log(singles)
 
//   singles.forEach(single=>{
    
//     const newsdiv = document.createElement('div');
//     newsdiv.classList.add('col');
//     newsdiv.innerHTML=`
//     <div class="card">
//     <img src="${single.thumbnail_url}" class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">Card title</h5>
//       <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//     </div>
//   </div>
//     `;
//     card.appendChild(newsdiv)
//   })
// }



// loadSinglenews()

// loadNews()

const loadNewsHeading=()=>{
  fetch(`https://openapi.programming-hero.com/api/news/categories`)
  .then(res=>res.json())
  .then(data=>displayNewsHeadings(data.data.news_category))
}
const displayNewsHeadings =(newses)=>{
  const navbar = document.getElementById('nav-bar');
newses.forEach(news => {
  console.log(news)
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
  // console.log('ami paisi',code)
  const url=(`https://openapi.programming-hero.com/api/news/category/${code}`)
  // console.log(url)
  fetch(url)
  .then(res=>res.json())
  .then(data=>displaySingleNews(data.data))
}


const loadAllNews=(news_id)=>{
  const url =(`https://openapi.programming-hero.com/api/news/${news_id}`)
  fetch(url)
  .then(res=>res.json())
  .then(data =>displaySingleNews(data))
}
const displaySingleNews=newses=>{
  const card = document.getElementById('news-container');
 card.innerHTML=''
  for(const news of newses){
    
    console.log(news)
    const newsdiv = document.createElement('div');
    newsdiv.classList.add('col');
    newsdiv.innerHTML=`
    <div onclick="loadAllNews('${news._id}')" class="card">
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
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newsDetailModal">
    Show More
  </button>
    </div>
    
   
</div>
  </div>
    `;
    card.appendChild(newsdiv)

  }
}

loadNewsHeading()
loadNewsHeadingDetaile('01')
