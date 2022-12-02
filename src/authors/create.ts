import { PrismaClient } from '@prisma/client'

const prismaClient = new PrismaClient()

async function main() {
	const result = await prismaClient.authors.create({
		data: {
			name: 'Maik Brito',
			books: {
				create: {
					name: 'Como iniciar na programação'
				}
			}
		}
	})
	console.log(result)
}

main()
