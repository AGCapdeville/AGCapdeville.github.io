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
                img: [], // need to take some pictures or screen shots
                vid: [,"https://i.imgur.com/19xmdWZ.mp4"]
            },
            {
                title: 'Bonfire, Shop, Trial & Reward Screen',
                subtitle: 'Sprint 2 : Week 3',
                date: 'September 14, 2020',
                description: ['Weekend.'],
                img: [],
                vid: []
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

