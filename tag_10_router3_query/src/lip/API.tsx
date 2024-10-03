export const beerByID = async (id: string) => {
    const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers`);
    const json = response.json();
    return json
}

export interface BeerList {
    image_url: string;
    _id: string;
    name: string;
    tagline: string;
    first_brewed: string;
    description: string;
    attenuation_level: number;
    brewers_tips: string;
    contributed_by: string;
    expireAt: string;
    __v: number;
}