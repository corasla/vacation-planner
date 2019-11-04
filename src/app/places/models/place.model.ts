export interface IPlace {
  id?: number
  name: string
  description: string
  country: string
  city: string
  image?: string // image url
  imageId?: string // name of image inside the assets forlder
  country_code?: string
}

export class Place implements IPlace{
  id?: number
  name: string
  description: string
  country: string
  city: string
  image?: string
  imageId?: string
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
      imageId,
    } = data

    this.id = id
    this.name = name
    this.country = country
    this.description = description
    this.city = city
    this.country_code = country_code
    this.image = image
    this.imageId = imageId
  }
}