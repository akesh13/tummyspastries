// import React from "react";

// function text() {
//   return (
//     <div>
//       <div id="menu">
//         <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
//           <div className="container">
//             <NavLink to={`/`} className="navbar-brand">
//               {isAdmin ? "Admin" : "Food Order Project"}
//             </NavLink>

//             <button
//               className="navbar-toggler"
//               data-bs-toggle="collapse"
//               data-bs-target="#menu"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>

//             <div
//               className="collapse navbar-collapse justify-content-md-between"
//               id="menu"
//             >
//               <ul className="navbar-nav">
//                 <li className="nav-item">
//                   <NavLink to={`/`} className="nav-link">
//                     Home
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink to={`/about`} className="nav-link">
//                     About
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink to={`/contact`} className="nav-link">
//                     Contact
//                   </NavLink>
//                 </li>
//               </ul>

//               {isLogged ? (
//                 commonRoute()
//               ) : (
//                 <ul className="navbar-nav">
//                   <li className="nav-item">
//                     <NavLink to={`/login`} className="nav-link">
//                       Login
//                     </NavLink>
//                   </li>
//                   <li className="nav-item">
//                     <NavLink to={`/register`} className="nav-link">
//                       Register
//                     </NavLink>
//                   </li>
//                 </ul>
//               )}
//             </div>
//           </div>
//         </nav>
//       </div>
//       <div id="home">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12 text-center">
//               <h3 className="display-3 text-secondary">Products</h3>
//             </div>
//           </div>

//           <div className="row">
//             {products &&
//               products.map((item, index) => {
//                 return (
//                   <Product
//                     key={index}
//                     {...item}
//                     isUser={isUser}
//                     isAdmin={isAdmin}
//                     del={delHandler}
//                   />
//                 );
//               })}
//           </div>
//         </div>
//       </div>
//       <div id="adminDashboard">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12 text-center">
//               <h3 className="display-3">Admin Dashboard</h3>
//             </div>
//           </div>

//           <div className="row">
//             <div className="col-md-4">
//               <div className="card">
//                 <div className="card-header text-center">
//                   <h3 className="text-secondary">Total Products</h3>
//                 </div>
//                 <div className="card-body">
//                   <h1 className="text-center"> {products.length} </h1>
//                 </div>
//                 <div className="card-footer">
//                   <NavLink
//                     to={`/product/create`}
//                     className={"btn btn-outline-success"}
//                   >
//                     Add Product
//                   </NavLink>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div id="CreateProduct">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12 text-center">
//               <h4 className="display-4 text-secondary">Add New Product</h4>
//             </div>
//           </div>

