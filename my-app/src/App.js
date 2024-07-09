//U6899-7808
//Creating a dynamic Meet the Team Page
//Styling from index.css

import Profile from './Profile.js'

//Making a title for the project and exporting it with the profile for a double Export
function Header (){
  return( 
      <div>
      <center>
      <h1>Team Data Science</h1>
     <p>Programing is the name creatiing dynamic profiles is the game</p>
     </center>
      </div>
 )
}

  //Forming the team:
const members = [
  {
    name: "Peter Parker",
    role: "Data Base Administrator",
    photoURL: "https://www.sheknows.com/wp-content/uploads/2024/07/maguire.jpg?w=1440"
  },
  {
    name: "Winnie the Pooh",
    role: "Programer",
    photoURL: "https://ih1.redbubble.net/image.1838925907.6470/fposter,small,wall_texture,product,750x1000.u2.jpg"
  }
]

export default function MeetTheTeam() {
  return(
    <div className="meettheteam">
    <Header />
    <Profile members={members}/>
    </div>
  )
}