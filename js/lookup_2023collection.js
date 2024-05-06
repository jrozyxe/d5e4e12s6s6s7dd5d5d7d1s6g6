const subcollectioneone = [
    {
      name: '2023 Practice',
      image: 'https://jrozyxe.github.io/d5e4e12s6s6s7dd5d5d7d1s6g6/i/practice_banner.png',
      url:'2023_practice.php',
    },
    {
      name: '2023 Offense',
      image: 'https://jrozyxe.github.io/d5e4e12s6s6s7dd5d5d7d1s6g6/i/offense_banner.png',
      url:'2023_offense.php',
    },
    {
      name: '2023 Defense',
      image: 'https://jrozyxe.github.io/d5e4e12s6s6s7dd5d5d7d1s6g6/i/defense_banner.png',
      url:'2023_defense.php',
    },
    {
      name: '2023 Special Teams',
      image: 'https://jrozyxe.github.io/d5e4e12s6s6s7dd5d5d7d1s6g6/i/specialteams_banner.png',
      url:'2023_specialteams.php',
    },
  ];
  
  const subcollectionWrapperone = document.getElementById('sub-collection-two');
  const subcollectiononeElements = [];
  subcollectioneone.forEach((subvideoone) => {
    const subcollectiononeElement = createProductElement(subvideoone);
    subcollectiononeElements.push(subcollectiononeElement);
    subcollectionWrapperone.appendChild(subcollectiononeElement);
  });
  function createProductElement(subvideoone) {
    const subcollectiononeElement = document.createElement('div');
    subcollectiononeElement.className = 'gap-2';
    subcollectiononeElement.innerHTML = `<div
    class="justify-content-center">
    <a href="${subvideoone.url}">
    <img 
    src="${subvideoone.image}" 
    alt="${subvideoone.name}"
    class="img-fluid" >
    </a>
  </div>`;
    return subcollectiononeElement;
  }