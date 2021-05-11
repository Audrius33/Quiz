import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

let quiz = [
  {
    question: "Kuriais metais krikštatėvis buvo išleistas pirmą kartą?",
    answers: ['1993', "1852", "1662", "1972"],
    correct: 3
  },
  {
    question: "Kuris aktorius pelnė geriausią aktoriaus Oskarą už filmus „Filadelfija“ (1993) ir „Forrest Gump“ (1994)?",
    answers: ['Jonas Bulijonas', "Tomas Kukuruzas", "Tom Hanks", "Mikas plikas"],
    correct: 2
  },
  {
    question: "Kiek savarankiškų komizionų padarė Alfredas Hitchcockas savo filmuose 1927–1976 metais - 33, 35 ar 37?",
    answers: ['12', "37", "100", "2"],
    correct: 1
  },
  {
    question: "Kuris 1982 m. Filmas buvo labai gerbėjų sutiktas dėl meilės tarp jauno, tėvo neturinčio priemiesčio berniuko ir pasiklydusio, geranoriško bei namuose gyvenančio svečio iš kitos planetos vaizdavimo?",
    answers: ['IR Nežemiškas', "Gelbėtojai", "Terminatorius", "Titanikas"],
    correct: 0
  },
  {
    question: "Kuri aktorė vaidino Mary Poppins 1964 m. Filme „Mary Poppins“?",
    answers: ['Andželina joly', " Julie Andrews", "Karen Gillan", "Lucy Liu"],
    correct: 1
  }
]



function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0)

  const [showScore, setShowScore] = useState(false)

  const [score, setScore] = useState(0)

  const answerClicked = (index, correct) => {

    let answer = correct

    let question = quiz[currentQuestion]

    console.log(question)

    if (question.correct === index) {

      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < quiz.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  function reloadLocation () {
    window.location.reload()
  }


  return (
      <div className="App">
        {showScore ? (<div className="score-section">You scored {score} out of {quiz.length} <button onClick={reloadLocation}>Restart</button> </div>) : (
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1} / {quiz.length}</span>
              </div>
              <div className="question-text">{quiz[currentQuestion].question}</div>
              <div className="answer-section">
                <div className="d-flex">

                  {quiz[currentQuestion].answers.map(((answerOption, index) =>
                      <button onClick={() => answerClicked(index, quiz[currentQuestion].correct)} key={index}
                              className="">{answerOption}</button>))}
                </div>
              </div>
            </div>
        )}
      </div>
  )
}

export default App

