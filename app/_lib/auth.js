import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

const authConfig = {
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
    ],
    callbacks : {
        authorized({auth, request}) {
            return !!auth?.user;
        },
       async signIn() {
        try {
            const existingGuest = await getGuest(user.email);

            if(!existingGuest) {
                await createGuest({
                    email: user.email,
                    fullName: user.name,
                    image: user.image,
                });
            
        } 
    }catch {
            return false
        }
        },
    },
    pages : {
        signIn: "/login",
    }

};


 export const {auth, signIn, signOut, handlers: { GET, POST } } = NextAuth(authConfig);