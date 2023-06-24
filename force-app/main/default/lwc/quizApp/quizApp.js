import { LightningElement } from "lwc";

export default class QuizApp extends LightningElement {
  quizQuestions = [
    {
      id: "Q1",
      question: "Which of the following is not a template loop?",
      answers: {
        a: "for:each",
        b: "iterator",
        c: "map loop"
      },
      correctAnswer: "c"
    },
    {
      id: "Q2",
      question: "Which of the following is not a LWC component file?",
      answers: {
        a: ".svg",
        b: ".apex",
        c: ".js"
      },
      correctAnswer: "b"
    },
    {
      id: "Q3",
      question: "Which of the following is not a template directive?",
      answers: {
        a: "for:each",
        b: "if:true",
        c: "@track"
      },
      correctAnswer: "c"
    }
  ];
  //to store the selected the questions and answers
  selected = {};
  correctAnswers = 0; //to show correct answers
  isSubmitted = false;
  //radio button change handler
  changeHandler(event) {
    // const name = event.target.name;
    // const value = event.target.value;
    // Below is short hand notation for above two lines
    const { name, value } = event.target;
    this.selected = { ...this.selected, [name]: value };
    console.log(this.selected);
  }
  //form submit handler
  submitHandler(event) {
    event.preventDefault();

    let correct = this.quizQuestions.filter((item) => {
      return this.selected[item.id] === item.correctAnswer;
    });
    this.correctAnswers = correct.length;
    this.isSubmitted = true;
  }
  //reset the form
  resetHandler() {
    this.selected = {};
    this.correctAnswers = 0;
    this.isSubmitted = false;
  }
  //to get all the selected or not
  get allSelected() {
    return !(Object.keys(this.selected).length === this.quizQuestions.length);
  }

  //apply dymanic style for shwoing messgae on submit
  get isScoredFull() {
    return `slds-text-align_center slds-text-heading_medium ${
      this.quizQuestions.length === this.correctAnswers
        ? "slds-text-color_success"
        : "slds-text-color_error"
    }`;
  }
}
