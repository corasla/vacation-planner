
export class Place {
  name: string
  description: string
  country: string
  city: string
  image?: string
  country_code?: string

  constructor(name: string, description: string, country: string, city: string, country_code: string = '', image: string = '') {
    this.name = name
    this.country = country
    this.description = description
    this.city = city
    this.country_code = country_code
    this.image = image
  }
}