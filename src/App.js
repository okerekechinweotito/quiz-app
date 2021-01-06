import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "How many hearts does an octopus have",
      answerOptions: [
        { answerText: "3", isCorrect: true },
        { answerText: "5", isCorrect: false },
        { answerText: "1", isCorrect: false },
        { answerText: "2", isCorrect: false },
      ],
    },
    {
      questionText: "Which is the smallest country in the world",
      answerOptions: [
        { answerText: "Uganda", isCorrect: false },
        { answerText: "Vatican City", isCorrect: true },
        { answerText: "Iceland", isCorrect: false },
        { answerText: "Norway", isCorrect: false },
      ],
    },
    {
      questionText: "What are baby rabbits called",
      answerOptions: [
        { answerText: "Kittens", isCorrect: true },
        { answerText: "Rabbies", isCorrect: false },
        { answerText: "Puppy", isCorrect: false },
        { answerText: "Rabbons", isCorrect: false },
      ],
    },
    {
      questionText: "In which year did Nigeria become a republic?",
      answerOptions: [
        { answerText: "1960", isCorrect: false },
        { answerText: "1999", isCorrect: false },
        { answerText: "1971", isCorrect: false },
        { answerText: "1963", isCorrect: true },
      ],
    },
    {
      questionText: "What is a group of lions called?",
      answerOptions: [
        { answerText: "Troop of Lions", isCorrect: false },
        { answerText: "Shard of Lions", isCorrect: false },
        { answerText: "Cub of Lions", isCorrect: false },
        { answerText: "Pride of Lions", isCorrect: true },
      ],
    },
    {
      questionText: "What is the largest country in the world?",
      answerOptions: [
        { answerText: "USA", isCorrect: false },
        { answerText: "China", isCorrect: false },
        { answerText: "Russia", isCorrect: true },
        { answerText: "India", isCorrect: false },
      ],
    },
    {
      questionText: "Which country is also known as the Netherlands?",
      answerOptions: [
        { answerText: "Norway", isCorrect: false },
        { answerText: "Holland", isCorrect: true },
        { answerText: "Estonia", isCorrect: false },
        { answerText: "Spain", isCorrect: false },
      ],
    },
    {
      questionText: "What body of water separates Saudi arabia from africa",
      answerOptions: [
        { answerText: "Lake Chad", isCorrect: false },
        { answerText: "River Niger", isCorrect: false },
        { answerText: "Pacific Ocean", isCorrect: false },
        { answerText: "Red Sea", isCorrect: true },
      ],
    },
    {
      questionText: "What is the Capital City of spain?",
      answerOptions: [
        { answerText: "Barcelona", isCorrect: false },
        { answerText: "Madrid", isCorrect: true },
        { answerText: "Seville", isCorrect: false },
        { answerText: "Valencia", isCorrect: false },
      ],
    },
    {
      questionText: "Which Planet is nearest to Earth?",
      answerOptions: [
        { answerText: "Venus", isCorrect: true },
        { answerText: "Mercury", isCorrect: false },
        { answerText: "Mars", isCorrect: false },
        { answerText: "Jupitar", isCorrect: false },
      ],
    },
    {
      questionText: "The wire inside an electric bulb is known as what ?",
      answerOptions: [
        { answerText: "Filament", isCorrect: true },
        { answerText: "Power cord", isCorrect: false },
        { answerText: "Red line", isCorrect: false },
        { answerText: "Electrolyte", isCorrect: false },
      ],
    },
    {
      questionText: "Earth is located in which galaxy?",
      answerOptions: [
        { answerText: "Andromeda", isCorrect: false },
        { answerText: "Virgo A", isCorrect: false },
        { answerText: "Magellanic", isCorrect: false },
        { answerText: "Milky Way", isCorrect: true },
      ],
    },
    {
      questionText: "Which of the following best describes the Sun?",
      answerOptions: [
        { answerText: "A Star", isCorrect: true },
        { answerText: "A Planet", isCorrect: false },
        { answerText: "A hot circle", isCorrect: false },
        { answerText: "Opposite of Moon", isCorrect: false },
      ],
    },
    {
      questionText: "Which planet is known as the red planet",
      answerOptions: [
        { answerText: "Saturn", isCorrect: false },
        { answerText: "Jupiter", isCorrect: false },
        { answerText: "Mercury", isCorrect: false },
        { answerText: "Mars", isCorrect: true },
      ],
    },
    {
      questionText: "Which of the following animals is bigger than a Dinosaur",
      answerOptions: [
        { answerText: "Blue Whale", isCorrect: true },
        { answerText: "Elephant", isCorrect: false },
        { answerText: "Giraffe", isCorrect: false },
        { answerText: "Hippopotamus", isCorrect: false },
      ],
    },
    {
      questionText: "The study of fossils is called?",
      answerOptions: [
        { answerText: "Fosiltolongy", isCorrect: false },
        { answerText: "Paleontology", isCorrect: true },
        { answerText: "Dynasty", isCorrect: false },
        { answerText: "Botany", isCorrect: false },
      ],
    },
    {
      questionText: "Enchiladas originated in which country?",
      answerOptions: [
        { answerText: "Mexico", isCorrect: true },
        { answerText: "Italy", isCorrect: false },
        { answerText: "Spain", isCorrect: false },
        { answerText: "Russia", isCorrect: false },
      ],
    },
    {
      questionText: "Which type of animal is a Barramundi?",
      answerOptions: [
        { answerText: "insect", isCorrect: false },
        { answerText: "bird", isCorrect: false },
        { answerText: "mammal", isCorrect: false },
        { answerText: "fish", isCorrect: true },
      ],
    },
    {
      questionText: "Which of the following geological eras came first?",
      answerOptions: [
        { answerText: "Dinozoic", isCorrect: false },
        { answerText: "Cenozoic", isCorrect: false },
        { answerText: "Mesozoic", isCorrect: false },
        { answerText: "Paleozoic", isCorrect: true },
      ],
    },
    {
      questionText: "Which flower is meant to symbolize beauty?",
      answerOptions: [
        { answerText: "SunFlower", isCorrect: false },
        { answerText: "Calla Lily", isCorrect: true },
        { answerText: "Rose FLower", isCorrect: false },
        { answerText: "Hibiscus FLower", isCorrect: false },
      ],
    },
    {
      questionText: "Which of the following best describes Rain water?",
      answerOptions: [
        { answerText: "Slightly Acidic", isCorrect: true },
        { answerText: "Alkaline", isCorrect: false },
        { answerText: "Slightly Alkaline", isCorrect: false },
        { answerText: "Highly Acidic", isCorrect: false },
      ],
    },
    {
      questionText: "Catalonia is a region of which country?",
      answerOptions: [
        { answerText: "Italy", isCorrect: false },
        { answerText: "Holland", isCorrect: false },
        { answerText: "France", isCorrect: false },
        { answerText: "Spain", isCorrect: true },
      ],
    },
    {
      questionText: "Sofia is the Capital of which country?",
      answerOptions: [
        { answerText: "Siberia", isCorrect: false },
        { answerText: "Luxembourg", isCorrect: false },
        { answerText: "Algeria", isCorrect: false },
        { answerText: "Bulgeria", isCorrect: true },
      ],
    },
    {
      questionText: "How many Bones are there in the human body?",
      answerOptions: [
        { answerText: "201", isCorrect: false },
        { answerText: "206", isCorrect: true },
        { answerText: "214", isCorrect: false },
        { answerText: "194", isCorrect: false },
      ],
    },
    {
      questionText:
        "Okereke is the creator of this Quiz App. Which of the following is his Birthday",
      answerOptions: [
        { answerText: "26th February", isCorrect: true },
        { answerText: "24th February", isCorrect: false },
        { answerText: "16th February", isCorrect: false },
        { answerText: "28th February", isCorrect: false },
      ],
    },
    {
      questionText:
        "Okereke is the creator of this Quiz app. Can you guess his age?",
      answerOptions: [
        { answerText: "23 years", isCorrect: false },
        { answerText: "22 years", isCorrect: false },
        { answerText: "21 years", isCorrect: false },
        { answerText: "20 years", isCorrect: true },
      ],
    },
    {
      questionText: "Umuahia is Located in Enugu State ",
      answerOptions: [
        { answerText: "True", isCorrect: false },
        { answerText: "False", isCorrect: true },
      ],
    },
    {
      questionText: "A lion's roar can be heard up to eight kilometres away ",
      answerOptions: [
        { answerText: "True", isCorrect: true },
        { answerText: "False", isCorrect: false },
      ],
    },
    {
      questionText: "Monaco is the smallest country in the world ",
      answerOptions: [
        { answerText: "True", isCorrect: false },
        { answerText: "False", isCorrect: true },
      ],
    },
    {
      questionText:
        "Serena Williams has one more singles tennis Grand Slam titles than sister Venus ",
      answerOptions: [
        { answerText: "True", isCorrect: true },
        { answerText: "False", isCorrect: false },
      ],
    },
    {
      questionText: "There are five different blood groups  ",
      answerOptions: [
        { answerText: "True", isCorrect: false },
        { answerText: "False", isCorrect: true },
      ],
    },
    {
      questionText: "Meryl Streep has won two Academy Awards ",
      answerOptions: [
        { answerText: "True", isCorrect: false },
        { answerText: "False", isCorrect: true },
      ],
    },
    {
      questionText:
        "The Great Wall of China is longer than the distance between London and Beijing ",
      answerOptions: [
        { answerText: "True", isCorrect: true },
        { answerText: "False", isCorrect: false },
      ],
    },
    {
      questionText: "Marrakesh is the capital of Morocco  ",
      answerOptions: [
        { answerText: "True", isCorrect: false },
        { answerText: "False", isCorrect: true },
      ],
    },
    {
      questionText: "ASOS stands for As Seen On Screen  ",
      answerOptions: [
        { answerText: "True", isCorrect: true },
        { answerText: "False", isCorrect: false },
      ],
    },
    {
      questionText:
        "There are two parts of the body that can't heal themselves  ",
      answerOptions: [
        { answerText: "True", isCorrect: false },
        { answerText: "False", isCorrect: true },
      ],
    },
    {
      questionText: "Your 'radius' bone is in your leg  ",
      answerOptions: [
        { answerText: "True", isCorrect: false },
        { answerText: "False", isCorrect: true },
      ],
    },
    {
      questionText: "Alexander Fleming discovered penicillin  ",
      answerOptions: [
        { answerText: "True", isCorrect: true },
        { answerText: "False", isCorrect: false },
      ],
    },
    {
      questionText: "Mount Kilimanjaro is the highest mountain in the world ",
      answerOptions: [
        { answerText: "True", isCorrect: false },
        { answerText: "False", isCorrect: true },
      ],
    },
    {
      questionText:
        "Nepal is the only country in the world which does not have a rectangular flag ",
      answerOptions: [
        { answerText: "True", isCorrect: true },
        { answerText: "False", isCorrect: false },
      ],
    },
    {
      questionText: "There are five different blood groups  ",
      answerOptions: [
        { answerText: "True", isCorrect: false },
        { answerText: "False", isCorrect: true },
      ],
    },
    {
      questionText: "A woman has walked on the Moon ",
      answerOptions: [
        { answerText: "True", isCorrect: false },
        { answerText: "False", isCorrect: true },
      ],
    },
    {
      questionText:
        "The mosquito has caused more human deaths than any other creature in history. ",
      answerOptions: [
        { answerText: "True", isCorrect: true },
        { answerText: "False", isCorrect: false },
      ],
    },
    {
      questionText: "Fingernails and hair continue to grow after death ",
      answerOptions: [
        { answerText: "True", isCorrect: false },
        { answerText: "False", isCorrect: true },
      ],
    },
    {
      questionText: "Corn is the most produced crop in the world. ",
      answerOptions: [
        { answerText: "True", isCorrect: true },
        { answerText: "False", isCorrect: false },
      ],
    },
    {
      questionText:
        "The Academy Awards are annually the most-watched, single telecast in the United States. ",
      answerOptions: [
        { answerText: "True", isCorrect: false },
        { answerText: "False", isCorrect: true },
      ],
    },
    {
      questionText:
        "Carl Lewis holds the record for most individual gold medals at the Olympics. ",
      answerOptions: [
        { answerText: "True", isCorrect: false },
        { answerText: "False", isCorrect: true },
      ],
    },
    {
      questionText: "The tango originated in Argentina. ",
      answerOptions: [
        { answerText: "True", isCorrect: true },
        { answerText: "False", isCorrect: false },
      ],
    },
    {
      questionText: "Spiders belong to the 'insect' class of animals ",
      answerOptions: [
        { answerText: "True", isCorrect: false },
        { answerText: "False", isCorrect: true },
      ],
    },
    {
      questionText: "A straight line measures 180 degrees. ",
      answerOptions: [
        { answerText: "True", isCorrect: true },
        { answerText: "False", isCorrect: false },
      ],
    },
    {
      questionText: "JavaScript is not case sensitive  ",
      answerOptions: [
        { answerText: "True", isCorrect: false },
        { answerText: "False", isCorrect: true },
      ],
    },
    {
      questionText: "HTML is case sensitive ",
      answerOptions: [
        { answerText: "True", isCorrect: false },
        { answerText: "False", isCorrect: true },
      ],
    },
    {
      questionText: "React.js initial release was in May 29,2013 ",
      answerOptions: [
        { answerText: "True", isCorrect: true },
        { answerText: "False", isCorrect: false },
      ],
    },
    {
      questionText:
        "According to StackOverFlow, Python is the most Dreaded language among developers ",
      answerOptions: [
        { answerText: "True", isCorrect: false },
        { answerText: "False", isCorrect: true },
      ],
    },
    {
      questionText:
        " Malbolge is considered to be one of the toughest programming languages to learn",
      answerOptions: [
        { answerText: "True", isCorrect: true },
        { answerText: "False", isCorrect: false },
      ],
    },
    {
      questionText: "Owerri is the most populous city in Nigeria  ",
      answerOptions: [
        { answerText: "True", isCorrect: false },
        { answerText: "False", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  var randomQuestion = Math.floor(Math.random() * questions.length);
  console.log(randomQuestion);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length - 51) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const playAgain = () => {
    window.location.reload();
  };

  return (
    <>
      {" "}
      <h2
        style={{
          textAlign: "center",
          marginBottom: "1em",
          marginTop: "0",
          color: " #575353",
        }}
      >
        Made by Okereke
      </h2>
      <div className="app">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length - 51}
            <button className="playAgain" onClick={playAgain}>
              Play Again >>
            </button>
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/
                {questions.length - 51}
              </div>
              <div className="question-text">
                {questions[randomQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[randomQuestion].answerOptions.map((answerOption) => (
                <button
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
