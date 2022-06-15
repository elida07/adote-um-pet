import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { Pet } from '../../@types/Pet';
import { ApiService } from "../../services/ApiService";

export function useIndex() {
    const [petList, setPetList] = useState<Pet[]>([]),
        [selectedPet, setSelectedPet] = useState<Pet | null>(null),
        [email, setEmail] = useState(''),
        [price, setPrice] = useState(''),
        [message, setMessage] = useState('');

        useEffect(() => {
            ApiService.get('/pets')
                .then((response) => {
                    setPetList(response.data)
                })
        }, [petList])

        function Adoption() {
            if(selectedPet) {
                if(validateAdoption()){

                    ApiService.post('/adoption', {
                        pet_id: selectedPet.id,
                        email,
                        price
                    })
                    .then(() => {
                        setSelectedPet(null);
                        setMessage('Pet adotado com sucesso!');
                        clearFields();
                    })
                    .catch((error: AxiosError) => {
                        setMessage(error.response?.data.message);
                    });

                } else {
                    setMessage("Preencha todos os campos corretamente!")
                }
            }
        };

        function validateAdoption() {
            return email && price;
        };

        function clearFields() {
            setEmail('');
            setPrice('');
        }

    return { 
        petList, 
        selectedPet, 
        setSelectedPet,
        email,
        setEmail,
        price,
        setPrice,
        message, 
        setMessage,
        Adoption
    };
}