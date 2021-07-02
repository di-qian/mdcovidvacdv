CREATE TABLE mdvaccinations (
	id SERIAL,
    vaccination_date DATE,
    county VARCHAR(50),
    firstdosedaily INTEGER,
    firstdosecumulative INTEGER,
	seconddosedaily INTEGER,
	seconddosecumulative INTEGER,
	singledosedaily INTEGER,
	singledosecumulative INTEGER,
	atleastonedose INTEGER,
	atleastonedosecumulative INTEGER,
	fullyvaccinated INTEGER,
	fullyvaccinatedcumulative INTEGER
);


COPY mdvaccinations(vaccination_date, county, firstdosedaily, firstdosecumulative, seconddosedaily,seconddosecumulative,singledosedaily,singledosecumulative, atleastonedose,atleastonedosecumulative,fullyvaccinated, fullyvaccinatedcumulative)
FROM 'C:\Temp\MD_COVID19_Vaccinations_by_County.csv'
DELIMITER ','
CSV HEADER;





