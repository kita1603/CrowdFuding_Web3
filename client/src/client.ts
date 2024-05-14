import { createThirdwebClient } from "thirdweb";
import dotenv from 'dotenv';
dotenv.config();

// Replace this with your client ID string
// refer to https://portal.thirdweb.com/typescript/v5/client on how to get a client ID
const privateKey = process.env.PRIVATE_KEY;

if (!privateKey) {
  throw new Error('PRIVATE_KEY is not defined in .env');
}

export const client = createThirdwebClient({
  clientId: privateKey,
});
