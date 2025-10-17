import express from 'express';
import cors from 'cors';

import config from './config/config.js';

const app = express();

app.use(cors());

const persons = [
  { id: 1, name: 'Steven Spielberg', city: 'Cincinnati' },
  { id: 2, name: 'Ridley Scott', city: 'South Shields' },
  { id: 3, name: 'Christopher Nolan', city: 'London' },
  { id: 4, name: 'Denis Villeneuve', city: 'Bécancour' },
];

const cities = [
  { id: 1, name: 'Cincinnati' },
  { id: 2, name: 'London' },
  { id: 3, name: 'South Shields' },
  { id: 4, name: 'Bécancour' },
];

const professions = [
  { id: 1, name: 'Director' },
  { id: 2, name: 'Producer' },
  { id: 3, name: 'Screenwriter' },
  { id: 4, name: 'Editor' },
];

const works = [
  { id: 1, title: 'Jurassic Park', year: 1993 },
  { id: 2, title: 'E.T. the Extra-Terrestrial', year: 1982 },
  { id: 3, title: 'Blade Runner', year: 1982 },
  { id: 4, title: 'Gladiator', year: 2000 },
  { id: 5, title: 'Inception', year: 2010 },
  { id: 6, title: 'The Dark Knight', year: 2008 },
  { id: 7, title: 'Dune', year: 2021 },
  { id: 8, title: 'Arrival', year: 2016 },
];

const url = `http://localhost:${config.port}`;
const root = {
  endpoints: [
    {
      url: `${url}/persons`,
    },
    {
      url: `${url}/cities`,
    },
    {
      url: `${url}/professions`,
    },
    {
      url: `${url}/medias`,
    },
  ],
};

app.get('/persons', (req, res) => {
  res.json(persons);
});

app.get('/persons/count', (req, res) => {
  res.json({ count: persons.length });
});

app.get('/cities', (req, res) => {
  res.json(cities);
});

app.get('/cities/count', (req, res) => {
  res.json({ count: cities.length });
});

app.get('/professions', (req, res) => {
  res.json(professions);
});

app.get('/professions/count', (req, res) => {
  res.json({ count: professions.length });
});

app.get('/works', (req, res) => {
  res.json(works);
});

app.get('/works/count', (req, res) => {
  res.json({ count: works.length });
});

app.get('/', (req, res) => {
  res.json(root);
});

export default app;
