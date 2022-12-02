import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
	// SELECT * FROM COURSES LIMIT 1
	const firstCourse = await prisma.courses.findFirst()
	console.log(firstCourse)
	// SELECT * FROM COUSER ORDER BY ID DESC LIMIT 1
	const lastCourse = await prisma.courses.findFirst({ take: -1 })
	console.log(lastCourse)
}

main()
