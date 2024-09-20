interface Cardprops {
    name: string
    price: number
}

function Cards(props: Cardprops) {
    return (
        <>
        <div>{props.name}</div>
        <div>{props.price}</div>
        </>
    )
}

export default Cards