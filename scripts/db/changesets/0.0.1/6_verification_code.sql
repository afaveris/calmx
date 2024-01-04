--liquibase formatted sql
--changeset sowa:6

CREATE TABLE verification_code (
    id SERIAL PRIMARY KEY,
    user_id SERIAL NOT NULL,
    code UUID NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
    CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(id)
);
