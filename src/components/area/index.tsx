import { useEffect, useState, FormEvent } from "react";
import { Alert, Alertloading, Container, Gallery, UploadingForm } from "./style";
import {getAll, insert, deletePhoto} from '../../services/photos'
import {Photo} from '../../types/Photo'
import { PhotoItem } from "../PhotoItem";


export function Area(){
    const [upLoading, setUpLoading] = useState(false)
    const [loading, setLoading] = useState(false)
    const [photos, setPhotos] = useState<Photo[]>([])

    useEffect(()=>{
        getPhotos()
    },[])

    const getPhotos = async() => {
        setLoading(true)
        setPhotos(await getAll())
        setLoading(false)
    }

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const file = formData.get('image') as File

        if(file && file.size > 0){
            setUpLoading(true)
            let result = await insert(file)
            setUpLoading(false)
            if(result instanceof Error){
                alert(`${result.name} - ${result.message}`)
            }else{
                let newPhotoList = [...photos]
                newPhotoList.push(result)
                setPhotos(newPhotoList)
            }
        }
    }
    
    const handleDeleteImage = async(name:string) => {
     await deletePhoto(name)
     getPhotos()
    }
    

    return(
        <Container>
            <UploadingForm method="POST" onSubmit={handleFormSubmit} >
                <label htmlFor="image">Selecionar Arquivo</label>
                <input type="file" name="image" id="image"/>
                <input type="submit" value="Enviar" />
                {upLoading && "Enviando..."}
            </UploadingForm>


            {loading && <Alertloading>
                <h1>Carregando...</h1>
            </Alertloading>            
            }

            {!loading && photos.length > 0 &&
            <Gallery>
                {photos.map((item, index)=>(
                <PhotoItem key={index} url={item.url} name={item.name} onDelete={handleDeleteImage}/>
                ))}
            </Gallery>
            }
    
            {!loading && photos.length == 0 &&
            <Alert>
                <h1>Não há fotos cadastradas...</h1>
            </Alert>
            }
        </Container>

    )
}