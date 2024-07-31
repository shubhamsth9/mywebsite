import './App.css'
import BgAnimation from './components/BgAnimation'
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Footer from './components/Footer'
import LineBreak from './components/LineBreak';

function App() {
  const careerList = [
    {title : "Salesforce Developer",
     company : "Tata Consultancy Services, Pune",
     duration : "Jul'23 - Present",
     description : [
      "Bhaiya hum hain salesforce developer at tcs currently, bole to apex lwc admin",
      "Apex Classes, Triggers, Test Classes \n- Reports and Dashboards",
      "User and data security management using permission sets, public groups, sharing rules etc"
     ]
    },
    {title : "Web Developer",
     company : "Octalancer",
     duration : "Jul'22 - Dec'22",
     description : [
      "cofounderjeet",
      "grapik designing",
      "content writing"
     ]
    }
  ]
  const internshipList = [
    {title : "Web developer",
     company : "Alphalake",
     duration : "May'22 - Jul'22",
     description : ["HTML, CSS, Javascript", "details to be added"]
    },
    {title : "UI/UX Designer",
     company : "Food By Choice",
     duration : "Mar'22 - May'22",
     description : ["UI UX Figma Wireframes prototypes"]
    }
  ]


  return(
      <div className='app-content'>
        <header className='app-header'>
          <h1>Namaste 🙏 </h1>
        </header>
        <AboutMe />
        <LineBreak/>
        <Experience title={"Career Trajectory"} experienceList={careerList}/>
        <LineBreak/>
        <Experience title={"Some Internships"} experienceList={internshipList} />
        <LineBreak/>
        <Footer />
      </div>
  )
}

export default App;