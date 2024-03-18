import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <div id="buttonsAndImages">
        <div id="container">
          <div className="buttons">
            <Button name={"James Harden"} />
            <Button name={"Giannis Antetokounmpo"} />
            <Button name={"Stephen Curry"} />
            <Button name={"Russell Westbrook"} />
            <Button name={"Nikola Jokic"} />
          </div>
          <Star
            image="images/questionMark.png"
            alt="Question Mark"
            id="questionMark"
          />
          <Star
            image="https://cdn.nba.com/manage/2020/12/GettyImages-1189867189-scaled-e1607459557816-1536x963.jpg"
            alt="James Harden"
            id="JamesHarden"
          />

          <Star
            image="https://www.sportsnet.ca/wp-content/uploads/2023/08/Milwaukee-Bucks-forward-Giannis-Antetokounmpo-1040x572.jpg"
            alt="Giannis Antetokounmpo"
            id="GiannisAntetokounmpo"
          />
          <Star
            image="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2023/03/1440/810/Stephen-Curry2.jpg?ve=1&tl=1"
            alt="Stephen Curry"
            id="StephenCurry"
          />
          <Star
            image="https://www.ocregister.com/wp-content/uploads/2024/01/Nets-Clippers-Basketball-4.jpg?w=1080"
            alt="Russell Westbrook"
            id="RussellWestbrook"
          />
          <Star
            image="https://ca-times.brightspotcdn.com/dims4/default/9852807/2147483647/strip/true/crop/3126x2084+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F75%2F8e%2F3b42ce38351644a9f79801b58c50%2F57dd6438113e41f6b95dded0cdaa6754"
            alt="Nikola Jokic"
            id="NikolaJokic"
          />
        </div>
      </div>
    </div>
  );
}

function Button({ name }) {
  const nameWithoutSpace = name.replaceAll(" ", "");
  const handleClick = (event) => {
    if (event.target.tagName === "BUTTON") {
      console.log(nameWithoutSpace);
      const NBAstars = document.querySelectorAll(".nbaStar");
      NBAstars.forEach((star) => {
        star.style.display = "none";
      });
      const selectedNBAstar = document.getElementById(nameWithoutSpace);
      selectedNBAstar.style.display = "block";
    }
  };

  const handleBlur = (event) => {
    if (event.target.tagName === "BUTTON") {
      const NBAstars = document.querySelectorAll(".nbaStar");
      NBAstars.forEach((star) => {
        star.style.display = "none";
      });
      const questionMark = document.getElementById("questionMark");
      questionMark.style.display = "block";
    }
  };
  return (
    <div onClick={handleClick} onBlur={handleBlur}>
      <button>{name}</button>
    </div>
  );
}

function Header() {
  return (
    <>
      <h1>Welcome to my CSCI 3172 Lab6</h1>
      <h2>You can see many NBA Stars by clicking the buttons!</h2>
    </>
  );
}

function Star({ image, alt, id }) {
  return (
    <>
      <img src={image} alt={alt} id={id} className="nbaStar"></img>
    </>
  );
}

export default App;
