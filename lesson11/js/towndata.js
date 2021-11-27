const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(requestURL)
    .then(function (response) {
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            return response.json();
        }
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        const naturalweather = towns.filter((towns) => towns.name === 'Preston' || towns.name === 'Fish Haven' || towns.name ===  'Soda Springs');
        naturalweather.forEach(naturalweather => {
            let towninfo = document.createElement('section');
            let bioinfo = document.createElement('div');
            let h3 = document.createElement('h3');
            let h4 = document.createElement('h4');
            let founded = document.createElement('p');
            let pop = document.createElement('p');
            let rain = document.createElement('p');
            let image = document.createElement('img');

            towninfo.innerHTML = `<span class="towninfogrid></span>`;
            h3.innerHTML = `<span class="info">${naturalweather.name}</span>`;
            h4.innerHTML= `<span class="info">${naturalweather.motto}</span>`;
            founded.innerHTML= `<span class="info">Year Founded: ${naturalweather.yearFounded}</span>`;
            pop.innerHTML= `<span class="info">Population: ${naturalweather.currentPopulation}</span>`;
            rain.innerHTML= `<span class="info">Annual Rain Fall: ${naturalweather.averageRainfall}</span>`;
            image.setAttribute('src', `images/${naturalweather.photo}`);
            image.setAttribute('alt', `${naturalweather.name}`);
            

            towninfo.appendChild(bioinfo);
            bioinfo.appendChild(h3);
            bioinfo.appendChild(h4);
            bioinfo.appendChild(founded);
            bioinfo.appendChild(pop);
            bioinfo.appendChild(rain);
            towninfo.appendChild(image);

            document.querySelector('div.towns').appendChild(towninfo);
        });
    });