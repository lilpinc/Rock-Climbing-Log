import './Home.css'
import { useEffect, useRef } from 'react';


export default function Home() {

  const hiddenElementsRef = useRef([]);

  useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
          console.log(entries)
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('show');
                  // observer.unobserve(entry.target)
              } else {
                  entry.target.classList.remove('show');
              }
          })
      });

      hiddenElementsRef.current.forEach((el) => observer.observe(el));
  }, [hiddenElementsRef.current]);


  return (
    <div className='home'>
      <div className='header hidden' ref={(el) => hiddenElementsRef.current.push(el)}>
        <h1 id="headline">Welcome to Daily Sends!</h1>
        <p>Where you can log your training workouts and climbing achievements!</p>
      </div>
      <article className="article">
        <div className="article-info">
          <h2 id="catch1" ref={(el) => hiddenElementsRef.current.push(el)} className="hidden"> Log Your Outdoor Climbing Sends</h2>
          <p ref={(el) => hiddenElementsRef.current.push(el)} className="hidden"> Keep a record of your climbing accomplishments to track your progress and remember all the cool routes you've sent! Trad, lead, top-rope, bouldering, you name it. Just don't forget to leave a good comment to look back at later for when you want to resend something or realize just how much time you've spent going outside to feel up rocks. No judgement, we all are right there with you. You also have the option to update or delete a climb from your log if you don't like the climb anymore or, you know...unsend ;P</p>
          <button className='startbtn'>Add a Climb</button>
        </div>
        <div className='pictures hidden' ref={(el) => hiddenElementsRef.current.push(el)}>
          <img src="/pictures/ropes.jpg" alt="ropes" id="ropes" className='pics'/>
          <img src="/pictures/boulder2.jpeg" alt="boulder" id="boulder" className='pics'/>
        </div>
      </article>
      <article className="article">
        <div className='pictures pictures2 hidden' ref={(el) => hiddenElementsRef.current.push(el)}>
          <img src="/pictures/coen-van-de-broek-OFyh9TpMyM8-unsplash.jpg" alt="cycle" id="cycle" className='pics' />
          <img src="/pictures/mariah-krafft-KaxVB5xh4Nw-unsplash.jpg" alt="lifting" id="lift" className='pics' />
        </div>
        <div className="article-info2">
          <h2 id="catch2" ref={(el) => hiddenElementsRef.current.push(el)} className="hidden"> Track Your Fitness Training Progress</h2>
          <p ref={(el) => hiddenElementsRef.current.push(el)} className="hidden"> I know we all want to climb 24/7 but sometimes thats just not realistic. Might as well do some other activities in the meantime! Record your daily workouts i.e. running, lifting, swimming, climbing, cycling, etc. Yes, I know its not as cool as climbing but hey, it's only going to make you more fit and ready to send hard things later. Record all your workouts so you can keep track of your training and see improvements in your fitness off the wall! Remember to leave comments on how movements felt, what weight you lifted, how fast you went, and don't forget HR during, after, and at rest to monitor recovery.</p>
          <button className='startbtn'>Add a Training Session</button>
        </div>
      </article>
    </ div>
  )
}