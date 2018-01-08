var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');


function showCountriesList(resp) {
    countriesList.empty();           
    resp.forEach(function(item) {
        var li = $('<li>');
        console.log(li);
        var section = $('<section>');
        console.log(section);
        $('<h1><span class="desc"><img src="' + item.flag + '" alt="Flag"></span><span class="title">' + item.name +'</span></h1>').appendTo(section);       
        $('<h3>Background Information:</h3>').appendTo(section);
        $('<p><span class="desc">Capital: </span><span>' + item.capital + '</span></p>').appendTo(section);
        $('<p><span class="desc">Currency: </span><span>' + item.currencies[0].code + '</span></p>').appendTo(section);
        $('<p><span class="desc">Region: </span><span>' + item.region + '</span></p>').appendTo(section);
        $('<p><span class="desc">Population: </span><span>' + item.population + '</span></p>').appendTo(section);
        section.appendTo(li);
        li.appendTo(countriesList);
    });
}



function searchCountries() {
    var countryName = $('#country-name').val();
    if(!countryName.length) countryName = 'Poland';
    $.ajax({
        dataType: "json",
        url: url + countryName,
        method: 'GET',
        data: null,
        success: showCountriesList
    });
}


$('#search').click(searchCountries);
