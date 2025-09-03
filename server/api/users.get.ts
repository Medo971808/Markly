import admin from "../utils/firebaseAdmin";

export default defineEventHandler(async () => {
  try {
    const listUsers = await admin.auth().listUsers(1000);
    return listUsers.users.map((user) => ({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      disabled: user.disabled
    }));
  } catch (error) {
    console.error("Error listing users:", error);
    throw createError({ statusCode: 500, statusMessage: "Failed to list users" });
  }
});
