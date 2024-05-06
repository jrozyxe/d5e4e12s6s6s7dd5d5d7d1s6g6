const products = [
    {
      name: '2024 Video',
      image: 'https://jrozyxe.github.io/d5e4e12s6s6s7dd5d5d7d1s6g6/i/2024/2024_videos.png',
      url: '2024_collection.php',
    },
    {
      name: '2023 Video',
      image: 'https://jrozyxe.github.io/d5e4e12s6s6s7dd5d5d7d1s6g6/i/2024/2023_videos.png',
      url: '2023_collection.php',
    },
    {
      name: '2022 Video',
      image: 'https://jrozyxe.github.io/d5e4e12s6s6s7dd5d5d7d1s6g6/i/2024/2022_videos.png',
      url: '2022_collection.php',
    },
    {
      name: '2021 Video',
      image: 'https://jrozyxe.github.io/d5e4e12s6s6s7dd5d5d7d1s6g6/i/2024/2021_videos.png',
      url: '2021_collection.php',
    },
    {
      name: '2020 Video',
      image: 'https://jrozyxe.github.io/d5e4e12s6s6s7dd5d5d7d1s6g6/i/2024/2020_videos.png',
      url: '2020_collection.php',
    },
  ];

  const productsWrapper = document.getElementById('products-wrapper');
  const productElements = [];
  products.forEach((product) => {
    const productElement = createProductElement(product);
    productElements.push(productElement);
    productsWrapper.appendChild(productElement);
  });
  function createProductElement(product) {
    const productElement = document.createElement('div');
    productElement.className = 'gap-2';
    productElement.innerHTML = `<div
    class="justify-content-center">
    <a href="${product.url}">
    <img 
    src="${product.image}" 
    alt="${product.name}"
    class="img-fluid" >
    </a>
  </div>`;
    return productElement;
  }



