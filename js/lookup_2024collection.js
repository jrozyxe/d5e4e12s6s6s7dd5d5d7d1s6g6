  const subcollectionvideos = [
    {
      name: '2024 Practice',
      image: 'https://jrozyxe.github.io/d5e4e12s6s6s7dd5d5d7d1s6g6/i/practice_banner.png',
      url:'#',
    },
    {
      name: '2024 Offense',
      image: 'https://jrozyxe.github.io/d5e4e12s6s6s7dd5d5d7d1s6g6/i/offense_banner.png',
      url:'#',
    },
    {
      name: '2024 Defense',
      image: 'https://jrozyxe.github.io/d5e4e12s6s6s7dd5d5d7d1s6g6/i/defense_banner.png',
      url:'#',
    },
    {
      name: '2024 Special Teams',
      image: 'https://jrozyxe.github.io/d5e4e12s6s6s7dd5d5d7d1s6g6/i/specialteams_banner.png',
      url:'#',
    },
  ];
  
  const subcollectionWrapper = document.getElementById('sub-collection-one');
  const subcollectionElements = [];
  subcollectionvideos.forEach((subvideo) => {
    const subcollectionElement = createProductElement(subvideo);
    subcollectionElements.push(subcollectionElement);
    subcollectionWrapper.appendChild(subcollectionElement);
  });
  function createProductElement(subvideo) {
    const subcollectionElement = document.createElement('div');
    subcollectionElement.className = 'gap-2';
    subcollectionElement.innerHTML = `<div
    class="justify-content-center">
    <a href="${subvideo.url}">
    <img 
    src="${subvideo.image}" 
    alt="${subvideo.name}"
    class="img-fluid" >
    </a>
  </div>`;
    return subcollectionElement;
  }