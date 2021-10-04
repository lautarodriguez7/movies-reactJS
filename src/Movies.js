export default function Movies(props) {
    return (<div className="movie-item-style-2">
        <img src={props.image} alt="" />
        <div className="mv-item-infor">
            <h6><a href="moviesingle.html">{props.title}</a></h6>
            <p className="rate"><i class="ion-android-star"></i><span>{props.score}</span> /10</p>
            <p className="describe">{props.children}</p>
            <p className="run-time">{props.time}<span>{props.release}</span></p>
            <p>Director: <a href="#">{props.director}</a></p>
            <p>Stars: <a href="#">{props.actors}</a></p>
        </div>
    </div>)
}