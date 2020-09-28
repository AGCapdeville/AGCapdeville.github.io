export const blogs = [
    {
        title:'Capstone Dev Blog',
        abstract:'Slay The Tower is a dynamic deck building video game developed in React / Redux to create a sleek and unique user experience. Players start the game by selecting a hero’s weapon (deck) to begin their arduous climb. As the hero progresses, they must balance risk and reward. Defeating enemies grants gold and cards, but choosing to fight dire foes has the possibility to grant even greater treasures. Players must choose cards wisely, as the core of the game is deck building emphasizing on card synergy. With every attempt on the Tower, the player will learn of different strategies and outcomes. My project aims to develop a complex game, all while learning through implementation.',
        heroImage: "https://i.imgur.com/kPXC7j9.jpg",
        entry:[
            {
                title: 'Setup Dev Blog & Narrowing Of Project Scope',
                subtitle: 'Sprint 0',
                date: 'August 28, 2020',
                description: ['Initiated this development blog as well as began reviewing feedback given by my capstone advisor, Profesor Erik Kaltman.'],
                simg: [''],
                img: [''],
                vid: ['']
            },
            {
                title: 'Game Design & Mechanics',
                subtitle: 'Sprint 1 : week 1',
                date: 'August 31, 2020',
                description: ['I reviewed my design document and sprint goals, and I decided to narrow down each section to core components. Through narrowing my scope, I will have progress as my main design philosophy and be able to complete my capstone with greater efficiency.', 
                'After narrowing the design document, I completed the sprint goals outline. I wrapped up the week by researching card game mechanics. I tested combat mechanics in my game via index cards and dice. After receiving some feedback I kept revisiting the same luck and user efficacy design difficulties. Further research will be needed in order for me to create a more cohesive user game experience.',                    
                'I learned that for one I have to admit that the game I create will not be perfect, I am not a team of people but just a passionate individual with a love for rpgs. I need to focus on narrowing design mechanics and simplifying the process as much as possible.'],
                img:[,"https://i.imgur.com/ra0i3fm.jpeg"],
                simg:[],
                vid:[]
            },
            {
                title: 'Map Navigation',
                subtitle: 'Sprint 1 : Week 2 ',
                date: 'September 7, 2020',
                description: ['I started week 2 developing the main components of the game flow starting with map navigation. I completed development of the user map navigation, as well as reached out to communicate art direction with Michael Mygen (lead artist).', 
                'Developing the map navigation I faced a few obstacles. At first I wanted procedural map navigation, similar to Slay The Spire, but found that was out of scope. So I pivoted, and after a few revisions, the current map design is centered around choosing between paths laid out in front of the user as cards. For now paths are generated based on a dice roll, with the more unique paths, such as shops, rest areas, trials and elite creeps being the rarest.',
                'Path cards will display: path event, field type ( weather conditions ) and what lies after the event ( paths that will be presented after resolving the chosen event card ). The current map navigation is bare bones and displays card boxes with text/emoji images inside, describing what lays ahead. A map legend is displayed on the right, depicting what each emoji/symbol represents.',
                'At the end of the week I learned that overall I need to keep scope in mind when developing each component. I don’t need to have the best procedural engine, I just need a map to generate. After the map works, then I can further develop other components and come back to refactor and upgrade at a later time.'
                ],
                img: [], 
                simg: [],
                vid: [,"https://i.imgur.com/19xmdWZ.mp4"]
            },
            {
                title: 'Bonfire, Shop, Trial & Resolution Screens',
                subtitle: 'Sprint 2 : Week 3',
                date: 'September 14, 2020',
                description: ['Began sprint 2 by creating a trello board to gather my thoughts and reorganize and keep to a cohesive schedule. After pinning up my tasks on trello, I moved tasks dealing with map navigation and the overall game life cycle into the development. To Trello board: https://tinyurl.com/y4jmn5xv',
                'First I created the bare bone screens with just text and buttons. After the functionality and the basic reducers were setup, I started altering the layout of components to be more responsive for later revisions. ',
                ,, 'Resolution Screen:', 'Bonfire Screen:', 'Shop Screen: tbd...', 'Trial Screen:','','',''],
                img: [],
                simg: ["https://i.imgur.com/QpBijAL.png",,,,"https://i.imgur.com/5vxclDO.gif","https://i.imgur.com/R0CCSrk.gif","https://i.imgur.com/twcKFCI.gif",],
                vid: []
            },
            {
                title: 'Delayed Week',
                subtitle: 'Sprint 2 : week 4',
                date: 'September 21, 2020',
                description: ['This week was a set back week, so nothing to report as of now.'],
                img: [],
                simg: [],
                vid: []
            },
            {
                title: 'Two Steps Forward',
                subtitle: 'Sprint 3 : week 5',
                date: 'September 28, 2020',
                description: ['Spent this last week catching up with all of my work. Worked on developing the combat UI. Ran into a few issues revolving around how cards will be displayed. Cards need to be legiable on both phones and desktop. Usualy for card games on mobile, as you drag your finger across cards in your hand, the cards are displayed larger so to better see the details of the card.']
            }
        ]
    },
    {
        title:'Web Dev Blog',
        date:'../../..',
        description:'comming soon ...',
        blog:{
            title:'Web Dev Blog',
            abstract: 'info',
            heroImage: "https://i.imgur.com/Fyji2AK.jpeg",
            entry:[
                {
                    title: 'Initial Capstone Project',
                    date: 'August 27, 2020',
                    description: ['Example'],
                    img: [''],
                }
            ]
        },
    },

]

