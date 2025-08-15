import gandhiImage from "@/assets/gandhi.jpg";
import indiaFlagImage from "@/assets/india-flag.jpg";
import appleLogoImage from "@/assets/apple-logo.jpg";
import einsteinImage from "@/assets/einstein.jpg";

export interface Question {
  id: number;
  type: 'leader' | 'flag' | 'logo' | 'person';
  question: string;
  image: string;
  answer: string;
  category: string;
}

export const sampleQuestions: Question[] = [
  {
    id: 1,
    type: 'leader',
    question: "Who is this famous Indian leader?",
    image: gandhiImage,
    answer: "Mahatma Gandhi",
    category: "Indian Leaders"
  },
  {
    id: 2,
    type: 'flag',
    question: "Which country does this flag belong to?",
    image: indiaFlagImage,
    answer: "India",
    category: "Flags"
  },
  {
    id: 3,
    type: 'logo',
    question: "Which company's logo is this?",
    image: appleLogoImage,
    answer: "Apple",
    category: "Company Logos"
  },
  {
    id: 4,
    type: 'person',
    question: "Who is this famous scientist?",
    image: einsteinImage,
    answer: "Albert Einstein",
    category: "World Famous People"
  }
];

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