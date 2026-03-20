
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../Components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-10">
            <Container>
                <div 
                  className="max-w-4xl mx-auto rounded-2xl overflow-hidden"
                  style={{ 
                    backgroundColor: 'rgba(30, 41, 59, 0.5)',
                    border: '1px solid rgba(148, 163, 184, 0.1)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                    {/* Image Section */}
                    <div className="w-full relative">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="w-full max-h-[500px] object-cover"
                        />
                        
                        {/* Gradient overlay at bottom of image */}
                        <div 
                          className="absolute bottom-0 left-0 right-0 h-20"
                          style={{ background: 'linear-gradient(transparent, rgba(30, 41, 59, 0.8))' }}
                        />

                        {isAuthor && (
                            <div className="absolute right-4 top-4 flex gap-2">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button bgColor="bg-green-600" className="mr-1 shadow-lg">
                                        Edit
                                    </Button>
                                </Link>
                                <Button bgColor="bg-red-600" onClick={deletePost} className="shadow-lg">
                                    Delete
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Content Section */}
                    <div className="p-8 flex flex-col items-center text-center">
                        <h1 
                          className="text-3xl font-bold mb-6"
                          style={{ color: '#f1f5f9' }}
                        >
                          {post.title}
                        </h1>
                        <div 
                          className='w-full max-w-md h-[1px] mb-6' 
                          style={{ background: 'linear-gradient(90deg, transparent, #8b5cf6, #3b82f6, transparent)' }}
                        />
                        <div className="browser-css leading-relaxed text-left w-full">
                            {parse(post.content)}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    ) : null;
}
