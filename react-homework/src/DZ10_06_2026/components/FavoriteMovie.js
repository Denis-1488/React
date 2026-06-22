function FavoriteMovie(props) {
  return (
    <div className="card">
      <img src={props.poster} alt={props.title} />

      <h2>{props.title}</h2>

      <p><b>Режиссер:</b> {props.director}</p>

      <p><b>Год выпуска:</b> {props.year}</p>

      <p><b>Студия:</b> {props.studio}</p>
    </div>
  );
}

export default FavoriteMovie;