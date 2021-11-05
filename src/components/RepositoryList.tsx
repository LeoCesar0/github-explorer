import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss"


export interface IRepository{
    name: string
    id?: number
    description: string
    html_url: string
}

export function RepositoryList(){
    const [repositories, setRepositories] = useState<IRepository[]>([])

    const getRepos = () => {
        fetch('https://api.github.com/users/LeoCesar0/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }

    useEffect(()=>{
        getRepos()
    },[])

    return (
        <section className="repository-list">
            <h1>Lista de Repositorios</h1>
            <ul>
                {repositories.map((repository)=>(
                    <RepositoryItem repository={repository} key={repository.id} />
                ))}
            </ul>
        </section>
    )
}