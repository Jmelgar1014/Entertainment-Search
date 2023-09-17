const mobileMovie = document.querySelector('#moviesMobile');
const tvMobile = document.querySelector('#tvshowMobile');
const hamstv = document.querySelector('#tvshowMobile');
const hams = document.querySelector('#moviesMobile');
const homeBtn = document.getElementById('home');
const mobileMovieList = document.getElementById('movieGenMobile');
const mobileTvList = document.querySelector('.tvGenreMobile');


mobileTvList.addEventListener('click', async (e)=>{
    const loc = document.querySelector('.tvshows')
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
        console.log(data)
        let html =''
        list.forEach((item) => {
            html += `
                <div  class="poster">
                    <img class="poster-img" src="${imageUrl}${item.poster_path}" alt="">
                    <div class="overview">${item.overview}</div>
                </div>
            `;
            locations.innerHTML = html
        })
    }


    })

mobileMovieList.addEventListener('click', async(e) =>{
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
        const list = data.results;
        let html =''
        list.forEach((item) => {
            html += `
                <div  class="poster">
                    <img class="poster-img" src="${imageUrl}${item.poster_path}" alt="">
                    <div class="overview">${item.overview}</div>
                </div>
            `;
            locations.innerHTML = html
        })
    }
    
})


const hoverMobile = (e) =>{
    //ul
    const movHover = document.querySelector('#movieGenMobile');
    //ul
    const tv = document.querySelector('.tvGenreMobile');

    //parent div
    const tvHover = document.querySelector('.tvHovMobile');
    const movie = document.querySelector('#movieHovMobile');



    if((e.target.id == 'moviesMobile') && (movHover.style.display == '') && (tv.style.display == '')){
        movHover.style.display = 'flex';

    }else if((e.target.id == 'moviesMobile') && (movHover.style.display == 'flex') && (tv.style.display == '')){
        movHover.style.display = '';

    }else if((e.target.id == 'moviesMobile') && (movHover.style.display == '') && (tv.style.display == 'flex')){
        tv.style.display = '';
        movHover.style.display = 'flex';
    }else if((e.target.id == 'tvshowMobile') && (movHover.style.display == '') && (tv.style.display == '')){
        tv.style.display = 'flex';

    }else if((e.target.id == 'tvshowMobile') && (movHover.style.display == '') && (tv.style.display == 'flex')){
        tv.style.display = '';
    }else if((e.target.id == 'tvshowMobile') && (movHover.style.display == 'flex') && (tv.style.display == '')){
        movHover.style.display = '';
        tv.style.display = 'flex';
    }


}

hams.addEventListener('click', hoverMobile)
hamstv.addEventListener('click',hoverMobile);


document.addEventListener('mouseup',function(e){
    if((!mobileMovie.contains(e.target))&& (!tvMobile.contains(e.target))){
        const tvmob = document.querySelector('.tvGenreMobile');
        const listmob = document.querySelector('#movieGenMobile');
        listmob.style.display = '';
        tvmob.style.display = '';

    }
})


homeBtn.addEventListener('click',()=>{
    location.reload();
})