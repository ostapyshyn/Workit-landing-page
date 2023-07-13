import workit from './assets/workit.svg'
import facebook from './assets/Facebook.svg'
import user from './assets/user.png'
import twitter from './assets/Twitter.svg'
import workit_white from './assets/workit_white.svg'
import instagram from './assets/Instagram.svg'
import './App.css'

function App() {
  return (
    <main>
      <header>
        <div className="top_header">
          <img src={workit_white} alt="logo" />
          <p className="header_logo">Apply for access</p>
        </div>

        <h1>Data tailored to your needs.</h1>
        <button className="btn_apply">Learn more</button>
      </header>

      <div className={'actions'}>
        <div className={'action_block'}>
          <h2 className="action_title">Actionable insights</h2>
          <p className={'about'}>
            Optimize your products, improve customer satisfaction and stay ahead of the competition
            with our product data analytics.
          </p>
        </div>
        <div className={'action_block'}>
          <h2 className="action_title">Data-driven decisions</h2>
          <p className={'about'}>
            Make data-driven decisions with our product data analytics. Our AI-generated reports
            help you unlock insights hidden in your product data.
          </p>
        </div>
        <div>
          <h2 className="action_title">Always affordable</h2>
          <p className={'about'}>
            Always affordable pricing that scales with your business. Get top-quality product data
            analytics services without hidden costs or unexpected fees.
          </p>
        </div>
      </div>
      <div className="review">
        <div className="review_image">
          <img src={user} alt="user" />
        </div>
        <div className="review_text">
          <h3 className="review_title">Be the first to test</h3>
          <p className="review_description">
            Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a
            beta tester for our app and kickstart your company. Apply for access below and I’ll be
            in touch to schedule a call.
          </p>
          <button className="btn_apply">Apply for access</button>
        </div>
      </div>

      <footer className="footer">
        <div className="logo">
          <img src={workit} alt="logo" />
        </div>
        <div className="social_icons">
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={instagram} alt="instagram" />
        </div>
      </footer>
    </main>
  )
}

export default App
