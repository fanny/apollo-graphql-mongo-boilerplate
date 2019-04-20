const books = [
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton'
    },
    {
        title: 'I kill giants',
        author: 'Fanny vieira'
    },
]

const resolvers = {
    books: () => books,
}

export default resolvers;