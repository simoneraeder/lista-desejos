
import styles from './App.module.css'
import { Card } from './components/Card/Card'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'

function App() {

  return (
   <div className={styles.app}>
    <Header/>
    <main className={styles.main}>
      <Card />
    </main>
    <Footer/>
   </div>
  )
}

export default App
