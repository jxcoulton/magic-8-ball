const answer = document.getElementById("answer");
const magicBall = document.getElementById("eightball");
const question = document.getElementById("question");

const options = [
  {
    yes: [
      "It is certain.",
      "It is decidedly so.",
      "Without a doubt.",
      "Yes definitely.",
      "You may rely on it.",
      "As I see it, yes.",
      "Most likely.",
      "Outlook good.",
      "Yes.",
      "Signs point to yes.",
    ],
  },
  {
    maybe: [
      "Reply hazy, try again.",
      "Ask again later.",
      "Better not tell you now.",
      "Cannot predict now.",
      "Concentrate and ask again later.",
    ],
  },
  {
    no: [
      "Don't count on it.",
      "My reply is no.",
      "My sources say no.",
      "Outlook not so good.",
      "Very doubtful.",
    ],
  },
];

let resType = {};

function handleChange() {
  if (question.value !== "") {
    resType = options[Math.floor(Math.random() * options.length)];
    console.log(resType);
    return resType;
  } else {
    answer.innerHTML = "";
  }
}

function handleShake() {
  if (question.value !== "") {
    let response = Object.values(resType)[0];
    answer.classList.add("fade-in");
    answer.innerHTML = response[Math.floor(Math.random() * response.length)];
  }
}

function handleReset() {
  answer.classList.remove("fade-in");
  answer.innerHTML = "";
}

question.addEventListener("change", handleChange);
magicBall.addEventListener("mouseup", handleShake);
magicBall.addEventListener("mousedown", handleReset);
