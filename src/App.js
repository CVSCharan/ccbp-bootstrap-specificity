import "./App.css";

function App() {
  return (
    <div>
      <div class="profile-container p-5">
        <h1>CVS CHARAN</h1>
        <div class="">
          <p>FRONT END DEVELOPER</p>
          <div class="designation-details-container">
            <p class="designation-details mt-4">
              I am a Front-End Developer with an year of works experience across
              the product development life cycle.
            </p>
          </div>
          <div class="contact-info-container">
            <p class="contact-info mt-4">
              Send me an Email to get access to my work.
            </p>
          </div>
        </div>
      </div>
      <div class="todo-list-container">
        <h1>TodoList</h1>
        <h1 id="todayHeading">Today</h1>
        <ul>
          <li>Have a Drink</li>
          <li class="completed">Go for a walk</li>
          <li>Read a book</li>
          <li class="completed">Schedule Meeting with Alex</li>
        </ul>

        <h1>Tomorrow</h1>
        <ul>
          <li>Lister to the Video Session</li>
          <li>Read Monthly Magazine</li>
          <li>Attempt Practice questions</li>
          <li>Go for Shopping</li>
        </ul>
      </div>
      <div class="language-container">
        <h1 class="blue-text">JavaScript</h1>
        <p id="description" class="language-description">
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