//           <div className="row">
//             <div className="col-lg-4 col-md-4 mt-2">
//               <div className="card upload">
//                 <div className="card-body">
//                   <input
//                     type="file"
//                     name="productImg"
//                     id="file_up"
//                     className="form-control"
//                     onChange={handleUpload}
//                     required
//                   />
//                   {loading ? (
//                     <div id="file_img">
//                       <LoadingSpinner />
//                     </div>
//                   ) : (
//                     <div id="file_img">
//                       <img src={image ? image.url : ""} alt="" />
//                       <strong
//                         className="btn btn-sm btn-danger"
//                         onClick={handleDestroy}
//                       >
//                         <i className="bi bi-x"></i>
//                       </strong>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-8 col-md-8 mt-2">
//               <div className="card">
//                 <div className="card-body">
//                   <form autoComplete="off" onSubmit={submitHandler}>
//                     <div className="form-group mt-2">
//                       <label htmlFor="title">title</label>
//                       <input
//                         type="text"
//                         name="title"
//                         id="title"
//                         value={product.title}
//                         onChange={readValue}
//                         className="form-control"
//                         required
//                       />
//                     </div>
//                     <div className="form-group mt-2">
//                       <label htmlFor="category">Category</label>
//                       <select
//                         name="category"
//                         id="category"
//                         value={product.category}
//                         onChange={readValue}
//                         className="form-select"
//                         required
//                       >
//                         <option>Choose Category</option>
//                         <optgroup label="category list">
//                           {categories &&
//                             categories.map((item, index) => {
//                               return (
//                                 <option key={index} value={item.title}>
//                                   {item.title}
//                                 </option>
//                               );
//                             })}
//                         </optgroup>
//                       </select>
//                     </div>
//                     <div className="form-group mt-2">
//                       <label htmlFor="price">Price</label>
//                       <input
//                         type="number"
//                         name="price"
//                         id="price"
//                         value={product.price}
//                         onChange={readValue}
//                         className="form-control"
//                         required
//                       />
//                     </div>
//                     <div className="form-group mt-2">
//                       <label htmlFor="desc">Description</label>
//                       <input
//                         type="text"
//                         name="desc"
//                         id="desc"
//                         value={product.desc}
//                         onChange={readValue}
//                         className="form-control"
//                         required
//                       />
//                     </div>
//                     <div className="form-group mt-2">
//                       <label htmlFor="qnty">Quantity</label>
//                       <input
//                         type="text"
//                         name="qnty"
//                         id="qnty"
//                         value={product.qnty}
//                         onChange={readValue}
//                         className="form-control"
//                         required
//                       />
//                     </div>
//                     <div className="form-group mt-2">
//                       <label htmlFor="stock">stock</label>
//                       <input
//                         type="number"
//                         name="stock"
//                         id="stock"
//                         value={product.stock}
//                         onChange={readValue}
//                         className="form-control"
//                         required
//                       />
//                     </div>
//                     <div className="form-group mt-2">
//                       <input
//                         type="submit"
//                         value="Create"
//                         className="btn btn-outline-success"
//                       />
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div id="product">
//         <div className="col-lg-3 col-md-4 col-sm-6 mt-2 mb-2">
//           <div className="card border-light position-relative">
//             <span className="position-absolute top-0 end-0 translate-end badge bg-info rounded-pill">
//               <i className="bi bi-star-fill"></i> {5}
//             </span>
//             <NavLink
//               to={`/product/details/${_id}`}
//               style={{ textDecoration: "none" }}
//             >
//               {image.url ? (
//                 <img src={image.url} alt={title} className="card-img-top" />
//               ) : (
//                 <img
//                   src={noImage}
//                   alt={"No Image Found"}
//                   className="card-img-top"
//                 />
//               )}
//             </NavLink>
//             <div className="card-body">
//               <h6 className="text-center text-uppercase"> {title} </h6>
//               <ul className="list-group">
//                 <li className="list-group-item">
//                   <strong>Price</strong>
//                   <span className="float-end text-secondary">
//                     &#8377; {price}
//                   </span>
//                 </li>
//                 <li className="list-group-item">
//                   <p className="text-justify">{desc}</p>
//                 </li>
//               </ul>
//               <div className="mt-3">
//                 {isAdmin ? (
//                   <>
//                     <NavLink
//                       to={`/product/update/${_id}`}
//                       className="btn btn-sm btn-outline-info"
//                     >
//                       <i className="bi bi-pen"></i>
//                     </NavLink>
//                     <button
//                       onClick={() => del(_id)}
//                       className="btn btn-sm btn-outline-danger float-end"
//                     >
//                       <i className="bi bi-trash"></i>
//                     </button>
//                   </>
//                 ) : null}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div id="productDetails">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12 text-center">
//               <h3 className="display-3 text-secondary">Product Details</h3>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-lg-5 col-md-6 col-sm-12">
//               <div className="card border-light">
//                 {!product ? null : (
//                   <img
//                     src={product.image.url}
//                     alt={product.title}
//                     className="card-img-top"
//                   />
//                 )}
//               </div>
//             </div>
//             <div className="col-lg-7 col-md-6 col-sm-12">
//               <div className="card border-light">
//                 <div className="card-header text-center">
//                   <h6 className="display-6 card-title text-secondary text-uppercase">
//                     {product.title}
//                   </h6>
//                 </div>
//                 <div className="card-body">
//                   <div className="mb-2 position-relative">
//                     <span className="badge position-absolute bg-success rounded-pill end-0">
//                       Rating <i className="bi bi-star-fill"></i> 5
//                     </span>
//                   </div>
//                   <div className="mt-4">
//                     <p className="text-warning fs-3">
//                       &#8377; {product.price}
//                       <del className="text-muted ms-3 fs-6">
//                         <small>
//                           &#8377; {product.price + product.price * (10 / 100)}
//                         </small>
//                       </del>
//                       <span className="fs-6 text-muted">(inclusive GST) </span>
//                     </p>
//                   </div>

