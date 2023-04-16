# 🗃️ Database

- Type: PostgreSQL (relational)
- Host: [bit.io](https://bit.io)
- ORM: [Prisma](https://prisma.io)

## Bit.io

bit.io is a serverless postgres host. We use this instead of each developer running their own local database to avoid compatibility/version issues.

## Prisma

Prisma is a type-safe ORM (object relational mapping) which allows us to share typescript types between the front and the back end. It acts as a mediator between the database layer and server layer so that we can write typescript (javascript) instead of SQL to interact with the database.

## Important Note

Important note that when working with Prisma and bit.io, the database URL that bit.io generates needs to be modified for Prisma to connect properly:

bit.io database URL

```
postgres://[user]:[password]@db.bit.io:5432/[bit.io_username]/[db_name]
```

the `/` between `[bit.io_username]` and `[db_name]` needs to be converted to a `.` otherwise Prisma won't connect when migrating schema.

The resulting database URL should look like this:

```
postgres://[user]:[password]@db.bit.io:5432/[bit.io_username].[db_name]
```

and it should be located in the `.env` file as `DATABASE_URL`.
