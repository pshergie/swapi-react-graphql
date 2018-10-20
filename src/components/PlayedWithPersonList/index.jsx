import React from "react";

import PersonList from '../../components/PersonList';

const filterBySequnce = (films) => {
  let newArray = [];
  films.forEach((film, index, films) => {
    if (!index) return;
    if (film.episodeId - films[index - 1].episodeId !== 1) return;
      else if (newArray.includes(films[index - 1])) newArray.push(film)
        else newArray.push(films[index - 1], film);
  });
  return newArray;
}

const checkArrayIncludesFilm = (films, episode) => {
  for (let film of films) {
    if (film.id === episode.id) return true;
  }
  return false;
}

const filterByHumans = (films) => {
  let characterList = [];

  films.forEach((film, index) => {
    if (!index) return;
    film.characters.forEach(character => {
      if (!character.species.length) return;

      if (checkArrayIncludesFilm(character.films, film) && checkArrayIncludesFilm(character.films, films[index - 1])) {
        characterList.push(character);
      }
    })
  })
  return characterList;
};

const filterFilms = (films) => {
  const filteredFilms = filterBySequnce(films);
  if (films.length < 2 || !filteredFilms.length) return false;
    else return filterByHumans(filteredFilms);
}

const PlayedWithPersonList = ({ person }) => {
  const personList = filterFilms(person.films);
  console.log(personList);

  if (personList && personList.length > 0) {
    return (
      <div>
        <h2>Humans who played with this person in at least two consecutive movies:</h2>
        <PersonList persons={personList} />
      </div>
    );
  }
  else {
    return null;
  }
};

export default PlayedWithPersonList;
