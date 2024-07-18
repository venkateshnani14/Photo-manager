import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore } from '../Firebase/config';
import { getStorage, ref, uploadBytes, listAll, getDownloadURL, getMetadata, deleteObject } from 'firebase/storage';
import gsap from 'gsap';
export const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const storage = projectStorage;
  useEffect(() => {
    // references
    const storageRef = ref(storage,file.name);
    uploadBytes(storageRef,file).then((snapshot) => {
        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
        console.log('uploaded file to the cloud')
        console.log("progresss:",progress)
     })
  }, [file]);

  return { progress, url, error };
}

export const getFiles = async (e) => {
    e.preventDefault();
    const link = 'gs://photo-manager-ead0f.appspot.com/'
    const collectionRef = ref(projectStorage,link);
    console.log("collectionRef",collectionRef)
    await listAll(collectionRef)
    .then((res) => {
      console.log("fetching")
      res.items.forEach(async (fileRef) => {
        const data = await getMetadata(fileRef)
        const fileName = data.name;
        console.log("metadata",fileName)
          getDownloadURL(fileRef)
          .then(async(url) => {
            console.log("downloadURL",url)
            const div = document.createElement('div');
            const img = document.createElement('img');
            const childDiv = document.createElement('div');
            const button = document.createElement('button');
            div.className = 'relative m-2 rounded-xl'
            childDiv.className = 'absolute inset-0 rounded-xl hover:cursor-pointer transition-all'
            button.className = 'bg-slate-700 text-whitesmoke outline-none bottom-0 right-0 absolute m-2 transition-all'
            button.textContent = 'Delete'
            img.className = 'rounded-lg hover:cursor-pointer h-[40vh] w-[30vw] relative'
            img.src = url;
            img.alt = "gallery_image"
            img.onclick = () => gsap.to(img,{scale:'1.2',yoyo:true,duration:1,repeat:1,zIndex:10})
            document.getElementById('imgs').appendChild(div);
            div.appendChild(img)
            div.appendChild(childDiv)
            childDiv.appendChild(button);
            button.addEventListener('click',() => {
              div.remove();
              deleteObject(fileRef);
            })
          })
      })
  })
    .catch((error) => console.error(error))
  }
