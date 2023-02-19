const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCYiGq8XF7YQD00x7wAd62Zg&part=snippet%2Cid&order=date&maxResults=10'
//API FERNANFLOO : 'https://youtube-v31.p.rapidapi.com/search?channelId=UCV4xOVpbcV8SdueDCOxLXtQ&part=snippet%2Cid&order=date&maxResults=10'
const content = null || document.getElementById('content');
const content_title = null || document.getElementById('content-title-channel');
const name_title = null || document.getElementById('name-title')
const image_channel = null || document.getElementById('image-channel')


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8b7e88b8c1msh5b1eff3849266a4p194488jsn31818c16d1d3',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetData(urlApi){
    const response = await fetch(urlApi, options)
    const data = await response.json()
    return data
}

(async () =>{
    try {
        const videos = await fetData(API)

        let name = `
        ${videos.items.map(video =>`
        <span class="block xl:inline" id="name-title">${video.snippet.channelTitle}</span>
        `).slice(0,1)}
        `;
        name_title.innerHTML = name

        let title = `
        ${videos.items.map(video =>`
        <h2 class="text-2xl font-extrabold tracking-tight text-gray-900" id="content-title-channel">Videos subidos a youtube de ${video.snippet.channelTitle}</h2>
        `).slice(0,1)}
        `;
        content_title.innerHTML = title

        let view = `
        ${videos.items.map(video =>`
        <div class="group relative">
        <div
        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
        <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
        </h3>
        </div>
        </div>`
        ).slice(0,4).join('')}
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error)
        alert('Ocurrio un error, lo Sentimos')
    }
})(); 