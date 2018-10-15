//step 8 - create seed data
//find a way to link images with type/category of create
  //need a dropdown menu for create OR need an image database linked with certain tags
const uplifts = [
  {
    type: 'Adventured',
    img: '/images/adventured - unknown.jpg',
    description: 'Today, I stepped outside my door, not knowing where the path would go...'
  },
  {
    type: 'Honored',
    img: '/images/honored - spirit.jpg',
    description: 'Today, I honored my spirit by taking a moment to pause in nature and perceive its gifts'
  },
  {
    type: 'Marveled',
    img: '/images/marveled - cosmos.jpg',
    description: 'Today, I marveled at the miracle of each tiny life in the vast infinite cosmos'
  },
  //relocate to server - whatever controller will use it
  {
    img: '/images/adventured - unknown.jpg',
    value: 'adventured'
  },
  {
    img: '/images/adventured - newbeginnings.jpg',
    value: 'adventured'
  },
  {
    img:'/images/adventured - wild.jpg',
    value: 'adventured'
  },
  {
    img:'/images/celebrated - danceoflife.jpg',
    value: 'celebrated'
  },
  {
    img:'/images/celebrated - life.jpg',
    value: 'celebrated'
  },
  {
    img: '/images/celebrated - self.jpg',
    value: 'celebrated'
  },
  {
    img: '/images/celebrated - simplethings.jpg',
    value: 'celebrated'
  },
  {
    img: '/images/connected - another.jpg',
    value: 'connected'
  },
  {
    img: '/images/connected - friends.jpg',
    value: 'connected'
  },
  {
    img: '/images/connected - friends1.jpg',
    value: 'connected'
  },
  {
    img: '/images/connected - friends2.jpg',
    value: 'connected'
  }
]

module.exports = uplifts;
