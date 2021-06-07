--database NAME
-- react_gallery

CREATE TABLE "gallery" (
"id" SERIAL PRIMARY KEY,
"path" VARCHAR(250) NOT NULL,
"description" VARCHAR(80) NOT NULL,
"likes" INTEGER DEFAULT 0
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
('images/eureka-lrg.jpeg', '"Maritime" - Eureka California - @ArtSplitta (2020) Emulation ' ),
( 'images/longbeach.jpeg', '"What i left in Long Beach" - @ArtSplitta (2020)' ),
('images/electro-harm.jpeg', '"Electro-Harm" - Korg Electribe - @ArtSplitta (2021)'),
('https://i.ibb.co/hm28pLk/FD229033-2-A4-A-4-F09-90-C9-23-E0-B23-F0-FEE.jpg', '"Moon-Swirl" - @ArtSplitta (2020) Emulation' ),
('https://i.ibb.co/JdnWYfw/4057-CC28-0-E0-E-4-D21-9283-3-F8205-B27073.jpg', 'LongBeachLongLife - @ArtSplitta (2020) Emulation' ),
('https://i.ibb.co/LRzGpf6/80-F0-B071-EE43-4403-B77-E-0-C0-AF522-C913.jpg', 'Cover to an album that doesnt exist - @ArtSplitta (2020) Emulation'),
('https://i.ibb.co/Mc2txkw/5-B1905-D1-6362-4-DE2-A9-C3-3888-A40841-AF.jpg', 'ReDeath - @ArtSplitta (2020) Emulation'),
('https://i.ibb.co/fC2p74y/806-AB7-E1-BCEA-45-AA-86-BA-5-D3790-CB9-C08.jpg', 'Lost in Oregon - @ArtSplitta (2020) Emulation'),
('https://i.ibb.co/WDgwBw8/8-F61-AB2-E-A017-4815-B41-C-C2-ADFE292-AF3.jpg', 'Pollen - @ArtSplitta (2020) Emulation'),
('https://i.ibb.co/5c6cprV/FA7-C9-DBC-F8-F1-406-F-A5-F5-729687-CE8571.jpg', 'CRT- @ArtSplitta (2020) Emulation'),
('https://i.ibb.co/PGs9g3K/D9-D8-CF77-06-F0-4-EEF-B67-D-8524-F527-A6-BE.jpg', 'Sacr - @ArtSplitta (2020) Emulation'),
('https://i.ibb.co/gmNQw39/6-A613776-3-FF1-4-DD9-8273-31-B5142-F4-FC9.jpg', 'GenerateSingleCover - @ArtSplitta (2020) Emulation'),
('https://i.ibb.co/gDDGn15/74-E03-F84-13-CB-4-B32-8950-67-AA7-D98-A047.jpg', 'Muir - @ArtSplitta (2020) Emulation');
