
export default function Post(props) {
    return(
        <div className='post'>
            <p className="author">{props.author}</p>
            <p className="text">{props.body}</p>
        </div>
    )
}