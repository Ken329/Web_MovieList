const APIPOPULAR = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const APIHIGHRATE = "https://api.themoviedb.org/3/discover/movie?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const all = document.getElementById('all');
const popular = document.getElementById('popular');
const highrate = document.getElementById('highRate');

const form = document.getElementById('form');
const search = document.getElementById('search');
const title = document.getElementById('title');

var barPopular = document.getElementById('bar_popular');
var barHigh = document.getElementById('bar_high');

getPopularMovie(APIPOPULAR);
getHighMovie(APIHIGHRATE);

async function getPopularMovie(urlPopular){
    const resPopular = await fetch(urlPopular);
    const resPopularData = await resPopular.json();

    showPopularMovie(resPopularData.results);
}
async function getHighMovie(urlHighrate){
    const resHigh = await fetch(urlHighrate);
    const resHighData = await resHigh.json();

    showHighMovie(resHighData.results);
}
async function getAllMovie(urlAll){
    const all = await fetch(urlAll)
    const allData = await all.json();

    showAllMovie(allData.results);
}
function showAllMovie(data){
    all.innerHTML = "";
    popular.innerHTML = ""
    highrate.innerHTML = ""
    barPopular.style.display = "none"
    barHigh.style.display = "none"
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
        all.appendChild(div);
    })
}
function showPopularMovie(data){
    popular.innerHTML = "";
    var count = 0;
    data.forEach((movie)=>{
        if(count <= 3){
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
            count++;
        }
    })
}
function showHighMovie(data){
    highrate.innerHTML = "";
    var count = 0;
    data.forEach((movie)=>{
        if(count <= 3){
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
            highrate.appendChild(div);
            count++;
        }
    })
}
title.addEventListener('click', function(){
    window.location.reload();
})
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const searchResult = search.value;
    if(searchResult){
        getAllMovie(SEARCHAPI + searchResult);

        searchResult = "";
    }
})
function getClassByRate(vote){
    if(vote >= 8){
        return "green";
    }else if(vote >= 5){
        return "orange";
    }else{
        return "red";
    }
}