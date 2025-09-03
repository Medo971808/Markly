import type { Handler } from "@netlify/functions";
import admin from "./firebaseAdmin";

const handler: Handler = async (event) => {
    try {
        const { id } = event.queryStringParameters || {};

        if (!id) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "User ID is required" }),
            };
        }

        const userRecord = await admin.auth().getUser(id);

        await admin.auth().updateUser(id, { disabled: !userRecord.disabled });

        return {
            statusCode: 200,
            body: JSON.stringify({
                uid: id,
                disabled: !userRecord.disabled,
            }),
        };
    } catch (error) {
        console.error("Error toggling user disabled:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Failed to toggle user disabled" }),
        };
    }
};

export { handler };
