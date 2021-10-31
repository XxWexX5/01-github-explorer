import RepositoryItem from './RepositoryItem';

import '../styles/repositories.scss';
import { useEffect, useState } from 'react';

type Repository = {
    id: number;
    name: string;
    description: string;
    html_url: string;
}

function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then( response => response.json() )
            .then( data => setRepositories( data ) )
    }, [])

    return(
        <>
            <section className="repository-list">
                <h1 className="title">Lista de repositórios</h1>

                <ul className="list-items">
                    {
                        repositories.map( repository => {
                            return (
                                <RepositoryItem 
                                    key={`repository-${ repository.id }`} 
                                    repository={ repository } 
                                />
                            )
                        })
                    }
                </ul>
            </section>
        </>
    );
}

export default RepositoryList;