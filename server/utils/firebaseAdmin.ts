import admin from "firebase-admin";

const config = useRuntimeConfig();

if (!admin.apps.length) {
    if (config.public.firebaseProjectID) {
        admin.initializeApp({
            credential: admin.credential.cert({
                projectId: config.public.firebaseProjectID,
                clientEmail: config.public.firebaseClientEmail,
                privateKey: config.public.firebasePrivateKey
            }),
        });
    } else {
        const serviceAccount = import("../../marklyAccountKey.json");
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
        });
    }
}

export default admin;
