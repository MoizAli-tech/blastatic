import Swal from 'sweetalert2'
import axios from 'axios'
export default async function facebookApis (values: any, upload: string) {
  switch (upload) {
    case 'image':
      let imageUrl =
        'https://images.pexels.com/photos/12761588/pexels-photo-12761588.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
      const res = await axios.post('http://localhost:5500/facebook/image', {
        text: values.text,
        image_url: imageUrl
      })
      let { data: imageData } = res
      if (imageData && imageData.post_id) {
        Swal.fire({
          icon: 'success',
          title: 'Post uploaded successfully',
          showConfirmButton: false
        })
      } else if (imageData.error) {
        Swal.fire({
          icon: 'error',
          title: `${imageData.error.message}`,
          showConfirmButton: false
        })
      }
      break
    case 'video':
      const result = await axios.post('http://localhost:5500/facebook/video', {
        desc: values.text
      })

      let { data: videoData } = result
      if (videoData && videoData.video_id) {
        Swal.fire({
          icon: 'success',
          title: 'Post uploaded successfully',
          showConfirmButton: false
        })
      } else if (videoData.error) {
        Swal.fire({
          icon: 'error',
          title: `${videoData.error.message}`,
          showConfirmButton: false
        })
      }
      break
    default:
      const response = await axios.post('http://localhost:5500/facebook/text', {
        text: values.text
      })
      let { data: textData } = response
      if (textData) {
        Swal.fire({
          icon: 'success',
          title: 'Post uploaded successfully',
          showConfirmButton: false
        })
      } else if (textData.error) {
        Swal.fire({
          icon: 'error',
          title: `${textData.error.message}`,
          showConfirmButton: false
        })
      }
      break
  }
}
