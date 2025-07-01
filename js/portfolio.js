// Загружаем работы из works.txt
fetch('works.txt')
  .then(response => response.text())
  .then(data => {
    const works = parseWorks(data);
    renderPortfolio(works);
  })
  .catch(error => console.error('Ошибка загрузки работ:', error));

// Парсим текстовый файл
function parseWorks(text) {
  return text.split('\n')
    .filter(line => line.trim() !== '')
    .map(line => {
      const [title, description, image] = line.split('|').map(part => part.trim());
      return { title, description, image: `works/${image}` };
    });
}

// Отрисовываем портфолио
function renderPortfolio(works) {
  const gallery = document.getElementById('portfolio-gallery');
  
  works.forEach((work, index) => {
    const workCard = document.createElement('div');
    workCard.className = 'work-card';
    workCard.style.setProperty('--order', index + 1);
    
    workCard.innerHTML = `
      <img src="${work.image}" alt="${work.title}">
      <h3>${work.title}</h3>
      <p>${work.description}</p>
    `;
    
    gallery.appendChild(workCard);
  });
}