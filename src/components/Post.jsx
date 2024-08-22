const names = ['Audrius', 'Andrew'];


export default function Post() {

    const choosenName = Math.random() > 0.5 ? names[0] : names[1]; 

    return(
        <div>
            <p>{choosenName}</p>
            <p>React is awesome!</p>
        </div>
    )
}