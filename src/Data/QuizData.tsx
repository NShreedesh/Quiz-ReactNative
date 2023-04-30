interface IQuizData {
  question: string;
  answers: string[];
  correctAnswer: number;
}

export const quizData: IQuizData[] = [
  {
    question: 'Why did the tomato turn red?',
    answers: [
      'Because it saw the salad dressing',
      'Because it was embarrassed',
      'Because it was ripe',
      'Because it was feeling spicy',
    ],
    correctAnswer: 1,
  },

  {
    question: 'Why did the chicken cross the road?',
    answers: [
      'To get to the other side',
      "To prove he wasn't a chicken",
      'To catch the worm',
      'To get away from Colonel Sanders',
    ],
    correctAnswer: 0,
  },

  {
    question: 'Why did the golfer wear two pairs of pants?',
    answers: [
      'To look cool',
      'To keep warm',
      'To impress his caddy',
      'In case he got a hole in one',
    ],
    correctAnswer: 1,
  },

  {
    question: 'What do you get when you cross a snowman and a shark?',
    answers: [
      'Frostbite',
      'A snowflake',
      'Jaws in a top hat',
      "Nothing, it's impossible",
    ],
    correctAnswer: 3,
  },

  {
    question: 'Why did the computer go to the doctor?',
    answers: [
      'Because it had a virus',
      'Because it needed an upgrade',
      'Because it was feeling floppy',
      'Because it had a screen',
    ],
    correctAnswer: 0,
  },

  {
    question: 'Why was the math book sad?',
    answers: [
      'Because it had too many problems',
      'Because it failed its test',
      'Because it was bored',
      "Because it didn't have any friends",
    ],
    correctAnswer: 0,
  },

  {
    question: 'Why did the bicycle fall over?',
    answers: [
      'Because it was tired',
      'Because it was drunk',
      'Because it had a flat tire',
      'Because it saw a ghost',
    ],
    correctAnswer: 2,
  },

  {
    question: "What do you call a can opener that doesn't work?",
    answers: ['A can closer', "A can't opener", 'A can seal', 'A can of worms'],
    correctAnswer: 1,
  },

  {
    question:
      'What is the difference between a poorly dressed man on a trampoline and a well-dressed man on a trampoline?',
    answers: [
      'Attire',
      'Bounce',
      'Height',
      'Trick question, they are the same',
    ],
    correctAnswer: 0,
  },

  {
    question: 'Why did the tomato turn green?',
    answers: [
      'It was unripe',
      'It was envious',
      'It was sick',
      'It was an alien',
    ],
    correctAnswer: 3,
  },
];
