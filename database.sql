--database NAME
-- react_gallery

CREATE TABLE "gallery" (
"id" SERIAL PRIMARY KEY,
"path" VARCHAR(250) NOT NULL,
"description" VARCHAR(80) NOT NULL,
"likes" INTEGER DEFAULT 0,
);

INSERT INTO "gallery"
("path", "description")
VALUES
('images/evanpiano-lrg.jpeg', '"BoyEv plays piano at the LA Standard" - @ArtSplitta (2020) Emulation'),
('images/whichway-lrg.jpeg', '"Which Way" - @ArtSplitta (2020) Emulation' ),
('images/loveissick-lrg.jpeg', '"Love Is Sick" - @ArtSplitta (2020) Emulation' ),
('images/moonman-lrg.jpeg', '"MoonMan" - @ArtSplitta (2020) Emulation'),
('images/harriet-lrg.jpeg', '"Lake Harriet 64" - @ArtSplitta (2020) Emulation '),
('images/mplssky-lrg.jpeg', '"Minneapolis" - @ArtSplitta (2020) Emulation '),
('images/windowthrough-lrg.jpeg', '"Window Through Time - Hollywood Forever" - @ArtSplitta (2020) Emulation ' ),
('images/sbmount-lrg.jpeg', '"Rattle Snake Canyon State Park, Santa Barbara" - @ArtSplitta (2020) Emulation ' ),
('images/eureka-lrg.jpeg', '"Maritime" - Eureka California - @ArtSplitta (2020) Emulation ' );