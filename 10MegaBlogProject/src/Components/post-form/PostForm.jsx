import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Select, Button, Input, RTE } from "../index";
import { useNavigate } from "react-router-dom";
import appwriteService from "../../appwrite/config";
import { useSelector } from "react-redux";

function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    try {
      if (userData) {       
        if (post) {
          const file = data.image[0]
            ? await appwriteService.uploadFile(data.image[0])
            : null;
          if (file) {
            await appwriteService.deleteFile(post.featuredImage);
          }
          const dbPost = await appwriteService.updatePost(post.$id, {
            ...data,
            featuredImage: file ? file.$id : undefined,
          });
          if (dbPost) {
            navigate(`/post/${dbPost.$id}`);
          }
        } else {
          console.log("userData:", userData.$id);
          const file = await appwriteService.uploadFile(data.image[0]);
          if (file) {
            data.featuredImage = file.$id;
            const dbPost = await appwriteService.createPost({
              userId: userData.$id,
              ...data,
            });
            if (dbPost) {
              navigate(`/post/${dbPost.$id}`);
            }
          }
        }
      }
    } catch (error) {
      console.log("submit error:", error);
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");
    return "";
  }, []);

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), {
          shouldValidate: true,
        });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);
  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 overflow-visible">
      <div 
        className="flex-1 p-4 md:p-6 rounded-lg md:rounded-xl overflow-visible"
        style={{ 
          backgroundColor: 'rgba(30, 41, 59, 0.5)',
          border: '1px solid rgba(148, 163, 184, 0.1)',
        }}
      >
        <Input
          label="Title :"
          placeholder="Enter post title"
          className="mb-4 md:mb-6"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="auto-generated-slug"
          className="mb-4 md:mb-6"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <div className='overflow-visible'>
          <RTE
            label="Content :"
            name="content"
            control={control}
            defaultValue={getValues("content")}
          />
        </div>
      </div>
      <div 
        className="w-full lg:w-80 p-4 md:p-6 rounded-lg md:rounded-xl h-fit"
        style={{ 
          backgroundColor: 'rgba(30, 41, 59, 0.5)',
          border: '1px solid rgba(148, 163, 184, 0.1)',
        }}
      >
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4 md:mb-6"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4 md:mb-6">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4 md:mb-6"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-green-600" : undefined}
          className="w-full py-2.5 md:py-3 text-sm md:text-base font-semibold"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}

export default PostForm;
