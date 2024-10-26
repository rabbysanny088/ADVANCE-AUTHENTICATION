import dotenv from "dotenv";
import { MailtrapClient } from "mailtrap";

dotenv.config();

const TOKEN = "2f23076469e2dd5c2ee66e5c9d1b7140";

if (!TOKEN) {
  console.error("Mailtrap token is not set in the environment variables.");
  process.exit(1);
}

export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
});

// Define the sender and recipient information
export const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Siddique",
};
