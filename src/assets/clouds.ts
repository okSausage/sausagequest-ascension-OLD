export default function summonClouds() {
  const style = document.createElement("style");
  style.innerHTML = `
    #clouds {
      padding: 100px 0;
    }
    .cloud {
      width: 200px;
      height: 60px;
      background: #fff;
      border-radius: 200px;
      position: relative;
    }
    .cloud:after,
    .cloud:before {
      content: '';
      position: absolute;
      background: #fff;
      width: 100px;
      height: 80px;
      position: absolute;
      top: -15px;
      left: 10px;
      border-radius: 100px;
      -webkit-transform: rotate(30deg);
      transform: rotate(30deg);
    }
    .cloud:after {
      width: 120px;
      height: 120px;
      top: -55px;
      left: auto;
      right: 15px;
    }
    .x1 {
      animation: moveclouds 15s linear infinite;
    }
    .x2 {
      left: 200px;
      -webkit-transform: scale(.6);
      transform: scale(.6);
      opacity: 0.6;
      animation: moveclouds 25s linear infinite;
    }
    .x3 {
      left: -240px;
      top: -100px;
      -webkit-transform: scale(.8);
      transform: scale(.8);
      opacity: 0.8;
      animation: moveclouds 20s linear infinite;
    }
    .x4 {
      left: 470px;
      top: -250px;
      -webkit-transform: scale(.75);
      transform: scale(.75);
      opacity: 0.75;
      animation: moveclouds 18s linear infinite;
    }
    .x5 {
      left: -150px;
      top: -150px;
      -webkit-transform: scale(.8);
      transform: scale(.8);
      opacity: 0.8;
      animation: moveclouds 20s linear infinite;
    }
    @keyframes moveclouds {
      0% {
        margin-left: 100%;
      }
      100% {
        margin-left: -100%;
      }
    }
  `;
  document.head.appendChild(style);

  const cloudsContainer = document.createElement("div");
  cloudsContainer.setAttribute("id", "clouds");

  const possibleValues = Array.from({ length: 5 }, (_, i) => i + 1);
  const cloudDivs = [];

  for (let count = 1; count <= 3; count++) {
    const randomIndex = Math.floor(Math.random() * possibleValues.length);
    const randomValue = possibleValues[randomIndex];
    possibleValues[randomIndex] = possibleValues[possibleValues.length - 1];
    possibleValues.pop();

    const cloudDiv = document.createElement("div");
    cloudDiv.id = `cloud${randomValue}`;
    cloudDiv.className = `cloud x${randomValue}`;
    cloudDivs.push(cloudDiv);
  }

  cloudsContainer.append(...cloudDivs);
  document.body.appendChild(cloudsContainer);
}