//                   <div className="mt-3">
//                     <p>
//                       <strong className="text-secondary fs-6">Quantity</strong>
//                     </p>
//                     <button className="btn btn-outline-secondary">
//                       {product.qnty}
//                     </button>

//                     {isAdmin ? null : (
//                       <div className="float-end">
//                         <span
//                           onClick={decItemCount}
//                           className="btn btn-sm btn-danger"
//                         >
//                           <i className="bi bi-dash"></i>
//                         </span>
//                         <strong> {itemCount} </strong>
//                         <span
//                           onClick={incItemCount}
//                           className="btn btn-sm btn-success"
//                         >
//                           <i className="bi bi-plus"></i>
//                         </span>
//                       </div>
//                     )}
//                   </div>

//                   <div className="mt-3">
//                     <p>
//                       <strong className="text-secondary fs-6">
//                         Description
//                       </strong>
//                     </p>
//                     <p className="text-justify"> {product.desc} </p>
//                   </div>

//                   <div className="mt-3 d-grid col-8 mx-auto">
//                     {isAdmin ? null : (
//                       <button className="btn btn-outline-secondary">
//                         Buy Now
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div id="profile">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12 text-center">
//               <h5 className="display-5 text-success">Profile Info</h5>
//             </div>
//           </div>

//           <div className="row">
//             <div className="col-md-4 col-sm-12 mb-2">
//               <div className="card">
//                 <div className="card-body">
//                   {user.image ? (
//                     <img
//                       src={user.image.url}
//                       alt={user.name}
//                       className="card-img-top"
//                     />
//                   ) : (
//                     <h5 className="text-muted">No Image</h5>
//                   )}
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-8 col-sm-12 mb-2">
//               <div className="card">
//                 <div className="card-header">
//                   <h5 className="text-center display-5"> {user.name} </h5>
//                 </div>
//                 <div className="card-body">
//                   <ul className="list-group">
//                     <li className="list-group-item">
//                       <strong>Email</strong>
//                       <span className="text-secondary float-end">
//                         {user.email}
//                       </span>
//                     </li>
//                     <li className="list-group-item">
//                       <strong>Mobile</strong>
//                       <span className="text-secondary float-end">
//                         {user.mobile}
//                       </span>
//                     </li>
//                     <li className="list-group-item">
//                       <strong>Role</strong>
//                       <span className="text-secondary float-end">
//                         {user.role}
//                       </span>
//                     </li>
//                     {isUser ? (
//                       <li className="list-group-item">
//                         <strong>Orders</strong>
//                         <span className="text-secondary float-end">
//                           {user.orders.length} orders
//                         </span>
//                       </li>
//                     ) : null}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div id="cart">
//         <div className="row">
//           <div className="col-ms-12 col-md-7 mt-2">
//             <table className="table table-bordered">
//               <thead>
//                 <tr>
//                   <th>Title</th>
//                   <th>Image</th>
//                   <th>Price</th>
//                   <th>Qnty</th>
//                   <th>Count</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cart &&
//                   cart.map((item, index) => {
//                     const { title, image, price, qnty, quantity } = item;
//                     return (
//                       <tr key={index} className="text-center">
//                         <td>{title}</td>
//                         <td>
//                           <img src={image.url} alt="" height={70} width={90} />
//                         </td>
//                         <td>&#8377; {price}</td>
//                         <td>{qnty}</td>
//                         <td>
//                           <span className="btn bn-sm btn-danger">
//                             <i className="bi bi-dash"></i>
//                           </span>
//                           <strong className="px-2">{quantity}</strong>
//                           <span className="btn bn-sm btn-success">
//                             <i className="bi bi-plus"></i>
//                           </span>
//                         </td>
//                         <td>
//                           <span className="btn bn-sm btn-danger">
//                             <i className="bi bi-trash"></i>
//                           </span>
//                         </td>
//                       </tr>
//                     );
//                   })}
//               </tbody>
//             </table>
//           </div>
//           <div className="col-md-5 col-sm-12">
//             <div className="card">
//               <div className="card-header">
//                 <h5>Card info</h5>
//               </div>
//               <div className="card-body">
//                 <ul className="list-group">
//                   <li className="list-group-item">
//                     <strong>Sub Total</strong>
//                     <span className="text-secondary float-end">
//                       &#8377;{total}
//                     </span>
//                   </li>
//                   <li className="list-group-item">
//                     <strong>Gst (cgst+sgst) {gst} %</strong>
//                     <span className="text-secondary float-end">&#8377;</span>
//                   </li>
//                   <li className="list-group-item">
//                     <strong>Delivery Charges</strong>
//                     <span className="text-secondary float-end">&#8377;</span>
//                   </li>
//                   <li className="list-group-item">
//                     <strong>Final Total</strong>
//                     <span className="text-secondary float-end">&#8377;</span>
//                   </li>
//                 </ul>
//               </div>
//               <div className="card-footer d-grid">
//                 <NavLink to={`/checkout`} className="btn btn-outline-success">
//                   Check Out
//                 </NavLink>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div id="checkout">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12 text-center">
//               <h3 className="display-3">Check out </h3>
//             </div>
//           </div>

