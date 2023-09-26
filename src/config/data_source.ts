import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './agenciadb.sqlite',
  synchronize: true,
  entities: [],
  subscribers: [],
  migrations: []
})
