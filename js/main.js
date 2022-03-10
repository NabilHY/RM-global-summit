const closeButton = document.getElementById('close-btn');
const openButton = document.getElementById('open-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const menuItems = document.querySelectorAll('.menu-item a');

function openNavbar() {
  mobileMenu.style.display = 'block';
}

function closeNavbar() {
  mobileMenu.style.display = 'none';
}

closeButton.addEventListener('click', closeNavbar);
openButton.addEventListener('click', openNavbar);

menuItems.forEach((elem) => {
  elem.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });
});

// speaker section

const speakerData = [
  {
    name: 'Florentino Perez',
    title: 'President of Real Madrid',
    description: 'President of Real Madrid Chairman of The Super League and Chairman of Grupo ACS',
    imgURL: 'Icons/speakers/Florentino_perez.jpg',
    imgAlt: 'florentino Perez picture',
  },
  {
    name: 'Zinedine Zidane',
    title: 'French former football player',
    description: 'Popularly known as Zizou, He is the current coach of Real Madrid and is one of the most successful coaches in the world',
    imgURL: 'Icons/speakers/Zinedine-Zidane.jpg',
    imgAlt: 'zineddine zidane picture',
  },
  {
    name: 'Marcelo Vieira',
    title: 'Brazilian footballer',
    description: 'Known as Marcelo, he plays as a left-back and is the captain of Spanish club Real Madrid.',
    imgURL: 'Icons/speakers/marcelo.png',
    imgAlt: 'Marcelo Vieira picture',
  },
  {
    name: 'Ronaldo Luís Nazário de Lima',
    title: 'Brazilian business professional',
    description: 'He was known as the best player in the world in 2002 before signing for Real Madrid where he scored 104 goals in 177 appearances.',
    imgURL: 'Icons/speakers/ronaldo.jpg',
    imgAlt: 'ronaldo picture',
  },
  {
    name: 'Sergio Ramos',
    title: 'Spanish footballer',
    description: 'Sergio Ramos García Real Madrid player, He is widely regarded as one of the greatest defenders of all time.',
    imgURL: 'Icons/speakers/ramos.jpg',
    imgAlt: 'sergio ramos picture',
  },
  {
    name: 'Rafael Benítez',
    title: 'Spanish football manager',
    description: 'Rafael Benítez started coaching staff in Real Madrid at the age of 26, and he is assistant manager for the senior team.',
    imgURL: 'Icons/speakers/rafabeni.jpg',
    imgAlt: 'florentino Perez picture',
  },
];

const generateSpeakers = (speaker) => {
  const speakerCard = document.createElement('div');
  const speakerImg = document.createElement('div');
  const speakerDescription = document.createElement('div');
  const speakerBg = document.createElement('img');
  const speakerPic = document.createElement('img');
  const speakerName = document.createElement('h5');
  const speakerTitle = document.createElement('h6');
  const secondRule = document.createElement('hr');
  const speakerPar = document.createElement('p');
  speakerImg.appendChild(speakerBg);
  speakerImg.appendChild(speakerPic);
  speakerDescription.appendChild(speakerName);
  speakerDescription.appendChild(speakerTitle);
  speakerDescription.appendChild(secondRule);
  speakerDescription.appendChild(speakerPar);
  speakerCard.appendChild(speakerImg);
  speakerCard.appendChild(speakerDescription);
  speakerCard.className = 'speaker-card';
  speakerImg.className = 'speaker-image';
  speakerBg.className = 'speaker-bg';
  speakerPic.className = 'speaker-pic';
  speakerBg.setAttribute('alt', 'picture background');
  speakerDescription.className = 'speaker-description';
  secondRule.className = 'second-rule';
  document.querySelector('.speakers-container').appendChild(speakerCard);
  speakerName.innerHTML = speaker.name;
  speakerTitle.innerText = speaker.title;
  speakerPar.innerText = speaker.description;
  speakerBg.src = 'images/istockphoto-879657138-170667a.jpg';
  speakerPic.src = speaker.imgURL;
  speakerImg.alt = speaker.imgAlt;
};

speakerData.map((speaker, index) => {
  if (window.innerWidth <= 767) {
    if (index < 2) {
      generateSpeakers(speaker);
    }
  } else {
    generateSpeakers(speaker);
  }
  return speaker;
});

const openMore = () => {
  speakerData.map((speaker, index) => {
    if (index >= 2) generateSpeakers(speaker);
    return speaker;
  });
};
const moreButton = document.querySelector('.collapse-menu');
function removeMore() {
  moreButton.style.display = 'none';
}

moreButton.addEventListener('click', openMore);
moreButton.addEventListener('click', removeMore);

const anchbtn = () => {
  window.location.href = 'https://www.realmadrid.com/en/tour-bernabeu';
};

const butn = document.getElementById('butn');
const btn = document.getElementById('btn');
butn.addEventListener('click', anchbtn);
btn.addEventListener('click', anchbtn);
