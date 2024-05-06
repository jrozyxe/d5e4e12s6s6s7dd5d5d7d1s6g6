const subcollectionothree = [
    {
      name: '2021 Offense',
      image: 'https://jrozyxe.github.io/d5e4e12s6s6s7dd5d5d7d1s6g6/i/offense_banner.png',
      url:'2021_offense.php',
    },
    {
      name: '2021 Defense',
      image: 'https://jrozyxe.github.io/d5e4e12s6s6s7dd5d5d7d1s6g6/i/defense_banner.png',
      url:'2021_defense.php',
    },
    {
      name: '2021 Special Teams',
      image: 'https://jrozyxe.github.io/d5e4e12s6s6s7dd5d5d7d1s6g6/i/specialteams_banner.png',
      url:'2021_specialteams.php',
    },
  ];
  
  const subcollectionWrapperthree = document.getElementById('sub-collection-four');
  const subcollectionthreeElements = [];
  subcollectionothree.forEach((subvideothree) => {
    const subcollectionthreeElement = createProductElement(subvideothree);
    subcollectionthreeElements.push(subcollectionthreeElement);
    subcollectionWrapperthree.appendChild(subcollectionthreeElement);
  });
  function createProductElement(subvideothree) {
    const subcollectionthreeElement = document.createElement('div');
    subcollectionthreeElement.className = 'gap-2';
    subcollectionthreeElement.innerHTML = `<div
    class="justify-content-center">
    <a href="${subvideothree.url}">
    <img 
    src="${subvideothree.image}" 
    alt="${subvideothree.name}"
    class="img-fluid" >
    </a>
  </div>`;
    return subcollectionthreeElement;
  }