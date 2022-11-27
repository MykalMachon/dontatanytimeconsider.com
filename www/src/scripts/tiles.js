const wrapper = document.getElementById('tiles');

let columns = 0,
  rows = 0;

const createTile = (index) => {
  const tile = document.createElement('div');
  tile.classList.add('tile');

  setInterval(() => {
    const colors = [
      '#AAF200',
      '#00B4FF',
      '#FF00B4',
      '#FFB400',
      '#B400FF',
    ];
    tile.style.backgroundColor = colors[Math.floor(Math.random() * 5)];
  }, 100);

  return tile;
};

const createTiles = (quantity) => {
  Array.from(Array(quantity)).map((tile, index) => {
    wrapper.appendChild(createTile(index));
  });
};

const createGrid = () => {
  wrapper.innerHTML = '';

  const size = document.body.clientWidth > 800 ? 50 : 40;

  columns = Math.floor(document.body.clientWidth / size);
  rows = Math.floor(document.body.clientHeight / size);

  wrapper.style.setProperty('--columns', columns.toString());
  wrapper.style.setProperty('--rows', rows.toString());

  createTiles(columns * rows);
};

createGrid();

window.onresize = () => createGrid();