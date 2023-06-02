import LayoutProvider from '../../components/LayoutProvider'

import './Home.css'

function Home() {
  return (
    <LayoutProvider>
      <div className="home-page-container">
        <h1>
          Hello,
        </h1>
        <p>
          Welcome to my submission of the take home assessment for the Senior Frontend Developer (Next.js / React) role at SprintFWD. Thank you very much for your time and considerations.
        </p>
        <p>
          Best,
          <br />
          Michael Chen
        </p>
      </div>
    </LayoutProvider>
  )
}

export default Home
