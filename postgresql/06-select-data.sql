SELECT
  t1.code AS code,
  t1.name AS name,
  t1.wikipedia_link AS "wikipediaLink",
  t1.area AS area,
  t1.population AS population,
  t1.countries_number AS "countriesNumber"
FROM continent t1;

SELECT
  t1.id AS id,
  t1.name AS name,
  t1.wikipedia_link AS "wikipediaLink",
  t2.id AS "countryId",
  t2.name AS "countryName",
  t2.wikipedia_link AS "countryWikipediaLink"
FROM continent t1
JOIN country t2 ON t2.continent_id = t1.id

SELECT
  t1.id AS id,
  t1.name AS name,
  t1.wikipedia_link AS "wikipediaLink",
  t1.iso_numeric AS "isoNumeric",
  t1.iso_alpha2 AS "isoAlpha2",
  t1.iso_alpha3 AS "isoAlpha3",
  t1.flag AS flag,
  t2.id AS "continentId",
  t2.name AS "continentName",
  t2.wikipedia_link AS "continentWikipediaLink"
FROM country t1
JOIN continent t2 ON t2.id = t1.continent_id

SELECT
  t1.id AS id,
  t1.name AS name,
  t1.wikipedia_link AS "wikipediaLink",
  t2.id AS "countryId",
  t2.name AS "countryName",
  t2.wikipedia_link AS "countryWikipediaLink",
  t3.id AS "continentId",
  t3.name AS "continentName",
  t3.wikipedia_link AS "continentWikipediaLink"
FROM city t1
JOIN country t2 ON t2.id = t1.country_id
JOIN continent t3 ON t3.id = t2.continent_id;

SELECT
  t1.id AS id,
  t1.name AS name,
  t1.birth_date AS "birthDate",
  t1.wikipedia_link AS "wikipediaLink",
  t2.name AS city,
  t3.name AS country,
  t4.name AS continent
FROM person t1
JOIN city t2 ON t2.id = t1.birth_city_id
JOIN country t3 ON t3.id = t2.country_id
JOIN continent t4 ON t4.id = t3.continent_id;

SELECT
  t2.name AS name,
  t2.release_date AS "releaseDate",
  t3.name AS person
FROM media_person t1
JOIN media t2 ON t2.id = t1.media_id
JOIN person t3 ON t3.id = t1.person_id
ORDER BY
  t2.name ASC,
  t2.release_date ASC,
  t3.name ASC;

SELECT
  t2.id AS id,
  t2.name AS name,
  t2.name_original AS "nameOriginal",
  t2.wikipedia_link AS "wikipediaLink",
  t2.release_date AS "releaseDate",
  t2.domestic AS domestic,
  t2.international AS international,
  t2.worldwide AS worldwide,
  t2.budget AS budget,
  t2.spectators_france AS "spectatorsFrance",
  t3.name AS "personName"
FROM media_person t1
JOIN media t2 ON t2.id = t1.media_id
JOIN person t3 ON t3.id = t1.person_id

