export async function fetchCars(){
    const headers={
		'X-RapidAPI-Key': 'c31fd6dd32msh564dc2786bb4667p120779jsna534baf3527d',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	};
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',{
        headers:headers,
    });

    const result = response.json();

    return result;
}