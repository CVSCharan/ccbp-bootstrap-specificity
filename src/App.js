import "./App.css";

function App() {
  return (
    <div>
      <div className="profile-container p-5">
        <h1>CVS CHARAN</h1>
        <div className="">
          <p>FRONT END DEVELOPER</p>
          <div className="designation-details-container">
            <p className="designation-details mt-4">
              I am a Front-End Developer with an year of works experience across
              the product development life cycle.
            </p>
          </div>
          <div className="contact-info-container">
            <p className="contact-info mt-4">
              Send me an Email to get access to my work.
            </p>
          </div>
        </div>
      </div>
      <div className="todo-list-container">
        <h1>TodoList</h1>
        <h1 id="todayHeading">Today</h1>
        <ul>
          <li>Have a Drink</li>
          <li className="completed">Go for a walk</li>
          <li>Read a book</li>
          <li className="completed">Schedule Meeting with Alex</li>
        </ul>

        <h1>Tomorrow</h1>
        <ul>
          <li>Lister to the Video Session</li>
          <li>Read Monthly Magazine</li>
          <li>Attempt Practice questions</li>
          <li>Go for Shopping</li>
        </ul>
      </div>
      <div className="language-container">
        <h1 className="blue-text">JavaScript</h1>
        <p id="description" className="language-description">
          JavaScript is the programming language of the Web. JavaScript adds
          interactivity to the website that engages a user.
        </p>
        <button type="button" style={{ backgroundColor: "orange" }}>
          Learn
        </button>
      </div>
    </div>
  );
}

export default App;
