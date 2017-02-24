import { render } from 'brisky-render'
import Text from './text.jsx'

const cat = 'https://media1.popsugar-assets.com/files/thumbor/EYb5dO2AAuFKts5Vj6o8wUPLV_E/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/08/08/878/n/1922507/caef16ec354ca23b_thumb_temp_cover_file32304521407524949/i/Funny-Cat-GIFs.jpg'

document.body.appendChild(render(Text, {
  title: 'hello world!',
  nested: { blurf: 'hello' },
  color: 'blue',
  x: 100,
  cat,
  list: [
    { title: 'lullz' },
    { title: 'blurfff' },
    { title: 'yes', blurf: true }
  ]
}))
