import { column, defineDb, defineTable } from 'astro:db';

// const User = defineTable({
//   columns: {
//     name: column.text(),
//     password: column.text(),
//   }
// })

// https://astro.build/db/config
export default defineDb({
  tables: {}
});
