import React from "react";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import "./Single.scss";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Single = () => {
  return (
    <div className="Single">
      <Header />
      <div className="Single__container">
        <div className="Single__content">
          <img
            src="https://solutis.com.br/wp-content/uploads/2020/12/dev-carreira.jpg"
            alt="img-post"
          />
          <div className="Single__user">
            <img
              src="https://divineyouwellness.com/blog/wp-content/uploads/2021/03/shutterstock_563564683-scaled.jpg"
              alt="user profile pic"
            />
            <div className="Single__user-info">
              <span>John</span>
              <p>Two days ago.</p>
            </div>
            <div className="Single__edit">
              <Link to={`/write?edit=2`} className="link">
                <AiFillEdit size={30} color="teal"/>
              </Link>
                <AiFillDelete size={30} color="crimson" />
            </div>
          </div>
          <h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic,
            laboriosam.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
            totam praesentium repellat, quam quasi magni, aliquid suscipit
            quidem tempora nulla impedit exercitationem voluptate dolore esse
            dolor odit quisquam sit voluptatibus non odio eum accusamus! Facilis
            non laborum, adipisci quisquam similique labore impedit fugit
            delectus dolore quaerat excepturi repellendus libero!
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
            totam praesentium repellat, quam quasi magni, aliquid suscipit
            quidem tempora nulla impedit exercitationem voluptate dolore esse
            dolor odit quisquam sit voluptatibus non odio eum accusamus! Facilis
            non laborum, adipisci quisquam similique labore impedit fugit
            delectus dolore quaerat excepturi repellendus libero!
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
            totam praesentium repellat, quam quasi magni, aliquid suscipit
            quidem tempora nulla impedit exercitationem voluptate dolore esse
            dolor odit quisquam sit voluptatibus non odio eum accusamus! Facilis
            non laborum, adipisci quisquam similique labore impedit fugit
            delectus dolore quaerat excepturi repellendus libero!
            <br />
          </p>
        </div>
        <div className="Single__menu">m</div>
      </div>
      <Footer />
    </div>
  );
};
