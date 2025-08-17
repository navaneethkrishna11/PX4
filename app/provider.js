// 'use client'
// import { useUser } from '@clerk/nextjs'
// import React, { useEffect } from 'react'
// import { db } from '@/configs/db'
// import { eq } from 'drizzle-orm';
// import { Users } from '@/configs/schema'

// function Provider({children}) {

//     const {user} = useUser();

//     useEffect(()=>{
//         user && isNewUser();
//     },[user])
//     const isNewUser=async ()=>{
//         const result =await db.select().from(Users).where(eq(Users.email, user.user?.primaryEmailAddress?.emailAddress));

//         if (!result[0]){
//              await db.insert(Users).values({
//                 email: user?.primaryEmailAddress?.emailAddress,
//                 name: user?.fullName,
//                 image: user?.imageUrl,
                
//             }); 
//         }
//     }
//   return (
//     <div>
//     {children}
//     </div>
//   )
// }

// export default Provider
