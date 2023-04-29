interface IQuizData {
  question: string;
  answers: string[];
  correctAnswer: number;
}

export const quizData: IQuizData[] = [
  {
    question: 'What is the highest waterfall in the world?',
    answers: ['Victoria Falls', 'Angel Falls', 'Iguazu Falls', 'Niagara Falls'],
    correctAnswer: 1,
  },

  {
    question: 'What is the smallest continent in the world?',
    answers: ['Asia', 'Europe', 'Australia', 'North America'],
    correctAnswer: 2,
  },

  {
    question: 'What is the largest ocean in the world?',
    answers: ['Atlantic', 'Indian', 'Pacific', 'Southern'],
    correctAnswer: 2,
  },
  {
    question: 'What is the capital city of Brazil?',
    answers: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Belo Horizonte'],
    correctAnswer: 2,
  },
  {
    question: 'What is the deepest lake in the world?',
    answers: ['Caspian Sea', 'Lake Superior', 'Lake Victoria', 'Lake Baikal'],
    correctAnswer: 3,
  },
  {
    question: 'What is the largest country in Africa by land area?',
    answers: [
      'Algeria',
      'Sudan',
      'Democratic Republic of the Congo',
      'South Africa',
    ],
    correctAnswer: 0,
  },
  {
    question: 'What is the highest mountain in South America?',
    answers: ['Aconcagua', 'Huayna Potosí', 'Nevado Sajama', 'Chimborazo'],
    correctAnswer: 0,
  },
  {
    question: 'What is the largest river in Asia?',
    answers: ['Ganges', 'Yangtze', 'Mekong', 'Nile'],
    correctAnswer: 1,
  },
  {
    question: 'What is the capital city of Japan?',
    answers: ['Tokyo', 'Kyoto', 'Osaka', 'Hiroshima'],
    correctAnswer: 0,
  },
  {
    question: 'What is the largest desert in Africa?',
    answers: ['Sahara', 'Kalahari', 'Namib', 'Libyan'],
    correctAnswer: 0,
  },
];
