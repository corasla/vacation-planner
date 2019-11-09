export interface IPlace {
  id?: number
  name: string
  description: string
  country: string
  city: string
  image?: string // image url
  imageId?: string // name of image inside the assets forlder
  countryCode?: string
  averagePrice?: number
  markedForVisit?: boolean
  markedAsVisited?: boolean
}

export class Place implements IPlace{
  static createEmptyPlace() {
    return new Place({
      name: '',
      country: '',
      countryCode: '',
      city: '',
      description: '',
      image: '',
      imageId: '',
      averagePrice: 3.5
    })
  }
  id?: number
  name: string
  description: string
  country: string
  city: string
  image: string
  imageId: string
  countryCode: string
  averagePrice: number
  markedForVisit: boolean
  markedAsVisited: boolean

  constructor(data: IPlace) {
    const {
      name,
      country,
      countryCode,
      city,
      description,
      image,
      id,
      imageId,
      averagePrice
    } = data

    this.id = id
    this.name = name
    this.country = country
    this.description = description
    this.city = city
    this.countryCode = countryCode
    this.image = image
    this.imageId = imageId
    this.averagePrice = averagePrice
  }
}