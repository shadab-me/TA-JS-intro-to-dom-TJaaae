var container = document.querySelector('.container');

got.houses.forEach(item => {
    let people = item.people
    people.forEach((item) => {
         let box = document.createElement('div');
        box.setAttribute('class', 'box');
        let img = document.createElement('img');
        img.src = item.image;
        let name = document.createElement('h2');
        name.innerText = item.name;
        let profile = document.createElement('div');
        profile.setAttribute('class', 'profile');
        profile.append(img, name);
        let des = document.createElement('h4');
        des.innerText = item.description;
        let link = document.createElement('a');
        link.innerText = 'Learn More'
        link.href = item.wikiLink;
        box.append(profile, des, link);
        container.appendChild(box);
        console.log(link)
        
     })

});

console.log(container)
