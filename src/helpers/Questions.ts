// type QuestionType = {
//   prompt: string;
//   optionA: string;
//   optionB: string;
//   optionC: string;
//   optionD: string;
//   answer: string;
// }[];

export const Questions = [
  {
    id: 1,
    question: 'What is my Name?',
    answers: [
      {
        text: 'John',
        correct: false,
      },
      {
        text: 'Jake',
        correct: false,
      },
      {
        text: 'Josh',
        correct: false,
      },
      {
        text: 'Godis',
        correct: true,
      },
    ],
  },

  {
    id: 2,
    question: 'Which of this is not a programming language?',
    answers: [
      {
        text: 'Python',
        correct: false,
      },
      {
        text: 'JavaScript',
        correct: false,
      },
      {
        text: 'MC-03',
        correct: true,
      },
      {
        text: 'Java',
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: 'Which of this is not a javascript framework?',
    answers: [
      {
        text: 'React',
        correct: false,
      },
      {
        text: 'Angular',
        correct: false,
      },
      {
        text: 'Vue',
        correct: false,
      },
      {
        text: 'Java',
        correct: true,
      },
    ],
  },
];

// export const Questions: QuestionType = [
//   {
//     prompt: 'What is my name?',
//     optionA: 'John',
//     optionB: 'Jake',
//     optionC: 'Josh',
//     optionD: 'Pedro',
//     answer: 'D',
//   },
//   {
//     prompt: 'Which of this is not a programming language?',
//     optionA: 'Python',
//     optionB: 'JavaScript',
//     optionC: 'MC-03',
//     optionD: 'Java',
//     answer: 'C',
//   },
//   {
//     prompt: 'Which of this is not a javascript framework?',
//     optionA: 'React',
//     optionB: 'Angular',
//     optionC: 'Vue',
//     optionD: 'Java',
//     answer: 'D',
//   },
// ];
