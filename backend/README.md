# Backend Documentation


## Database Access
1. The app requires a database choosing postgres as it is the most sensible

### Migration
https://documentation.red-gate.com/flyway/getting-started-with-flyway
https://pgtune.leopard.in.ua/


### User Setup
thank me later
```psql
CREATE DATABASE name;
CREATE USER backend WITH PASSWORD '...';
GRANT CONNECT ON DATABASE name TO backend;
\c games;
CREATE SCHEMA user_related;
GRANT USAGE ON SCHEMA user_related TO backend; //could also be more granular but i dont have the will

GRANT CREATE ON DATABASE db TO user; // for flayway to create schemas on db

```