export const beerAPI = 'https://ih-beers-api2.herokuapp.com/beers'

export const randomAPI = 'https://ih-beers-api2.herokuapp.com/beers/random'

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

