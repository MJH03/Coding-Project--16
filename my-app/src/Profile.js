import Gallery from './Gallery.js';

export default function Profile({members}){
    return(
      <div className="profile">
        {members.map(team =>(
          <Gallery 
            name = {team.name}
            role = {team.role}
            photoURL = {team.photoURL}
          />
        ))}
  
      </div>
    )
}
