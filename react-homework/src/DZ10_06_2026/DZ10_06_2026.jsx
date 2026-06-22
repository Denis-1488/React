import "./DZ10_06_2026.css";

import FavoriteMovie from "./components/FavoriteMovie";
import PersonalPage from "./components/PersonalPage";

function DZ10_06_2026() {
  return (
    <>
      <h1>Задание 1. Любимый фильм</h1>

      <FavoriteMovie
        title="Интерстеллар"
        director="Кристофер Нолан"
        year="2014"
        studio="Paramount Pictures"
        poster="https://upload.wikimedia.org/wikipedia/ru/c/c3/Interstellar_2014.jpg"
      />

      <h1>Задание 2. Персональная страница</h1>

      <PersonalPage
        name="Иван Иванов"
        phone="+380991234567"
        email="ivan@gmail.com"
        city="Харьков"
        experience="2 года"
        skills="HTML, CSS, JavaScript, React"
        photo="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
      />
    </>
  );
}

export default DZ10_06_2026;