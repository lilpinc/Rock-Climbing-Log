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
          <p ref={(el) => hiddenElementsRef.current.push(el)} className="hidden"> Keep a record of your climbing accomplishments to track your progress and keep tabs on the climbs you've topped!</p>
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
          <p ref={(el) => hiddenElementsRef.current.push(el)} className="hidden"> Record your daily workouts i.e. running, lifting, swimming, climbing, cycling, etc. </p>
        </div>
      </article>
    </ div>
  )
}