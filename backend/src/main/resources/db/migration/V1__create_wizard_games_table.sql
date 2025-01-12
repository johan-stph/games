CREATE TABLE IF NOT EXISTS wizard.games
(
    id            bigserial primary key not null,
    name          text                  not null,
    current_round INT                   not null,
    player_1      bigserial             not null,
    player_2      bigserial             not null,
    player_3      bigserial             not null,
    player_4      bigserial,
    player_5      bigserial,
    player_6      bigserial,
    game_state    jsonb                 not null,
    FOREIGN KEY (player_1) REFERENCES user_related.users (id),
    FOREIGN KEY (player_2) REFERENCES user_related.users (id),
    FOREIGN KEY (player_3) REFERENCES user_related.users (id),
    FOREIGN KEY (player_4) REFERENCES user_related.users (id),
    FOREIGN KEY (player_5) REFERENCES user_related.users (id),
    FOREIGN KEY (player_6) REFERENCES user_related.users (id)
);