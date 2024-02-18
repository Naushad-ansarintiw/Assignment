import { PrismaClient } from '@prisma/client'

declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: any
}

let prisma;
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  // if (!global.cachedPrisma) {
  //   global.cachedPrisma = new PrismaClient().$extends(withAccelerate())
  // }
  prisma = new PrismaClient()
}

export const db = prisma