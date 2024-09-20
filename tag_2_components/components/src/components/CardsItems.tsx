import Cards from "./Cards";


const articles = [
    {
        name: "cocooil",
        price: 30
    },
    {
        name: "camera",
        price: 60
    },
    {
        name: "grenn drink",
        price: 20
    },
]


function CardsItems() {
    return (
        <>
            {articles.map(({name, price}) => (
            
            <Cards key={name} name={name} price={price} />
        ))}
    
        </>
    )
}

export default CardsItems