import { router } from "./trpc";
import { publicProcedure } from "./trpc";
import {z} from "zod"
import { createHTTPServer } from '@trpc/server/adapters/standalone';
const  producttype = z.object(
  {
    productname: z.string(),
    cost : z.number(),
    productcategory: z.string(),
    productdescription : z.string(),
    productWarrenty : z.number(),

  }
)
const appRouter = router({
      CreateProduct: publicProcedure
          .input(producttype)
          .mutation(async ()=> {
            // db code 
              return{
                id:"1",
              }
          })

  

});

const server = createHTTPServer({
  router: appRouter,
});
 
server.listen(3000);

export type AppRouter = typeof appRouter;