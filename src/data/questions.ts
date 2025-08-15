import gandhiImage from "@/assets/gandhi.jpg";
import indiaFlagImage from "@/assets/india-flag.jpg";
import appleLogoImage from "@/assets/apple-logo.jpg";
import einsteinImage from "@/assets/einstein.jpg";

export interface Question {
  id: number;
  type: 'logo' | 'person' | 'flag';
  question: string;
  image?: string;
  clues?: string[];
  answer: string;
  category: string;
}

// Person identification questions with clues
const personQuestions: Question[] = [
  {
    id: 1,
    type: 'person',
    question: "Can you identify this person from these clues?",
    clues: ["Born in Porbandar in 1869.", "Known as the 'Father of the Nation' in India.", "Led the Dandi Salt March."],
    answer: "Mahatma Gandhi",
    category: "Famous People"
  },
  {
    id: 2,
    type: 'person',
    question: "Can you identify this person from these clues?",
    clues: ["Born in Germany in 1879.", "Developed the theory of relativity.", "Famous equation: E = mc²."],
    answer: "Albert Einstein",
    category: "Famous People"
  },
  {
    id: 3,
    type: 'person',
    question: "Can you identify this person from these clues?",
    clues: ["First woman to win a Nobel Prize.", "Discovered polonium and radium.", "Won Nobel Prizes in Physics and Chemistry."],
    answer: "Marie Curie",
    category: "Famous People"
  },
  {
    id: 4,
    type: 'person',
    question: "Can you identify this person from these clues?",
    clues: ["Former President of India.", "Known as the 'Missile Man'.", "Authored Wings of Fire."],
    answer: "A.P.J. Abdul Kalam",
    category: "Famous People"
  },
  {
    id: 5,
    type: 'person',
    question: "Can you identify this person from these clues?",
    clues: ["Served as the 16th President of the USA.", "Led the country during the American Civil War.", "Issued the Emancipation Proclamation."],
    answer: "Abraham Lincoln",
    category: "Famous People"
  },
  {
    id: 6,
    type: 'person',
    question: "Can you identify this person from these clues?",
    clues: ["Famous South African leader.", "Spent 27 years in prison.", "First black president of South Africa."],
    answer: "Nelson Mandela",
    category: "Famous People"
  },
  {
    id: 7,
    type: 'person',
    question: "Can you identify this person from these clues?",
    clues: ["Known as the 'Iron Lady' of India.", "First woman Prime Minister of India.", "Served from 1966–1977 and again in 1980–1984."],
    answer: "Indira Gandhi",
    category: "Famous People"
  },
  {
    id: 8,
    type: 'person',
    question: "Can you identify this person from these clues?",
    clues: ["First Indian woman in space.", "Born in Karnal, Haryana.", "Died in the Columbia Space Shuttle disaster."],
    answer: "Kalpana Chawla",
    category: "Famous People"
  },
  {
    id: 9,
    type: 'person',
    question: "Can you identify this person from these clues?",
    clues: ["Famous Indian mathematician.", "Had no formal training in pure mathematics.", "Worked in Cambridge with G.H. Hardy."],
    answer: "Srinivasa Ramanujan",
    category: "Famous People"
  },
  {
    id: 10,
    type: 'person',
    question: "Can you identify this person from these clues?",
    clues: ["Legendary playback singer from India.", "Known as the 'Nightingale of India'.", "Sang over 25,000 songs in multiple languages."],
    answer: "Lata Mangeshkar",
    category: "Famous People"
  },
  {
    id: 11,
    type: 'person',
    question: "Can you identify this person from these clues?",
    clues: ["1st Prime Minister of Independent India.", "Wore a rose on his coat.", "Father of Indira Gandhi."],
    answer: "Jawaharlal Nehru",
    category: "Famous People"
  },
  {
    id: 12,
    type: 'person',
    question: "Can you identify this person from these clues?",
    clues: ["Born in Pakistan in 1997.", "Advocate for girls' education.", "Youngest Nobel Prize laureate."],
    answer: "Malala Yousafzai",
    category: "Famous People"
  },
  {
    id: 13,
    type: 'person',
    question: "Can you identify this person from these clues?",
    clues: ["Known as the 'People's Princess'.", "Married Prince Charles in 1981.", "Died in a car crash in Paris in 1997."],
    answer: "Princess Diana",
    category: "Famous People"
  },
  {
    id: 14,
    type: 'person',
    question: "Can you identify this person from these clues?",
    clues: ["Born in 1452 in Italy.", "Painter, inventor, and scientist.", "Painted the Mona Lisa."],
    answer: "Leonardo da Vinci",
    category: "Famous People"
  },
  {
    id: 15,
    type: 'person',
    question: "Can you identify this person from these clues?",
    clues: ["American tech entrepreneur.", "Co-founder of Apple Inc.", "Famous for the iPhone and iPad launches."],
    answer: "Steve Jobs",
    category: "Famous People"
  },
  {
    id: 16,
    type: 'person',
    question: "Can you identify this person from these clues?",
    clues: ["Famous cricket player from India.", "Nicknamed 'The Little Master'.", "Scored 100 international centuries."],
    answer: "Sachin Tendulkar",
    category: "Famous People"
  },
  {
    id: 17,
    type: 'person',
    question: "Can you identify this person from these clues?",
    clues: ["French military leader.", "Became Emperor in 1804.", "Famous for the Battle of Waterloo."],
    answer: "Napoleon Bonaparte",
    category: "Famous People"
  },
  {
    id: 18,
    type: 'person',
    question: "Can you identify this person from these clues?",
    clues: ["Famous British scientist.", "Developed the theory of evolution.", "Wrote On the Origin of Species."],
    answer: "Charles Darwin",
    category: "Famous People"
  },
  {
    id: 19,
    type: 'person',
    question: "Can you identify this person from these clues?",
    clues: ["First woman Prime Minister of the UK.", "Nicknamed the 'Iron Lady'.", "Served from 1979–1990."],
    answer: "Margaret Thatcher",
    category: "Famous People"
  },
  {
    id: 20,
    type: 'person',
    question: "Can you identify this person from these clues?",
    clues: ["Indian freedom fighter.", "Popular slogan: 'Give me blood, and I will give you freedom!'", "Leader of the Indian National Army."],
    answer: "Subhas Chandra Bose",
    category: "Famous People"
  },
  {
    id: 21,
    type: 'person',
    question: "Can you identify this person from these clues?",
    clues: ["American inventor.", "Held over 1,000 patents.", "Invented the electric light bulb."],
    answer: "Thomas Edison",
    category: "Famous People"
  },
  {
    id: 22,
    type: 'person',
    question: "Can you identify this person from these clues?",
    clues: ["Famous English playwright.", "Wrote Romeo and Juliet.", "Known as the Bard of Avon."],
    answer: "William Shakespeare",
    category: "Famous People"
  },
  {
    id: 23,
    type: 'person',
    question: "Can you identify this person from these clues?",
    clues: ["Indian freedom fighter from Punjab.", "Executed in 1931 at age 23.", "Known for the slogan 'Inquilab Zindabad'."],
    answer: "Bhagat Singh",
    category: "Famous People"
  },
  {
    id: 24,
    type: 'person',
    question: "Can you identify this person from these clues?",
    clues: ["Famous computer scientist.", "Helped crack the Enigma code during WWII.", "Considered the father of computer science."],
    answer: "Alan Turing",
    category: "Famous People"
  },
  {
    id: 25,
    type: 'person',
    question: "Can you identify this person from these clues?",
    clues: ["Pakistani cricketer turned politician.", "Won the 1992 Cricket World Cup.", "Former Prime Minister of Pakistan."],
    answer: "Imran Khan",
    category: "Famous People"
  },
  {
    id: 26,
    type: 'person',
    question: "Can you identify this person from these clues?",
    clues: ["Born in Florence, Italy in 1564.", "Improved the telescope for astronomical observations.", "Known as the 'Father of Modern Science'."],
    answer: "Galileo Galilei",
    category: "Famous People"
  },
  {
    id: 27,
    type: 'person',
    question: "Can you identify this person from these clues?",
    clues: ["Indian social reformer.", "Fought against the Sati system.", "Known as the 'Father of the Indian Renaissance'."],
    answer: "Raja Ram Mohan Roy",
    category: "Famous People"
  },
  {
    id: 28,
    type: 'person',
    question: "Can you identify this person from these clues?",
    clues: ["French military heroine.", "Fought in the Hundred Years' War.", "Burned at the stake at age 19."],
    answer: "Joan of Arc",
    category: "Famous People"
  },
  {
    id: 29,
    type: 'person',
    question: "Can you identify this person from these clues?",
    clues: ["Indian playback singer and composer.", "Famous for the song 'Why This Kolaveri Di'.", "Also an actor and film producer."],
    answer: "Dhanush",
    category: "Famous People"
  },
  {
    id: 30,
    type: 'person',
    question: "Can you identify this person from these clues?",
    clues: ["American businessman and philanthropist.", "Co-founder of Microsoft.", "Created the Windows operating system."],
    answer: "Bill Gates",
    category: "Famous People"
  },
  {
    id: 31,
    type: 'person',
    question: "Can you identify this person from these clues?",
    clues: ["Born in Austria in 1756.", "Classical composer of over 600 works.", "Famous for The Magic Flute."],
    answer: "Wolfgang Amadeus Mozart",
    category: "Famous People"
  },
  {
    id: 32,
    type: 'person',
    question: "Can you identify this person from these clues?",
    clues: ["Indian actress and social activist.", "First woman to win Miss World from India in 1966.", "Known for her role in Mother India."],
    answer: "Reita Faria",
    category: "Famous People"
  },
  {
    id: 33,
    type: 'person',
    question: "Can you identify this person from these clues?",
    clues: ["Famous Indian poet and Nobel laureate.", "Wrote Gitanjali.", "Composed India's national anthem."],
    answer: "Rabindranath Tagore",
    category: "Famous People"
  },
  {
    id: 34,
    type: 'person',
    question: "Can you identify this person from these clues?",
    clues: ["Famous physicist from Denmark.", "Contributed to quantum theory.", "Developed the Bohr model of the atom."],
    answer: "Niels Bohr",
    category: "Famous People"
  },
  {
    id: 35,
    type: 'person',
    question: "Can you identify this person from these clues?",
    clues: ["Born in Madurai, India in 1949.", "Indian economist and former RBI Governor.", "Won the Nobel Prize in Economics in 1998."],
    answer: "Amartya Sen",
    category: "Famous People"
  }
];

