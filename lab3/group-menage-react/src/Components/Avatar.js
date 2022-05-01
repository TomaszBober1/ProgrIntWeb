import '../App.css'
import axios from 'axios'



function Avatar(counter) {
    axios({
        url:   "https://picsum.photos/70/100",
        method: 'GET',
        responseType: 'blob',
      }).then((response) => {
        let blob = URL.createObjectURL(response.data);
        localStorage.setItem('image' + counter, JSON.stringify(blob));
    });
}


export default Avatar;