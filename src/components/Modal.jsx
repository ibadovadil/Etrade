import React, { useContext, useState } from 'react'
import { ProductContext } from '../context/ProductProvider';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Modal = ({id}) => {
    const [query, setQuery] = useState(null);
    const [product] = useContext(ProductContext);
  return (
 <div>
  <button type="button" className="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal">
  <i className="fa-solid fa-magnifying-glass"></i>
  </button>
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Search</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
        <div className="container" style={{ width: "400px" }}>
            <form className="input-group mb-3">
              <input
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Enter product name"
                aria-label="Enter product name"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-primary"
                type="submit"
                id="button-addon2"
              >
                Search
              </button>
            </form>

            <ul className="list-group w-100" >
              {product
                .filter((p) => p.title.toLowerCase().includes(query))
                .map((item) => (
                  <LinkContainer  to={`/shop/${item.id}`}>
                    <Link> <li key={item.id}   className=" modaltext list-group-item d-flex justify-content-between">
                          {item.title} 
                          <img width={50} src={item.images[0]}/>
                        </li></Link>
                  </LinkContainer>
                ))}
            </ul>
           
          </div>
        </div>
       
      </div>
    </div>
  </div>
</div>


  )
}

export default Modal