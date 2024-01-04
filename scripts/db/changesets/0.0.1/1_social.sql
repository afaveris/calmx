--liquibase formatted sql
--changeset sowa:1

CREATE TABLE social_networks_type (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE social_network (
    id SERIAL PRIMARY KEY,
    type_network_id SERIAL NOT NULL,
    data JSONB NOT NULL,
    CONSTRAINT fk_type_network_id FOREIGN KEY (type_network_id) REFERENCES social_networks_type(id)
);

INSERT INTO social_networks_type (name) VALUES ('facebook');
INSERT INTO social_networks_type (name) VALUES ('google');
INSERT INTO social_networks_type (name) VALUES ('twitter');
INSERT INTO social_networks_type (name) VALUES ('telegram');
