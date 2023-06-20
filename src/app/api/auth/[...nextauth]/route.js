import User from "@/models/User";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import connect from "@/utils/db";
import bcrypt from "bcryptjs";


const handler =  NextAuth({
  providers: [
  
    CredentialsProvider({
        id: "credentials",
        name: "Credentials",
        async authorize(credentials) {
          //Check if the user exists.
          await connect();
  
          try {
            const user = await User.findOne({
              email: credentials.email,
            });
  
            if (user) {
              const isPasswordCorrect = await bcrypt.compare(credentials.password,user.password);
  
              if (isPasswordCorrect) {
                return user;
              } else {
                throw new Error("Wrong Credentials!");
              }
            } else {
              throw new Error("User not found!");
            }
          } catch (err) {
            throw new Error(err);
          }
        },
      }),

      GoogleProvider({
        clientId: process.env.Google_Client_ID,
        clientSecret: process.env.Google_Client_secret,
      }),

  ],
  pages: {
    error: "/dashboard/login",
  },

})

export {handler as GET, handler as POST}