"use client"
import Image from "next/image";
import { motion } from "motion/react"
import { useRef, useState } from "react";

export default function CharacterCreator() {

    const characterCount = 2
    const shirtCount = 3
    const pantsCount = 3

    const classRef = useRef(null)
    const nameRef = useRef(null)
    const homeRef = useRef(null)
    const [classValue, setClassValue] = useState("bow")

    const [currentShirt, setCurrentShirt] = useState(1)
    const [currentPants, setCurrentPants] = useState(1)
    const [currentCharacter, setCurrentCharacter] = useState(1)
    const [charcterName, setCharacterName] = useState("")
    const [characterClass, setCharacterClass] = useState("")
    const [characterHome, setCharacterHome] = useState("")

    var playerCharacter = {}

    const loadCharacter = () => {
        playerCharacter = JSON.parse(localStorage.getItem("playerCharacter"))
    }

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

    const updateClass = () => {
        setClassValue(classRef.current.value)
        setCharacterClass(classRef.current.id)
    }

    const updateName = () => {
        setCharacterName(nameRef.current.value)
    }

    const updateHome = () => {
        setCharacterHome(homeRef.current.id)
    }



    return (
        <div>
            <div className="my-10 bg-white-500 h-60 relative inline-block">

                <motion.div
                    initial={{ x: -30, y: 0 }}
                    animate={{ x: 0, y: 0 }}
                    key={`${currentCharacter}character`}
                    layout
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="" >

                    <Image className="block" src={`/character${currentCharacter}.webp`}
                        alt="character"
                        width={256}
                        height={256}

                    />
                </motion.div>

                <motion.div
                    initial={{ x: -30, y: -256 }}
                    animate={{ x: 0, y: -256 }}
                    key={`${currentShirt}shirt`}
                    layout
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="" >
                    <Image className="absolute top-0 left-0" src={`/character${currentCharacter}shirt${currentShirt}.webp`}
                        alt="shirt"
                        width={256}
                        height={256}
                    />
                </motion.div>

                <motion.div
                    initial={{ x: -30, y: -256 }}
                    animate={{ x: 0, y: -256 }}
                    key={`${currentPants}Pants`}
                    layout
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="" >
                    <Image className="absolute top-0 left-0" src={`/character${currentCharacter}pants${currentPants}.webp`}
                        alt="pants"
                        width={256}
                        height={256}
                    />
                </motion.div>

            </div>

            <div className="flex gap-3">
                <button className="outline p-2" onClick={() => updateCharacter()}>Next Character</button>
                <button className="outline p-2" onClick={() => updateShirt()}>Next Shirt</button>
                <button className="outline p-2" onClick={() => updatePants()}>Next Pants</button>
            </div>

            <div className="p-3">
                <label>Name:</label>
                <br></br>
                <input className="bg-gray-900 my-1" onChange={updateName}></input>
                <br></br>
                <label className="">Class:</label>
                <br></br>
                <div className="flex">
                <select ref={classRef} className="bg-gray-900 my-1 w-20 h-10" onChange={updateClass}>
                    <option value="bow" id="Archer">Archer</option>
                    <option value="sword" id="Knight">Knight</option>
                    <option value="staff" id="Mage">Mage</option>
                </select>
                <Image src={`/starter${classValue}.webp`} alt="class weapon" width={128} height={128}/>
                </div>
            
                <br></br>
                <br></br>

                <label className="">Home:</label>
                <br></br>
                <select className="bg-gray-900 my-1 w-20" onChange={updateHome}>
                    <option>Angelica</option>
                    <option>Knogta</option>
                    <option>Benthia</option>
                </select>

            </div>

        </div>
    );
}
