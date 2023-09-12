//--> Taking The object Key and The value :-
const ApiDetails = {

    key: '0467eeb4364459ce3f0e543653e43172',
    base: 'https://api.openweathermap.org/data/2.5/'
}

//--> Search For The City Name:-
function GetTheCityName() {
    const searchCity = document.getElementById('Search_City')
    searchCity.addEventListener('keypress', (e) => {

        //---> Depricated:-
        if (e.keyCode == 13) {

            GetResult(searchCity.value)
        }
    })
};

//--> Fetching The data From Server :-
function GetResult(quari) {

    fetch(`${ApiDetails.base}weather?q=${quari}&appid=${ApiDetails.key}`)
        .then(weather => {

            return weather.json()//--> convert To JSON:-
        }).then((responce) => {

            DisplayResult(responce)
        }).catch(() => window.alert('The City Not Valid '))
};

//--> Printing The results :-
function DisplayResult(weather) {

    console.log('hallow');
    //--> Set The City Name :-s
    const cityName = document.querySelector('.CityDate .city')
    cityName.innerHTML = `${weather.name},${weather.sys.country}`//--> Problem :-

    //-->Set The Date :-
    var date = new Date();
    const SetDate = document.querySelector('.CityDate .Date');
    SetDate.innerHTML = CurrentDateConverter(date);

    //-->set The Temp :-
    const Temp = document.querySelector('.wheather .temp');
    Temp.innerText = `${Math.round(weather.main.temp)}℃`;


    //--> set The Weather Type :-
    const WeatherType = document.querySelector('.wheather .wheather_type');
    WeatherType.innerHTML = weather.weather[0].main;


    //--> Set The Max and Min temp :-//
    const Max_And_Min = document.querySelector('.wheather .Max_Min_temp');
    Max_And_Min.innerText = `${Math.round(weather.main.temp_max)}℃/${Math.round(weather.main.temp_min)}℃`;
};

//---> Custom Date Builder :-
function CurrentDateConverter(d) {

    var day = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octobor', 'November', 'December'];

    var curr_Day = day[d.getDay()];//--> GetDay()--> returns The Number of Days :-
    var date = d.getDate();
    var month = month[d.getMonth()];//--> returns The Number of Current Months :-
    var Year = d.getFullYear();

    return `${curr_Day} ${date} ${month} ${Year}`;



}

//--> Call The Main Funtion :-
GetTheCityName();

