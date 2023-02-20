import React, { useState } from 'react';
import { getCollectionById } from '../api/unsplashApi';

function CollectionPhotos() {
    const [id, setId] = useState('');
    const [collection, setCollection] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = await getCollectionById(id);
        setCollection(data);
        console.log(data)
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Collection ID:
                    <input type="text" value={id} onChange={(event) => setId(event.target.value)} />
                </label>
                <button type="submit">Get collection</button>
            </form>
            {collection && (
                <div>
                    {collection.map((photo) => (
                        <div key={photo.id}>
                            <h2>{photo.alt_description}</h2>
                            <p>{photo.user.username}</p>
                            <img src={photo.urls.small} alt={photo.description} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CollectionPhotos;
