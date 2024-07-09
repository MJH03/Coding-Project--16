export default function Gallery ({name, role, photoURL}){
    return (
        <div className="gallery">
                <h2>{name}</h2>
                <p>{role}</p>
                <img src={photoURL} alt={`Member ${name}`}
                />
        </div>
    )
}