import { PrismaClient } from '@prisma/client'

const prismaClient = new PrismaClient()

async function main() {
	const updateCourse = await prismaClient.courses.update({
		where: {
			id: 'b3dee438-ddfc-4c2d-bb4b-7c581e771048'
		},
		data: {
			duration: 300
		}
	})
	console.log(updateCourse)
}

main()
