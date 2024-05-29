import './Home.css'



export default function Home() {

  return (
    <div className='home'>
      <div className='header'>
        <h1 id="headline">Welcome to Daily Sends!</h1>
        <p>Where you can log your training workouts and climbing achievements!</p>
      </div>
      <article className="article">
        <div className="article-info">
          <h2 id="catch1">Log Your Outdoor Climbing Sends</h2>
          <p>Keep a record of your climbing accomplishments to track your progress and keep tabs on the climbs you've topped!</p>
        </div>
        <div className='pictures'>
          <img src="/pictures/ropes.jpg" alt="ropes" id="ropes" />
          <img src="/pictures/boulder.jpeg" alt="boulder" id="boulder" />
        </div>
      </article>
      <article className="article">
        <div className='pictures'>
          <img src="/pictures/ropes.jpg" alt="ropes" id="ropes" />
          <img src="/pictures/boulder.jpeg" alt="boulder" id="boulder" />
        </div>
        <div className="article-info2">
          <h2 id="catch2">Track Your Fitness Training Progress</h2>
          <p>Record your daily workouts i.e. running, lifting, swimming, climbing, cycling, etc. </p>
        </div>
      </article>
    </ div>
  )
}