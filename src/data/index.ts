import type { Product, NavItem } from '../types'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  {
    label: 'Products',
    path: '/products',
    // children: [
    //   { label: 'Street Light Housing', path: '/products/street-light-housing' },
    //   { label: 'Flood Light Housing', path: '/products/flood-light-housing' },
    //   { label: 'High Bay Light Housing', path: '/products/high-bay-light-housing' },
    //   { label: 'Well Glass Light Housing', path: '/products/well-glass-light-housing' },
    //   { label: 'Finish Goods', path: '/products/finish-goods' },
    //   { label: 'PCB', path: '/products/pcb' },
    // ],
  },
  { label: 'About Us', path: '/about' },
  // { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: '24 W Eco Lens Street Light',
    category: 'Street Light Housing',
    wattage: '24W',
    image: "./products/rnipl-1100.jpeg",
    description: 'Durable die-cast aluminium housing designed for 24W street light applications with IP66 rating.',
    features: ['Die-cast aluminium', 'IP66 rated', 'Anti-corrosion coating', 'Easy PCB mounting'],
    enquiryEnabled: true,
    specs: [
      {
        label: "Code",
        value: "RNIPL-1100"
      }
    ],
    document: "./document/RNIPL-1100.pdf",
  },
  {
    id: '2',
    name: '36 W Eco Lens Street Light',
    category: 'Street Light Housing',
    wattage: '36W',
    image: "./products/rnipl-1101.jpeg",
    description: 'Energy-efficient LED street lighting designed for optimal visibility and safety on roadways and pathways.',
    features: ['Aluminium frame', 'Thermal management fins', 'Stainless hardware', 'IK08 impact resistant'],
    enquiryEnabled: true,
    specs: [
      {
        label: "Code",
        value: "RNIPL-1101"
      }
    ],
    document: "./document/RNIPL-1101.pdf",
  },
  {
    id: '3',
    name: '50 W Pro Lens Flood Light',
    category: 'Flood Light Housing',
    wattage: '50W',
    image: "./products/rnipl-0071.jpeg",
    description: 'Heavy-duty flood light housing with adjustable bracket for industrial & commercial use.',
    features: ['High-pressure die cast', 'IP65 rated', 'Adjustable tilt bracket', 'Wide beam compatibility'],
    enquiryEnabled: true,
    specs: [
      {
        label: "Code",
        value: "RNIPL-0071"
      }
    ],
    document: "./document/RNIPL-0071.pdf",
  },
  {
    id: '4',
    name: '100 W Pro Lens Flood Light',
    category: 'Flood Light Housing',
    wattage: '100W',
    image: "./products/rnipl-0072.jpeg",
    description: 'Eco series down-choke flood light housing for 100W drivers with integrated heat sink.',
    features: ['Eco design', 'Integrated heatsink', 'IP65 rated', 'Driver cavity included'],
    enquiryEnabled: true,
    specs: [
      {
        label: "Code",
        value: "RNIPL-0072"
      }
    ],
    document: "./document/RNIPL-0072.pdf",
  },
  {
    id: '7',
    name: '50-60 W SpotLens High Bay',
    category: 'High Bay Light Housing',
    wattage: '50-60W',
    image: "./products/rnipl-0231.jpeg",
    description: 'Industrial-grade high bay glass housing for warehouses and factory ceilings.',
    features: ['Toughened glass diffuser', 'IP65 rated', 'Hanging / surface mount', 'Corrosion resistant'],
    enquiryEnabled: true,
    specs: [
      {
        label: "Code",
        value: "RNIPL-0231"
      }
    ],
    document: "./document/RNIPL-0231.pdf",
  },
  {
    id: '8',
    name: '100 W Spot Lens High Bay',
    category: 'High Bay Light Housing',
    wattage: '100W',
    image: "./products/rnipl-0232.jpeg",
    description: 'Classic dome-style high bay housing delivering uniform illumination for large spaces.',
    features: ['Polycarbonate dome', 'IP65 rated', 'Excellent heat dissipation', 'Hook & chain mount'],
    enquiryEnabled: true,
    specs: [
      {
        label: "Code",
        value: "RNIPL-0232"
      }
    ],
    document: "./document/RNIPL-0232.pdf",
  },
  {
    id: '5',
    name: '200 W Pro Lens Flood Light',
    category: 'Flood Light Housing',
    wattage: '200W',
    image: "./products/rnipl-0073.jpeg",
    description: 'Heavy-duty flood light housing with adjustable bracket for industrial & commercial use.',
    features: ['Eco design', 'Integrated heatsink', 'IP65 rated', 'Driver cavity included'],
    enquiryEnabled: true,
    specs: [
      {
        label: "Code",
        value: "RNIPL-0073"
      }
    ],
    document: "./document/RNIPL-0073.pdf",
  },
  {
    id: '6',
    name: '130-150 W Pro Lens Flood Light',
    category: 'Flood Light Housing',
    wattage: '130-150W',
    image: "./products/rnipl-0074.jpeg",
    description: 'Heavy-duty flood light housing with adjustable bracket for industrial & commercial use.',
    features: ['Eco design', 'Integrated heatsink', 'IP65 rated', 'Driver cavity included'],
    enquiryEnabled: true,
    specs: [
      {
        label: "Code",
        value: "RNIPL-0074"
      }
    ],
    document: "./document/RNIPL-0074.pdf",
  },
  {
    id: '9',
    name: '100 W High Bay Spot Lens',
    category: 'High Bay Light Housing',
    wattage: '100W',
    image: "./products/rnipl-0233.jpeg",
    description: 'Classic dome-style high bay housing delivering uniform illumination for large spaces.',
    features: ['Polycarbonate dome', 'IP65 rated', 'Excellent heat dissipation', 'Hook & chain mount'],
    enquiryEnabled: true,
    specs: [
      {
        label: "Code",
        value: "RNIPL-0233"
      }
    ],
    document: "./document/RNIPL-0233.pdf",
  },
  {
    id: '10',
    name: '150 W High Bay Spot Lens',
    category: 'High Bay Light Housing',
    wattage: '150W',
    image: "./products/rnipl-0234.jpeg",
    description: 'Classic dome-style high bay housing delivering uniform illumination for large spaces.',
    features: ['Polycarbonate dome', 'IP65 rated', 'Excellent heat dissipation', 'Hook & chain mount'],
    enquiryEnabled: true,
    specs: [
      {
        label: "Code",
        value: "RNIPL-0234"
      }
    ],
    document: "./document/RNIPL-0234.pdf",
  },
  {
    id: '11',
    name: '200 W High Bay Spot Lens Pro',
    category: 'High Bay Light Housing',
    wattage: '200W',
    image: "./products/rnipl-0235.jpeg",
    description: 'Classic dome-style high bay housing delivering uniform illumination for large spaces.',
    features: ['Polycarbonate dome', 'IP65 rated', 'Excellent heat dissipation', 'Hook & chain mount'],
    enquiryEnabled: true,
    specs: [
      {
        label: "Code",
        value: "RNIPL-0235"
      }
    ],
    document: "./document/RNIPL-0235.pdf",
  },
  {
    id: '12',
    name: '100 W High Bay Eco Spiral',
    category: 'High Bay Light Housing',
    wattage: '100W',
    image: "./products/rnipl-02551.jpeg",
    description: 'Classic dome-style high bay housing delivering uniform illumination for large spaces.',
    features: ['Polycarbonate dome', 'IP65 rated', 'Excellent heat dissipation', 'Hook & chain mount'],
    enquiryEnabled: true,
    specs: [
      {
        label: "Code",
        value: "RNIPL-02551"
      }
    ],
    document: "./document/RNIPL-02551.pdf",
  },
  {
    id: '13',
    name: '150 W High Bay Eco Spiral',
    category: 'High Bay Light Housing',
    wattage: '150W',
    image: "./products/rnipl-02552.jpeg",
    description: 'Classic dome-style high bay housing delivering uniform illumination for large spaces.',
    features: ['Polycarbonate dome', 'IP65 rated', 'Excellent heat dissipation', 'Hook & chain mount'],
    enquiryEnabled: true,
    specs: [
      {
        label: "Code",
        value: "RNIPL-02552"
      }
    ],
    document: "./document/RNIPL-02552.pdf",
  },
]

export const STATS = [
  { value: '1000+', label: 'Products Delivered' },
  { value: '350+', label: 'Happy Clients' },
  { value: '7+', label: 'Years Experience' },
]

export const WHY_CHOOSE_US = [
  {
    icon: '🏭',
    title: 'In-House Manufacturing',
    description: 'Full control over quality with our own manufacturing facility in Hosur.',
  },
  {
    icon: '🔬',
    title: 'Quality Tested',
    description: 'Every product undergoes rigorous quality testing before dispatch.',
  },
  {
    icon: '⚡',
    title: 'Fast Turnaround',
    description: 'Quick production cycles to meet tight project deadlines.',
  },
  {
    icon: '🔧',
    title: 'Custom Solutions',
    description: 'OEM/ODM capabilities — we build to your specifications.',
  },
  {
    icon: '🌍',
    title: 'Pan-India Reach',
    description: 'Serving clients across India with reliable logistics.',
  },
  {
    icon: '💬',
    title: 'Dedicated Support',
    description: 'Technical & after-sales support from our in-house team.',
  },
]
