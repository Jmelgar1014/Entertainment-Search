const apiKey = 'api_key=6b47094a0c32480905f76ebf67485940';
const popularUrl= 'https://api.themoviedb.org/3/movie/popular?'
const url = 'https://api.themoviedb.org/3/search/multi';
const imageUrl = 'https://image.tmdb.org/t/p/w500';
const actionUrl = 'https://api.themoviedb.org/3/discover/movie?'
const tvUrl = 'https://api.themoviedb.org/3/discover/tv?'
const movieHov = document.getElementById('movies');
const tvHov = document.getElementById('tvshow')
const home = document.getElementById('home');
const hamburger = document.getElementById('ham');

const displayOptions = () => {
    const getOptions = document.querySelector('.movieListMobile');
    const search = document.querySelector('.search');
    const hamm = document.querySelector('i');
    const btn = document.querySelectorAll('.movieBtnMobile');
    if(hamm.classList.contains('activated')){
        getOptions.style.display = 'none';
        hamm.classList.remove('activated');
    }else {
        hamm.classList.add('activated');
        getOptions.setAttribute('id','hamDisplay');
        getOptions.style.display = 'flex';
        getOptions.style.flexDirection = 'column';
        getOptions.style.position = 'static';
        getOptions.style.padding = '0';
        btn.forEach((item)=>{
            item.style.marginRight = 'auto';
            item.style.marginLeft = 'auto';
            item.marginTop = '1rem';
            item.style.marginBottom = '2rem';
        })
        search.appendChild(getOptions);
    }



}


const hamWdith = () => {
    const hamm = document.querySelector('i');
    const getOptions = document.querySelector('.movieListMobile');
    if((hamm.classList.contains('activated')) && (window.innerWidth >= 1300)){
        getOptions.style.display = 'none';
    }

}
hamWdith();

window.addEventListener('resize', hamWdith);
hamburger.addEventListener('click', displayOptions)


let pageNum = 1;



const getActionPages = async () => {
    const action = document.querySelector('.actionPages');
    const page = document.querySelector('.num')
    pageNum++;
    const response = await fetch(`${actionUrl}page=${pageNum}&with_genre=action&${apiKey}`);
    const data = await response.json();
    console.log(data);
    page.innerHTML = pageNum;
    const popular = document.querySelector('.action');
    popular.style.display ='none';
    const list = data.results;
    let html =''
    list.forEach((item) => {
        console.log(item.poster_path)
        html += `
            <div  class="poster">
                <img class="poster-img" src="${imageUrl}${item.poster_path}" alt="">
            </div>
        `;
        action.innerHTML = html
    })
    console.log(data)

}

const movielist = document.getElementById('movieGen');

movielist.addEventListener('click', async (e)=>{
    const loc = document.querySelector('.action');
    if(loc.style.display == 'none'){
        loc.style.display = 'grid';
    }
    if(e.target.classList.contains('genres')){
        e.preventDefault();
        const genre = e.target.id;
        console.log(genre)
        const locations = document.querySelector('.action');
        //const pagination = document.querySelector('.pagination');
        const pop = document.querySelector('#popular-movies');
        pop.style.display = 'none';
        const tv = document.querySelector('.tvshows');
        tv.style.display = 'none';
        //pagination.style.visibility = 'visible';
        const response = await fetch(`${actionUrl}page=1&with_genres=${genre}&${apiKey}`);
        const data = await response.json();
        console.log(data)
        const list = data.results;
        let html =''
        list.forEach((item) => {
            html += `
                <div  class="poster">

                        <div class ="poster-wrapper">
                            <img class="poster-img" src="${imageUrl}${item.poster_path}" alt="">

                        </div>

                </div>
            `;
            locations.innerHTML = html
            
        })            


    }
   
})


const tvGen = document.querySelector('.tvGenre');
tvGen.addEventListener('click', async (e)=>{
        const loc = document.querySelector('.tvshows')
        const search = document.querySelector('.search-results');
    if((loc.style.display == 'none')){
        loc.style.display = 'grid';
    }
    if(e.target.classList.contains('tvgenres')){
        e.preventDefault();
        const genre = e.target.id;
        console.log(genre)
        const locations = document.querySelector('.tvshows');
        //const pagination = document.querySelector('.pagination');
        const action = document.querySelector('.action');
        action.style.display = 'none';
        const pop = document.querySelector('#popular-movies');
        pop.style.display = 'none';
        //pagination.style.visibility = 'visible';
        const response = await fetch(`${tvUrl}page=1&with_genres=${genre}&${apiKey}`);
        const data = await response.json();
        const list = data.results;
        let html =''
        list.forEach((item) => {
            html += `
            <div  class="poster">

                <div class ="poster-wrapper">
                    <img class="poster-img" src="${imageUrl}${item.poster_path}" alt="">

                </div>

            </div>
            `;
            locations.innerHTML = html
        })
    }


})

