import { Header } from './Components/Header'
import { Post, PostType } from './Components/Post'
import { Sidebar } from './Components/Sidebar'


import './global.css'
import './app.css'

const posts: PostType [] = [
  {
    id: 1,
    author: {
      name: 'Eduardo Franco',
      url: 'https://github.com/eduaardofranco.png',
      role: 'Frontend dev'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-06-04 20:45:00'),
  },
  {
    id: 2,
    author: {
      name: 'Mayk Brito',
      url: 'https://github.com/maykbrito.png',
      role: 'Educator'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'notion.io/doctorcare'},
    ],
    publishedAt: new Date('2024-12-10 07:17:00'),
  },
  {
    id: 3,
    author: {
      name: 'Diego Fernandes',
      url: 'https://github.com/diego3g.png',
      role: 'CTO @ RocketSeat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'github.io/makll'},
    ],
    publishedAt: new Date('2022-09-10 10:33:00'),
  },
]


function App() {

  return (
    <>
      <Header />

      <div className='wrapper'>
        <aside>
          <Sidebar />
        </aside>
        
        <main>
          {
            posts && posts.map(post => (
              <Post 
                key={post.id}
                post={post}
                
              />
            ))
          }
        </main>
      </div>
    </>

  )
}

export default App
