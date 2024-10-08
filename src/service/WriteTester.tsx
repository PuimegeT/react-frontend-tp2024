import { getDatabase, ref, set } from "firebase/database";
import { FirebaseApp } from "firebase/app";

export default function writeArticle(app: FirebaseApp, name: String) {
    const db = getDatabase(app);
    set(ref(db, 'articles/'), {
        name: name
    });
}
