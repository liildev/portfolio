import { groq } from "next-sanity";

const workQuery = groq`*[_type == "projects"] {
    _id,
    title,
    sub_title,
    _createdAt
} | order(_createdAt desc)`;

const projectQuery = groq`*[_type == "projects" && lower(title) == $slug][0] { 
    _id,   
    img, 
    code, 
    tags,
    title, 
    about,
    source, 
    app_store,
    sub_title, 
    play_market
}`;

export { workQuery, projectQuery };
