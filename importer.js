async function importer(){
    const rawData = await fetch("./details.json")
    const data = await rawData.json()

    for (const elem in data){
        if (elem === 'links') continue
        
        const element = await document.querySelector(`#${elem}`)
        if(element){
        element.textContent = data[elem]}
    }
    
    const links = data.links
    if(links.length > 0){
        const linkElement = await document.querySelector('#links')
        
        for (const link of links){
            linkElement.insertAdjacentHTML('beforeend',
            `
            <li class="m-4 text-center" id="links">
            ${link.emoji} <a href="${link.link}" class="text-gray-600 underline" target="_blank">${link.text}</a>
            </li>`
            )
        }
    }


}

importer()