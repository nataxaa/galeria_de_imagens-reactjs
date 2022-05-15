import { Container } from "./style"


interface itemProps{
    url: string,
    name: string,
    onDelete(name:string): void
}


export function PhotoItem<Props>({url, name, onDelete}:itemProps){
    console.log(name)
    return(
        <Container>
            <button onClick={()=>onDelete(name)}>x</button>
            <img src={url} alt={name} />
            <div className="name">{name}</div>
            
        </Container>
    )
}