import { Button } from '@mui/material';
import {
    ListSytled,
    ItemList,
    Image,
    Info,
    Name,
    Description
} from './List.style';
import { Pet } from '../../../data/@types/Pet';
import { TextService } from '../../../data/services/TextService'

interface ListProps{
    pets: Pet[];
    onSelect: () => void;
}

export default function List(props: ListProps) {
    const maxSizeDescription = 200;

    return (
        <ListSytled>
            {props.pets.map(pet => (
                <ItemList id={pet.id} >
                    <Image src={pet.image} alt={pet.name} />
                    <Info>
                        <Name>{pet.name}</Name>
                        <Description>
                            {TextService.limitText(pet.description, maxSizeDescription)}
                        </Description>
                        <Button
                            variant={'contained'}
                            fullWidth
                            onClick={() => props.onSelect(pet)}
                        >
                            Adotar {pet.name}
                        </Button>
                    </Info>
                </ItemList>
            ))}
        </ListSytled>
    )
};