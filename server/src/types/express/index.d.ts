// // This tells TypeScript: "We're adding to the express module"
// import { UserPayload } from "../../interfaces/UserPayload"; // if you have a custom type

// declare global {
//   namespace Express {
//     // This merges into Express' Request interface
//     export interface Request {
//       userId?: string; // or number, depending on your project
//       user?: UserPayload; // optional: store decoded JWT payload
//     }
//   }
// }

export {};

declare global {
    namespace Express {
      export interface Request {
        userId?: string;               // or number, depending on your project
        // user?: UserPayload;         // optional: store decoded JWT payload
      }
    }
}


