import Card from '../Card/Card'
import style from './CardsContainer.module.css'
import { useSelector } from 'react-redux';
import { React } from 'react';

const CardsContainer = ({ dogs }) => {

    const loading = useSelector(state => state.loading);

    return (
        <div className={style.container}>
            {loading ? (<>
                {dogs.length > 0 ? (
                    <>
                        {dogs.map(dog => {
                            return <Card
                                key={dog.id}
                                id={dog.id}
                                name={dog.name}
                                breed={dog.breed}
                                image={dog.image}
                                minWeight={dog.minWeight}
                                maxWeight={dog.maxWeight}
                                temperaments={dog.temperaments}
                            />
                        })}
                    </>
                ) : (<>
                    <Card
                        key="no-info"
                        id="no-info"
                        breed="No doggy breed found"
                        image='https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_auto,q_auto:best/rockcms/2022-01/210602-doge-meme-nft-mb-1715-8afb7e.jpg'
                        minWeight="0"
                        maxWeight="0"
                        temperaments="There is no information"
                    />
                </>)}
            </>) : (<>
                <img src="/loading.gif" alt="loading img"></img>
            </>)}

        </div>
    )
}

export default CardsContainer;