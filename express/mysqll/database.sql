use herotrip;
drop table if exists fight;
drop table if exists hero;
drop table if exists enemy;

create table hero (
    id int auto_increment primary key,
    name varchar(40) not null,
    city varchar(40) not null,
    created_at datetime not null,
    updated_at datetime not null
);

insert into hero (name, city, created_at, updated_at) values ('Batman', 'Gothan City', now(), now());
insert into hero (name, city, created_at, updated_at) values ('Goku', 'West Capital', now(), now());

create table enemy (
    id int auto_increment primary key,
    name varchar(40) not null
);

insert into enemy (name) values ('Penguin');
insert into enemy (name) values ('Riddler');
insert into enemy (name) values ('Freeza');
insert into enemy (name) values ('Jiren');

create table fight (
    id int auto_increment primary key,
    enemy_id int,
    hero_id int,
    winner enum('hero', 'enemy'),
    description text,
    constraint fightes_fk_1 foreign key (enemy_id) references enemy(id),
    constraint fightes_fk_2 foreign key (hero_id) references hero(id)
);

insert into fight (enemy_id, hero_id, winner, description) values (3, 2, 'hero', 'Dragonball Z Freeza Saga');
insert into fight (enemy_id, hero_id, winner, description) values (3, 2, 'enemy', 'Dragon Ball Z: Resurrection F');