// Flag identification questions
const flagQuestions: Question[] = [
  { id: 36, type: 'flag', question: "Which country's flag is this?", image: "/india.png", answer: "India", category: "Flags" },
  { id: 37, type: 'flag', question: "Which country's flag is this?", image: "/us.png", answer: "United States", category: "Flags" },
  { id: 38, type: 'flag', question: "Which country's flag is this?", image: "/uk.png", answer: "United Kingdom", category: "Flags" },
  { id: 39, type: 'flag', question: "Which country's flag is this?", image: "/France.png", answer: "France", category: "Flags" },
  { id: 40, type: 'flag', question: "Which country's flag is this?", image: "/Japan.png", answer: "Japan", category: "Flags" },
  { id: 41, type: 'flag', question: "Which country's flag is this?", image: "/china.png", answer: "China", category: "Flags" },
  { id: 42, type: 'flag', question: "Which country's flag is this?", image: "/Australia.png", answer: "Australia", category: "Flags" },
  { id: 43, type: 'flag', question: "Which country's flag is this?", image: "/Brazil.png", answer: "Brazil", category: "Flags" },
  { id: 44, type: 'flag', question: "Which country's flag is this?", image: "/South_korea.png", answer: "South Korea", category: "Flags" },
  { id: 45, type: 'flag', question: "Which country's flag is this?", image: "/it.png", answer: "Italy", category: "Flags" },
  { id: 46, type: 'flag', question: "Which country's flag is this?", image: "/South-Africa.png", answer: "South Africa", category: "Flags" },
  { id: 47, type: 'flag', question: "Which country's flag is this?", image: "/Canada.png", answer: "Canada", category: "Flags" },
  { id: 48, type: 'flag', question: "Which country's flag is this?", image: "/germany.png", answer: "Germany", category: "Flags" },
  { id: 49, type: 'flag', question: "Which country's flag is this?", image: "/Russia.png", answer: "Russia", category: "Flags" },
  { id: 50, type: 'flag', question: "Which country's flag is this?", image: "/Spain.png", answer: "Spain", category: "Flags" },
  { id: 51, type: 'flag', question: "Which country's flag is this?", image: "/Mexico.png", answer: "Mexico", category: "Flags" },
  { id: 52, type: 'flag', question: "Which country's flag is this?", image: "/argendina.png", answer: "Argentina", category: "Flags" },
  { id: 53, type: 'flag', question: "Which country's flag is this?", image: "/New_Zealand.png", answer: "New Zealand", category: "Flags" },
  { id: 54, type: 'flag', question: "Which country's flag is this?", image: "/turkey.png", answer: "Turkey", category: "Flags" },
  { id: 55, type: 'flag', question: "Which country's flag is this?", image: "/thailand.png", answer: "Thailand", category: "Flags" },
  { id: 56, type: 'flag', question: "Which country's flag is this?", image: "/Egypt.png", answer: "Egypt", category: "Flags" },
  { id: 57, type: 'flag', question: "Which country's flag is this?", image: "/indonesia.png", answer: "Indonesia", category: "Flags" },
  { id: 58, type: 'flag', question: "Which country's flag is this?", image: "/Malaysia.png", answer: "Malaysia", category: "Flags" },
  { id: 59, type: 'flag', question: "Which country's flag is this?", image: "/Saudi_Arabia.png", answer: "Saudi Arabia", category: "Flags" },
  { id: 60, type: 'flag', question: "Which country's flag is this?", image: "/Portugal.png", answer: "Portugal", category: "Flags" },
  { id: 61, type: 'flag', question: "Which country's flag is this?", image: "/Netherlands.png", answer: "Netherlands", category: "Flags" },
  { id: 62, type: 'flag', question: "Which country's flag is this?", image: "/Greece.png", answer: "Greece", category: "Flags" },
  { id: 63, type: 'flag', question: "Which country's flag is this?", image: "/Bhutan.png", answer: "Bhutan", category: "Flags" },
  { id: 64, type: 'flag', question: "Which country's flag is this?", image: "/Eswatini.png", answer: "Eswatini", category: "Flags" },
  { id: 65, type: 'flag', question: "Which country's flag is this?", image: "/Vanuatu.png", answer: "Vanuatu", category: "Flags" },
  { id: 66, type: 'flag', question: "Which country's flag is this?", image: "/Brunei.png", answer: "Brunei", category: "Flags" },
  { id: 67, type: 'flag', question: "Which country's flag is this?", image: "/Kiribati.png", answer: "Kiribati", category: "Flags" },
  { id: 68, type: 'flag', question: "Which country's flag is this?", image: "/Suriname.png", answer: "Suriname", category: "Flags" },
  { id: 69, type: 'flag', question: "Which country's flag is this?", image: "/Seychelles.png", answer: "Seychelles", category: "Flags" },
  { id: 70, type: 'flag', question: "Which country's flag is this?", image: "/East-Timor.png", answer: "Timor-Leste", category: "Flags" }
];

