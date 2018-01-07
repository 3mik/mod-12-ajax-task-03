var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');


function showCountriesList(resp) {
    countriesList.empty();           
    resp.forEach(function(item) {
        var li = $('<li>');
        var section = $('<section>');
        $('<h1><span><img src="' + item.flag + '" alt="Flag"></span>' + item.name +'</h1>').appendTo(section);       
        $('<h3>Background Information:</h3>').appentTo(section);
        $('<p><span>Capital: </span>' + item.capital + '</p>').appendTo(section);
        $('<p><span>Currency: </span>' + item.currencies[0].code + '</p>').appendTo(section);
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
