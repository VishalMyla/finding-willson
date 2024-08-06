import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server';
//     👆 **type-only** import
 
// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
    }),
  ],
});
 async function main() {
      const respose = await trpc.createProduct.mutate({
        productname: "Realme Buds", 
        cost : 25, 
        productcategory : "Electronics",
        productdescription : "The Project is the Earbuds from Realme ",
        productWarrenty : 5
      })
      console.log(respose); 
 }
 main();