// Logo identification questions
const logoQuestions: Question[] = [
  { id: 71, type: 'logo', question: "Which company's logo is this?", image: "/apple.png", answer: "Apple", category: "Logos" },
  { id: 72, type: 'logo', question: "Which company's logo is this?", image: "/Nike.png", answer: "Nike", category: "Logos" },
  { id: 73, type: 'logo', question: "Which company's logo is this?", image: "/McDonald.png", answer: "McDonald's", category: "Logos" },
  { id: 74, type: 'logo', question: "Which company's logo is this?", image: "/google.png", answer: "Google", category: "Logos" },
  { id: 75, type: 'logo', question: "Which logo is this?", image: "/askhoka.png", answer: "Ashoka Chakra", category: "Logos" },
  { id: 76, type: 'logo', question: "Which company's logo is this?", image: "/facebook.png", answer: "Facebook", category: "Logos" },
  { id: 77, type: 'logo', question: "Which company's logo is this?", image: "/amazon.png", answer: "Amazon", category: "Logos" },
  { id: 78, type: 'logo', question: "Which company's logo is this?", image: "/adidas.png", answer: "Adidas", category: "Logos" },
  { id: 79, type: 'logo', question: "Which company's logo is this?", image: "/twitter.png", answer: "Twitter", category: "Logos" },
  { id: 80, type: 'logo', question: "Which company's logo is this?", image: "/youtube.png", answer: "YouTube", category: "Logos" },
  { id: 81, type: 'logo', question: "Which company's logo is this?", image: "/Starbucks.png", answer: "Starbucks", category: "Logos" },
  { id: 82, type: 'logo', question: "Which company's logo is this?", image: "/pepsi.png", answer: "Pepsi", category: "Logos" },
  { id: 83, type: 'logo', question: "Which company's logo is this?", image: "/microsoft.png", answer: "Microsoft", category: "Logos" },
  { id: 84, type: 'logo', question: "Which company's logo is this?", image: "/instagram.png", answer: "Instagram", category: "Logos" },
  { id: 85, type: 'logo', question: "Which company's logo is this?", image: "/whatsapp.png", answer: "WhatsApp", category: "Logos" },
  { id: 86, type: 'logo', question: "Which Game's logo is this?", image: "/candycrush.png", answer: "Candy crush", category: "Logos" },
  { id: 87, type: 'logo', question: "Which company's logo is this?", image: "/KFC.png", answer: "KFC", category: "Logos" },
  { id: 88, type: 'logo', question: "Which company's logo is this?", image: "/shell.png", answer: "Shell", category: "Logos" },
  { id: 89, type: 'logo', question: "Which company's logo is this?", image: "/linkedin.png", answer: "LinkedIn", category: "Logos" },
  { id: 90, type: 'logo', question: "Which company's logo is this?", image: "/dominos pizza.png", answer: "Domino's Pizza", category: "Logos" },
  { id: 91, type: 'logo', question: "Which company's logo is this?", image: "/spacex.png", answer: "SpaceX", category: "Logos" },
  { id: 92, type: 'logo', question: "Which company's logo is this?", image: "/rolls royce.png", answer: "Rolls-Royce", category: "Logos" },
  { id: 93, type: 'logo', question: "Which company's logo is this?", image: "/tiktok.png", answer: "Tiktok", category: "Logos" },
  { id: 94, type: 'logo', question: "Which logo is this?", image: "/batman.png", answer: "Batman", category: "Logos" },
  { id: 95, type: 'logo', question: "Which logo is this?", image: "/pikachu.png", answer: "Pikachu", category: "Logos" },
  { id: 96, type: 'logo', question: "Which company's logo is this?", image: "/ferrari.png", answer: "Ferrari", category: "Logos" },
  { id: 97, type: 'logo', question: "Which company's logo is this?", image: "/maserati.png", answer: "Maserati", category: "Logos" },
  { id: 98, type: 'logo', question: "Which logo is this?", image: "/wwe.png", answer: "WWE", category: "Logos" },
  { id: 99, type: 'logo', question: "Which logo is this?", image: "/spiderman.png", answer: "Spiderman", category: "Logos" },
  { id: 100, type: 'logo', question: "Which company's logo is this?", image: "/dropbox.png", answer: "Dropbox", category: "Logos" }
];

// Shuffle function to mix categories
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Combine and shuffle all questions
export const sampleQuestions: Question[] = shuffleArray([
  ...personQuestions,
  ...flagQuestions,
  ...logoQuestions
]);

export const encouragementMessages = [
  "You're doing amazing!",
  "Keep up the great work!",
  "Fantastic job!",
  "You're so smart!",
  "Learning is fun!",
  "Great thinking!",
  "You're a star!",
  "Awesome effort!",
  "Keep learning!",
  "You rock!"
];