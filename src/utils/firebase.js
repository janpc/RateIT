import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, orderBy, addDoc, doc } from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL  } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDfptxqwlSEavXY2vi5PmLRooy4ZhHUPo8",
  authDomain: "rate-it-e153b.firebaseapp.com",
  projectId: "rate-it-e153b",
  storageBucket: "rate-it-e153b.appspot.com",
  messagingSenderId: "713553540090",
  appId: "1:713553540090:web:9114e6dea8ee72ec7b2a43"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

// Get a list of cities from your database
export async function get({database, order = {by: 'average_rating', type: 'desc'}}) {
  const col = collection(db, database);
  const q = query(col, orderBy(order.by, order.type));
  const snapshot = await getDocs(q);
  const list = snapshot.docs.map(doc =>({...doc.data(), id: doc.id}));
  console.log(list);
  return list;
}

export async function add({database, data}) {
  const result = await addDoc(collection(db, database), data);
  console.log(result)
}

export async function upload({file, name}) {
  var fileExt = file.name.split('.').pop();
  const storageRef = ref(storage, `/images/${name}.${fileExt}`);
  const uploadTask = await uploadBytesResumable(storageRef, file);
  const url = await getDownloadURL(uploadTask.ref)
  return url
}
