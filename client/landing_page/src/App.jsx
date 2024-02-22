import { useState } from 'react'
import reactLogo from './assets/logo.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav>
      <div id='main-logo'> 
        <img src="./src/assets/logo.png" alt="logo" />
      </div>
      <div id='search'>
        <input type="text" />
        <img src="" alt="" />
      </div>
    </nav>
    <div className="superhero">
      <img src="https://i.pinimg.com/736x/12/d6/9d/12d69d4dad61ff944a9cd7c027caea05.jpg" alt="" />
      <img src="https://i.pinimg.com/736x/ae/9c/de/ae9cdeef638e54e748c2c10fbeb5d1fb.jpg" alt="" />
      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6e28db0d-f7d4-497d-b36d-3e70f80c48ed/dfvulfw-981927b3-e1b3-4e82-9ee4-65ac7f71863d.jpg/v1/fill/w_772,h_1034,q_70,strp/the_flash___future_version_2023__ai_art__by_chefantasia_dfvulfw-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzZlMjhkYjBkLWY3ZDQtNDk3ZC1iMzZkLTNlNzBmODBjNDhlZFwvZGZ2dWxmdy05ODE5MjdiMy1lMWIzLTRlODItOWVlNC02NWFjN2Y3MTg2M2QuanBnIiwid2lkdGgiOiI8PTk1NiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5NIsOHDlhl8iIwTypdZbovbscci0VjsEXH2HIoTSVhg" alt="" />
    </div>
    <div className="superhero">
      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/03d5de50-81fc-4046-b14d-e56ea6013497/dfjhh0q-8fa480e6-c719-4900-9023-d813d1768eb6.jpg/v1/fill/w_894,h_894,q_70,strp/thor_by_nerdyaiartist_dfjhh0q-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzAzZDVkZTUwLTgxZmMtNDA0Ni1iMTRkLWU1NmVhNjAxMzQ5N1wvZGZqaGgwcS04ZmE0ODBlNi1jNzE5LTQ5MDAtOTAyMy1kODEzZDE3NjhlYjYuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.J8QXwlhNMqEwF3nHZ83QVrrvh1XALANGQxXIwjXgD9o" alt="" />
      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84f4e1e0-57c7-49c4-9f19-51051a6dc768/de5tkvs-76604417-748b-4662-b7b7-8a67dbe2ab0f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZjRlMWUwLTU3YzctNDljNC05ZjE5LTUxMDUxYTZkYzc2OFwvZGU1dGt2cy03NjYwNDQxNy03NDhiLTQ2NjItYjdiNy04YTY3ZGJlMmFiMGYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4Yl3k8nFMaoIJqgs_3Kj8YJXUtd0fAim0rnM50yAV_4" alt="" />
      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ddbdd022-5484-490d-8d18-f975ab5ac08f/dfxk3ad-a988b17d-1af0-4398-968f-7f3200c64805.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RkYmRkMDIyLTU0ODQtNDkwZC04ZDE4LWY5NzVhYjVhYzA4ZlwvZGZ4azNhZC1hOTg4YjE3ZC0xYWYwLTQzOTgtOTY4Zi03ZjMyMDBjNjQ4MDUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.APuc323R0bg6bcMQU_B-zUbtnwYi5lZVVcqusft0g7w" alt="" />
    </div>
    </>
  )
}

export default App
