// For Client Side Rendering
// "use client";

// import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

// export default function Home() {
//   return (
//     <SessionProvider>
//       <RealHome/>
//     </SessionProvider>    
//   );
// }

// function RealHome(){
//   const session = useSession();
//   return (
//     <div>
//       {session.status === "authenticated" && <button onClick={() => signOut()}>Sign Out</button>}
//       {session.status === "unauthenticated" && <button onClick={() => signIn()}>Sign In</button>}
//     </div>
//   );
// }

// For Server Side Rendering
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();

  return (
    <div>
      {JSON.stringify(session)}
    </div>
    
  );
}