import { resolve } from '$app/paths';

export const navigationLinks = [
    { title: "Home", href: resolve("/"), external: false },
    { title: "About Us", 
      submenu: [
                {title: "Mission", href:resolve("/about/mission"), external: false},
                {title: "Team", href:resolve("/about/team"), external: false}
            ] 
    },
    { title: "Request Books", submenu: [
        {title: "Request Form", href:"https://docs.google.com/forms/d/e/1FAIpQLSex7ofV5lnFsOv8iaiE3gnFHlf3VlCpBAWfHtzSpVJ35lUb3g/viewform?usp=header", external: true},
        {title: "Our Books", href:resolve("/about/books"), external: false},
    ]},
    { title: "Resources", submenu: [
        {title: "How To Guides", href:resolve("/resources/how-to"), external: false},
        {title: "State Resources for Children", href:resolve("/resources/state-coip"), external: false},
        {title: "National Resources for Children", href:resolve("/resources/national-coip"), external: false},
    ]},
    { title: "Contact", href: resolve("/contact"), external: false },
    { title: "Donate", submenu: [
        {title: "Donate Online", href:"https://secure.givelively.org/donate/building-bonds-through-books", external: true},
        {title: "Amazon Wishlist", href:resolve("/amazon-wishlist"), external: false}
    ]},
]