import 'dotenv/config'
import { drizzle } from 'drizzle-orm/libsql'
import * as schema from './schema'

const dbFileName = process.env.DB_FILE_NAME || 'file:local.db'

export const db = drizzle(dbFileName, {
	schema: schema,
})
