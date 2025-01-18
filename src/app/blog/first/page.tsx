"user client"

import { Metadata } from "next"

export const metadata: Metadata={
    title:{
        absolute: " Blog",
    }
}

function getRandomNumber(count: number):number{
    return Math.floor((Math.random() * count) + 20);
}

export default function blogFirstPage(){
    return (
        <>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, magni pariatur eum totam voluptatibus nemo assumenda natus blanditiis incidunt beatae magnam impedit laudantium nobis voluptatum quibusdam iure quaerat neque enim.

            <h1>Blog Fist Page {getRandomNumber(1)}</h1>
        </>
    )
}