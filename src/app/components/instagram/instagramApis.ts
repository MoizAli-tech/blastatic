import axios from 'axios'
import Swal from 'sweetalert2'

export default async function instagramApis (
  values: any,
  upload: string,
  instaAccountId: string,
  mediaUrl: string,
  storyType?: string
  //   reel: boolean
) {
  switch (upload) {
    case 'image':
      let imageUrl =
        'https://images.pexels.com/photos/12761588/pexels-photo-12761588.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
      const res = await axios.post('http://localhost:5500/insta/image', {
        story: false,
        instaAccountId,
        caption: values.text,
        imageUrl: mediaUrl
      })
      let { data: imageData } = res

      if (imageData && imageData.id) {
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
      const result = await axios.post('http://localhost:5500/insta/video', {
        instaAccountId,
        caption: values.text,
        video_url: mediaUrl
      })

      let { data: videoData } = result
      if (videoData && videoData.id) {
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
    case 'reel':
      let obj = {
        instaAccountId: instaAccountId,
        video_url: mediaUrl,
        caption: values.text,
        share_to_feed: false
      }
      console.log(obj)
      const reelRes = await axios.post('http://localhost:5500/insta/reels', obj)
      let { data: reelData } = reelRes
      console.log(reelData)
      if (reelData && reelData.id) {
        Swal.fire({
          icon: 'success',
          title: 'Post uploaded successfully',
          showConfirmButton: false
        })
      } else if (reelData.error) {
        Swal.fire({
          icon: 'error',
          title: `${reelData.error.message}`,
          showConfirmButton: false
        })
      }
      break
    case 'story':
      const storyRes = await axios.post('http://localhost:5500/insta/stories', {
        instaAccountId,
        media_url: mediaUrl,
        story_type: storyType
      })
      let { data: storyData } = storyRes

      if (storyData && storyData.id) {
        Swal.fire({
          icon: 'success',
          title: 'Post uploaded successfully',
          showConfirmButton: false
        })
      } else if (storyData.error) {
        Swal.fire({
          icon: 'error',
          title: `${storyData.error.message}`,
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