//           <div className="row">
//             <div className="col-md-6 offset-md-3">
//               <div className="card">
//                 <div className="card-header">
//                   <h5>
//                     Cart Total = &#8377; {finalTotal ? finalTotal : null}{" "}
//                   </h5>
//                 </div>
//                 <div className="card-body">
//                   <form onSubmit={submitHandler}>
//                     <div className="form-group mt-2">
//                       <label htmlFor="address">Address</label>
//                       <textarea
//                         name="address"
//                         id="address"
//                         cols="30"
//                         rows="5"
//                         className="form-control"
//                         required
//                         onChange={readValue}
//                       ></textarea>
//                     </div>
//                     <div className="form-group mt-2">
//                       <label htmlFor="mode">Payment mode</label>
//                       <br />
//                       <div className="form-check form-check-inline">
//                         <input
//                           className="form-check-input"
//                           type="radio"
//                           name="paymentMode"
//                           id="paymentMode"
//                           checked={data.paymentMode === "cod"}
//                           value="cod"
//                           onChange={readValue}
//                         />
//                         <label className="form-check-label" for="paymentMode">
//                           Cash On Delivery
//                         </label>
//                       </div>
//                       <div className="form-check form-check-inline">
//                         <input
//                           className="form-check-input"
//                           type="radio"
//                           name="paymentMode"
//                           id="paymentMode"
//                           checked={data.paymentMode === "card"}
//                           value="card"
//                           onChange={readValue}
//                         />
//                         <label className="form-check-label" for="paymentMode">
//                           Card
//                         </label>
//                       </div>
//                     </div>
//                     <div className="form-group mt-2">
//                       <input
//                         type="submit"
//                         value="Check Out"
//                         className="btn btn-outline-success"
//                       />
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default text;
