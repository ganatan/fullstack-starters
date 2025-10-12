CREATE SEQUENCE continent_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1000 CACHE 1;
ALTER SEQUENCE continent_id_seq OWNER TO postgres;

CREATE TABLE continent (
  id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('continent_id_seq'::regclass),
  code dom_lib_short NOT NULL,
  name dom_lib NOT NULL,
  wikipedia_link dom_lib DEFAULT '',
  area dom_integer DEFAULT 0,
  population dom_bigint DEFAULT 0,
  countries_number dom_integer DEFAULT 0
);

ALTER TABLE continent
  ADD CONSTRAINT uk_continent__code UNIQUE (code);

CREATE SEQUENCE country_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1000 CACHE 1;
ALTER SEQUENCE country_id_seq OWNER TO postgres;

CREATE TABLE country (
  id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('country_id_seq'::regclass),
  name dom_lib NOT NULL,
  wikipedia_link dom_lib DEFAULT '',
  continent_id dom_fk,
  iso_numeric dom_lib NOT NULL,
  iso_alpha2 dom_lib NOT NULL,
  iso_alpha3 dom_lib NOT NULL,
  flag dom_lib
);

ALTER TABLE country
  ADD CONSTRAINT fk_country__continent_id FOREIGN KEY (continent_id) REFERENCES continent(id);

ALTER TABLE country
  ADD CONSTRAINT uk_country__iso_alpha2 UNIQUE (iso_alpha2),
  ADD CONSTRAINT uk_country__iso_alpha3 UNIQUE (iso_alpha3),
  ADD CONSTRAINT uk_country__iso_numeric UNIQUE (iso_numeric);

CREATE SEQUENCE city_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1000 CACHE 1;
ALTER SEQUENCE city_id_seq OWNER TO postgres;

CREATE TABLE city (
  id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('city_id_seq'::regclass),
  name dom_lib NOT NULL,
  wikipedia_link dom_lib NOT NULL,
  country_id dom_fk,
  capital dom_boolean DEFAULT false
);

ALTER TABLE city
  ADD CONSTRAINT fk_city__country_id FOREIGN KEY (country_id) REFERENCES country(id);

CREATE SEQUENCE person_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1000 CACHE 1;
ALTER SEQUENCE person_id_seq OWNER TO postgres;

CREATE TABLE person (
  id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('person_id_seq'::regclass),
  name dom_lib NOT NULL,
  wikipedia_link dom_lib NOT NULL,
  birth_date dom_date,
  birth_city_id dom_fk,
  death_date dom_date,
  death_city_id dom_fk,
  image dom_lib
);

ALTER TABLE person
  ADD CONSTRAINT fk_person__birth_city_id FOREIGN KEY (birth_city_id) REFERENCES city(id),
  ADD CONSTRAINT fk_person__death_city_id FOREIGN KEY (death_city_id) REFERENCES city(id);

CREATE SEQUENCE media_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1000 CACHE 1;
ALTER SEQUENCE media_id_seq OWNER TO postgres;

CREATE TABLE media (
  id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('media_id_seq'::regclass),
  name dom_lib NOT NULL,
  name_original dom_lib NOT NULL,
  wikipedia_link dom_lib DEFAULT '',
  release_date dom_date NOT NULL,
  domestic dom_numeric DEFAULT 0,
  international dom_numeric DEFAULT 0,
  worldwide dom_numeric DEFAULT 0,
  budget dom_numeric DEFAULT 0,
  spectators_france dom_bigint DEFAULT 0
);

CREATE TABLE media_person (
  media_id dom_fk NOT NULL,
  person_id dom_fk NOT NULL,
  PRIMARY KEY (media_id, person_id)
);

ALTER TABLE media_person
  ADD CONSTRAINT fk_media_person__media_id  FOREIGN KEY (media_id)  REFERENCES media(id),
  ADD CONSTRAINT fk_media_person__person_id FOREIGN KEY (person_id) REFERENCES person(id);

CREATE INDEX idx_city__country_id           ON city(country_id);
CREATE INDEX idx_person__name               ON person(name);
CREATE INDEX idx_media__release_date        ON media(release_date);
CREATE INDEX idx_media__name                ON media(name);
CREATE INDEX idx_media__worldwide           ON media(worldwide);
CREATE INDEX idx_media__budget              ON media(budget);
CREATE INDEX idx_media_person__person_id    ON media_person(person_id);
CREATE INDEX idx_media_person__media_id     ON media_person(media_id);
