<p align="center">
  <img src=".github/logo512.png" width="200" />
</p>

<h1 align="center">
  Workfloway - Backend
</h1>

<p align="center">A REST API for Workfloway App. </p>

<p align="center">
  <img src="https://img.shields.io/github/last-commit/gabrieosl/workfloway-node?color=067bc2" />
  <img src="https://img.shields.io/github/license/gabrieosl/workfloway-node?color=067bc2" />
  <img src="https://img.shields.io/github/issues/gabrieosl/workfloway-node?color=067bc2" />
  <img src="https://img.shields.io/github/repo-size/gabrieosl/workfloway-node?color=067bc2" />
  <img src="https://img.shields.io/github/languages/top/gabrieosl/workfloway-node?color=067bc2" />
  <img src="https://img.shields.io/codefactor/grade/github/gabrieosl/workfloway-node?color=067bc2" />
</p>

<p align="center">
  <a href="#-about">About</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-run-it-yourself">Getting started</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-reste-à-faire-todo">TODO</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-contributing">Contributing</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<p align="center">
  <a href="#" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

# 👨🏻‍💻 About

This API provides everything needed to manage workflows, products, observations and every resource needed for Workfloway.

You can find the responsive web client [here](https://github.com/gabrieosl/workfloway-react).

# 🚀 Technologies

## Infra

- **HTTP**: Express
- **SQL DB**: Postgres
- **NoSQL DB**: Mongo

## Architecture

- **Domains**: Observations, Selections, Subjects, Users, Workflows
- **Auth**: Bearer Token

## Services

- **CI/CD**: [buddy.works](buddy.works)
- **Error monitoring**: [sentry.io](sentry.io)

## Dependencies

- **ORM**: TypeORM
- **Injection**: tsyringe
- **Security**: Cors, Helmet, Limit-rate

# ⚙️ Run it yourself

If you are using Insomnia, you can simply import `insomnia.json` into it or click on `Run in Insomnia` button at the top of this file.

## Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com) _(Recommended)_ or Postgres + Mongo instances

## Clone the project and access the folder

```bash
$ git clone https://github.com/gabrieosl/workfloway-node.git && cd workfloway-node
```

## Follow these steps

```bash
# Install the dependencies
$ yarn

# Copy '.env.example' as '.env' and fill environment variables according to your settings
$ cp .env.example .env

# Create an instance of postgreSQL using docker
$ docker run --name workfloway-postgres -e POSTGRES_USER=docker -e POSTGRES_DB=workfloway -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

# Create an instance of mongoDB using docker
$ docker run --name workfloway-mongodb -p 27017:27017 -d -t mongo

# Create an instance of redis using docker
$ docker run --name workfloway-redis -p 6379:6379 -d -t redis:alpine

# Copy 'ormconfig.example.json' as 'ormconfig.json' and fill the database info.
$ cp ormconfig.example.json ormconfig.json

# Run migrations
$ yarn typeorm migration:run

# Run th server
$ yarn dev:server
```

# ✔️ Reste à faire (TODO)

- [ ] Implement the possibility to specify a list of `subjectId` as a param to retrieve their data.

# 💻 Contributing

New features can always be added to this repository. If you want to contribute just fork, add or change want you want and submit a Pull request.

# 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<br />

Made with ❤️ by Gabriel Lima ✌🏻Check my website [gabrieosl.me](https://gabrieosl.me)
