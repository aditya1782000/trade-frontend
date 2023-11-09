import axios from "axios";
import { useState } from "react";
import { Form } from "react-router-dom";
import classes from "./Form.module.css";

const Trading = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const configuartion = {
      method: "POST",
      url: "http://localhost:3002/items",
      data: {
        category,
        title,
        content,
        status,
        image,
      },
    };
    axios(configuartion)
      .then((result) => {
        setSubmit(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };

  return (
    <>
      <Form onSubmit={(e) => handleSubmit(e)} className={classes.form}>
        <p>
          <label htmlFor="category">Category</label>
          <input
            id="category"
            type="text"
            name="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </p>
        <p>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </p>
        <p>
          <label htmlFor="content">Content</label>
          <input
            id="content"
            type="text"
            name="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </p>
        <p>
          <label htmlFor="status">Status</label>
          <input
            id="status"
            type="text"
            name="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          />
        </p>
        <p>
          <label htmlFor="image">Image</label>
          <input
            id="image"
            type="text"
            name="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </p>
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
        {submit ? <p>Submit</p> : <p>Not submit</p>}
      </Form>
    </>
  );
};

export default Trading;
