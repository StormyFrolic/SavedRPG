"use client"
import Image from "next/image";
import { useState } from "react";

export default function CharacterCreator() {

    const characterCount = 2
    const shirtCount = 3
    const pantsCount = 3

    const [currentShirt, setCurrentShirt] = useState(1)
    const [currentPants, setCurrentPants] = useState(1)
    const [currentCharacter, setCurrentCharacter] = useState(1)


    const updateCharacter = () => {

        if (currentCharacter + 1 > characterCount) {
            setCurrentCharacter(1)
        } else {
            setCurrentCharacter(currentCharacter + 1)
        }
    }

    const updateShirt = () => {

        if (currentShirt + 1 > shirtCount) {
            setCurrentShirt(1)
        } else {
            setCurrentShirt(currentShirt + 1)
        }
    }

    const updatePants = () => {

        if (currentPants + 1 > pantsCount) {
            setCurrentPants(1)
        } else {
            setCurrentPants(currentPants + 1)
        }
    }




    return (
        <div>
            <div className="my-10 bg-white-500 h-60 relative inline-block">


                <Image className="block" src={`/character${currentCharacter}.webp`}
                    alt="character"
                    width={256}
                    height={256}

                />

                <Image className="absolute top-0 left-0" src={`/character${currentCharacter}shirt${currentShirt}.webp`}
                    alt="shirt"
                    width={256}
                    height={256}
                />

                <Image className="absolute top-0 left-0" src={`/character${currentCharacter}pants${currentPants}.webp`}
                    alt="pants"
                    width={256}
                    height={256}
                />

            </div>

            <div className="flex gap-3">
                <button onClick={() => updateCharacter()}>Next Character</button>
                <button onClick={() => updateShirt()}>Next Shirt</button>
                <button onClick={() => updatePants()}>Next Pants</button>
            </div>

        </div>
    );
}
