"use client"
import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx"
import { BiImage, BiSolidVideos } from "react-icons/bi"
import { BsFillFileImageFill } from "react-icons/bs"
import { HiOutlineVideoCamera } from "react-icons/hi2"
import PostCss from "./post.module.css"
import Upload from '../upload/Upload'
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import useSWR from 'swr';
import Swal from "sweetalert2"
import facebookApis from '../facebook/facebookApis'
import instagramApis from '../instagram/instagramApis'
import Multimedia from '../multimedia/Multimedia'
import UploadList from '../upload/UploadList'
// import swr from "@/lib/swr/swr";





const Post = ({ setPostVisible }: { setPostVisible: React.Dispatch<React.SetStateAction<boolean>> }) => {
    let formik = useFormik({
        initialValues: {
            text: "",
            image: null,
            video: null,
            selectionBox: "",
            storyImage: null
        },
        validationSchema: Yup.object({
            text: Yup.string().min(10).required(),
            selectionBox: Yup.string().test("isRequired", "Please select an option", (value) => {
                return value !== "" && value !== undefined;
            })
        }),
        onSubmit: async (values) => {
            alert("submitting")
            try {


                setIsLoading(true);
                let imageUrl = "https://res.cloudinary.com/dz0diu03t/image/upload/v1693933759/photo-1606115915090-be18fea23ec7_t69xvj.jpg"
                let videoUrl = "https://res.cloudinary.com/dz0diu03t/video/upload/v1694001211/5_SECOND_TIMER_%EF%B8%8F_iivcqm.mp4"
                let storyImage = "https://res.cloudinary.com/dz0diu03t/image/upload/v1693933759/photo-1606115915090-be18fea23ec7_t69xvj.jpg"
                let storyVideo = "https://res.cloudinary.com/dz0diu03t/video/upload/v1694197282/WhatsApp_Video_2023-09-08_at_11.16.44_PM_dejfsi.mp4"
                // switch (values.selectionBox) {
                //     case "facebook":
                //         if (values.image && values.video) {
                //             Swal.fire({
                //                 icon: 'error',
                //                 title: `you can not upload image and video at once`,
                //                 showConfirmButton: false
                //             })
                //         }
                //         else if (values.text && !values.image && !values.video) {
                //             await facebookApis(values, "text")
                //         } else if (values.text && values.image && !values.video) {
                //             await facebookApis(values, "image")
                //         } else {
                //             await facebookApis(values, "video")
                //         }
                //         break;
                //     default:
                //         if (values.image && values.video || values.image && values.storyImage || values.video && values.storyImage) {
                //             Swal.fire({
                //                 icon: 'error',
                //                 title: `you can not upload image and video at once`,
                //                 showConfirmButton: false
                //             })
                //         }
                //         else if (values.text && !values.image && !values.video && !values.storyImage) {
                //             Swal.fire({
                //                 icon: 'error',
                //                 title: `please upload one image or video`,
                //                 showConfirmButton: false
                //             })
                //         } else if (values.text && values.image && !values.video) {
                //             await instagramApis(values, "image", "17841448680977409", imageUrl)
                //         } else if (values.text && !values.image && values.video) {
                //             await instagramApis(values, "video", "17841448680977409", videoUrl)
                //         } else {
                //             await instagramApis(values, "story", "17841448680977409", storyImage, "IMAGE")
                //         }
                //         break;

                //         console.log(formik.values.selectionBox)
                // }


                // await instagramApis(values, "reel", "17841448680977409", videoUrl)
                await instagramApis(values, "story", "17841448680977409", storyVideo, "VIDEO")
                setIsLoading(false);
            } catch (error) {
                console.log(error)
            }
        }
    })
    const [mediaUpload, setMediaUpload] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [uploadList, setUploadList] = useState<JSX.Element[]>([
        <Upload key="0" formik={formik} name="image" text="Add Image">
            <BiSolidVideos className={`icons text-xl mx-2 `} />
        </Upload >,
        <Upload key="1" formik={formik} name="image" text="Add Image">
            <HiOutlineVideoCamera className={`icons text-xl mx-2 `} />
        </Upload >
    ])




    return (
        <div
            onClick={() => setPostVisible(false)}
            className='bgModel w-screen h-screen flex justify-center items-center absolute top-0 left-0 '>

            <div
                onClick={(event) => (event.stopPropagation())}
                className={`w-8/12 h-8/12 border-2 border-gray-400 bg-white flex justify-center items-between flex-col`}>

                <div className={`p-2 shadow shadow-slate-300 w-full flex justify-between items-center py-2 ${PostCss.postWrapper}`}>
                    New Post
                    <div onClick={() => setPostVisible(false)} className={`iconWrapper  bg-slate-200`}>
                        <RxCross1 />
                    </div>
                </div>

                <div className={`p-4`}>
                    <div className={` border-2 border-gray-600  p-2 w-1/2`}>
                        <form>
                            <div className={(formik.touched.text && formik.errors.text) ? ` block p-2 rounded bg-red-200 text-red-700` : "hidden"}>
                                <span>{formik.errors.text}</span>
                            </div>
                            <div className={(formik.touched.selectionBox && formik.errors.selectionBox) ? ` block p-2 rounded bg-red-200 text-red-700` : "hidden"}>
                                <span>{formik.errors.selectionBox}</span>
                            </div>

                            <div className={`selectionBoxWrapper my-2 flex justify-between`}>
                                <label htmlFor='selectionBox'>Select a platform</label>
                                <select
                                    id="selectionBox"
                                    name="selectionBox"
                                    value={formik.values.selectionBox}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`selectionBox`}>
                                    <option value="">Please Select</option>
                                    <option value="facebook">Facebook</option>
                                    <option value="instagram">Instagram</option>
                                </select>
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor='textArea' className='my-2 cursor-pointer'> Enter Your Text </label>
                                <textarea
                                    name="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.text}
                                    id="textArea"
                                    className={`outline-none border-2 border-gray-100`}></textarea>
                            </div>

                            <hr className={`${PostCss.hr} my-4 bgGray`} />

                            <div className={`px-2 my-4 flex justify-start items-center`}>

                                <Multimedia menuState={mediaUpload} >
                                    <BiSolidVideos className={`icons text-xl`} />
                                </Multimedia>
                                {
                                    mediaUpload ?
                                        <UploadList list={uploadList} />
                                        : null
                                }


                            </div>

                        </form>
                    </div>
                    <div></div>

                </div>

                <div className={`p-4 flex justify-end`}>
                    {isLoading ?
                        <button type="button" className={`${PostCss.submit} py-2 px-4 font-medium rounded text-sm text-right`} onClick={(e) => {
                            e.preventDefault();

                        }} >
                            Loading...
                        </button> :
                        <button type="submit" className={`${PostCss.submit} py-2 px-4 font-medium rounded text-sm text-right`} onClick={(e) => {
                            e.preventDefault();
                            formik.handleSubmit();
                        }} >
                            Post now
                        </button>
                    }

                </div>
            </div>


        </div>
    )
}

export default Post