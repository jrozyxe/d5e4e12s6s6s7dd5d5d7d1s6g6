const subcollectionotwo = [
    {
      name: '2022 Offense',
      image: 'https://jrozyxe.github.io/d5e4e12s6s6s7dd5d5d7d1s6g6/i/offense_banner.png',
      url:'2022_offense.php',
    },
    {
      name: '2022 Defense',
      image: 'https://jrozyxe.github.io/d5e4e12s6s6s7dd5d5d7d1s6g6/i/defense_banner.png',
      url:'2022_defense.php',
    },
    {
      name: '2022 Special Teams',
      image: 'https://jrozyxe.github.io/d5e4e12s6s6s7dd5d5d7d1s6g6/i/specialteams_banner.png',
      url:'2022_specialteams.php',
    },
  ];
  
  const subcollectionWrappertwo = document.getElementById('sub-collection-three');
  const subcollectiontwoElements = [];
  subcollectionotwo.forEach((subvideotwo) => {
    const subcollectiontwoElement = createProductElement(subvideotwo);
    subcollectiontwoElements.push(subcollectiontwoElement);
    subcollectionWrappertwo.appendChild(subcollectiontwoElement);
  });
  function createProductElement(subvideotwo) {
    const subcollectiontwoElement = document.createElement('div');
    subcollectiontwoElement.className = 'gap-2';
    subcollectiontwoElement.innerHTML = `<div
    class="justify-content-center">
    <a href="${subvideotwo.url}">
    <img 
    src="${subvideotwo.image}" 
    alt="${subvideotwo.name}"
    class="img-fluid" >
    </a>
  </div>`;
    return subcollectiontwoElement;
  }