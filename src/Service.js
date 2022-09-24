import { getDatabase, ref, set } from "firebase/database";
export default function writeUserData(data, id) {
    const db = getDatabase();
    set(ref(db, '/' + id), {
        userData: data
    });
}