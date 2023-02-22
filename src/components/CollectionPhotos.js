import React, {useEffect, useState} from 'react';
import { getCollectionById, RandomPhoto } from '../api/unsplashApi';
import styles from "./CollectionPhotos.module.css"
import ButtonLink from "./UI/ButtonLink";
import { Button } from '@mui/material';

function CollectionPhotos() {
    const [id, setId] = useState('');
    const [collection, setCollection] = useState(null);
    const [photo, setPhoto] = useState(null);

    useEffect(() => {
        RandomPhoto().then((data) => setPhoto(data))
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = await getCollectionById(id);
        setCollection(data);
        setPhoto(null)
    };

    return (
        <div>
            <ButtonLink to="/" variant="contained" >
                Home
            </ButtonLink>
            <form onSubmit={handleSubmit}>
                <label>
                    Collection ID:
                    <input type="number" min="1" value={id} onChange={(event) => setId(event.target.value)} />
                </label>
                <Button color="primary" type="submit">Get collection</Button>
            </form>



            {photo && (
                <div>
                    <h2>Random photo collection</h2>
                    <img src={photo[0].urls.small} alt={photo[0].alt_description} />
                </div>
            )}
            {collection && (
                <div className={styles.photoGrid} >
                    {collection.map((photo) => (
                        <div key={photo.id}>
                            <h2>{photo.alt_description}</h2>
                            <p>Author: {photo.user.username}</p>
                            <img  src={photo.urls.small} alt={photo.description} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CollectionPhotos;
