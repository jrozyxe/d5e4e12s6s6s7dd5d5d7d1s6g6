const subcollectionofour = [
    {
      name: '2020 Offense',
      image: 'https://jrozyxe.github.io/d5e4e12s6s6s7dd5d5d7d1s6g6/i/offense_banner.png',
      url:'2020_offense.php',
    },
    {
      name: '2020 Defense',
      image: 'https://jrozyxe.github.io/d5e4e12s6s6s7dd5d5d7d1s6g6/i/defense_banner.png',
      url:'2020_defense.php',
    },
    {
      name: '2020 Special Teams',
      image: 'https://jrozyxe.github.io/d5e4e12s6s6s7dd5d5d7d1s6g6/i/specialteams_banner.png',
      url:'2020_specialteams.php',
    },
  ];
  
  const subcollectionWrapperfour = document.getElementById('sub-collection-five');
  const subcollectionfourElements = [];
  subcollectionofour.forEach((subvideofour) => {
    const subcollectionfourElement = createProductElement(subvideofour);
    subcollectionfourElements.push(subcollectionfourElement);
    subcollectionWrapperfour.appendChild(subcollectionfourElement);
  });
  function createProductElement(subvideofour) {
    const subcollectionfourElement = document.createElement('div');
    subcollectionfourElement.className = 'gap-2';
    subcollectionfourElement.innerHTML = `<div
    class="justify-content-center">
    <a href="${subvideofour.url}">
    <img 
    src="${subvideofour.image}" 
    alt="${subvideofour.name}"
    class="img-fluid" >
    </a>
  </div>`;
    return subcollectionfourElement;
  }