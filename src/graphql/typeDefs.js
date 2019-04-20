import BookType from './book/book.type';
import RootQuery from './root-query/root-query.type';

const SchemaDefinition = `
  schema {
    query: RootQuery
  }
`;

export default [
    BookType,
    RootQuery,
    SchemaDefinition
];