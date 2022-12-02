import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
	const result = await prisma.courses.create({
		data: {
			duration: 400,
			name: 'Curso de ReactNative',
			description: 'Curso excelente e completo de ReactNative'
		}
	})
	console.log(result)
}

main()
