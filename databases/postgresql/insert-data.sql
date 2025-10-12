INSERT INTO continent (code, name, wikipedia_link, area, population, countries_number) VALUES
('AF','Africa','Africa',30370000,1287920000,54),
('AN','Antarctica','Antarctica',14000000,4490,0),
('AS','Asia','Asia',44579000,4545133000,47),
('OC','Australia','Australia_(continent)',8600000,41261000,14),
('EU','Europe','Europe',10180000,742648000,45),
('NA','North America','North_America',24709000,587615000,23),
('SA','South America','South_America',17840000,428240000,12);

INSERT INTO country (name,wikipedia_link,iso_numeric,iso_alpha2,iso_alpha3,flag,continent_id) VALUES
('United States','United_States','840','US','USA','us.png',(SELECT id FROM continent WHERE code='NA')),
('Jersey','Jersey','832','JE','JEY','je.png',(SELECT id FROM continent WHERE code='EU')),
('Sweden','Sweden','752','SE','SWE','se.png',(SELECT id FROM continent WHERE code='EU'));

INSERT INTO city (name,wikipedia_link,capital,country_id) VALUES
('New York City','New_York_City',false,(SELECT id FROM country WHERE iso_alpha2='US')),
('Modesto','Modesto,_California',false,(SELECT id FROM country WHERE iso_alpha2='US')),
('Syracuse','Syracuse,_New_York',false,(SELECT id FROM country WHERE iso_alpha2='US')),
('Saint Helier','Saint_Helier',true,(SELECT id FROM country WHERE iso_alpha2='JE')),
('Stockholm','Stockholm',true,(SELECT id FROM country WHERE iso_alpha2='SE')),
('Fresno','Fresno,_California',false,(SELECT id FROM country WHERE iso_alpha2='US')),
('Detroit','Detroit',false,(SELECT id FROM country WHERE iso_alpha2='US'));

INSERT INTO person (name,wikipedia_link,birth_date,birth_city_id) VALUES
('Robert Downey Jr.','Robert_Downey_Jr.','1965-04-04',(SELECT id FROM city WHERE wikipedia_link='New_York_City')),
('Jeremy Renner','Jeremy_Renner','1971-01-07',(SELECT id FROM city WHERE wikipedia_link='Modesto,_California'));

INSERT INTO media (name,name_original,wikipedia_link,release_date,domestic,international,worldwide,budget,spectators_france) VALUES
('Iron Man','Iron Man','Iron_Man_(2008_film)','2008-05-02',319000000.00,264000000.00,583000000.00,140000000.00,5800000),
('The Avengers','The Avengers','The_Avengers_(2012_film)','2012-05-04',623000000.00,896000000.00,1519000000.00,220000000.00,6800000);

INSERT INTO media_person (media_id,person_id)
SELECT m.id,p.id FROM media m JOIN person p ON p.name='Robert Downey Jr.' WHERE m.name='Iron Man'
UNION ALL
SELECT m.id,p.id FROM media m JOIN person p ON p.name='Robert Downey Jr.' WHERE m.name='The Avengers'
UNION ALL
SELECT m.id,p.id FROM media m JOIN person p ON p.name='Jeremy Renner' WHERE m.name='The Avengers';
