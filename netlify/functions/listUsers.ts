import type { Handler } from "@netlify/functions";
import admin from "./firebaseAdmin";

const handler: Handler = async () => {
  try {
    const listUsers = await admin.auth().listUsers();
    return {
      statusCode: 200,
      body: JSON.stringify(
        listUsers.users.map(user => ({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          disabled: user.disabled,
        }))
      ),
    };
  } catch (error) {
    console.error("Error listing users:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to list users" }),
    };
  }
};

export { handler };
