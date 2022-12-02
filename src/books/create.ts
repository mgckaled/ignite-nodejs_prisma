import { PrismaClient } from '@prisma/client'

const prismaClient = new PrismaClient()

async function main() {
	const result = await prismaClient.books.create({
		data: {
			name: 'Arquitetura limpa',
			author_id: '53daf077-5f7f-49c4-a8fb-2a0bec6a22d8'
		}
	})
	console.log(result)
}

main()
