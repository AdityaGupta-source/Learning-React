
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

    if (!post) return null;

    return (
        <div className="py-6 md:py-10 lg:py-16 w-full">
            <Container>
                <div 
                  className="max-w-4xl mx-auto rounded-xl md:rounded-2xl overflow-hidden animate-fadeInUp"
                  style={{ 
                    backgroundColor: 'rgba(30, 41, 59, 0.5)',
                    border: '1px solid rgba(148, 163, 184, 0.1)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                    {/* Image Section */}
                    <div className="w-full relative group">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="w-full h-40 sm:h-64 md:h-80 lg:h-[500px] object-cover"
                        />
                        
                        {/* Gradient overlay at bottom of image */}
                        <div 
                          className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24"
                          style={{ background: 'linear-gradient(transparent, rgba(30, 41, 59, 0.9))' }}
                        />

                        {isAuthor && (
                            <div className="absolute right-3 sm:right-4 md:right-6 top-3 sm:top-4 md:top-6 flex gap-2 md:gap-3 flex-wrap">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button bgColor="bg-green-600" className="text-xs md:text-sm shadow-lg">
                                        Edit
                                    </Button>
                                </Link>
                                <Button bgColor="bg-red-600" onClick={deletePost} className="text-xs md:text-sm shadow-lg">
                                    Delete
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Content Section */}
                    <div className="px-4 sm:px-6 md:px-8 lg:p-8 py-6 md:py-8 lg:py-10 flex flex-col items-center">
                        <h1 
                          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 lg:mb-8 leading-tight"
                          style={{ color: '#f1f5f9' }}
                        >
                          {post.title}
                        </h1>
                        <div 
                          className='w-12 sm:w-16 md:w-20 h-[1px] mb-6 md:mb-8 lg:mb-10' 
                          style={{ background: 'linear-gradient(90deg, #8b5cf6, #3b82f6)' }}
                        />
                        <div className="browser-css leading-relaxed text-left w-full text-sm sm:text-base md:text-lg max-w-prose">
                            {parse(post.content)}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
