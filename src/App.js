import './App.css'
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Footer from './components/Footer'

function App() {
  const careerList = [
    {title : "Salesforce Dev",
     company : "TCS",
     duration : "July'23 - Present",
     description : "Bhaiya hum hain salesforce developer at tcs currently, bole to apex lwc admin kar rele"
    },
    {title : "Web Developer",
     company : "Octalancer",
     duration : "July'22 - Dec'22",
     description : "web dev grapik design mauj masti co founder ban rele the"
    }
  ]
  const internshipList = [
    {title : "Web developer",
     company : "Alphalake",
     duration : "May'22 - July'22",
     description : "details to be added"
    },
    {title : "UI/UX Designer",
     company : "Food By Choice",
     duration : "May'22 - Mar'22",
     description : "UI UX Figma Wireframes prototypes"
    }
  ]


  return(
    <div className='App'>
      <header className='App-header'>
        <h1>Namaste 🙏 </h1>
      </header>
      <AboutMe />
      <Experience title={"Career Trajectory"} experienceList={careerList}/>
      <Experience title={"Some Internships"} experienceList={internshipList} />
      <Footer />
    </div>
  )
}

export default App;