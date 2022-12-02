import { PrismaClient } from '@prisma/client'

const prismaClient = new PrismaClient()

async function main() {
	const result = await prismaClient.authors.update({
		where: {
			id: '5f9d147c-239b-4ffd-8634-42458440c917'
		},
		data: {
			books: {
				create: {
					name: 'Como ser mais produtivo'
				}
			}
		}
	})
	console.log(result)
}

main()
