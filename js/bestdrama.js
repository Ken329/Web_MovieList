const APIPOPULAR = "https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2021&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const title = document.getElementById('title')
const popular = document.getElementById('popular_main');

getPopularMovie(APIPOPULAR);

async function getPopularMovie(urlPopular){
    const resPopular = await fetch(urlPopular);
    const resPopularData = await resPopular.json();

    showPopularMovie(resPopularData.results);
}
title.addEventListener('click', function(){
    window.history.back();
})
function showPopularMovie(data){
    popular.innerHTML = "";
    data.forEach((movie)=>{
            const { poster_path, title, vote_average, overview } = movie;

            const div = document.createElement("div");
            div.classList.add("movie");
            div.innerHTML = `
            <img src="${IMGPATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h4>Overview: </h4>
                ${overview}
            </div>
            `;
            popular.appendChild(div);
    })
}
function openPage(id){
    var newApi = "";
    switch(id){
        case 'page1':
            newApi = "https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2021&api_key=04c35731a5ee918f014970082a0088b1&page=1";
            getPopularMovie(newApi);
            setButton('1');
            break;
        case 'page2':
            newApi = "https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2021&api_key=04c35731a5ee918f014970082a0088b1&page=2";
            getPopularMovie(newApi);
            setButton('2');
            break;
        case 'page3':
            newApi = "https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2021&api_key=04c35731a5ee918f014970082a0088b1&page=3";
            getPopularMovie(newApi);
            setButton('3');
            break;
        case 'page4':
            newApi = "https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2021&api_key=04c35731a5ee918f014970082a0088b1&page=4";
            getPopularMovie(newApi);
            setButton('4');
            break;
        case 'page5':
            newApi = "https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2021&api_key=04c35731a5ee918f014970082a0088b1&page=5";
            getPopularMovie(newApi);
            setButton('5');
            break;
    }
}
function setButton(id){
    var b1 = document.getElementById('page1')
    var b2 = document.getElementById('page2')
    var b3 = document.getElementById('page3')
    var b4 = document.getElementById('page4')
    var b5 = document.getElementById('page5')
    switch(id){
        case '1':
            b1.style.boxShadow = "1px 0px 16px 0px #033347";
            b2.style.boxShadow = "none";
            b3.style.boxShadow = "none";
            b4.style.boxShadow = "none";
            b5.style.boxShadow = "none";
            break;
        case '2':
            b1.style.boxShadow = "none";
            b2.style.boxShadow = "1px 0px 16px 0px #033347";
            b3.style.boxShadow = "none";
            b4.style.boxShadow = "none";
            b5.style.boxShadow = "none";
            break;
        case '3':
            b1.style.boxShadow = "none";
            b2.style.boxShadow = "none";
            b3.style.boxShadow = "1px 0px 16px 0px #033347";
            b4.style.boxShadow = "none";
            b5.style.boxShadow = "none";
            break;
        case '4':
            b1.style.boxShadow = "none";
            b2.style.boxShadow = "none";
            b3.style.boxShadow = "none";
            b4.style.boxShadow = "1px 0px 16px 0px #033347";
            b5.style.boxShadow = "none";
            break;
        case '5':
            b1.style.boxShadow = "none";
            b2.style.boxShadow = "none";
            b3.style.boxShadow = "none";
            b4.style.boxShadow = "none";
            b5.style.boxShadow = "1px 0px 16px 0px #033347";
            break;
    }
}
function getClassByRate(vote){
    if(vote >= 8){
        return "green";
    }else if(vote >= 5){
        return "orange";
    }else{
        return "red";
    }
}