import admin from "../../../utils/firebaseAdmin";

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id;
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: "Missing user id" });
  }

  try {
    const user = await admin.auth().getUser(id);

    const updatedUser = await admin.auth().updateUser(id, {
      disabled: !user.disabled,
    });

    return { success: true, user: updatedUser };
  } catch (err: any) {
    throw createError({ statusCode: 500, statusMessage: err.message });
  }
});