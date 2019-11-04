export interface IPlace {
  id?: number
  name: string
  description: string
  country: string
  city: string
  image?: string
  country_code?: string
}

export class Place implements IPlace{
  id?: number
  name: string
  description: string
  country: string
  city: string
  image?: string
  country_code?: string

  constructor(data: IPlace) {
    const {
      name,
      country,
      country_code,
      city,
      description,
      image,
      id,
    } = data

    this.name = name
    this.country = country
    this.description = description
    this.city = city
    this.country_code = country_code
    this.image = image
    this.id = id
  }
}