const getActionPagesPrev = async () => {
    const action = document.querySelector('.actionPages');
    const page = document.querySelector('.num')
    pageNum--;
    const response = await fetch(`${actionUrl}page=${pageNum}&with_genre=action&${apiKey}`);
    const data = await response.json();
    console.log(data);
    page.innerHTML = pageNum;
    const popular = document.querySelector('.action');
    popular.style.display ='none';
    const list = data.results;
    let html =''
    list.forEach((item) => {
        console.log(item.poster_path)
        html += `
        <div  class="poster">

            <div class ="poster-wrapper">
                <img class="poster-img" src="${imageUrl}${item.poster_path}" alt="">

            </div>

        </div>
        `;
        action.innerHTML = html
    })
    console.log(data)

}



const hover = (e) =>{
    const tvlist = document.querySelector('.tvHov');
    e.preventDefault();
    const list = document.querySelector('.movieHov');
    if((e.target.id == 'movies') && (list.style.visibility == 'hidden') && (tvlist.style.visibility == 'hidden')){
        list.style.visibility = 'visible';
    }else if((e.target.id == 'movies') && (list.style.visibility == 'visible') && (tvlist.style.visibility == 'hidden')){
        list.style.visibility = 'hidden';
    }else if((e.target.id == 'movies') && (list.style.visibility == 'hidden') && (tvlist.style.visibility == 'visible')){
        tvlist.style.visibility = 'hidden';
        list.style.visibility = 'visible';
    }if((e.target.id == 'tvshow') && (list.style.visibility == 'hidden') && (tvlist.style.visibility == 'hidden')){
        tvlist.style.visibility = 'visible';
    }else if((e.target.id == 'tvshow') && (list.style.visibility == 'hidden') && (tvlist.style.visibility == 'visible')){
        tvlist.style.visibility = 'hidden';
    }else if((e.target.id == 'tvshow') && (list.style.visibility == 'visible') && (tvlist.style.visibility == 'hidden')){
        list.style.visibility = 'hidden';
        tvlist.style.visibility = 'visible';
    }else if((e.target.id == 'home') && (list.style.visibility == 'visible' || tvlist.style.visibility == 'visible')){
        list.style.visibility = 'hidden';
        tvlist.style.visibility = 'hidden';
    }
   
}



movieHov.addEventListener('click', hover )
tvHov.addEventListener('click', hover)
home.addEventListener('click', hover)



document.addEventListener('mouseup',function(e){
    if((!movieHov.contains(e.target))&&!tvHov.contains(e.target)&& !home.contains(e.target)){
        const tvlist = document.querySelector('.tvHov');
        const list = document.querySelector('.movieHov');
        list.style.visibility = 'hidden';
        tvlist.style.visibility = 'hidden';
    }
    

})

const popMovies = async () => {
    const location = document.querySelector('#popular-movies');
    const response = await fetch(`${popularUrl}${apiKey}`);
    const data = await response.json();

    const list = data.results;
    let html =''

    list.forEach((item) => {

        html += `
        <div  class="poster">

            <div class ="poster-wrapper">
                <img class="poster-img" src="${imageUrl}${item.poster_path}" alt="">

                    </div>
                </div>
            </div>

        </div>
        `;
        location.innerHTML = html
    })
;}
popMovies();
const searchMovie = async (movie) => {
    const action = document.querySelector('.action');
    const tv = document.querySelector('.tvshows');
    const popular = document.getElementById('popular-movies');
    const location = document.querySelector('.search-results');
    popular.style.display ='none';
    tv.style.display = 'none';
    action.style.display = 'none';


    const response = await fetch (`${url}?query=${movie}&${apiKey}`);
    const data = await response.json();
    console.log(data);
    const list = data.results;
    let html =''

    list.forEach((item) => {

        html += `
        <div  class="poster">

            <div class ="poster-wrapper">
                <img class="poster-img" src="${imageUrl}${item.poster_path}" alt="">

            </div>

        </div>
        `;
        location.innerHTML = html
    })

    


}

const movieInput = document.getElementById('search-input');
const movieBtn = document.getElementById('searchBtn');
movieBtn.addEventListener('click',async ()=>{
    const movie = movieInput.value;
    searchMovie(movie);
})

